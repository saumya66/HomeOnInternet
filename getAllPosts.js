export function getAllPosts() {
  try {
    const context = require.context('./pages/blog/', true, /\.mdx$/)
    return context
      .keys()
      .map((fileName) => {
        const slug = fileName
          .replace(/^\.\//, '')
          .replace(/\/index\.mdx$/, '')
          .replace(/\.mdx$/, '')
        const mod = context(fileName)
        const rawMeta = mod.meta || {}
        /* normalise legacy thumbnailUrl → image */
        const meta = { ...rawMeta, image: rawMeta.image || rawMeta.thumbnailUrl || '' }
        return { slug, meta }
      })
      .filter((p) => p.meta && p.meta.title)
      .sort((a, b) => new Date(b.meta.date || 0) - new Date(a.meta.date || 0))
  } catch {
    return []
  }
}

/* Legacy export kept for any existing imports */
export const posts = []
