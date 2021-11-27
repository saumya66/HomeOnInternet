import React from 'react';
import styles from "../styles/Blog.module.css"
import Image from "next/image";
import {motion} from "framer-motion"

const BlogCard = ({thumbnailUrl, blogTitle, publishDate, link})=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <motion.div whileHover={{ scale: 1.1 }} className={styles.blogCard}>
            <div className={styles.blogInfo}>
                <a href={link} alt="" target="_blank" rel="noreferrer">
                    <div className={styles.rowOne}>
                        <p className={styles.blogName}>{blogTitle}</p>
                        <p className={styles.blogDesc}>{blogTitle}</p>
                    </div>
                </a>
                <div className={styles.rowTwo}>
                    <p className={styles.blogDate}>{new Date(Date.parse(publishDate)).toLocaleDateString("en-US",options)}</p>
                </div>
            </div>
            <div className={styles.blogImageCont}>
            <a href={link} alt="" target="_blank" rel="noreferrer">
                <Image src={thumbnailUrl} alt="" layout='fill'  width={250} height={200} objectFit='cover'/>
            </a>
            </div>
        </motion.div>
    )
}

export default BlogCard