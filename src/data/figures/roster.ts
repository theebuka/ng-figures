import type { FigureSlug } from '../types'

/** Everyone on the site, in order of birth. */
export interface RosterEntry {
  slug: FigureSlug
  name: string
  /** The one name most people know them by, for tight spaces. */
  short: string
  epithet: string
  born: number
  died: number | null
}

export const ROSTER: RosterEntry[] = [
  { slug: 'crowther', name: 'Samuel Ajayi Crowther', short: 'Crowther', epithet: 'Bishop of the Niger', born: 1809, died: 1891 },
  { slug: 'macaulay', name: 'Herbert Macaulay', short: 'Macaulay', epithet: 'Father of Nigerian nationalism', born: 1864, died: 1946 },
  { slug: 'ransome-kuti', name: 'Funmilayo Ransome-Kuti', short: 'Ransome-Kuti', epithet: 'Lioness of Lisabi', born: 1900, died: 1978 },
  { slug: 'azikiwe', name: 'Nnamdi Azikiwe', short: 'Azikiwe', epithet: 'Zik of Africa', born: 1904, died: 1996 },
  { slug: 'awolowo', name: 'Obafemi Awolowo', short: 'Awolowo', epithet: 'The Sage', born: 1909, died: 1987 },
  { slug: 'bello', name: 'Ahmadu Bello', short: 'Bello', epithet: 'Sardauna of Sokoto', born: 1910, died: 1966 },
  { slug: 'balewa', name: 'Abubakar Tafawa Balewa', short: 'Balewa', epithet: 'Golden Voice of Africa', born: 1912, died: 1966 },
  { slug: 'kwali', name: 'Ladi Kwali', short: 'Kwali', epithet: 'Potter of Abuja', born: 1925, died: 1984 },
  { slug: 'achebe', name: 'Chinua Achebe', short: 'Achebe', epithet: 'Author of Things Fall Apart', born: 1930, died: 2013 },
  { slug: 'ojukwu', name: 'Odumegwu Ojukwu', short: 'Ojukwu', epithet: 'Ikemba of Nnewi', born: 1933, died: 2011 },
  { slug: 'gowon', name: 'Yakubu Gowon', short: 'Gowon', epithet: 'Head of state at thirty-one', born: 1934, died: null },
  { slug: 'fela', name: 'Fela Kuti', short: 'Fela', epithet: 'Abami Eda', born: 1938, died: 1997 },
  { slug: 'murtala', name: 'Murtala Muhammed', short: 'Murtala', epithet: 'With immediate effect', born: 1938, died: 1976 },
  { slug: 'akunyili', name: 'Dora Akunyili', short: 'Akunyili', epithet: 'Head of NAFDAC', born: 1954, died: 2014 },
]

/** "1904-1996", or "Born 1934" for the living. */
export const lifespan = ({ born, died }: { born: number; died: number | null }) => (died ? `${born}-${died}` : `Born ${born}`)

export const rosterIndex = (slug: FigureSlug) => ROSTER.findIndex((r) => r.slug === slug)

/** The next figure in birth order, wrapping round. */
export const nextFigure = (slug: FigureSlug): RosterEntry => ROSTER[(rosterIndex(slug) + 1) % ROSTER.length]
