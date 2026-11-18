import { X } from '@phosphor-icons/react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { flatPortrait } from '../art/portraits'
import { ROSTER, lifespan } from '../data/figures/roster'
import '../styles/menu.css'

export function Menu() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const closeRef = useRef<HTMLButtonElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const toggle = toggleRef.current
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      toggle?.focus()
    }
  }, [open])

  return (
    <>
      <nav className="nav" aria-label="Site">
        <Link className="nav__home mono" to="/">
          Makers of Nigeria
        </Link>
        <button ref={toggleRef} type="button" className="nav__item mono" aria-expanded={open} aria-controls="lineup" onClick={() => setOpen(true)}>
          Menu
        </button>
        <Link className="nav__item mono" to="/about">
          About
        </Link>
        <Link className="nav__item mono" to="/credits">
          Credits
        </Link>
      </nav>

      <div id="lineup" className={`lineup${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="The lineup" inert={!open}>
        <button ref={closeRef} type="button" className="lineup__close mono" onClick={() => setOpen(false)}>
          <X weight="bold" aria-hidden="true" />
          Close
        </button>
        <ol className="lineup__list">
          {ROSTER.map((entry, i) => (
            <li key={entry.slug} data-figure={entry.slug} style={{ transitionDelay: `${open ? 80 + i * 55 : 0}ms` }}>
              <Link className="lineup__link" to={`/figures/${entry.slug}`} onClick={() => setOpen(false)} aria-current={pathname === `/figures/${entry.slug}` ? 'page' : undefined}>
                <img className="lineup__face" src={flatPortrait(entry.slug)} width="600" height="720" alt="" loading="lazy" decoding="async" />
                <span className="lineup__name display">{entry.name}</span>
                <span className="mono">{lifespan(entry)}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
