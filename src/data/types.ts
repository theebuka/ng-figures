import type { Region1960 } from '../art/map-data'

export type FigureSlug =
  | 'crowther'
  | 'macaulay'
  | 'ransome-kuti'
  | 'azikiwe'
  | 'awolowo'
  | 'bello'
  | 'balewa'
  | 'kwali'
  | 'achebe'
  | 'ojukwu'
  | 'gowon'
  | 'fela'
  | 'murtala'
  | 'akunyili'

export type CardGlyph = 'press' | 'coins' | 'steps' | 'bridge' | 'rays' | 'weave' | 'drums' | 'gate'

export interface Stat {
  label: string
  value: string
}

export interface Place {
  name: string
  lon: number
  lat: number
  /** Short line shown when the place is selected. */
  note: string
  /** Which side of the dot the label sits on. */
  label?: 'left' | 'right' | 'above' | 'below'
}

export interface Idea {
  title: string
  body: string
  glyph: CardGlyph
}

export interface PhotoRef {
  /** Key into photos.json for this figure. */
  id: string
  /** Set when the photograph is filed under another figure. */
  from?: FigureSlug
  alt: string
  caption: string
}

export interface Moment {
  year: string
  title: string
  body: string
  photo?: PhotoRef
}

export interface Resource {
  kind: 'Book' | 'Archive' | 'Article' | 'Film' | 'Place' | 'Speech'
  title: string
  by?: string
  url: string
}

export interface Figure {
  slug: FigureSlug
  name: string
  /** The name broken into the lines used by the hero. */
  nameLines: string[]
  epithet: string
  born: number
  /** Null for someone still living. */
  died: number | null
  emblemCaption: string
  stats: Stat[]
  statement: string
  character: string
  map: {
    heading: string
    body: string
    region: Region1960
    regionLabel: string
    places: Place[]
  }
  ideasTitle: [string, string]
  ideasIntro: string
  ideas: Idea[]
  momentsIntro: string
  moments: Moment[]
  context: {
    heading: string
    body: string[]
    photo?: PhotoRef
    links: { slug: FigureSlug; note: string }[]
  }
  resources: Resource[]
  sources: { title: string; url: string }[]
}

export interface PhotoCredit {
  src: string
  width: number
  height: number
  author: string
  date: string
  licence: string
  licenceUrl: string
  source: string
}
