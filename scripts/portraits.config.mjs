// Source photographs and print settings for each portrait.
// head: where the head sits in the source, in source pixels. top is the top of the hair or
//   headwear, chin the bottom of the chin and cx the middle of the face. size overrides how
//   tall that span is drawn on the canvas, and y how far down the canvas the top of the head sits.
// cut: the height, in canvas units, below which the bust is trimmed to the disc. Set it just
//   above the shoulders when they are wider than the disc. Defaults to the disc's centre line.
// keep: optional polygon in canvas units; anything outside it is dropped (for neighbours).
// outline: optional polygon in source pixels, traced by hand, used instead of the automatic cut-out.
// levels: percentiles of the greys in the face, darkest first, where each plate stops.
// accent: the figure's colour, as set in src/styles/global.css.

/** Where every head is placed on the 600 x 720 canvas. */
export const HEAD = { cx: 300, top: 46, size: 400 }

/** The backing disc. Below its centre line the bust is trimmed to the disc. */
export const DISC = { cx: 300, cy: 460, r: 292 }

export const PORTRAITS = {
  macaulay: {
    src: 'public/photos/macaulay/portrait-1900.jpg',
    head: { top: 64, chin: 827, cx: 637, size: 436 },
    // Trims the glow the old print has above his hair.
    keep: [[-50, 770], [-50, 230], [118, 230], [124, 170], [150, 125], [195, 95], [250, 80], [310, 78], [365, 90], [410, 118], [440, 160], [452, 230], [650, 230], [650, 770]],
    levels: { ink: 22, colour: 58, tone: 86 },
    blur: 3,
    accent: '#2fb5ad',
  },
  'ransome-kuti': {
    src: 'public/photos/ransome-kuti/portrait.jpg',
    head: { top: 8, chin: 352, cx: 240 },
    levels: { ink: 20, colour: 54, tone: 84 },
    accent: '#d6336f',
  },
  awolowo: {
    src: 'public/photos/awolowo/portrait-1959.jpg',
    head: { top: 50, chin: 590, cx: 290, size: 450 },
    levels: { ink: 24, colour: 58, tone: 86 },
    blur: 0.9,
    accent: '#f4c020',
  },
  bello: {
    src: 'public/photos/bello/portrait-1961.jpg',
    head: { top: 55, chin: 860, cx: 520, size: 430 },
    // Leaves out the man standing behind his left shoulder.
    keep: [[-50, -50], [558, -50], [558, 330], [500, 372], [474, 410], [470, 452], [490, 484], [540, 506], [650, 528], [650, 770], [-50, 770]],
    levels: { ink: 26, colour: 58, tone: 86 },
    accent: '#7583f5',
  },
  balewa: {
    src: 'public/photos/balewa/office-1959.jpg',
    head: { top: 158, chin: 500, cx: 320, size: 420 },
    cut: 364,
    levels: { ink: 26, colour: 66, tone: 92 },
    accent: '#f08a24',
  },
  azikiwe: {
    src: 'data-src/portraits/azikiwe-nsukka-1960.jpg',
    head: { top: 240, chin: 638, cx: 1543 },
    levels: { ink: 30, colour: 66, tone: 90 },
    blur: 1.6,
    accent: '#d93a27',
  },
  crowther: {
    src: 'public/photos/crowther/seated.jpg',
    head: { top: 150, chin: 405, cx: 465 },
    levels: { ink: 24, colour: 58, tone: 86 },
    accent: '#cfae78',
  },
  achebe: {
    src: 'public/photos/achebe/portrait-1966.jpg',
    head: { top: 90, chin: 625, cx: 880 },
    // His shirt runs off the edge of the photograph, so trim to the disc from higher up.
    cut: 392,
    levels: { ink: 24, colour: 58, tone: 86 },
    accent: '#b5d334',
  },
  kwali: {
    src: 'public/photos/kwali/portrait.jpg',
    head: { top: 30, chin: 590, cx: 745, size: 370 },
    levels: { ink: 60, colour: 82, tone: 97 },
    blur: 1.2,
    accent: '#8ed6a8',
  },
  ojukwu: {
    src: 'public/photos/ojukwu/portrait-1971.jpg',
    head: { top: 18, chin: 285, cx: 258 },
    // He is leaning back on a dark sofa and the matte takes the sofa with him.
    outline: [[210, 6], [240, 2], [270, 8], [292, 28], [306, 60], [314, 100], [319, 150], [321, 200], [318, 240], [312, 262], [322, 250], [345, 243], [385, 238], [425, 238], [455, 250], [478, 285], [492, 330], [500, 380], [505, 440], [505, 640], [30, 640], [38, 440], [45, 380], [62, 335], [100, 314], [150, 300], [180, 285], [172, 255], [160, 215], [154, 170], [155, 125], [162, 85], [175, 48], [190, 22]],
    blur: 1,
    cut: 372,
    levels: { ink: 36, colour: 66, tone: 90 },
    accent: '#f7937f',
  },
  gowon: {
    src: 'public/photos/gowon/in-1966.jpg',
    head: { top: 5, chin: 190, cx: 325 },
    cut: 420,
    levels: { ink: 24, colour: 58, tone: 86 },
    accent: '#4fb3f6',
  },
  fela: {
    src: 'public/photos/fela/portrait-1986.jpg',
    // His fists are raised, so the head is drawn smaller and lower to keep the arms in.
    head: { top: 262, chin: 536, cx: 394, size: 215, y: 204 },
    levels: { ink: 24, colour: 58, tone: 86 },
    accent: '#e25fd3',
  },
  murtala: {
    src: 'public/photos/murtala/portrait-1975.jpg',
    // Drawn large and a little off centre so the edges of the photograph fall outside the disc.
    head: { top: 28, chin: 908, cx: 690, size: 470 },
    levels: { ink: 18, colour: 54, tone: 86 },
    accent: '#a97cf0',
  },
  akunyili: {
    src: 'public/photos/akunyili/portrait-nln.jpg',
    head: { top: 1, chin: 438, cx: 300, size: 390 },
    levels: { ink: 20, colour: 54, tone: 86 },
    blur: 1,
    accent: '#2f6fe4',
  },
}
