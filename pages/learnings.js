import React from "react";
import styles from "../styles/Learnings.module.css"
import Head from 'next/head'
import { motion } from "framer-motion";
import { learnings } from "../components/learnings";
import { useRouter } from "next/router";
  
const Projects = ()=>{
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
    
      
    return(
        <motion.div className={styles.learnings}   variants={container}
        initial="hidden"
        animate="visible">
               <Head>
                    <title>Learnings - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Here are some things I have learned while living life." />
                    <meta property="og:title" content="Projects - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Here are some things I have learned while living life." />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/learnings" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className={styles.learningsContainer}>
                <h2>Hi there, this page contains and will be containing a distlled version of all the things I learn throughout life.</h2>                    
                    {
                        learnings.map((learning) => <li key={learning.id} className={styles.learningPoint}>{learning.learning}</li>)
                    }
                </div>
                
        </motion.div>
    )
}


export default Projects
