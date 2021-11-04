import React, { useState } from 'react'
import Link from 'next/link'
import styles from "../styles/Layout.module.css"
import Button from './Button'
import {faBars,faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const Layout = ({children})=>{
     const [showSideBar, setShowSideBar] = useState(false);
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
                    <p style={{color : "white",fontSize:"2rem"}} >Saumya</p>
                    <div className={styles.navItems}>
                        <Link href={"/"}>
                            <p className={styles.navbarItem}>Home</p>
                        </Link>
                        <Link href={"/projects"}>
                            <p  className={styles.navbarItem}>Projects</p>
                        </Link>
                        <Link href={"/work"}>
                            <p  className={styles.navbarItem}>Work</p>
                        </Link>
                        <Link href={"/blogs"}>
                            <p  className={styles.navbarItem}>Blogs</p>
                        </Link>
                    </div>
                    <Button name={"Download"}/>
                </div>
                
               
                
                {!showSideBar ? children : 
                
                    <div className={styles.sideNavItems}>
                        <Link href={"/"}>
                            <p className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>Home</p>
                        </Link>
                        <Link href={"/projects"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>Projects</p>
                        </Link>
                        <Link href={"/work"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>Work</p>
                        </Link>
                        <Link href={"/blogs"}>
                            <p  className={styles.sideNavbarItem} onClick={(e)=>setShowSideBar(false)}>Blogs</p>
                        </Link>
                    </div>

                }   
            </div>
        </div>
    )
}

export default Layout;