import Head from 'next/head'
import StudioSection from '../components/sections/StudioSection'

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Studio — Saumya Nayak</title>
        <meta name="description" content="Photos, videos and visual stories." />
        <meta property="og:title" content="Studio — Saumya Nayak" />
        <meta property="og:description" content="Photos, videos and visual stories." />
        <meta property="og:url" content="https://saumyanayak.xyz/studio" />
        <link rel="canonical" href="https://saumyanayak.xyz/studio" />
      </Head>
      <StudioSection />
    </>
  )
}
