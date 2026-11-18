import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Scroll choreography for a figure page. Everything is visible by default in
 * CSS, so with reduced motion (or no JS) the page simply reads top to bottom.
 */
export function useFigureScenes(root: RefObject<HTMLElement | null>, key: string) {
  useLayoutEffect(() => {
    const scope = root.current
    if (!scope) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // Opening: the name climbs out of its mask, the portrait rises behind it.
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from('.hero__line > span', { yPercent: 108, duration: 1.2, stagger: 0.1 })
          .from('.hero__portrait', { yPercent: 28, opacity: 0, duration: 1.4 }, 0.15)
          .from('.hero__meta > *', { y: 16, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.5)

        gsap.to('.hero__name', {
          yPercent: 38,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('.hero__portrait-inner', {
          scale: 1.07,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        })

        // Giant section words stretch up to full height as they enter.
        gsap.utils.toArray<HTMLElement>('[data-giant]').forEach((el) => {
          gsap.from(el, {
            scaleY: 0.45,
            transformOrigin: '50% 100%',
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 45%', scrub: 0.6 },
          })
        })

        ScrollTrigger.batch('[data-reveal]', {
          start: 'top 88%',
          once: true,
          onEnter: (els) =>
            gsap.from(els, { y: 44, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.09, clearProps: 'transform,opacity' }),
        })

        gsap.utils.toArray<HTMLElement>('[data-photo]').forEach((el, i) => {
          gsap.from(el, {
            y: 70,
            rotate: i % 2 ? 5 : -5,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 55%', scrub: 0.6 },
          })
        })

        gsap.from('.timeline__progress', {
          scaleY: 0,
          transformOrigin: '50% 0%',
          ease: 'none',
          scrollTrigger: { trigger: '.timeline', start: 'top 60%', end: 'bottom 60%', scrub: true },
        })

        gsap.from('.map__state', {
          opacity: 0,
          duration: 0.5,
          stagger: { each: 0.02, from: 'random' },
          scrollTrigger: { trigger: '.map', start: 'top 75%', once: true },
        })
      }, scope)
      return () => ctx.revert()
    })

    // Fonts and images shift layout after first paint.
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      mm.revert()
    }
  }, [root, key])
}
