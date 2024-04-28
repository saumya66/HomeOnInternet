import React from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

const Contact = ()=>{
    const router  = useRouter()
    const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    const pillStyle = "flex flex-row items-center rounded-2xl bg-[#4BDE8833] border-[#4BDE88] border-[1px] p-1 px-2 m-2"

    return (
       <div className="flex flex-col justify-center py-8 pt-32 px-8 md:px-52">
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
                <h3 className="text-center text-lg ">hey there, thanks for landing here somehow! here are some places I am on the internet. </h3>
                <p className="text-center text-lg py-2"re>feel free to reach out! </p>
                <div className="flex flex-row flex-wrap pt-4 justify-center">
                    <a href={"https://twitter.com/saumya4real"} alt="" target="_blank" rel="noreferrer">
                    <div className={pillStyle}>
                            <TwitterIcon className="h-4"/>
                            <p className="text-xs">twitter</p>
                        </div>
                    </a>
                    <a href={"https://github.com/saumya66"} alt="" target="_blank" rel="noreferrer">
                        <div className={pillStyle}>
                            <GithubIcon className="h-4"/>
                            <p className="text-xs">github</p>
                        </div>
                    </a>
                  
                    <a href={"https://www.youtube.com/c/SaumyaNayak"} alt="" target="_blank" rel="noreferrer">
                        <div className={pillStyle}>
                            <YoutubeIcon className="h-4"/>
                            <p className="text-xs">youtube</p>
                        </div>
                    </a>
                    <a href={"https://www.linkedin.com/in/saumyanayak/"} alt="" target="_blank" rel="noreferrer">
                       <div className={pillStyle}>
                            <LinkedinIcon className="h-4"/>
                            <p className="text-xs">linkedin</p>
                        </div>
                    </a>
                </div>
             
       </div>
   )
}

export default Contact