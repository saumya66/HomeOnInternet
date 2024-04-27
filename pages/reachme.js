import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";

const Contact = ()=>{
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
                    <link rel="canonical" href={canonicalUrl} />
             </Head>
             <div>
                <h3 >Hey there, thanks for visiting ! Here are some places I am on the internet. Feel free to reach out! </h3>
                <ul>
                    <a href={"https://twitter.com/saumya4real"} alt="" target="_blank" rel="noreferrer">
                        <li>Twitter</li>
                    </a>
                    <a href={"https://github.com/saumya66"} alt="" target="_blank" rel="noreferrer">
                        <li>Github</li>
                    </a>
                    <a href={"https://www.youtube.com/c/SaumyaNayak"} alt="" target="_blank" rel="noreferrer">
                        <li>Youtube</li>
                    </a>
                    <a href={"https://www.linkedin.com/in/saumyanayak/"} alt="" target="_blank" rel="noreferrer">
                        <li>LinkedIn</li>
                    </a>
                    <a href={"https://saumya.hashnode.dev/"} alt="" target="_blank" rel="noreferrer">
                        <li>Hashnode</li>
                    </a>
                    <a href={"https://medium.com/@saumyanayak"} alt="" target="_blank" rel="noreferrer">
                        <li>Medium</li>
                    </a>
                </ul>
             </div>
       </div>
   )
}

export default Contact