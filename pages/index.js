import Head from 'next/head'
import Link from 'next/link';
import {useRouter} from "next/router"

export default function Home() {
  const router  = useRouter()
  const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div className=''>
      <Head>
          <title>Home - Saumya Ranjan Nayak</title>
          <meta name="description" content="Hello! This is Saumya Ranjan Nayak's home on the internet." />
          <meta property="og:title" content="Saumya Ranjan Nayak"/>
          <meta property="og:description" content="This is Saumya Ranjan Nayak's home on the internet." />
          <meta property="og:url"  content= "https://home-on-internet.vercel.app/"  />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className='pt-12 sm:py-16 sm:w-9/12'>
        <p className='text-base sm:text-lg pb-6'>{"hi there. welcome to my little corner on the internet."}</p>
        <p className='text-base sm:text-lg pb-6'>{"quick intro. spawned on earth in the year 2000. discovered programming in 2020. fell in love with learning to make & making to learn things. "}</p>
        <p className='text-base sm:text-lg pb-2'>{"started working in 2021. been working at startups & on multiple side-projects building cool things. i build across the stack but have heavily worked on the frontend - building & shipping mobile and web apps."}</p>

        <p className='text-base sm:text-lg pb-6'>{"apart from this i enjoy reading good books, drawing - particularly pencil sketches, listening to good music, often singing too and definitely a good workout."}</p>
        <p className='text-base sm:text-lg pb-6 font-medium'>goal is to seek truth and work on useful things that reduce suffering.</p>
        <p className='text-base pb-2'>⚒️ currently building: <span className='underline'><Link href={"https://x.com/saumyanayak_/status/1786658748976488931"}>an image optimizer</Link></span> </p>
        <p className='text-base pb-4'>✍️ currently writing: <span className='italic'><Link href={""}>nothing</Link></span> </p>
        <p className='text-base pb-2'>⚒️ last sideproject: <span className='underline'><Link href={"/projects"}>sendecentralized</Link></span> </p>
        <p className='text-base pb-4'>📝 last blog: <span className='underline'><Link href={"/blogs/understanding-ethereum-white-paper-part-1"}>understanding ethereum white paper </Link></span> </p>
      </div>
    </div>
  )
}
