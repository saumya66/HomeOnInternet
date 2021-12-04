import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';
import {motion} from "framer-motion"

export default function Home() {
  const sentence = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        delay:0.5,
      }
    }
  }
  return (
    <div className={styles.container}>
      <Head>
          <title>Home - Saumya Ranjan Nayak</title>
          <meta name="description" content="Hello! This is Saumya Ranjan Nayak's home on the internet." />
          <meta property="og:title" content="Saumya Ranjan Nayak"/>
          <meta property="og:description" content="This is Saumya Ranjan Nayak's home on the internet." />
          <meta property="og:url"  content= "https://home-on-internet.vercel.app/"  />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <div className={styles.header}>
          <h2 style={{ fontSize:"5rem", fontWeight:"400", marginBottom:0}}>Hello I&apos;m</ h2>
          <div style={{display:"flex",flexDirection:"column"}}>
            <motion.h1  initial="hidden" animate="visible"variants={sentence} style={{ textShadow: "-3px -1px 20px rgba(0,0,0,0.24)",  fontSize:"7rem", fontWeight:"600"}}>Saumya</motion.h1>
            <div style={{fontSize:"2rem",textAlign:"center",marginTop:"3rem"}}>
              <Typewriter
                options={{
                strings: ['Building Stuff','Engineer', 'Youtube Creator', 'Undergrad', ],
                autoStart: true,
                loop: true,
                }}
              />
            </div>
          </div>
          <div style={{}}>

          </div>
        </div>
      </div>
      
    </div>
  )
}
