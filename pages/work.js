import React from "react";
import Card from "../components/Card";
import styles from "../styles/Work.module.css"
import Head from 'next/head'
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { works } from "../components/works";
import WorkCard from "../components/WorkCard";

const Work = ()=>{
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
    
    const Avatar = () =>{
      return{

      }
    }
   

    return(
        <motion.div className={styles.work}   variants={container}
        initial="hidden"
        animate="visible">
               <Head>
                    <title>Work - Saumya Nayak</title>
                    <meta name="description" content="Places Saumya has worked at." />
                    <meta property="og:title" content="Work - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Places Saumya has worked at." />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/work" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
            <div className={styles.line}></div>
            <div className={styles.cardsContainerScroll}>
            {
                works.map((work,index)=>{
                    return <WorkCard key={index} work={work} index={index} />
                })
            }
            </div>
        </motion.div>
    )
}


export default Work
