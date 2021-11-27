import React from 'react';
import styles from "../styles/Blog.module.css"
import Image from "next/image";
import peopleuadmire from "../public/peopleuadmire.webp"
import hackrNews from "../public/projectAssets/hackrnews.jpg"

const BlogCard = ({thumbnailUrl, blogTitle, publishDate, link})=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <div className={styles.blogCard}>
            <div className={styles.blogInfo}>
                <div className={styles.rowOne}>
                    <p className={styles.blogName}>{blogTitle}</p>
                    <p className={styles.blogDesc}>{blogTitle}</p>
                </div>
                <div className={styles.rowTwo}>
                    <p className={styles.blogDate}>{new Date(Date.parse(publishDate)).toLocaleDateString("en-US",options)}</p>
                </div>
            </div>
            <div className={styles.blogImageCont}>
                <Image src={thumbnailUrl} alt="" layout='fill'  width={250} height={200} objectFit='cover'/>
            </div>
        </div>
    )
}

export default BlogCard