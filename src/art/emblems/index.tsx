import type { ReactNode } from 'react'
import type { FigureSlug } from '../../data/types'

// Each emblem is drawn on a 200 x 200 field inside a shared roundel, in the
// colour that reads on the figure's accent.
const EMBLEMS: Record<FigureSlug, ReactNode> = {
  // An open book: the Yoruba Bible.
  crowther: (
    <>
      <path className="f-on" d="M100 62Q70 44 30 50V146Q70 140 100 158 130 140 170 146V50Q130 44 100 62Z" />
      <g className="f-none s-accent" strokeWidth="5" strokeLinecap="round">
        <path d="M100 66V152" />
        <path d="M46 74Q68 72 86 80M46 94Q68 92 86 100M46 114Q68 112 86 120" />
        <path d="M154 74Q132 72 114 80M154 94Q132 92 114 100M154 114Q132 112 114 120" />
      </g>
    </>
  ),
  // A surveyor's dividers over a measured line.
  macaulay: (
    <>
      <g className="f-none s-on" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 52 62 158M100 52 138 158" />
        <path d="M78 114Q100 126 122 114" strokeWidth="5" />
      </g>
      <circle className="f-on" cx="100" cy="46" r="15" />
      <circle className="f-accent" cx="100" cy="46" r="5" />
      <path className="f-none s-on" d="M40 172H160M40 164V180M70 166V178M100 164V180M130 166V178M160 164V180" strokeWidth="4" strokeLinecap="round" />
    </>
  ),
  // The women's symbol with a raised fist inside it.
  'ransome-kuti': (
    <>
      <circle className="f-none s-on" cx="100" cy="78" r="50" strokeWidth="13" />
      <path className="f-none s-on" d="M100 128V182M74 158H126" strokeWidth="13" strokeLinecap="round" />
      <path className="f-on" d="M88 96H112L114 124H86Z" />
      <g className="f-on">
        <rect x="78" y="62" width="44" height="38" rx="9" />
        <circle cx="84" cy="64" r="6" />
        <circle cx="95.3" cy="61" r="6" />
        <circle cx="106.6" cy="61" r="6" />
        <circle cx="117" cy="64" r="5.5" />
      </g>
      <g className="f-none s-accent" strokeWidth="3.5" strokeLinecap="round">
        <path d="M89.6 64V72M101 62V72M112 64V72" />
        <path d="M80 84Q94 76 110 80" />
      </g>
    </>
  ),
  // A hurricane lamp: "Show the light and the people will find the way."
  azikiwe: (
    <>
      <g className="f-none s-on" strokeWidth="5" strokeLinecap="round">
        <path d="M100 26V40M58 44 68 54M142 44 132 54M36 86H50M164 86H150" />
      </g>
      <path className="f-on" d="M78 70H122L134 132H66Z" />
      <path className="f-accent" d="M100 82Q116 104 100 124 84 104 100 82Z" />
      <rect className="f-on" x="84" y="56" width="32" height="10" rx="3" />
      <rect className="f-on" x="60" y="136" width="80" height="14" rx="4" />
      <rect className="f-on" x="72" y="154" width="56" height="10" rx="3" />
      <path className="f-none s-on" d="M84 58Q100 30 116 58" strokeWidth="5" />
    </>
  ),
  // A cocoa pod on its stalk.
  awolowo: (
    <>
      <path className="f-none s-on" d="M100 22Q104 36 100 48" strokeWidth="8" strokeLinecap="round" />
      <path className="f-on" d="M100 44Q150 74 142 128 132 170 100 178 68 170 58 128 50 74 100 44Z" />
      <g className="f-none s-accent" strokeWidth="5" strokeLinecap="round">
        <path d="M100 58V166" />
        <path d="M82 66Q66 112 86 162" />
        <path d="M118 66Q134 112 114 162" />
      </g>
    </>
  ),
  // Two interlaced squares, the eight-point knot of northern embroidery.
  bello: (
    <>
      <g className="f-none" strokeWidth="13" strokeLinejoin="round">
        <rect className="s-on" x="50" y="50" width="100" height="100" />
        <path className="s-accent" d="M100 29 171 100 100 171 29 100Z" strokeWidth="25" />
        <path className="s-on" d="M100 29 171 100 100 171 29 100Z" />
        {/* Bring the square back over the diamond at every other crossing. */}
        <path className="s-accent" d="M62 50H96M150 62V96M138 150H104M50 138V104" strokeWidth="25" />
        <path className="s-on" d="M56 50H102M150 56V102M144 150H98M50 144V98" />
      </g>
      <circle className="f-on" cx="100" cy="100" r="11" />
    </>
  ),
  // A studio microphone of the 1950s.
  balewa: (
    <>
      <rect className="f-on" x="70" y="28" width="60" height="92" rx="30" />
      <path className="f-none s-accent" d="M84 58H116M84 74H116M84 90H116" strokeWidth="6" strokeLinecap="round" />
      <path className="f-none s-on" d="M52 92Q52 142 100 142 148 142 148 92M100 142V168M70 172H130" strokeWidth="9" strokeLinecap="round" />
    </>
  ),
  // A coiled water pot with a lizard cut into its side.
  kwali: (
    <>
      <rect className="f-on" x="66" y="30" width="68" height="10" rx="4" />
      <path className="f-on" d="M76 38H124V52Q124 60 132 64Q172 84 172 124Q172 164 100 174Q28 164 28 124Q28 84 68 64Q76 60 76 52Z" />
      <g className="f-none s-accent" strokeLinecap="round">
        <path d="M78 46H122" strokeWidth="3.5" />
        <path d="M44 86Q100 74 156 86" strokeWidth="3.5" strokeDasharray="1 9" />
        <path d="M70 104Q98 112 114 128Q126 142 140 146Q154 148 156 136" strokeWidth="8" strokeLinejoin="round" />
        <path d="M88 110 82 124 72 126M90 109 98 96 108 95M114 128 106 142 96 143M117 131 130 122 140 124" strokeWidth="4.5" strokeLinejoin="round" />
      </g>
      <ellipse className="f-accent" cx="64" cy="102" rx="10" ry="7" transform="rotate(18 64 102)" />
    </>
  ),
  // The nib of a fountain pen.
  achebe: (
    <>
      <path className="f-on" d="M100 176 62 96 76 34H124L138 96Z" />
      <path className="f-none s-accent" d="M100 170V104" strokeWidth="5" strokeLinecap="round" />
      <circle className="f-accent" cx="100" cy="96" r="9" />
      <path className="f-none s-accent" d="M72 52H128" strokeWidth="6" />
    </>
  ),
  // Half of a sun, as on the Biafran flag and banknotes.
  ojukwu: (
    <>
      <path className="f-on" d="M48 132A52 52 0 0 1 152 132Z" />
      <g className="f-none s-on" strokeWidth="9" strokeLinecap="round">
        <path d="M100 62V34M68 71 54 47M132 71 146 47M45 94 21 80M155 94 179 80" />
      </g>
      <path className="f-none s-on" d="M24 150H176" strokeWidth="11" strokeLinecap="round" />
    </>
  ),
  // Twelve marks in a ring, one for each state he created.
  gowon: (
    <>
      <g className="f-on">
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x="91" y="26" width="18" height="34" rx="5" transform={`rotate(${i * 30} 100 100)`} />
        ))}
      </g>
      <circle className="f-none s-on" cx="100" cy="100" r="22" strokeWidth="9" />
    </>
  ),
  // A tenor saxophone.
  fela: (
    <>
      <path className="f-none s-on" d="M126 34 102 48V132Q102 160 76 160 52 160 52 134V118" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path className="f-on" d="M30 112H74L66 86H38Z" />
      <path className="f-none s-on" d="M126 34 146 26" strokeWidth="9" strokeLinecap="round" />
      <g className="f-accent">
        <circle cx="102" cy="72" r="5.5" />
        <circle cx="102" cy="92" r="5.5" />
        <circle cx="102" cy="112" r="5.5" />
      </g>
    </>
  ),
  // A surveyor's centre mark: the capital moved to the middle of the map.
  murtala: (
    <>
      <circle className="f-none s-on" cx="100" cy="100" r="54" strokeWidth="11" />
      <path className="f-none s-on" d="M100 24V70M100 130V176M24 100H70M130 100H176" strokeWidth="11" strokeLinecap="round" />
      <circle className="f-on" cx="100" cy="100" r="13" />
    </>
  ),
  // A capsule under a magnifying glass: checking what is sold as medicine.
  akunyili: (
    <>
      <g transform="rotate(-35 88 96)">
        <path className="f-on" d="M55 74H88V118H55A22 22 0 0 1 55 74Z" />
        <path className="f-none s-on" d="M88 78H121A18 18 0 0 1 121 114H88Z" strokeWidth="8" strokeLinejoin="round" />
      </g>
      <circle className="f-none s-on" cx="122" cy="110" r="34" strokeWidth="11" />
      <path className="f-none s-on" d="M147 135 172 160" strokeWidth="17" strokeLinecap="round" />
    </>
  ),
}

export function Emblem({ slug }: { slug: FigureSlug }) {
  return (
    <svg className="emblem" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <circle className="f-accent" cx="100" cy="100" r="100" />
      <g transform="translate(100 100) scale(0.82) translate(-100 -100)">{EMBLEMS[slug]}</g>
    </svg>
  )
}
