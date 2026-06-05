import { useState, useEffect, useRef } from 'react'
import { MODES, ICONS } from '../data/siteData'

/* ---- bezel arc path (pure math — no DOM) ---- */
function pt(r, deg) {
  const a = (deg * Math.PI) / 180
  return {
    x: +(50 + r * Math.sin(a)).toFixed(3),
    y: +(50 - r * Math.cos(a)).toFixed(3),
  }
}

function bezelArcPath(angle, label) {
  const rt = 43.5
  const span = Math.min(70, label.length * 3.1 + 5)
  const top = Math.cos((angle * Math.PI) / 180) >= -0.01
  const a0 = top ? angle - span / 2 : angle + span / 2
  const a1 = top ? angle + span / 2 : angle - span / 2
  const sweep = top ? 1 : 0
  const s = pt(rt, a0)
  const e = pt(rt, a1)
  return `M ${s.x} ${s.y} A ${rt} ${rt} 0 0 ${sweep} ${e.x} ${e.y}`
}

/* ---- milled tick styles — computed from element size after mount ---- */
function buildTickStyles(dsz) {
  return Array.from({ length: 48 }, (_, i) => {
    const a = i * 7.5
    const major = a % 30 === 0
    return {
      angle: a,
      style: {
        position: 'absolute',
        left: dsz / 2 + 'px',
        top: dsz / 2 + 'px',
        width: '1px',
        height: (major ? dsz * 0.06 : dsz * 0.035) + 'px',
        background: 'rgba(255,255,255,0.16)',
        transformOrigin: '0 0',
        transform: `translate(-50%,-50%) rotate(${a}deg) translateY(${-dsz * 0.44}px)`,
      },
    }
  })
}

export default function Dial({
  currentMode,
  activeIdx,
  rotation,
  isDragging,
  nudge,
  dialRef,
  discRef,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onNavigate,
}) {
  const decoRef = useRef(null)
  const [ticks, setTicks] = useState([])

  /* measure deco div after mount to position ticks */
  useEffect(() => {
    if (!decoRef.current) return
    const measure = () => setTicks(buildTickStyles(decoRef.current.offsetWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(decoRef.current)
    return () => ro.disconnect()
  }, [])

  const dialClass = [
    'dial',
    isDragging ? 'dragging' : '',
    nudge ? 'nudge' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={dialRef}
      className={dialClass}
      role="navigation"
      aria-label="Camera mode dial"
      style={{ '--rot': `${rotation}deg` }}
    >
      {/* ---- static bezel ring with curved labels ---- */}
      <svg className="dial-bezel" viewBox="0 0 100 100">
        <circle className="ring-band" cx="50" cy="50" r="43.5" />
        <circle className="ring-edge out" cx="50" cy="50" r="46.9" />
        <circle className="ring-edge in" cx="50" cy="50" r="40.1" />
        {MODES.map((m) => {
          const arcId = `bzarc-${m.id}`
          const isActive = m.id === currentMode
          return (
            <g
              key={m.id}
              onClick={() => onNavigate(m.id)}
              style={{ cursor: 'pointer' }}
            >
              <path id={arcId} d={bezelArcPath(m.angle, m.label)} fill="none" />
              <text
                className={`bz-label${isActive ? ' active' : ''}`}
              >
                <textPath
                  href={`#${arcId}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {m.label.toUpperCase()}
                </textPath>
              </text>
            </g>
          )
        })}
      </svg>

      {/* ---- rotating dark disc ---- */}
      <div
        className="dial-disc"
        ref={discRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="dial-ring" />
        <div className="dial-face" />
        <div className="dial-sheen" />
        <div className="dial-deco" ref={decoRef}>
          {ticks.map(({ angle, style }) => (
            <div key={angle} className="dtick" style={style} />
          ))}
        </div>
        <div className="dial-pointer" aria-hidden="true" />
      </div>

      {/* ---- center icon ---- */}
      <div className="dial-center" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          dangerouslySetInnerHTML={{ __html: ICONS[currentMode] || ICONS.home }}
        />
      </div>
    </div>
  )
}
