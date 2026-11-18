import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CardArt } from '../art/CardArt'
import { Emblem } from '../art/emblems'
import { NigeriaMap } from '../art/NigeriaMap'
import { flatPortrait, usePortrait } from '../art/portraits'
import { ROSTER, lifespan, nextFigure } from '../data/figures'
import type { Figure } from '../data/types'
import { useFitText } from '../motion/motion'
import { Section, SectionTitle, Ticket } from './Frame'
import { PhotoPlate } from './PhotoPlate'
import { Portrait3D } from './Portrait3D'

interface Props {
  figure: Figure
  counter: string
}

const two = (n: number) => String(n).padStart(2, '0')

export function Hero({ figure, counter }: Props) {
  const art = usePortrait(figure.slug)
  const ref = useFitText<HTMLElement>([figure.slug])

  return (
    <Section ref={ref} as="header" tone="green" className="hero" label={figure.name} counter={counter}>
      <div className="hero__meta">
        <p className="mono">{figure.epithet}</p>
        <p className="mono">{lifespan(figure)}</p>
      </div>
      <h1 className="hero__name display" aria-label={figure.name}>
        {figure.nameLines.map((line) => (
          <span className="hero__line" key={line} aria-hidden="true">
            <span data-fit>{line}</span>
          </span>
        ))}
      </h1>
      <div className="hero__portrait">
        <div className="hero__portrait-inner">
          {art ? (
            <Portrait3D art={art} label={`Screenprint portrait of ${figure.name}`} />
          ) : (
            <img className="hero__flat" src={flatPortrait(figure.slug)} width="600" height="720" alt={`Screenprint portrait of ${figure.name}`} />
          )}
        </div>
      </div>
    </Section>
  )
}

