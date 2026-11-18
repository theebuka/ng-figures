# Makers of Nigeria

An illustrated, scroll-driven site about the people who shaped Nigeria. Vite + React + TypeScript,
GSAP for scroll animation, Lenis for smooth scrolling.

```bash
npm install
npm run dev
```

## Adding a figure

1. Content: `src/data/figures/<slug>.ts`, registered in `src/data/figures/index.ts`, with a line in `src/data/figures/roster.ts` and the slug added to `FigureSlug` in `src/data/types.ts`.
2. Portrait: add the source photograph and the position of the head to `scripts/portraits.config.mjs`, then run `node scripts/build-portrait.mjs <slug>`. It cuts the figure out of the photograph and writes the print plates to `src/art/portraits/<slug>.plates.ts`, a flat copy to `public/portraits/<slug>.webp` and a copy without the backing disc to `public/portraits/<slug>-cut.webp` for the Home lineup. Register the plates in `src/art/portraits/index.ts`. If the automatic cut-out picks up the background, trace the figure by hand with `outline` (see Ojukwu in the config).
3. Emblem: add to `src/art/emblems/index.tsx`.
4. Accent colour: `[data-figure='<slug>']` in `src/styles/global.css`.
5. Photographs: list Commons file names in `scripts/photos.manifest.json`, then `node scripts/fetch-photos.mjs <slug>`. Only public-domain and CC-licensed files are accepted; credits land in `src/data/photos.json`.

## Scripts

- `node scripts/build-map.mjs` regenerates `src/art/map-data.ts` from `data-src/geoboundaries/nga-adm1.geojson`.
- `node scripts/fetch-photos.mjs [slug]` downloads photographs (1280px wide at most) and records their credits. Commons limits how fast files can be fetched. If it stops with HTTP 429, wait and run it again; it skips what it already has.
- `node scripts/build-portrait.mjs <slug> [preview.png]` cuts a portrait's print plates from its source photograph. The cut-out uses the macOS Vision framework through `scripts/matte.swift`, so it needs a Mac with the Swift toolchain. The mattes are kept in `data-src/portraits/`, and the script only calls Swift when one is missing.
- `node scripts/check-links.mjs` requests every external link in the content.

Parked ideas live in `docs/IDEAS.md`.
