import { useEffect } from 'react'

export default function CaseStudy({ data, onClose }) {
  const open = !!data

  /* close on Escape */
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  /* prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      className={`case${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="case-panel">
        <button className="close" onClick={onClose} aria-label="Close">
          Close ✕
        </button>

        {data && (
          <div className="case-panel-content">
            {data.cover && (
              <div className="cover">
                <img src={data.cover} alt="" />
              </div>
            )}
            {!data.cover && <div className="cover" />}

            <div className="kicker">{data.kicker}</div>
            <h2>{data.title}</h2>
            <p className="sub">{data.sub}</p>

            {data.blocks.map((block, i) => (
              <div key={i} className="block">
                <div className="h">
                  <span className="n">0{i + 1}</span>
                  <h4>{block.h}</h4>
                </div>
                <p>{block.p}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
