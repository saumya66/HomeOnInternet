import { useContext } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { SiteContext } from '../SiteLayout'

export default function HomeSection() {
  const { navigateTo } = useContext(SiteContext)
  const sectionRef = useReveal()

  return (
    <section className="mode active" id="mode-home" ref={sectionRef}>
      <div className="wrap home-wrap">
        <div className="hero-top">
          <h1 className="bigline serif">Hi, I&apos;m Saumya.</h1>
          <p className="hero-sub hand">
            I love creating things.
            {/* <svg className="nowarrow" viewBox="0 0 64 32" aria-hidden="true">
              <path className="a" d="M 2 8 C 18 2 46 6 52 26" />
              <path className="b" d="M 42 20 L 52 30 L 62 20" />
            </svg> */}
          </p>
          {/* <p className="hero-what serif">
            Most often that&apos;s <span className="hl">software</span>.<br />
            Hopefully <span className="hl">hardware</span> someday.
          </p> */}
          <p className="hero-body">
            Most often that&apos;s software. Other times I like capturing life through my camera
            & creating cinematic videos & photographs. I try to write blogs often sharing my learnings, 
            read widely, sing songs & go on long bike rides <span className="hand hero-aside-inline">(350kms longest so far)</span>. I like hitting the gym & running <span className="hand hero-aside-inline">(current PR is 5k)</span>.
          </p>
          <blockquote className="hero-aside hand">
            This little corner of the internet is where I share all of it.
          </blockquote>
        </div>

        <div className="now-cue">
          <span className="hand">
            This is what&apos;s happening{' '}
            <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
              <u>now</u>.
              <svg className="nowarrow" viewBox="0 0 64 32" aria-hidden="true">
                <path className="a" d="M 2 8 C 18 2 46 6 52 26" />
                <path className="b" d="M 42 20 L 52 30 L 62 20" />
              </svg>
            </span>
          </span>
        </div>

        <div className="now-cards">
          {/* Currently Building */}
          <article
            className="ncard"
            onClick={() => navigateTo('work')}
            style={{ cursor: 'pointer' }}
            data-reveal
          >
            <div className="nc-head">
              <span className="nc-lbl">Currently Building</span>
              <span className="nc-ic">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M7.5 10 l3 2 l-3 2" />
                  <path d="M13 14.5 h4" />
                </svg>
              </span>
            </div>
            <h3 className="serif">AI Recommendation Engine</h3>
            <p className="nc-desc">Multi-stage ranking system with real-time personalization.</p>
            <div className="nc-tags">
              <span className="tag">Next.js</span>
              <span className="tag">Python</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <div className="nc-foot">
              <div className="prog-row">
                <span>Progress</span>
                <span className="pct">68%</span>
              </div>
              <div className="prog"><i style={{ width: '68%' }} /></div>
            </div>
          </article>

          {/* Currently Learning */}
          <article className="ncard" data-reveal>
            <div className="nc-head">
              <span className="nc-lbl">Currently Learning</span>
              <span className="nc-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M5 4 H16 a2 2 0 0 1 2 2 V20 H7 a2 2 0 0 1-2-2 Z" />
                  <path d="M5 18 a2 2 0 0 1 2-2 H18" />
                </svg>
              </span>
            </div>
            <h3 className="serif">Distributed Systems</h3>
            <p className="nc-desc">Deep diving into scalability, fault tolerance and systems design.</p>
            <div className="nc-foot">
              <div className="learn-row">
                <span className="wk">This Week</span>
                <span className="topic">Consistency Models</span>
              </div>
            </div>
          </article>

          {/* Latest Video */}
          <article
            className="ncard vidcard"
            onClick={() => navigateTo('studio')}
            style={{ cursor: 'pointer' }}
            data-reveal
          >
            <div className="nc-head">
              <span className="nc-lbl">Latest Video</span>
              <span className="nc-ic">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M11 9.6 l4.2 2.4 l-4.2 2.4 Z" fill="currentColor" stroke="none" />
                </svg>
              </span>
            </div>
            <div className="nc-thumb">
              <div style={{ width: '100%', height: '100%', background: 'var(--paper-deep)' }} />
              <span className="play">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
            <h4 className="serif">Building Recommendation Systems from Scratch</h4>
            <div className="vc-foot">
              <span>12:47</span>
              <span className="yt">YouTube →</span>
            </div>
          </article>

          {/* Latest Article */}
          <article
            className="ncard"
            onClick={() => navigateTo('blog')}
            style={{ cursor: 'pointer' }}
            data-reveal
          >
            <div className="nc-head">
              <span className="nc-lbl">Latest Article</span>
              <span className="nc-ic">
                <svg viewBox="0 0 24 24">
                  <path d="M7 3 H14 L18 7 V21 H7 Z" />
                  <path d="M14 3 V7 H18" />
                  <path d="M9.6 12.5 H15.4" />
                  <path d="M9.6 15.8 H15.4" />
                </svg>
              </span>
            </div>
            <h3 className="serif art">Why Most Side Projects Fail</h3>
            <p className="nc-desc">and what I&apos;ve learned from mine.</p>
            <div className="nc-foot art-foot">
              <span className="dt">Jun 2, 2026 · 6 min read</span>
              <span className="arr">→</span>
            </div>
          </article>

        </div>

        <footer className="home-foot">
          <span className="foot-quote hand">Focus is a superpower.<br />Protect it.</span>
          <span className="copy">
            © 2026 Saumya Nayak <span className="sep">|</span> Last updated · June 2026
          </span>
          <span className="foot-spacer" />
        </footer>
      </div>

      <div className="deco-photo bl" data-reveal>
        <span className="tape" />
        <div style={{ width: '100%', height: '132px', background: 'var(--paper-deep)' }} />
      </div>
    </section>
  )
}
