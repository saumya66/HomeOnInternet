import Head from 'next/head'
import { useRouter } from 'next/router'

const SITE = 'https://saumyanayak.xyz'

export default function BlogPost({ meta = {}, children }) {
  const router = useRouter()
  const slug = router.query.slug || ''
  const canonical = `${SITE}/blog/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: {
      '@type': 'Person',
      name: 'Saumya Nayak',
      url: SITE,
    },
    ...(meta.image ? { image: meta.image } : {}),
  }

  return (
    <>
      <Head>
        <title>{meta.title ? `${meta.title} — Saumya Nayak` : 'Saumya Nayak'}</title>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.title && (
          <meta property="og:title" content={meta.title} />
        )}
        {meta.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta.image && <meta property="og:image" content={meta.image} />}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <article className="post-body">
        <header className="post-header">
          <h1 className="serif">{meta.title}</h1>
          <div className="post-meta">
            {meta.date && <time dateTime={meta.date}>{meta.date}</time>}
            {meta.readTime && <span>{meta.readTime} min read</span>}
            {meta.tags?.length > 0 && (
              <span className="post-tags">
                {meta.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </span>
            )}
          </div>
        </header>

        <div className="post-content">{children}</div>
      </article>
    </>
  )
}
