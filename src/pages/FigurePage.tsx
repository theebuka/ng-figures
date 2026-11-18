import { useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Context, Hero, IdeaCards, MapSection, NextFigure, Resources, Statement, StatGrid, Timeline } from '../components/FigureSections'
import { FIGURES, ROSTER, rosterIndex } from '../data/figures'
import type { FigureSlug } from '../data/types'
import { useFigureScenes } from '../motion/useFigureScenes'
import '../styles/figure.css'

export function FigurePage() {
  const { slug } = useParams<{ slug: FigureSlug }>()
  const figure = slug ? FIGURES[slug] : undefined
  const root = useRef<HTMLElement>(null)

  useFigureScenes(root, slug ?? '')

  useEffect(() => {
    if (!figure) return
    document.title = `${figure.name} | Makers of Nigeria`
    document.body.dataset.figure = figure.slug
    return () => {
      delete document.body.dataset.figure
    }
  }, [figure])

  if (!figure) return <Navigate to="/" replace />

  const counter = `${String(rosterIndex(figure.slug) + 1).padStart(2, '0')} / ${String(ROSTER.length).padStart(2, '0')}`
  const props = { figure, counter }

  return (
    <main ref={root} key={figure.slug}>
      <Hero {...props} />
      <StatGrid {...props} />
      <Statement {...props} />
      <MapSection {...props} />
      <IdeaCards {...props} />
      <Timeline {...props} />
      <Context {...props} />
      <Resources {...props} />
      <NextFigure {...props} />
    </main>
  )
}
