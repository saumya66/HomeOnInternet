import fs from 'fs'
import path from 'path'

function parseMeta(content) {
  const block = content.match(/export\s+const\s+meta\s*=\s*\{([\s\S]*?)\}/)
  if (!block) return null

  const str = block[1]

  const str1 = (key) => {
    const m = str.match(new RegExp(`['"]?${key}['"]?\\s*:\\s*['"\`]([^'"\`\n]+)['"\`]`))
    return m ? m[1] : ''
  }
  const num = (key) => {
    const m = str.match(new RegExp(`['"]?${key}['"]?\\s*:\\s*(\\d+)`))
    return m ? parseInt(m[1]) : 5
  }
  const arr = (key) => {
    const m = str.match(new RegExp(`['"]?${key}['"]?\\s*:\\s*\\[([^\\]]*)\\]`))
    if (!m) return []
    return (m[1].match(/['"]([^'"]+)['"]/g) || []).map((t) => t.replace(/['"]/g, ''))
  }

  return {
    title: str1('title'),
    date: str1('date'),
    description: str1('description'),
    image: str1('image') || str1('thumbnailUrl') || '',
    readTime: num('readTime'),
    tags: arr('tags'),
  }
}

export function getAllPosts() {
  try {
    const blogDir = path.join(process.cwd(), 'pages', 'blog')
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })

    return entries
      .filter((e) => e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.'))
      .flatMap((e) => {
        const mdxPath = path.join(blogDir, e.name, 'index.mdx')
        if (!fs.existsSync(mdxPath)) return []
        const content = fs.readFileSync(mdxPath, 'utf8')
        const meta = parseMeta(content)
        if (!meta || !meta.title) return []
        return [{ slug: e.name, meta }]
      })
      .sort((a, b) => new Date(b.meta.date || 0) - new Date(a.meta.date || 0))
  } catch (e) {
    console.error('getAllPosts error:', e)
    return []
  }
}

/* Legacy export kept for any existing imports */
export const posts = []
