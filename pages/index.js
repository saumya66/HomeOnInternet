import Head from 'next/head'
import HomeSection from '../components/sections/HomeSection'

export default function HomePage() {
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
      <HomeSection />
    </>
  )
}
