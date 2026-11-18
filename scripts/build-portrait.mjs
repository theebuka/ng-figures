// Cuts a screenprint-style bust out of a photograph: a paper silhouette plus one
// traced plate per tone, written to src/art/portraits/<slug>.plates.ts.
// Usage: node scripts/build-portrait.mjs <slug> [preview.png]
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import potrace from 'potrace'
import sharp from 'sharp'
import { DISC, HEAD, PORTRAITS } from './portraits.config.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const [slug, previewPath] = process.argv.slice(2)
const config = PORTRAITS[slug]
if (!config) throw new Error(`No portrait config for "${slug}"`)

const CANVAS_W = 600
const CANVAS_H = 720
const SCALE = 2 // trace at double size for smoother curves
const W = CANVAS_W * SCALE
const H = CANVAS_H * SCALE
const PAPER_EDGE = 5 // width of the white border left around the cut-out, in canvas units

const srcPath = resolve(root, config.src)
const mattePath = resolve(root, `data-src/portraits/${slug}.matte.png`)
if (!config.outline && !existsSync(mattePath)) execFileSync('swift', [resolve(root, 'scripts/matte.swift'), srcPath, mattePath], { stdio: 'inherit' })

// Work out which part of the photograph lands on the canvas from where the head is.
const { width: srcW, height: srcH } = await sharp(srcPath).metadata()
const headSize = config.head.size ?? HEAD.size
const headTop = config.head.y ?? HEAD.top
const zoom = (headSize / (config.head.chin - config.head.top)) * SCALE
const left = config.head.cx - (W * HEAD.cx) / CANVAS_W / zoom
const top = config.head.top - (H * headTop) / CANVAS_H / zoom

/** A source-sized image placed on the canvas; anything off the edge of the source is `fill`. */
async function place(image, fill) {
  const x0 = Math.max(0, Math.round(left))
  const y0 = Math.max(0, Math.round(top))
  const x1 = Math.min(srcW, Math.round(left + W / zoom))
  const y1 = Math.min(srcH, Math.round(top + H / zoom))
  const w = Math.min(W, Math.round((x1 - x0) * zoom))
  const h = Math.min(H, Math.round((y1 - y0) * zoom))
  const dx = Math.max(0, Math.min(W - w, Math.round((x0 - left) * zoom)))
  const dy = Math.max(0, Math.min(H - h, Math.round((y0 - top) * zoom)))
  const piece = await sharp(image)
    .extract({ left: x0, top: y0, width: x1 - x0, height: y1 - y0 })
    .resize(w, h, { kernel: 'lanczos3', fit: 'fill' })
    .toBuffer()
  return sharp(piece).extend({ left: dx, top: dy, right: W - w - dx, bottom: H - h - dy, background: { r: fill, g: fill, b: fill } })
}

const grey = await (await place(await sharp(srcPath).greyscale().png().toBuffer(), 255))
  .greyscale()
  .normalise()
  .clahe({ width: 240, height: 240, maxSlope: config.contrast ?? 3 })
  .blur((config.blur ?? 1.4) * SCALE)
  .raw()
  .toBuffer()

const matte = config.outline
  ? null
  : await (await place(await sharp(mattePath).resize(srcW, srcH, { fit: 'fill' }).greyscale().png().toBuffer(), 0))
  .greyscale()
  .blur(1.5 * SCALE)
  .raw()
  .toBuffer()

/** Rasterises a polygon given in canvas units (even-odd rule). */
function region(points) {
  const poly = points.map(([x, y]) => [x * SCALE, y * SCALE])
  const mask = new Uint8Array(W * H)
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      let hit = false
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i]
        const [xj, yj] = poly[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit
      }
      mask[y * W + x] = hit ? 1 : 0
    }
  return mask
}

/** Keeps only the connected patch of the mask that contains the given canvas point. */
function patchAt(mask, cx, cy) {
  const out = new Uint8Array(W * H)
  const start = Math.round(cy * SCALE) * W + Math.round(cx * SCALE)
  if (!mask[start]) throw new Error('The matte does not cover the middle of the face; check head in the config')
  const stack = [start]
  out[start] = 1
  while (stack.length) {
    const i = stack.pop()
    const x = i % W
    for (const j of [x > 0 ? i - 1 : -1, x < W - 1 ? i + 1 : -1, i - W, i + W]) {
      if (j >= 0 && j < out.length && mask[j] && !out[j]) {
        out[j] = 1
        stack.push(j)
      }
    }
  }
  return out
}

/** Grows a mask outwards by a number of canvas units. */
async function grow(mask, by) {
  const soft = await sharp(Buffer.from(mask.map((v) => (v ? 255 : 0))), { raw: { width: W, height: H, channels: 1 } })
    .blur(by * SCALE)
    .toColourspace('b-w')
    .raw()
    .toBuffer()
  return soft.map((v) => (v > 28 ? 1 : 0))
}

