import React from 'react';
import styles from "../styles/Blog.module.css"
import Image from "next/image";
import { motion } from "framer-motion"
import Link from 'next/link'

const BlogCard = ({ thumbnailUrl, blogTitle, publishDate, mediumLink, externalBlog, post }) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const { link, module } = post
    if (externalBlog)
        return (
            <motion.div whileHover={{ scale: 1.1 }} className={styles.blogCard}>
                <div className={styles.blogInfo}>
                    <a href={mediumLink} alt="" target="_blank" rel="noreferrer">
                        <div className={styles.rowOne}>
                            <p className={styles.blogName}>{blogTitle}</p>
                            <p className={styles.blogDesc}>{blogTitle}</p>
                        </div>
                    </a>
                    <div className={styles.rowTwo}>
                        <p className={styles.blogDate}>{new Date(Date.parse(publishDate)).toLocaleDateString("en-US", options)}</p>
                    </div>
                </div>
                <div className={styles.blogImageCont}>
                    <a href={mediumLink} alt="" target="_blank" rel="noreferrer">
                        <Image src={thumbnailUrl} alt="" layout='fill' width={250} height={200} objectFit='cover' />
                    </a>
                </div>
            </motion.div>
        )
    else
        return (
            <motion.div whileHover={{ scale: 1.1 }} className={styles.blogCard}>
                <div className={styles.blogInfo}>
                    <Link href={'/blogs' + link}>
                        <div className={styles.rowOne}>
                            <p className={styles.blogName}>{module?.meta.title}</p>
                            <p className={styles.blogDesc}>{module?.meta.description}</p>
                        </div>
                    </Link>
                    <div className={styles.rowTwo}>
                        <p className={styles.blogDate}>{module?.meta.date}</p>
                    </div>
                </div>
                <div className={styles.blogImageCont}>
                    <a href={link} alt="" target="_blank" rel="noreferrer">
                        <Image src={module?.meta.thumbnailUrl} alt="" layout='fill' width={250} height={200} objectFit='cover' />
                    </a>
                </div>
            </motion.div>

        )
}

export default BlogCard