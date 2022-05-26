import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";

const Contact = ()=>{
    const router  = useRouter()
    const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
   return (
       <div>
             <Head>
                    <title>Contact - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Reach out and Know more about Saumya Ranjan Nayak" />
                    <meta property="og:title" content="Contact - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Reach out and Know more about Saumya Ranjan Nayak" />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/reachme" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    {  console.log(canonicalUrl)}
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                 
       </div>
   )
}

export default Contact