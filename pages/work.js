import Head from 'next/head'
import WorkSection from '../components/sections/WorkSection'

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Work — Saumya Nayak</title>
        <meta name="description" content="Projects I built and what they taught me." />
        <meta property="og:title" content="Work — Saumya Nayak" />
        <meta property="og:description" content="Projects I built and what they taught me." />
        <meta property="og:url" content="https://saumyanayak.xyz/work" />
        <link rel="canonical" href="https://saumyanayak.xyz/work" />
      </Head>
      <WorkSection />
    </>
  )
}
