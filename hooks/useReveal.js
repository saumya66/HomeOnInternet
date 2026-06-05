import { useRef, useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to elements with [data-reveal] inside the
 * returned ref. When an element enters the viewport, the 'in' class is added
 * (triggering the CSS fade-up transition) and it is unobserved.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const scope = ref.current
    if (!scope) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { root: scope, threshold: 0.16 }
    )

    scope.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