async function trace(mask, turdSize) {
  const png = await sharp(Buffer.from(mask.map((v) => (v ? 0 : 255))), { raw: { width: W, height: H, channels: 1 } })
    .png()
    .toBuffer()
  const tag = await new Promise((done, fail) => {
    const tracer = new potrace.Potrace({ threshold: 128, turdSize, optTolerance: 1, alphaMax: 1.1 })
    tracer.loadImage(png, (err) => (err ? fail(err) : done(tracer.getPathTag())))
  })
  const d = /d="([^"]*)"/.exec(tag)[1]
  // Back to canvas units, rounded to whole numbers to keep the paths small.
  return d.replace(/-?\d+(\.\d+)?/g, (n) => String(Math.round(Number(n) / SCALE))).replace(/\s+/g, ' ').trim()
}

// The subject is whoever the matte found under the face, minus anyone the keep polygon leaves out.
// Where the matte gets a photograph wrong, an outline traced by hand in source pixels replaces it.
const keep = config.keep ? region(config.keep) : null
const faceY = headTop + headSize * 0.6
const subject = config.outline
  ? region(config.outline.map(([x, y]) => [((x - left) * zoom) / SCALE, ((y - top) * zoom) / SCALE]))
  : patchAt(matte.map((v, i) => (v > 127 && (!keep || keep[i]) ? 1 : 0)), HEAD.cx, faceY)

// The three printed plates are set as percentiles of the greys in the face, so a
// dark or pale photograph still splits into usable tones.
const { levels } = config
const faceHalf = headSize * 0.275
const face = region([
  [HEAD.cx - faceHalf, headTop + faceHalf],
  [HEAD.cx + faceHalf, headTop + faceHalf],
  [HEAD.cx + faceHalf, headTop + headSize],
  [HEAD.cx - faceHalf, headTop + headSize],
])
const greys = Array.from(grey.filter((_, i) => subject[i] && face[i])).sort((a, b) => a - b)
const percentile = (p) => greys[Math.min(greys.length - 1, Math.floor((p / 100) * greys.length))]
const plate = (threshold) => subject.map((s, i) => (s && grey[i] < threshold ? 1 : 0))

const plates = {
  silhouette: await trace(await grow(subject, PAPER_EDGE), 400),
  tone: await trace(plate(percentile(levels.tone)), 140),
  colour: await trace(plate(percentile(levels.colour)), 110),
  ink: await trace(plate(percentile(levels.ink)), 90),
}
console.log(`greys at ink/colour/tone: ${percentile(levels.ink)} / ${percentile(levels.colour)} / ${percentile(levels.tone)}`)

const cut = config.cut ?? DISC.cy
const out = resolve(root, `src/art/portraits/${slug}.plates.ts`)
const body = Object.entries(plates)
  .map(([name, d]) => `  ${name}:\n    '${d}',`)
  .join('\n')
writeFileSync(
  out,
  `// Generated by scripts/build-portrait.mjs from ${config.src}. Do not edit by hand.\nexport const plates = {\n  cut: ${cut},\n${body}\n}\n`,
)
console.log(Object.entries(plates).map(([k, d]) => `${k} ${(d.length / 1024).toFixed(1)} kB`).join(', '))

// A flat copy of the print for places that show it as an ordinary image.
const flat = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}">
<defs>
<pattern id="d" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><circle cx="3.5" cy="3.5" r="2.1" fill="${config.accent}"/></pattern>
<clipPath id="b"><rect x="-400" y="-400" width="1400" height="${cut + 400}"/><circle cx="${DISC.cx}" cy="${DISC.cy}" r="${DISC.r}"/></clipPath>
<clipPath id="f"><rect width="${CANVAS_W}" height="${CANVAS_H}"/></clipPath>
</defs>
<g clip-path="url(#f)">
<circle cx="${DISC.cx}" cy="${DISC.cy}" r="${DISC.r}" fill="#073b24"/>
<g clip-path="url(#b)">
<path d="${plates.silhouette}" fill="#fff"/>
<path d="${plates.tone}" fill="url(#d)" fill-rule="evenodd"/>
<path d="${plates.colour}" fill="${config.accent}" fill-rule="evenodd"/>
<path d="${plates.ink}" fill="#0c1d15" fill-rule="evenodd"/>
</g>
</g>
</svg>
`
mkdirSync(resolve(root, 'public/portraits'), { recursive: true })
await sharp(Buffer.from(flat), { density: 108 })
  .resize(900, 1080)
  .webp({ quality: 82, alphaQuality: 90 })
  .toFile(resolve(root, `public/portraits/${slug}.webp`))

// The same print with no disc behind it, for the Home lineup where the busts overlap.
const cutOut = flat.replace(/<circle cx="\d+" cy="\d+" r="\d+" fill="#073b24"\/>\n/, '')
await sharp(Buffer.from(cutOut), { density: 108 })
  .resize(900, 1080)
  .webp({ quality: 82, alphaQuality: 90 })
  .toFile(resolve(root, `public/portraits/${slug}-cut.webp`))

if (previewPath) {
  const backdrop = flat.replace('<g clip-path="url(#f)">', '<rect width="100%" height="100%" fill="#0b5d38"/><g clip-path="url(#f)">').replace('<svg ', `<svg width="${CANVAS_W}" height="${CANVAS_H}" `)
  await sharp(Buffer.from(backdrop)).png().toFile(previewPath)
}
