import { useState, useContext } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { SiteContext } from '../SiteLayout'

const PANES = [
  { id: 'photo', label: 'Photography' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'cinematic', label: 'Cinematic' },
]

const PHOTOS = [
  { id: 'ph-1', ratio: '3/4' },
  { id: 'ph-2', ratio: '4/3' },
  { id: 'ph-3', ratio: '3/4' },
  { id: 'ph-4', ratio: '16/10' },
  { id: 'ph-5', ratio: '3/4' },
  { id: 'ph-6', ratio: '16/10' },
]

const VIDEOS = [
  { id: 'yt-1', title: 'Building Recommendation Systems', meta: 'Engineering log · 18:24' },
  { id: 'yt-2', title: 'A Weekend With Distributed Systems', meta: 'Learning out loud · 22:10' },
  { id: 'yt-3', title: 'How I Color-Grade in the Browser', meta: 'Build · 11:47' },
  { id: 'yt-4', title: 'My Engineering Desk Setup, 2026', meta: 'Studio · 09:33' },
]

const FILMS = [
  { id: 'film-1', title: 'Above the Western Ghats — a drone short', meta: 'Cinematic · 3:02' },
  { id: 'film-2', title: 'One Tank, No Plan — a riding diary', meta: 'Cinematic · 5:41' },
]

const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

export default function StudioSection() {
  const { navigateTo } = useContext(SiteContext)
  const sectionRef = useReveal()
  const [activePane, setActivePane] = useState('photo')

  return (
    <section className="mode active" id="mode-studio" ref={sectionRef}>
      <div className="wrap media-wrap">
        <span className="hand media-quote" aria-hidden="true">
          Collect moments,<br />— not things.
        </span>

        <button className="back-home" onClick={() => navigateTo('home')}>
          <span className="bk">←</span> Back to Home
        </button>

        <div className="page-head">
          <h2 className="serif page-title">Studio</h2>
          <p className="page-sub">Photos, videos and visual stories.</p>
        </div>

        {/* Pane tabs */}
        <div className="media-tabs">
          {PANES.map((pane) => (
            <button
              key={pane.id}
              className={`chip${activePane === pane.id ? ' on' : ''}`}
              onClick={() => setActivePane(pane.id)}
            >
              {pane.label}
            </button>
          ))}
        </div>

        {/* Photography */}
        {activePane === 'photo' && (
          <div className="media-pane on" id="pane-photo">
            <div className="gallery">
              {PHOTOS.map((ph) => (
                <figure
                  key={ph.id}
                  className="frame"
                  style={{ aspectRatio: ph.ratio, background: 'var(--paper-deep)' }}
                />
              ))}
            </div>
          </div>
        )}

        {/* YouTube */}
        {activePane === 'youtube' && (
          <div className="media-pane on" id="pane-youtube">
            <div className="vid-grid">
              {VIDEOS.map((v) => (
                <div key={v.id} className="vid">
                  <div className="thumb" style={{ background: 'var(--paper-deep)' }}>
                    <span className="play"><PlayIcon /></span>
                  </div>
                  <h4 className="serif">{v.title}</h4>
                  <div className="vmeta">{v.meta}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cinematic */}
        {activePane === 'cinematic' && (
          <div className="media-pane on" id="pane-cinematic">
            <div className="film-grid">
              {FILMS.map((f) => (
                <div key={f.id} className="vid">
                  <div
                    className="thumb"
                    style={{ aspectRatio: '21/9', background: 'var(--paper-deep)' }}
                  >
                    <span className="play"><PlayIcon /></span>
                  </div>
                  <h4 className="serif">{f.title}</h4>
                  <div className="vmeta">{f.meta}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="section-foot" />
      </div>
    </section>
  )
}
