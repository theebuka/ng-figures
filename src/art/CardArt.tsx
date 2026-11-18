import type { ReactNode } from 'react'
import type { CardGlyph } from '../data/types'

type Ground = 'accent' | 'white' | 'ink'

// Abstract compositions on a 300 x 380 field. Each names the ground it sits on
// so a row of cards alternates colour the way a deck of printed cards would.
const ART: Record<CardGlyph, { ground: Ground; node: ReactNode }> = {
  // Rollers and a sheet of newsprint.
  press: {
    ground: 'accent',
    node: (
      <>
        <circle className="f-ink" cx="92" cy="104" r="58" />
        <circle className="f-ink" cx="208" cy="104" r="58" />
        <circle className="f-accent" cx="92" cy="104" r="14" />
        <circle className="f-accent" cx="208" cy="104" r="14" />
        <rect className="f-white" x="52" y="176" width="196" height="164" />
        <g className="f-ink">
          <rect x="70" y="194" width="160" height="22" />
          <rect x="70" y="230" width="72" height="92" />
          <rect x="154" y="230" width="76" height="8" />
          <rect x="154" y="248" width="76" height="8" />
          <rect x="154" y="266" width="76" height="8" />
          <rect x="154" y="284" width="76" height="8" />
          <rect x="154" y="302" width="52" height="8" />
        </g>
      </>
    ),
  },
  // Interlocked warp and weft.
  weave: {
    ground: 'white',
    node: (
      <>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => {
            const x = 42 + col * 76
            const y = 60 + row * 92
            const over = (row + col) % 2 === 0
            return (
              <g key={`${row}-${col}`}>
                <rect className={over ? 'f-accent' : 'f-ink'} x={x} y={y + 22} width="64" height="28" rx="14" />
                <rect className={over ? 'f-ink' : 'f-accent'} x={x + 18} y={y} width="28" height="72" rx="14" />
              </g>
            )
          }),
        )}
      </>
    ),
  },
  // Stacked coins.
  coins: {
    ground: 'ink',
    node: (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <ellipse className="f-accent" cx="150" cy={300 - i * 46} rx="92" ry="30" />
            <ellipse className="f-none s-ink" cx="150" cy={300 - i * 46} rx="70" ry="20" strokeWidth="3" />
          </g>
        ))}
        <circle className="f-white" cx="150" cy="62" r="26" />
      </>
    ),
  },
  // A staircase climbing to a doorway.
  steps: {
    ground: 'accent',
    node: (
      <>
        <path className="f-white" d="M150 44A54 54 0 0 1 204 98V190H96V98A54 54 0 0 1 150 44Z" />
        <path className="f-ink" d="M150 84A26 26 0 0 1 176 110V190H124V110A26 26 0 0 1 150 84Z" />
        <g className="f-ink">
          <rect x="84" y="190" width="132" height="34" />
          <rect x="62" y="224" width="176" height="34" />
          <rect x="40" y="258" width="220" height="34" />
          <rect x="18" y="292" width="264" height="48" />
        </g>
        <g className="f-none s-accent" strokeWidth="3">
          <path d="M84 224H216M62 258H238M40 292H260" />
        </g>
      </>
    ),
  },
  bridge: {
    ground: 'white',
    node: (
      <>
        <rect className="f-ink" x="20" y="150" width="260" height="26" />
        <path className="f-accent" d="M40 176A55 90 0 0 1 150 176V340H40ZM150 176A55 90 0 0 1 260 176V340H150Z" />
        <path className="f-white" d="M62 340V230A33 54 0 0 1 128 230V340ZM172 340V230A33 54 0 0 1 238 230V340Z" />
        <circle className="f-ink" cx="150" cy="84" r="34" />
      </>
    ),
  },
  rays: {
    ground: 'ink',
    node: (
      <>
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} className="f-accent" d="M150 300 138 40H162Z" transform={`rotate(${-80 + i * 20} 150 300)`} />
        ))}
        <circle className="f-white" cx="150" cy="300" r="58" />
        <rect className="f-ink" x="0" y="300" width="300" height="80" />
      </>
    ),
  },
  drums: {
    ground: 'accent',
    node: (
      <>
        <path className="f-ink" d="M60 80H240L204 190 240 300H60L96 190Z" />
        <ellipse className="f-white" cx="150" cy="80" rx="90" ry="24" />
        <ellipse className="f-white" cx="150" cy="300" rx="90" ry="24" />
        <g className="f-none s-white" strokeWidth="3">
          <path d="M84 96 196 286M216 96 104 286M118 100 150 190 182 100M118 282 150 190 182 282" />
        </g>
      </>
    ),
  },
  gate: {
    ground: 'white',
    node: (
      <>
        <path className="f-ink" d="M30 340V120L150 40 270 120V340Z" />
        <path className="f-accent" d="M96 340V190A54 54 0 0 1 204 190V340Z" />
        <g className="f-white">
          <rect x="52" y="140" width="22" height="22" />
          <rect x="226" y="140" width="22" height="22" />
          <circle cx="150" cy="104" r="14" />
        </g>
        <path className="f-none s-ink" d="M150 136V340" strokeWidth="4" />
      </>
    ),
  },
}

export function CardArt({ glyph }: { glyph: CardGlyph }) {
  const { ground, node } = ART[glyph]
  return (
    <svg className="card-art" viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect className={`f-${ground}`} width="300" height="380" />
      {node}
    </svg>
  )
}
