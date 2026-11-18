import { photoCredit } from '../data/figures'
import type { FigureSlug, PhotoRef } from '../data/types'

/** An archival photograph with its caption and credit line. */
export function PhotoPlate({ slug, photo, className = '' }: { slug: FigureSlug; photo: PhotoRef; className?: string }) {
  const credit = photoCredit(photo.from ?? slug, photo.id)
  if (!credit) return null

  return (
    <figure className={`plate ${className}`} data-photo>
      <div className="plate__frame">
        <img src={credit.src} width={credit.width} height={credit.height} alt={photo.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption className="plate__caption">
        <span>{photo.caption}</span>
        <a className="plate__credit mono" href={credit.source} target="_blank" rel="noreferrer">
          {credit.author}, {credit.licence}
          <span className="visually-hidden"> (photo source, opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  )
}
