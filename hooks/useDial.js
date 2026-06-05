import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { MODES, ORDER, ROUTE_TO_MODE, MODE_TO_ROUTE, MOD } from '../data/siteData'

function nearestModeIdx(deg) {
  const a = MOD(deg, 360)
  return MODES.reduce(
    (best, m, i) => {
      const d = Math.min(Math.abs(a - m.angle), 360 - Math.abs(a - m.angle))
      return d < best.d ? { i, d } : best
    },
    { i: 0, d: Infinity }
  ).i
}

function rotationFor(targetAngle, currentRotation) {
  let best = targetAngle
  let bestDist = Infinity
  for (let k = -2; k <= 2; k++) {
    const cand = targetAngle + k * 360
    const d = Math.abs(cand - currentRotation)
    if (d < bestDist) {
      bestDist = d
      best = cand
    }
  }
  return best
}

export function useDial() {
  const router = useRouter()

  const currentMode = ROUTE_TO_MODE[router.pathname] ?? 'home'
  const currentModeIdx = MODES.findIndex((m) => m.id === currentMode)
  const initialIdx = currentModeIdx >= 0 ? currentModeIdx : 0

  const [rotation, setRotation] = useState(MODES[initialIdx].angle)
  const [activeIdx, setActiveIdx] = useState(initialIdx)
  const [isDragging, setIsDragging] = useState(false)
  const [nudge, setNudge] = useState(false)

  const rotRef = useRef(MODES[initialIdx].angle)
  const draggingRef = useRef(false)
  const startPARef = useRef(0)
  const startRotRef = useRef(0)

  const dialRef = useRef(null)
  const discRef = useRef(null)

  /* nudge hint on initial home load */
  useEffect(() => {
    if (currentMode === 'home') setNudge(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* sync rotation when route changes via browser nav / links */
  useEffect(() => {
    if (draggingRef.current) return
    const idx = MODES.findIndex((m) => m.id === currentMode)
    if (idx < 0) return
    setActiveIdx(idx)
    const newRot = rotationFor(MODES[idx].angle, rotRef.current)
    rotRef.current = newRot
    setRotation(newRot)
  }, [currentMode])

  /* View Transition–aware navigation */
  const navigateTo = useCallback(
    (modeId) => {
      const path = MODE_TO_ROUTE[modeId] ?? '/'
      if (typeof document !== 'undefined' && document.startViewTransition) {
        document.startViewTransition(async () => {
          await new Promise((resolve) => {
            function onComplete() {
              router.events.off('routeChangeComplete', onComplete)
              resolve()
            }
            router.events.on('routeChangeComplete', onComplete)
            router.push(path)
          })
        })
      } else {
        router.push(path)
      }
    },
    [router]
  )

  /* pointer angle from top (0° = up, clockwise) */
  function pointerAngle(e) {
    const dial = dialRef.current
    if (!dial) return 0
    const r = dial.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    return MOD((Math.atan2(dx, -dy) * 180) / Math.PI, 360)
  }

  const onPointerDown = useCallback(
    (e) => {
      e.preventDefault()
      draggingRef.current = true
      setIsDragging(true)
      setNudge(false)
      startPARef.current = pointerAngle(e)
      startRotRef.current = rotRef.current

      function handleMove(ev) {
        if (!draggingRef.current) return
        let delta = pointerAngle(ev) - startPARef.current
        if (delta > 180) delta -= 360
        if (delta < -180) delta += 360
        const newRot = startRotRef.current + delta
        rotRef.current = newRot
        setRotation(newRot)
        setActiveIdx(nearestModeIdx(MOD(newRot, 360)))
      }

      function handleUp() {
        draggingRef.current = false
        setIsDragging(false)
        window.removeEventListener('pointermove', handleMove)
        window.removeEventListener('pointerup', handleUp)
        window.removeEventListener('pointercancel', handleUp)
        const idx = nearestModeIdx(MOD(rotRef.current, 360))
        const snapped = rotationFor(MODES[idx].angle, rotRef.current)
        rotRef.current = snapped
        setRotation(snapped)
        setActiveIdx(idx)
        navigateTo(MODES[idx].id)
      }

      window.addEventListener('pointermove', handleMove)
      window.addEventListener('pointerup', handleUp)
      window.addEventListener('pointercancel', handleUp)
    },
    [navigateTo]
  )

  /* kept for interface compatibility — move/up are handled via window listeners */
  const onPointerMove = useCallback(() => {}, [])
  const onPointerUp = useCallback(() => {}, []) 

  /* wheel — navigate one step clockwise / counter-clockwise */
  useEffect(() => {
    const dial = dialRef.current
    if (!dial) return
    const handler = (e) => {
      e.preventDefault()
      const oi = ORDER.findIndex((m) => m.id === MODES[activeIdx]?.id)
      const next = ORDER[MOD(oi + (e.deltaY > 0 ? 1 : -1), ORDER.length)]
      if (next) navigateTo(next.id)
    }
    dial.addEventListener('wheel', handler, { passive: false })
    return () => dial.removeEventListener('wheel', handler)
  }, [activeIdx, navigateTo])

  /* keyboard arrows */
  useEffect(() => {
    const handler = (e) => {
      if (e.target.matches('input, textarea, [contenteditable]')) return
      const oi = ORDER.findIndex((m) => m.id === currentMode)
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        navigateTo(ORDER[MOD(oi + 1, ORDER.length)].id)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        navigateTo(ORDER[MOD(oi - 1, ORDER.length)].id)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentMode, navigateTo])

  return {
    currentMode,
    activeIdx,
    rotation,
    isDragging,
    nudge,
    dialRef,
    discRef,
    navigateTo,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  }
}
