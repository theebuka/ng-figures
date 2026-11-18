# Parked ideas

## True 3D portraits (Three.js)

Raised on 2026-10-13 when choosing the artwork approach. The site ships with SVG portraits
stacked in CSS 3D (`src/components/Portrait3D.tsx`), which keeps it light and fully animatable.
The alternative we may still try: stylised low-poly WebGL busts that can be rotated.

If we pick it up:

- Swap happens behind `Portrait3D`. It takes a `PortraitArt`; a WebGL version would take a model
  per figure and render into a canvas of the same aspect ratio (600 x 720).
- Start with one figure as a trial and keep the SVG portrait as the fallback for reduced motion,
  no-WebGL and low-power devices.
- Costs to weigh: bundle size (three is ~150 kB gzipped before models), authoring six likenesses
  from primitives or sourcing models, and mobile GPU load next to the scroll animations.
- A cheaper halfway step: extrude the existing print plates with `SVGLoader` + `ExtrudeGeometry`
  for real depth and lighting without new artwork.
