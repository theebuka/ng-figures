import { useEffect, useState } from 'react'
import type { FigureSlug } from '../../data/types'
import { printPortrait, type Plates } from './print'
import type { PortraitArt } from './types'

// The plates are large, so each figure's set is fetched only when its page opens.
const PLATES: Record<FigureSlug, () => Promise<{ plates: Plates }>> = {
  crowther: () => import('./crowther.plates'),
  macaulay: () => import('./macaulay.plates'),
  'ransome-kuti': () => import('./ransome-kuti.plates'),
  azikiwe: () => import('./azikiwe.plates'),
  awolowo: () => import('./awolowo.plates'),
  bello: () => import('./bello.plates'),
  balewa: () => import('./balewa.plates'),
  kwali: () => import('./kwali.plates'),
  achebe: () => import('./achebe.plates'),
  ojukwu: () => import('./ojukwu.plates'),
  gowon: () => import('./gowon.plates'),
  fela: () => import('./fela.plates'),
  murtala: () => import('./murtala.plates'),
  akunyili: () => import('./akunyili.plates'),
}

/** The same print as one flat image, for the lineup and while the plates load. */
export const flatPortrait = (slug: FigureSlug) => `/portraits/${slug}.webp`

/** The flat print without its backing disc, for line-ups where the busts overlap. */
export const cutPortrait = (slug: FigureSlug) => `/portraits/${slug}-cut.webp`

/** The layered print for a figure, or null until its plates have arrived. */
export function usePortrait(slug: FigureSlug): PortraitArt | null {
  const [loaded, setLoaded] = useState<{ slug: FigureSlug; art: PortraitArt } | null>(null)

  useEffect(() => {
    let current = true
    PLATES[slug]().then(({ plates }) => {
      if (current) setLoaded({ slug, art: printPortrait(slug, plates) })
    })
    return () => {
      current = false
    }
  }, [slug])

  return loaded?.slug === slug ? loaded.art : null
}
