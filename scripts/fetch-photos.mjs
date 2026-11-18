// Downloads the photographs listed in photos.manifest.json from Wikimedia Commons
// and records their credits in src/data/photos.json.
// Usage: node scripts/fetch-photos.mjs [slug]
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(readFileSync(resolve(root, 'scripts/photos.manifest.json'), 'utf8'))
const creditsPath = resolve(root, 'src/data/photos.json')
const credits = existsSync(creditsPath) ? JSON.parse(readFileSync(creditsPath, 'utf8')) : {}

const UA = 'ng-figures/0.1 (educational history site; photo attribution build step)'
// Commons only serves thumbnails at a few set widths and answers 429 for the rest.
const WIDTH = 1280
const ALLOWED = /^(public domain|cc0|cc by|cc by-sa|no restrictions|ogl)/i
const only = process.argv[2]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** Commons answers 429 when asked too quickly, so wait and try again. */
async function get(url) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } })
    if (res.status !== 429 || attempt === 5) return res
    await sleep(15000 * (attempt + 1))
  }
}

const clean = (html = '') =>
  html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim()

/** `page` picks a page of a PDF and `seek` a moment (in seconds) of a video. */
async function describe(title, { page, seek } = {}) {
  const url = new URL('https://commons.wikimedia.org/w/api.php')
  url.search = new URLSearchParams({
    action: 'query', titles: title, prop: 'imageinfo', format: 'json',
    iiprop: 'url|size|extmetadata', iiurlwidth: String(WIDTH),
  })
  if (page) url.searchParams.set('iiurlparam', `page${page}-${WIDTH}px`)
  if (seek !== undefined) url.searchParams.set('iiurlparam', `${WIDTH}px-seek=${seek}`)
  const res = await get(url)
  if (!res.ok) throw new Error(`${title}: HTTP ${res.status}`)
  const entry = Object.values((await res.json()).query.pages)[0]
  if (!entry.imageinfo) throw new Error(`Not found on Commons: ${title}`)
  return entry.imageinfo[0]
}

for (const [slug, photos] of Object.entries(manifest)) {
  if (only && slug !== only) continue
  const dir = resolve(root, 'public/photos', slug)
  mkdirSync(dir, { recursive: true })
  credits[slug] ??= {}

  for (const { id, file, page, seek, rotate, crop } of photos) {
    const dest = resolve(dir, `${id}.jpg`)
    if (existsSync(dest) && credits[slug][id]) continue

    const info = await describe(file, { page, seek })
    const meta = info.extmetadata ?? {}
    const licence = clean(meta.LicenseShortName?.value)
    if (!ALLOWED.test(licence)) throw new Error(`${file}: licence "${licence}" is not on the allow-list`)

    // Anything no wider than the thumbnail is fetched as the original file.
    // PDF pages and video frames only exist as thumbnails.
    const still = page || seek !== undefined
    const src = (still || info.width > WIDTH) && info.thumburl ? info.thumburl : info.url
    const res = await get(src)
    if (!res.ok) throw new Error(`${file}: HTTP ${res.status}`)
    const ext = new URL(src).pathname.split('.').pop().toLowerCase()
    const tmp = resolve(dir, `${id}.download.${ext}`)
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()))

    if (ext === 'jpg' || ext === 'jpeg') renameSync(tmp, dest)
    else {
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '82', tmp, '--out', dest], { stdio: 'ignore' })
      rmSync(tmp)
    }

    // Some newspaper pages were scanned on their side.
    if (rotate) execFileSync('sips', ['-r', String(rotate), dest], { stdio: 'ignore' })
    // `crop` is [left, top, width, height] in downloaded pixels, to cut scanner marks off a page.
    if (crop) {
      const [x, y, w, h] = crop
      execFileSync('sips', ['-c', String(h), String(w), '--cropOffset', String(y), String(x), dest], { stdio: 'ignore' })
    }

    const dims = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', dest]).toString()
    credits[slug][id] = {
      src: `/photos/${slug}/${id}.jpg`,
      width: Number(/pixelWidth: (\d+)/.exec(dims)[1]),
      height: Number(/pixelHeight: (\d+)/.exec(dims)[1]),
      author: clean(meta.Artist?.value).replace(/^Unknown author.*$/i, 'Unknown photographer') || 'Unknown photographer',
      date: clean(meta.DateTimeOriginal?.value).replace(/date QS:.*$/, '').trim(),
      licence,
      licenceUrl: meta.LicenseUrl?.value ?? '',
      source: info.descriptionurl,
    }
    console.log(`${slug}/${id}.jpg  ${(statSync(dest).size / 1024).toFixed(0)} kB  ${licence}`)
    writeFileSync(creditsPath, JSON.stringify(credits, null, 2) + '\n')
    await sleep(6000)
  }
}
