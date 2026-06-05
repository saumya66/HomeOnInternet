import { useContext, useRef, useEffect } from 'react'
import { SiteContext } from '../SiteLayout'
import { TIMELINE_ITEMS } from '../../data/siteData'

/* Catmull-Rom smoothed SVG path */
function smooth(points) {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] || p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export default function TimelineSection() {
  const { navigateTo } = useContext(SiteContext)

  const sectionRef = useRef(null)
  const pathWrapRef = useRef(null)
  const trackRef = useRef(null)
  const drawRef = useRef(null)
  const drawLenRef = useRef(0)

  function layoutPath() {
    const wrap = pathWrapRef.current
    if (!wrap) return
    const cont = wrap.querySelector('.checkpoints')
    if (!cont) return
    const W = cont.offsetWidth
    const H = cont.offsetHeight
    const svg = wrap.querySelector('.path-svg')
    if (!svg) return
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
    svg.style.height = H + 'px'

    const cps = [...cont.querySelectorAll('.cp')]
    const cx = W / 2
    const amp = Math.min(W * 0.26, 230)
    const pts = [{ x: cx, y: 0 }]

    cps.forEach((cp, i) => {
      const y = cp.offsetTop + cp.offsetHeight / 2
      const x = cx + (i % 2 === 0 ? -amp : amp) * 0.5
      const node = cp.querySelector('.node')
      if (node) node.style.left = (x / W) * 100 + '%'
      pts.push({ x, y })
    })
    pts.push({ x: cx, y: H })

    const d = smooth(pts)
    if (trackRef.current) trackRef.current.setAttribute('d', d)
    if (drawRef.current) {
      drawRef.current.setAttribute('d', d)
      const len = drawRef.current.getTotalLength()
      drawLenRef.current = len
      drawRef.current.style.strokeDasharray = len
      drawRef.current.style.strokeDashoffset = len
    }
  }

  function updatePath() {
    const section = sectionRef.current
    if (!section || !drawLenRef.current) return
    const max = section.scrollHeight - section.clientHeight
    const p = max > 0 ? Math.min(1, Math.max(0, section.scrollTop / max)) : 0
    if (drawRef.current) {
      drawRef.current.style.strokeDashoffset = drawLenRef.current * (1 - p)
    }
  }

  /* reveal checkpoints on scroll via IntersectionObserver */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    layoutPath()

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          en.target.classList.toggle(
            'in',
            en.isIntersecting && en.intersectionRatio > 0.25
          )
        })
      },
      { root: section, threshold: [0.25, 0.5] }
    )
    section.querySelectorAll('.cp').forEach((cp) => io.observe(cp))

    section.addEventListener('scroll', updatePath, { passive: true })

    let rT
    const onResize = () => {
      clearTimeout(rT)
      rT = setTimeout(layoutPath, 160)
    }
    window.addEventListener('resize', onResize)

    return () => {
      io.disconnect()
      section.removeEventListener('scroll', updatePath)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="mode active" id="mode-timeline" ref={sectionRef}>
      <div className="wrap">
        <button className="back-home" onClick={() => navigateTo('home')}>
          <span className="bk">←</span> Back to Home
        </button>
        <div className="page-head">
          <h2 className="serif page-title">Timeline</h2>
          <p className="page-sub">A life in checkpoints — scroll and the path draws itself.</p>
        </div>
      </div>

      <div className="path-wrap" ref={pathWrapRef}>
        <div className="checkpoints">
          <svg
            className="path-svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="track" ref={trackRef} d="" />
            <path className="draw" ref={drawRef} d="" />
          </svg>

          {TIMELINE_ITEMS.map((item) => (
            <article className="cp" key={item.id}>
              <div
                className="cp-photo"
                style={{ background: 'var(--paper-deep)' }}
              />
              <div className="cp-text">
                <div className="yr">
                  {item.marker ? (
                    <span className="marker">{item.year}</span>
                  ) : (
                    item.year
                  )}
                </div>
                <div className="happened">{item.happened}</div>
                <div className="changed-lbl">What changed in me</div>
                <div className="changed">{item.changed}</div>
              </div>
              <span className="node" />
            </article>
          ))}
        </div>
      </div>

      <div className="section-foot" />
    </section>
  )
}
