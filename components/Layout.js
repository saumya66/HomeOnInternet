import React, { useState ,useEffect} from 'react'
import Link from 'next/link'
import styles from "../styles/Layout.module.css"
import Button from './Button'
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import { motion } from 'framer-motion'

 const Layout = ({children})=>{
    const router = useRouter();
     const [showSideBar, setShowSideBar] = useState(false);
     const [activeTheme, setActiveTheme] = useState((typeof window !== "undefined"  && localStorage.getItem("theme")!==null) ?localStorage.getItem("theme") : "dark");
     const path = router.asPath.replace("/", "");
     const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
      
     useEffect(() => {
         document.body.dataset.theme=activeTheme;
         localStorage.setItem("theme",activeTheme)
         console.log("1")
     }, [activeTheme])
     const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    useEffect(()=>{
        console.log("2")
        if (typeof window !== "undefined") {
            if(localStorage.getItem("theme")===null)
                localStorage.setItem("theme","dark");
            
        }
    },[])
    
    return(
        <div className={styles.siteLayout}>
           <div className={styles.siteContent}>  
                <div className={styles.navbar}>
                    {/* <Image src={} alt="" width=""  height=""/> */}
                    <div className={styles.sideDrawerIcon} onClick={(e)=>setShowSideBar(!showSideBar)}>
                        {!showSideBar ? 
                            <FontAwesomeIcon icon={faBars} height="28" color="white"/> 
                            : <FontAwesomeIcon icon={faTimes} height="28" color="white"/>
                        }
                    </div>
                    <Link href={"/"}>
                        <p className={styles.homeNavItem} >Saumya</p>
                    </Link>
                    {/* <Image src={saumya} alt="" width="40"  height="40"/> */}
                    <div className={styles.navItems}>
                        <Link href={"/projects"}>
                            <p  className={path==="projects" ? styles.currItem :  styles.navbarItem}>projects</p>
                        </Link>
                        <Link href={"/videos"}>
                            <p  className={path==="videos" ? styles.currItem : styles.navbarItem}>videos</p>
                        </Link>
                        <Link href={"/blogs"}>
                            <p  className={path==="blogs" ? styles.currItem : styles.navbarItem}>blogs</p>
                        </Link>
                        <Link href={"/reachme"}>
                            <p  className={path==="reachme" ? styles.currItem : styles.navbarItem}>reachme</p>
                        </Link>
                    </div>
                    <div className={styles.switch} data-theme={activeTheme} onClick={()=>setActiveTheme(activeTheme==="light"?"dark":"light")}>
                        <motion.div className={styles.handle} whileHover={{ scale: 1.2 }} layout transition={spring} />
                    </div>
                     {/* <Button name={"Download"} handleClick={()=>setActiveTheme(activeTheme==="light"?"dark":"light")} /> */}
                </div>
                
               
                
                {!showSideBar ? 
                        <div className={styles.dataContainer}>
                    {children}
                    </div> 
                    : 
                
                    <div className={styles.sideNavItems}>
                        <Link href={"/"}>
                            <p className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>home</p>
                        </Link>
                        <Link href={"/projects"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>projects</p>
                        </Link>
                        <Link href={"/videos"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>videos</p>
                        </Link>
                        <Link href={"/blogs"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>blogs</p>
                        </Link>
                        <Link href={"/reachme"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>reachme</p>
                        </Link>
                        <div className={styles.mobileSwitch} data-theme={activeTheme} onClick={()=>setActiveTheme(activeTheme==="light"?"dark":"light")}>
                            <motion.div className={styles.handle} whileHover={{ scale: 1.2 }} layout transition={spring} />
                        </div>
                    </div>

                }   
            </div>
        </div>
    )
}

export default Layout;