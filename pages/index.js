import Head from 'next/head'
import {useRouter} from "next/router"

export default function Home() {
  const router  = useRouter()
  const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div >
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
      <div className='py-8'>
        <p className='text-lg pb-8'>{"hi i'm saumya, working on making this site simple. "}</p>
          {/*  <p className='text-lg underline pb-1'>focusing currently on</p>
         <ul className='list-disc pl-4'>
          <li>contributing to leap.club to make a beautiful community of women.</li>
          <li>getting back to learning and building mode</li>
          <li>making waking up early in the morning a habit</li>
          <li>hitting gym 6 days a week</li>
          <li>writing consistently</li>
         </ul>
        <p className='text-lg underline pt-4'>currently reading</p>
        <ul className='list-disc pl-4'>
          <li>what are you doing with your life? by jiddu krishnamurti</li>
          <li>elon musk by walter isaacson</li>
        </ul> */}
        {/* <p className='text-lg underline pt-4'>currently writing</p> */}
        
      </div>
      <div>
      </div>
      
    </div>
  )
}
