import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { cutPortrait } from '../art/portraits'
import { Section, SectionTitle } from '../components/Frame'
import { ROSTER, lifespan } from '../data/figures/roster'
import { useFitText } from '../motion/motion'
import { useHomeScenes } from '../motion/useHomeScenes'
import '../styles/home.css'

// The span of years the lifetimes chart covers, and the dates marked on it.
const FROM = 1800
const TO = 2030
const NOW = new Date().getFullYear()
const MARKS = [
  { year: 1914, label: 'Britain joins North and South into one colony' },
  { year: 1960, label: 'Independence' },
  { year: 1966, label: 'The first military coup' },
]
const at = (year: number) => `${((year - FROM) / (TO - FROM)) * 100}%`

export function Home() {
  const root = useRef<HTMLElement>(null)
  const hero = useFitText<HTMLElement>()
  useHomeScenes(root)

  useEffect(() => {
    document.title = 'Makers of Nigeria'
  }, [])

  return (
    <main ref={root}>
      <Section ref={hero} as="header" tone="green" className="home" label="Makers of Nigeria" counter="Fourteen lives">
        <h1 className="home__title display">
          <span data-fit>Makers of Nigeria</span>
        </h1>
        <p className="home__intro">Fourteen people who made Nigeria what it is, from a bishop born about 1809 to a general who is still alive. Start with any of them.</p>
        <ol className="home__lineup">
          {ROSTER.map((entry) => (
            <li key={entry.slug} data-figure={entry.slug}>
              <Link className="home__figure" to={`/figures/${entry.slug}`}>
                <img className="home__bust" src={cutPortrait(entry.slug)} width="600" height="720" alt="" decoding="async" />
                <span className="home__name display" aria-label={entry.name}>
                  {entry.short}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="white" className="lives" label="Lifetimes" counter="1809 to now">
        <SectionTitle small="Their" giant="Lifetimes" intro="Crowther died in 1891, when his grandson Macaulay was 27. Bello and Balewa were killed on the same night in 1966. Gowon is the only one still living." />
        <div className="lives__chart">
          <div className="lives__marks" aria-hidden="true">
            {MARKS.map((mark, i) => (
              <span className={`lives__mark mono${i === MARKS.length - 1 ? '' : ' lives__mark--before'}`} key={mark.year} style={{ left: at(mark.year) }}>
                {mark.year}
              </span>
            ))}
          </div>
          <ol className="lives__rows">
            {ROSTER.map((entry) => (
              <li key={entry.slug} data-figure={entry.slug}>
                <Link className="lives__row" to={`/figures/${entry.slug}`}>
                  <span className="lives__name display">{entry.name}</span>
                  <span className="lives__years mono">{lifespan(entry)}</span>
                  <span className="lives__track">
                    <span className="lives__bar" style={{ marginLeft: at(entry.born), width: `${(((entry.died ?? NOW) - entry.born) / (TO - FROM)) * 100}%` }} />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <dl className="lives__key">
          {MARKS.map((mark) => (
            <div key={mark.year}>
              <dt className="mono">{mark.year}</dt>
              <dd>{mark.label}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  )
}
