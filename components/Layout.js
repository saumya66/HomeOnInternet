import React from 'react'
import Link from 'next/link'
import styles from "../styles/Layout.module.css"
import Button from './Button'

 const Layout = ({children})=>{
    return(
        <div className={styles.siteLayout}>
           <div className={styles.siteContent}>  
                <div className={styles.navbar}>
                    {/* <Image src={} alt="" width=""  height=""/> */}
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
                {children}
            </div>
        </div>
    )
}

export default Layout