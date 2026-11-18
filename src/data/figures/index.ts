import type { Figure, FigureSlug, PhotoCredit } from '../types'
import credits from '../photos.json'
import { achebe } from './achebe'
import { akunyili } from './akunyili'
import { awolowo } from './awolowo'
import { azikiwe } from './azikiwe'
import { balewa } from './balewa'
import { bello } from './bello'
import { crowther } from './crowther'
import { fela } from './fela'
import { gowon } from './gowon'
import { kwali } from './kwali'
import { macaulay } from './macaulay'
import { murtala } from './murtala'
import { ojukwu } from './ojukwu'
import { ransomeKuti } from './ransome-kuti'

export const FIGURES: Record<FigureSlug, Figure> = {
  crowther,
  macaulay,
  'ransome-kuti': ransomeKuti,
  azikiwe,
  awolowo,
  bello,
  balewa,
  kwali,
  achebe,
  ojukwu,
  gowon,
  fela,
  murtala,
  akunyili,
}

export * from './roster'

const CREDITS = credits as Record<string, Record<string, PhotoCredit>>

export function photoCredit(slug: FigureSlug, id: string): PhotoCredit | undefined {
  return CREDITS[slug]?.[id]
}

export const allPhotoCredits = () => CREDITS
