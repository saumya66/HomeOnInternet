import { useContext } from 'react'
import Link from 'next/link'
import { useReveal } from '../../hooks/useReveal'
import { SiteContext } from '../SiteLayout'

const LATEST_VIDEO_ID = '9y1CFOvzWxA'

export default function HomeSection({ latestPost }) {
  const { navigateTo, openVideo } = useContext(SiteContext)
  const sectionRef = useReveal()

  return (
    <section className="mode active" id="mode-home" ref={sectionRef}>
      <div className="wrap home-wrap">
        <div className="hero-top">
          {/* <h1 className="bigline serif">Hi, I&apos;m Saumya.</h1> */}
          <p className="hero-sub hand">
            I like creating things.
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
            Most often it&apos;s software. Other times I like capturing life through my camera
            & creating cinematic videos & photographs. I try to write blogs often, sharing my learnings, 
            read widely, sing songs & go on long bike rides <span className="hand hero-aside-inline">(350kms longest so far)</span>. I like hitting the gym & running <span className="hand hero-aside-inline">(current PR is 5k)</span>.
          </p>
          <p className="hero-aside hand">
            This little corner of the internet is where I share all of it.
          </p>
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
          <article className="ncard" data-reveal>
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
            <h3 className="serif">Clariti</h3>
            <p className="nc-desc">I&apos;m building an autonomous Human QA — vision models + agentic workflows. Writing code is not the right way to do True end-to-end testing.</p>
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
            <h3 className="serif">Deeper Software Stack</h3>
            <p className="nc-desc">Getting fundamentals right, building closer to hardware, think c++, cuda, memory, gpu, inference optimizations.</p>
          </article>

          {/* Latest Video */}
          <article
            className="ncard vidcard clickable"
            onClick={() => openVideo(LATEST_VIDEO_ID)}
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
              <img
                src={`https://img.youtube.com/vi/${LATEST_VIDEO_ID}/hqdefault.jpg`}
                alt="Latest video thumbnail"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className="play">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </div>
            <h4 className="serif">Building Recommendation Systems from Scratch</h4>
            <div className="vc-foot">
              <span>12:47</span>
              <span className="yt">Watch ▶</span>
            </div>
          </article>

          {/* Latest Article */}
          {latestPost && (
            <Link
              href={`/blog/${latestPost.slug}`}
              className="ncard vidcard"
              data-reveal
              style={{ textDecoration: 'none', display: 'block' }}
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
              <div className="nc-thumb">
                {latestPost.meta.image ? (
                  <img
                    src={latestPost.meta.image}
                    alt={latestPost.meta.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--paper-deep)' }} />
                )}
              </div>
              <h4 className="serif">{latestPost.meta.title}</h4>
              <div className="vc-foot">
                <span>{latestPost.meta.date}</span>
                <span className="yt">{latestPost.meta.readTime ? `${latestPost.meta.readTime} min read` : 'read →'}</span>
              </div>
            </Link>
          )}

        </div>

        <div className="reach-row">
          <span className="reach-lbl">reach me</span>
          <div className="reach-links">
            <a href="mailto:work.saumyanayak@gmail.com" className="reach-link" aria-label="Email" title="Email">
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
            </a>
            <a href="https://x.com/saumyanayak_" target="_blank" rel="noopener noreferrer" className="reach-link" aria-label="X / Twitter" title="X">
              <svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" strokeLinecap="round"/></svg>
            </a>
            <a href="https://youtube.com/@saumyanayak" target="_blank" rel="noopener noreferrer" className="reach-link" aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M10 9.5l5 2.5-5 2.5Z" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://instagram.com/saumyanayak_" target="_blank" rel="noopener noreferrer" className="reach-link" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://github.com/saumya66" target="_blank" rel="noopener noreferrer" className="reach-link" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
            </a>
          </div>
        </div>

        <footer className="home-foot">
          <span className="foot-quote hand"><br /></span>
          <span className="copy">
            © 2026 Saumya Nayak <span className="sep">|</span> Last updated · June 2026
          </span>
          <span className="foot-spacer" />
        </footer>
      </div>
    </section>
  )
}