export function StatGrid({ figure, counter }: Props) {
  return (
    <Section tone="white" className="stats" label="At a glance" counter={counter}>
      <div className="stats__emblem" data-reveal>
        <p className="mono">{figure.emblemCaption}</p>
        <Emblem slug={figure.slug} />
      </div>
      <dl className="stats__grid">
        {figure.stats.map((stat) => (
          <div className="stat" key={stat.label} data-reveal>
            <dt className="mono">{stat.label}</dt>
            <dd className="display">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Statement({ figure, counter }: Props) {
  return (
    <Section tone="white" className="statement" label={figure.epithet} counter={counter}>
      <Ticket className="statement__ticket">
        <div className="statement__mark" aria-hidden="true">
          <Emblem slug={figure.slug} />
        </div>
        <p className="statement__lead display" data-reveal>
          {figure.statement}
        </p>
        <p className="statement__body" data-reveal>
          {figure.character}
        </p>
      </Ticket>
    </Section>
  )
}

export function MapSection({ figure, counter }: Props) {
  const [active, setActive] = useState(0)
  const { map } = figure
  const place = map.places[active]

  return (
    <Section tone="green" className="mapsec" label="Home ground" counter={counter}>
      <div className="mapsec__map">
        <NigeriaMap region={map.region} places={map.places} active={active} onSelect={setActive} />
        <p className="mapsec__legend mono">
          <i aria-hidden="true" /> {map.regionLabel}
          <span>Shown on today’s state lines</span>
        </p>
      </div>
      <Ticket className="mapsec__panel">
        <h2 className="mapsec__heading display" data-reveal>
          {map.heading}
        </h2>
        <p data-reveal>{map.body}</p>
        <div className="mapsec__place" aria-live="polite">
          <p className="mono">
            {two(active + 1)} / {two(map.places.length)}
          </p>
          <h3 className="display">{place.name}</h3>
          <p>{place.note}</p>
        </div>
        <ul className="mapsec__chips">
          {map.places.map((p, i) => (
            <li key={p.name}>
              <button type="button" className="chip mono" aria-pressed={i === active} onClick={() => setActive(i)}>
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </Ticket>
    </Section>
  )
}

export function IdeaCards({ figure, counter }: Props) {
  const [pinned, setPinned] = useState<number | null>(null)
  const [small, giant] = figure.ideasTitle

  return (
    <Section tone="white" className="ideas" label={`${small} ${giant}`} counter={counter}>
      <SectionTitle small={small} giant={giant} intro={figure.ideasIntro} />
      <ol className="ideas__list">
        {figure.ideas.map((idea, i) => {
          const open = pinned === i
          return (
            <li className="idea" key={idea.title} data-reveal>
              <button
                type="button"
                className={`idea__card${open ? ' is-flipped' : ''}`}
                aria-pressed={open}
                aria-label={`${idea.title}: ${open ? 'show artwork' : 'show explanation'}`}
                onClick={() => setPinned(open ? null : i)}
              >
                <span className="idea__inner">
                  <span className="idea__face idea__face--front">
                    <CardArt glyph={idea.glyph} />
                    <span className="idea__no mono">{two(i + 1)}</span>
                    <span className="idea__hint mono">Flip</span>
                  </span>
                  <span className="idea__face idea__face--back">
                    <span className="mono">{two(i + 1)}</span>
                    <span className="idea__body">{idea.body}</span>
                  </span>
                </span>
              </button>
              <h3 className="idea__title display">{idea.title}</h3>
              <p className="visually-hidden">{idea.body}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export function Timeline({ figure, counter }: Props) {
  return (
    <Section tone="white" className="moments" label="Pivotal moments" counter={counter}>
      <SectionTitle small="Pivotal" giant="Moments" intro={figure.momentsIntro} />
      <div className="timeline">
        <span className="timeline__track" aria-hidden="true">
          <span className="timeline__progress" />
        </span>
        <ol className="timeline__list">
        {figure.moments.map((moment) => (
          <li className="moment" key={moment.year + moment.title}>
            <p className="moment__year display" data-reveal>
              {moment.year}
            </p>
            <div className="moment__text" data-reveal>
              <h3 className="display">{moment.title}</h3>
              <p>{moment.body}</p>
            </div>
            {moment.photo && <PhotoPlate slug={figure.slug} photo={moment.photo} className="moment__photo" />}
          </li>
        ))}
        </ol>
      </div>
    </Section>
  )
}

export function Context({ figure, counter }: Props) {
  const { context } = figure

  return (
    <Section tone="green" className="context" label="Nigeria at the time" counter={counter}>
      <div className="context__text">
        <h2 className="context__heading display" data-reveal>
          {context.heading}
        </h2>
        {context.body.map((para) => (
          <p key={para} data-reveal>
            {para}
          </p>
        ))}
      </div>
      {context.photo && <PhotoPlate slug={figure.slug} photo={context.photo} className="context__photo" />}
      <ul className="context__links">
        {context.links.map(({ slug, note }) => {
          const entry = ROSTER.find((r) => r.slug === slug)
          if (!entry) return null
          return (
            <li key={slug} data-reveal>
              <Link className="context__link" to={`/figures/${slug}`}>
                <span className="display">{entry.name}</span>
                <span className="context__note">{note}</span>
                <ArrowRight className="context__arrow" weight="bold" aria-hidden="true" />
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export function Resources({ figure, counter }: Props) {
  return (
    <Section tone="white" className="resources" label="Go deeper" counter={counter}>
      <SectionTitle small="Go" giant="Deeper" />
      <ul className="resources__list">
        {figure.resources.map((res) => (
          <li key={res.url} data-reveal>
            <a className="resource" href={res.url} target="_blank" rel="noreferrer">
              <span className="mono">{res.kind}</span>
              <span className="resource__title display">{res.title}</span>
              <span className="resource__by">{res.by}</span>
              <ArrowUpRight className="resource__arrow" weight="bold" aria-hidden="true" />
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="resources__sources">
        <h3 className="mono">Sources for this page</h3>
        <ul>
          {figure.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function NextFigure({ figure, counter }: Props) {
  const next = nextFigure(figure.slug)

  return (
    <Section as="footer" tone="accent" className="next" label="Next" counter={counter}>
      <p className="mono">Next</p>
      <Link className="next__link display" to={`/figures/${next.slug}`}>
        {next.name}
      </Link>
      <p className="mono">
        {next.epithet}, {lifespan(next)}
      </p>
    </Section>
  )
}
