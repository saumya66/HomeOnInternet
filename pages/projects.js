import React from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"
import {projects} from "../components/projects"
import Head from 'next/head'
import { motion } from "framer-motion";
const Projects = ()=>{
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
        <motion.div className={styles.project}   variants={container}
        initial="hidden"
        animate="visible">
               <Head>
                    <title>Projects - Saumya Ranjan Nayak</title>
                    <meta name="description" content="Checkout out projects and products built by Saumya Ranjan Nayak!" />
                    <meta property="og:title" content="Projects - Saumya Ranjan Nayak"/>
                    <meta property="og:description" content="Checkout out projects and products built by Saumya Ranjan Nayak!" />
                    <meta property="og:url" content="https://home-on-internet.vercel.app/projects" />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            {
                
                projects.map((project,index) => 
                    <Card type="project" key={index} thumbnailUrl={project.thumbnail} projectTitle={project.name} projectDesc={project.description} liveUrl={project.live} githubUrl={project.github}/>
                )
            }
        </motion.div>
    )
}


export default Projects
