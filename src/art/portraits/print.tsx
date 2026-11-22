import type { ReactNode } from 'react'
import type { PortraitArt } from './types'

/** What scripts/build-portrait.mjs writes for each figure. */
export interface Plates {
  /** Height below which the bust is trimmed to the disc. */
  cut: number
  silhouette: string
  tone: string
  colour: string
  ink: string
}

// Must match DISC in scripts/portraits.config.mjs.
const DISC = { cx: 300, cy: 460, r: 292 }

/**
 * Assembles a three-colour screenprint from the plates cut out of a photograph:
 * white paper, a halftone, the figure's colour and black ink. The plates sit a few
 * pixels apart in depth so they drift out of register slightly when the print tilts.
 */
export function printPortrait(id: string, plates: Plates): PortraitArt {
  // Each layer is its own SVG, so each needs its own copy of the trim.
  const trimmed = (layer: string, node: ReactNode) => (
    <>
      <defs>
        <clipPath id={`trim-${id}-${layer}`}>
          <rect x="-400" y="-400" width="1400" height={plates.cut + 400} />
          <circle cx={DISC.cx} cy={DISC.cy} r={DISC.r} />
        </clipPath>
      </defs>
      <g clipPath={`url(#trim-${id}-${layer})`}>{node}</g>
    </>
  )

  return {
    width: 600,
    height: 720,
    layers: [
      { id: 'disc', z: -70, node: <circle className="f-greendeep" cx={DISC.cx} cy={DISC.cy} r={DISC.r} /> },
      {
        id: 'paper',
        z: 0,
        // The shadow is drawn inside the SVG so it follows the cut edge. As a CSS
        // filter on the 3D layer some renderers shade the whole square instead.
        node: (
          <>
            <defs>
              <filter id={`lift-${id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#073b24" floodOpacity="0.6" />
              </filter>
            </defs>
            <g filter={`url(#lift-${id})`}>{trimmed('paper', <path className="f-white" d={plates.silhouette} />)}</g>
          </>
        ),
      },
      {
        id: 'tone',
        z: 8,
        node: trimmed(
          'tone',
          <>
            <pattern id={`halftone-${id}`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <circle className="f-accent" cx="3.5" cy="3.5" r="2.1" />
            </pattern>
            <path d={plates.tone} fill={`url(#halftone-${id})`} fillRule="evenodd" />
          </>,
        ),
      },
      { id: 'colour', z: 16, node: trimmed('colour', <path className="f-accent" d={plates.colour} fillRule="evenodd" />) },
      { id: 'ink', z: 26, node: trimmed('ink', <path className="f-ink" d={plates.ink} fillRule="evenodd" />) },
    ],
  }
}
