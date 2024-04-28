import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Videos = ({youtubeData})=>{
  const [data, setData] = useState([]);
  const router  = useRouter()
  const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    };
  
    useEffect(() => {
      console.log("DD", youtubeData?.items)
		  setData(youtubeData?.items)
	  }, [youtubeData?.items]);
    return(
        <div className="py-8 sm:px-12">
             <Head>
                    <title>Videos - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Checkout youtube videos created by Saumya Ranjan Nayak!" />
                    <meta property="og:title" content="Videos - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Checkout youtube videos created by Saumya Ranjan Nayak!" />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/videos" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
             </Head>
            {
            data?.length ?
          
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                {data.map((video, index)=> <div key={index} className="flex flex-col rounded-lg dark:bg-[#252B36] ">
                  <Link target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`}>
                      <div className="relative h-[200px] ">
                        <Image src={video?.snippet?.thumbnails?.high?.url} alt="" layout='fill' objectFit='cover' className="rounded-t-lg" />
                      </div>
                      <div className="flex flex-col p-4">
                        <p className="pb-2">{video?.snippet?.title}</p>
                        <p className="text-sm">{video.snippet?.description}</p>
                      </div>
                  </Link>
                 </div>
                 )}
                </div>
              
              : <></>
            }
        </div>
    )
}

export async function getStaticProps(context) {
    const { API_KEY } = process.env;
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCx-HdHfKu1rXgNIfNaKMsAA&maxResults=20&order=date&type=video&key=${API_KEY}`)
    const youtubeData = await res.json();
  
    if (!youtubeData) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { youtubeData },  
    }
  }
export default Videos
