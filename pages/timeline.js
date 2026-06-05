import Head from 'next/head'
import TimelineSection from '../components/sections/TimelineSection'

export default function TimelinePage() {
  return (
    <>
      <Head>
        <title>Timeline — Saumya Nayak</title>
        <meta name="description" content="A life in checkpoints. Scroll and the path draws itself." />
        <meta property="og:title" content="Timeline — Saumya Nayak" />
        <meta property="og:description" content="A life in checkpoints. Scroll and the path draws itself." />
        <meta property="og:url" content="https://saumyanayak.xyz/timeline" />
        <link rel="canonical" href="https://saumyanayak.xyz/timeline" />
      </Head>
      <TimelineSection />
    </>
  )
}
