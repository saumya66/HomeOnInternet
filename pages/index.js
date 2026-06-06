import Head from 'next/head'
import HomeSection from '../components/sections/HomeSection'
import { getAllPosts } from '../getAllPosts'

export default function HomePage({ latestPost }) {
  return (
    <>
      <Head>
        <title>Saumya Nayak — Software Engineer. Builder. Photographer.</title>
        <meta
          name="description"
          content="Personal site of Saumya Nayak — software engineer, builder and photographer. Documenting life as I go."
        />
        <meta property="og:title" content="Saumya Nayak — Software Engineer. Builder. Photographer." />
        <meta
          property="og:description"
          content="Personal site of Saumya Nayak — software engineer, builder and photographer."
        />
        <meta property="og:url" content="https://saumyanayak.xyz" />
        <link rel="canonical" href="https://saumyanayak.xyz" />
      </Head>
      <HomeSection latestPost={latestPost} />
    </>
  )
}

export async function getStaticProps() {
  let posts = []
  try { posts = getAllPosts() } catch {}
  return { props: { latestPost: posts[4] || null } }
}
