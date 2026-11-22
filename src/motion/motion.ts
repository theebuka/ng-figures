import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis: Lenis | null = null

/** Jump to the top without animating, e.g. on a route change. */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}

/** Glides back to the top, or jumps there when motion is reduced. */
export function glideToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.4 })
  else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

/** Smooth wheel scrolling, kept in step with ScrollTrigger. Mount once. */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const instance = new Lenis({ lerp: 0.11 })
    lenis = instance
    instance.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      instance.destroy()
      lenis = null
    }
  }, [])
}

const clamp = (n: number) => Math.max(-1, Math.min(1, n))

/**
 * Tilts an element in 3D by writing --rx / --ry onto it. Follows the pointer
 * where there is one; on touch screens it follows the element's scroll position.
 */
export function useTilt3D<T extends HTMLElement>(maxDeg = 10) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    let raf = 0
    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0

    const onPointer = (e: PointerEvent) => {
      targetX = clamp((e.clientX / window.innerWidth - 0.5) * 2)
      targetY = clamp((e.clientY / window.innerHeight - 0.5) * 2)
    }
    // Without a pointer the tilt follows where the artwork sits on screen. It is
    // read once a frame, and only while the artwork is visible.
    const followScroll = () => {
      const rect = el.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2) / window.innerHeight - 0.5
      targetX = clamp(offset * 2.2)
      targetY = clamp(offset)
    }

    const tick = () => {
      if (!hasPointer) followScroll()
      x += (targetX - x) * 0.07
      y += (targetY - y) * 0.07
      el.style.setProperty('--ry', `${(x * maxDeg).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${(-y * maxDeg * 0.6).toFixed(2)}deg`)
      raf = requestAnimationFrame(tick)
    }

    // Only spend frames while the artwork is on screen.
    const visibility = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf)
      if (entry.isIntersecting) raf = requestAnimationFrame(tick)
    })
    visibility.observe(el)

    if (hasPointer) window.addEventListener('pointermove', onPointer, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      visibility.disconnect()
      window.removeEventListener('pointermove', onPointer)
    }
  }, [maxDeg])

  return ref
}

/**
 * Sizes display type to fill its container exactly. Measures every [data-fit]
 * descendant at a known size and writes the font size that makes the widest
 * one span the container's content box to --fit-size on the container.
 */
export function useFitText<T extends HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fit = () => {
      const items = Array.from(el.querySelectorAll<HTMLElement>('[data-fit]'))
      if (!items.length) return
      const style = getComputedStyle(el)
      const room = el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight)
      let widest = 0
      for (const item of items) {
        const previous = item.style.fontSize
        item.style.fontSize = '100px'
        widest = Math.max(widest, item.scrollWidth)
        item.style.fontSize = previous
      }
      if (widest > 0) el.style.setProperty('--fit-size', `${((room / widest) * 100).toFixed(2)}px`)
    }

    fit()
    document.fonts?.ready.then(fit)
    const observer = new ResizeObserver(fit)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
