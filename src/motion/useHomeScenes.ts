import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Motion for the home page. Everything is in place without it. */
export function useHomeScenes(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = root.current
    if (!scope) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // They step up into the line one after another, oldest first.
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .from('.home__title > span', { yPercent: 105, duration: 1.1 })
          .from('.home__bust', { yPercent: 40, opacity: 0, duration: 1.1, stagger: 0.05 }, 0.15)
          .from('.home__intro, .home__name', { opacity: 0, duration: 0.6 }, 0.6)

        // Each lifetime draws out from its birth year.
        gsap.from('.lives__bar', {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          scrollTrigger: { trigger: '.lives__chart', start: 'top 78%', once: true },
        })
        gsap.utils.toArray<HTMLElement>('[data-giant]').forEach((el) => {
          gsap.from(el, {
            scaleY: 0.45,
            transformOrigin: '50% 100%',
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 100%', end: 'top 45%', scrub: 0.6 },
          })
        })
      }, scope)
      return () => ctx.revert()
    })

    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    return () => mm.revert()
  }, [root])
}
