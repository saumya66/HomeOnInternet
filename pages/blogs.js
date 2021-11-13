import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"
const Blogs = ({blogData})=>{
    const [data, setData] = useState([]);
    useEffect(() => {
		setData(blogData?.items)
  	}, [blogData?.items]);
    return(
        <div className={styles.project}>
             {
                 data?.length && 
                 data.map((blog,index)=><Card type="blog" key={index} thumbnailUrl={blog.thumbnail} blogTitle={blog.title} publishDate={blog.pubDate} link={blog.link} />)
             }
        </div>
    )
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
