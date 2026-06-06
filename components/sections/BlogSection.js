import { useState, useContext } from 'react'
import Link from 'next/link'
import { useReveal } from '../../hooks/useReveal'
import { SiteContext } from '../SiteLayout'

const CATEGORIES = ['All', 'Engineering', 'Life']

export default function BlogSection({ posts = [] }) {
  const { navigateTo } = useContext(SiteContext)
  const sectionRef = useReveal()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter(
          (p) =>
            p.meta?.tags?.some(
              (t) => t.toLowerCase() === activeCategory.toLowerCase()
            )
        )

  const featuredPost = posts[4]
  const listPosts = filtered.slice(featuredPost ? 1 : 0)

  return (
    <section className="mode active" id="mode-blog" ref={sectionRef}>
      <div className="wrap blog-wrap">
        <svg className="postmark" viewBox="0 0 230 96" aria-hidden="true">
          <path className="wv" d="M6 28 q10 -8 20 0 t20 0 t20 0 t20 0" />
          <path className="wv" d="M6 40 q10 -8 20 0 t20 0 t20 0 t20 0" />
          <path className="wv" d="M6 52 q10 -8 20 0 t20 0 t20 0 t20 0" />
          <circle className="pm" cx="160" cy="44" r="32" />
          <circle className="pm" cx="160" cy="44" r="25" />
          <text x="160" y="40" textAnchor="middle">BENGALURU</text>
          <text x="160" y="54" textAnchor="middle">· IND ·</text>
        </svg>

        <button className="back-home" onClick={() => navigateTo('home')}>
          <span className="bk">←</span> Back to Home
        </button>

        <div className="page-head">
          <h2 className="serif page-title">Blog</h2>
          <p className="page-sub">Thoughts on engineering, life and everything in between.</p>
        </div>

        {/* Category filter */}
        <div className="cat-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`chip${activeCategory === cat ? ' on' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
            <article className="feat" data-reveal>
              <div className="cover">
                {featuredPost.meta?.image ? (
                  <img src={featuredPost.meta.image} alt="" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--paper-deep)' }} />
                )}
              </div>
              <div className="feat-body">
                <span className="feat-tag">Featured</span>
                <h3 className="serif">{featuredPost.meta?.title}</h3>
                <p className="dek">{featuredPost.meta?.description}</p>
                <div className="feat-foot">
                  {featuredPost.meta?.date}
                  {featuredPost.meta?.readTime && ` · ${featuredPost.meta.readTime} min read`}
                </div>
              </div>
            </article>
          </Link>
        )}

        {/* Post list */}
        <div className="posts post-list">
          {listPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="post post-row"
            >
              <div className="rcover">
                {post.meta?.image && (
                  <img src={post.meta.image} alt="" />
                )}
              </div>
              <div className="rbody">
                <h4 className="serif">{post.meta?.title}</h4>
                <div className="rmeta">
                  {post.meta?.date}
                  {post.meta?.tags?.[0] && (
                    <> &nbsp;·&nbsp; <span className="cat">{post.meta.tags[0]}</span></>
                  )}
                  {post.meta?.readTime && <> &nbsp;·&nbsp; {post.meta.readTime} min read</>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ color: 'var(--ink-60)', padding: '40px 0' }}>
            No posts yet — check back soon.
          </p>
        )}

        <div className="section-foot" />
      </div>
    </section>
  )
}
