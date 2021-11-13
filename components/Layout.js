import React, { useState ,useEffect} from 'react'
import Link from 'next/link'
import styles from "../styles/Layout.module.css"
import Button from './Button'
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";
import saumya from "../public/saumya.png"
import Image from 'next/image'

 const Layout = ({children})=>{
    const router = useRouter();
     const [showSideBar, setShowSideBar] = useState(false);
     const [activeTheme, setActiveTheme] = useState("light");
     const path = router.asPath.replace("/", "");
     useEffect(() => {
         document.body.dataset.theme=activeTheme;
     }, [activeTheme])
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
                        <Link href={"/contact"}>
                            <p  className={path==="contact" ? styles.currItem : styles.navbarItem}>contact</p>
                        </Link>
                    </div>
                     <Button name={"Download"} handleClick={()=>setActiveTheme(activeTheme==="light"?"dark":"light")} />
                </div>
                
               
                
                {!showSideBar ? <div className={styles.dataContainer}>{children}</div> : 
                
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
                        <Link href={"/contact"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>contact</p>
                        </Link>
                    </div>

                }   
            </div>
        </div>
    )
}

export default Layout;