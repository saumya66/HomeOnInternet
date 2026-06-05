import Head from 'next/head'
import BlogSection from '../components/sections/BlogSection'
import { getAllPosts } from '../getAllPosts'

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog — Saumya Nayak</title>
        <meta
          name="description"
          content="Thoughts on engineering, life and everything in between."
        />
        <meta property="og:title" content="Blog — Saumya Nayak" />
        <meta
          property="og:description"
          content="Thoughts on engineering, life and everything in between."
        />
        <meta property="og:url" content="https://saumyanayak.xyz/blog" />
        <link rel="canonical" href="https://saumyanayak.xyz/blog" />
      </Head>
      <BlogSection posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  let posts = []
  try {
    posts = getAllPosts()
  } catch {
    posts = []
  }
  return { props: { posts } }
}
