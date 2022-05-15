import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"
import Head from 'next/head'
import { motion } from "framer-motion";

const Videos = ({youtubeData})=>{
    const [data, setData] = useState([]);
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
		setData(youtubeData?.items)
	}, [youtubeData?.items]);
    return(
        <motion.div className={styles.project} variants={container}
        initial="hidden"
        animate="visible">
             <Head>
                    <title>Videos - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Checkout youtube videos created by Saumya Ranjan Nayak!" />
                    <meta property="og:title" content="Videos - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Checkout youtube videos created by Saumya Ranjan Nayak!" />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/videos" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
             </Head>
            {data?.length && 
                data.map((video)=>
                <Card key={video.id.videoId} link={`https://www.youtube.com/watch?v=${video.id.videoId}`} type="video" videoTitle={video.snippet.title} 
                thumbnailUrl={video.snippet.thumbnails.high.url}/>)
                 
            }
        </motion.div>
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
