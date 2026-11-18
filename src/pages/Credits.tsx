import { useEffect } from 'react'
import { Section } from '../components/Frame'
import { ROSTER, allPhotoCredits } from '../data/figures'
import '../styles/pages.css'

export function Credits() {
  useEffect(() => {
    document.title = 'Credits | Makers of Nigeria'
  }, [])

  const credits = allPhotoCredits()

  return (
    <main>
      <Section as="header" tone="white" className="page" label="Credits" counter="Sources">
        <h1 className="page__title display">Credits</h1>
        <p className="page__lead">
          Almost all the photographs on this site come from Wikimedia Commons and are in the public domain or under a
          Creative Commons licence. The portrait of Ladi Kwali is from a photograph whose maker and copyright are not
          known, and the 2013 photograph of Dora Akunyili is used under a non-commercial licence. Each links to its
          source.
        </p>

        {ROSTER.filter((entry) => credits[entry.slug]).map((entry) => (
          <section className="credits" key={entry.slug}>
            <h2 className="display">{entry.name}</h2>
            <ul>
              {Object.entries(credits[entry.slug]).map(([id, photo]) => (
                <li key={id}>
                  <img src={photo.src} width={photo.width} height={photo.height} alt="" loading="lazy" decoding="async" />
                  <div>
                    <p>{photo.author}</p>
                    <p className="mono">
                      {photo.licenceUrl ? (
                        <a href={photo.licenceUrl} target="_blank" rel="noreferrer">
                          {photo.licence}
                        </a>
                      ) : (
                        photo.licence
                      )}
                      {photo.date && `, ${photo.date}`}
                    </p>
                    <a className="mono" href={photo.source} target="_blank" rel="noreferrer">
                      Source file
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="credits credits--text">
          <h2 className="display">Everything else</h2>
          <p>
            Map boundaries: geoBoundaries (GRID3), CC BY 4.0. Typefaces: Anton by Vernon Adams, Instrument Sans by
            Rodrigo Fuenzalida and Jordan Egstad, DM Mono by Colophon Foundry, all under the SIL Open Font Licence.
            The portraits are cut from photographs credited above. Emblems and card artwork were drawn for this
            site.
          </p>
        </section>
      </Section>
    </main>
  )
}
