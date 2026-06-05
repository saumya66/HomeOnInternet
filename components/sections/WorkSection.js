import { useContext } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { SiteContext } from '../SiteLayout'
import { CASE_DATA } from '../../data/siteData'

export default function WorkSection() {
  const { navigateTo, openCase } = useContext(SiteContext)
  const sectionRef = useReveal()

  return (
    <section className="mode active" id="mode-work" ref={sectionRef}>
      <div className="wrap">
        <button className="back-home" onClick={() => navigateTo('home')}>
          <span className="bk">←</span> Back to Home
        </button>

        <div className="page-head">
          <h2 className="serif page-title">Work</h2>
          <p className="page-sub">Things I built — and what they taught me.</p>
        </div>

        <div className="bento">
          <article
            className="card feature"
            onClick={() => openCase('recommender')}
            data-reveal
          >
            <div className="card-media" style={{ flex: 1, minHeight: '200px', background: 'var(--paper-deep)' }} />
            <div className="card-body">
              <span className="idx">001 — In progress</span>
              <h3>AI Recommendation Engine</h3>
              <p className="one">
                A recommender that models taste over time instead of chasing the next click.
                Sub-50ms, no GPU at inference.
              </p>
              <div className="stack">
                <span className="tag">Python</span>
                <span className="tag">PyTorch</span>
                <span className="tag">Redis</span>
                <span className="tag">FastAPI</span>
              </div>
              <span className="lesson">Fresh data beats clever models <span className="arrow">→</span></span>
            </div>
          </article>

          <article
            className="card tall"
            onClick={() => openCase('blogengine')}
            data-reveal
          >
            <div className="card-media" style={{ flex: 1, minHeight: '140px', background: 'var(--paper-deep)' }} />
            <div className="card-body">
              <span className="idx">002</span>
              <h3>This Site</h3>
              <p className="one">A blog that publishes itself from Markdown — fast, indexable, zero-cost.</p>
              <div className="stack">
                <span className="tag">Static</span>
                <span className="tag">MDX</span>
              </div>
              <span className="lesson">Read the case study <span className="arrow">→</span></span>
            </div>
          </article>

          <article
            className="card wide"
            onClick={() => openCase('visionkit')}
            data-reveal
          >
            <div className="card-body">
              <span className="idx">003 — Side project</span>
              <h3>Frame — a browser photo grader</h3>
              <p className="one">
                Color-grading presets applied client-side with WebGL.
                Your photos never leave the machine.
              </p>
              <div className="stack">
                <span className="tag">WebGL</span>
                <span className="tag">Canvas</span>
                <span className="tag">LUTs</span>
              </div>
              <span className="lesson">Photography taught me software <span className="arrow">→</span></span>
            </div>
          </article>

          <article
            className="card"
            onClick={() => navigateTo('timeline')}
            style={{ cursor: 'pointer' }}
            data-reveal
          >
            <div className="card-body">
              <span className="idx">·</span>
              <h3 style={{ fontSize: 'clamp(20px,2vw,26px)' }}>The long version →</h3>
              <p className="one">Where all of this came from — the life timeline.</p>
              <span className="lesson">Open the journey <span className="arrow">→</span></span>
            </div>
          </article>
        </div>

        <div className="section-foot" />
      </div>
    </section>
  )
}
