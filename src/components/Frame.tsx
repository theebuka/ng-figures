import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react'
import { useFitText } from '../motion/motion'
import '../styles/frame.css'

type Tone = 'green' | 'white' | 'accent'

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  tone: Tone
  /** Rotated label on the side rails. */
  label: string
  /** e.g. "03 / 06" */
  counter: string
  as?: 'section' | 'header' | 'footer'
  ref?: Ref<HTMLElement>
  children: ReactNode
}

/** A full-width band with the poster-style side rails. */
export function Section({ tone, label, counter, as: Tag = 'section', className = '', children, ref, ...rest }: SectionProps) {
  return (
    <Tag ref={ref} className={`sec sec--${tone} ${className}`} {...rest}>
      <div className="rails" aria-hidden="true">
        <div className="rail rail--l">
          <span className="mono">{counter}</span>
          <span className="mono">{label}</span>
        </div>
        <div className="rail rail--r">
          <span className="mono">{label}</span>
          <span className="mono">{counter}</span>
        </div>
      </div>
      {children}
    </Tag>
  )
}

/** Bordered panel with scooped corners, like an admission ticket. */
export function Ticket({ className = '', children, ...rest }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={`ticket ${className}`} {...rest}>
      <i className="ticket__corner ticket__corner--tl" />
      <i className="ticket__corner ticket__corner--tr" />
      <i className="ticket__corner ticket__corner--bl" />
      <i className="ticket__corner ticket__corner--br" />
      {children}
    </div>
  )
}

/** Small word over a giant word, e.g. PIVOTAL / MOMENTS. */
export function SectionTitle({ small, giant, intro }: { small: string; giant: string; intro?: string }) {
  const ref = useFitText<HTMLDivElement>([giant])

  return (
    <div className="title" ref={ref}>
      <h2 className="title__heading display">
        <span className="title__small">{small}</span>
        <span className="title__giant" data-giant>
          <span data-fit>{giant}</span>
        </span>
      </h2>
      {intro && (
        <p className="title__intro" data-reveal>
          {intro}
        </p>
      )}
    </div>
  )
}
