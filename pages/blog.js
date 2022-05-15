import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css"
import Head from 'next/head'
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import { posts } from "../getAllPosts";
const Blogs = ({blogData})=>{
    const [data, setData] = useState([]);
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
  
    useEffect(() => {
		setData(blogData?.items)
  	}, [blogData?.items]);
    
    return(
        <motion.div className={styles.blog} variants={container}
        initial="hidden"
        animate="visible">
          <Head>
              <title>Blogs - Saumya Ranjan Nayak</title>
              <meta name="description" content="Checkout out blogs written by Saumya Ranjan Nayak!" />
              <meta property="og:title" content="Blogs - Saumya Ranjan Nayak"/>
              <meta property="og:description" content="Checkout out blogs written by Saumya Ranjan Nayak!" />
              <meta property="og:url" content="https://home-on-internet.vercel.app/blogs" />
              <meta property="og:type" content="website" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
             {
                 posts?.length && 
                 posts.map((post)=><BlogCard externalBlog={false} key={post.link} post={post}/>)
             }
             {
                 data?.length && 
                 data.map((blog,index)=><BlogCard externalBlog={true} key={index} thumbnailUrl={blog.thumbnail} blogTitle={blog.title} publishDate={blog.pubDate} mediumLink={blog.link} meta="" post=""/>)
             }
        </motion.div>
    )
    // <Card type="blog" key={index} thumbnailUrl={blog.thumbnail} blogTitle={blog.title} publishDate={blog.pubDate} link={blog.link} />
}

export async function getStaticProps(context) {
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@saumyanayak`)
    const blogData = await res.json();

    if (!blogData) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { blogData },  
    }
  }
export default Blogs
