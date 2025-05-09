import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { posts } from "../getAllPosts";
import {useRouter} from "next/router"
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ thumbnailUrl = '', blogTitle, publishDate, mediumLink, externalBlog, post }) => {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const { link, module } = post || {};
  // Provide fallback values for meta properties
  const meta = module?.meta || {};
  const thumbnail = externalBlog ? thumbnailUrl : meta.thumbnailUrl || '/default-thumbnail.jpg';
  const title = externalBlog ? blogTitle : meta.title || 'Title Not Found';
  const description = externalBlog ? '' : meta.description || 'Description Not Found';
  const date = externalBlog ? publishDate : meta.date || 'Date Not Found';

  return (
    <Link
      target={externalBlog ? '_blank' : '_self'}
      rel="noreferrer"
      href={externalBlog ? mediumLink : '/blogs' + (link || '')}
    >
      <div className="flex flex-col md:flex-row bg-white dark:bg-[#252B36] w-full mt-6 rounded-xl">
        <div className="flex relative w-full md:w-[20%] h-32 object-cover">
          <Image
            src={thumbnail}
            layout="fill"
            objectFit="cover"
            alt={title}
            className="flex relative max-sm:rounded-t-xl sm:rounded-l-xl"
          />
        </div>
        <div className="flex flex-col w-full md:w-[80%] justify-between rounded-r-xl p-4">
          <div className="flex flex-col">
            <p className="text-base sm:text-lg font-medium">{title}</p>
            <p className="pt-1 text-xs sm:text-sm">{description}</p>
          </div>
          <div className="flex flex-row">
            <p className="text-xs sm:text-sm pt-4">
              {externalBlog ? new Date(Date.parse(date)).toLocaleDateString('en-US', options) : date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blogs = ({blogData})=>{
    const [data, setData] = useState([]);
    
    function sortInternalPostsByDate(a,b){
      return new Date(b?.module?.meta?.date).getTime() - new Date(a?.module?.meta?.date).getTime()
    }
    posts.sort(sortInternalPostsByDate)
    const router  = useRouter()
    const canonicalUrl = (`https://saumyanayak.xyz` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    useEffect(() => {
		setData(blogData?.items)
  	}, [blogData?.items]);

    return(
        <div 
        initial="hidden"
        animate="visible">
          <Head>
              <title>Blogs - Saumya Ranjan Nayak</title>
              <meta name="description" content="Checkout out blogs written by Saumya Ranjan Nayak!" />
              <meta property="og:title" content="Blogs - Saumya Ranjan Nayak"/>
              <meta property="og:description" content="Checkout out blogs written by Saumya Ranjan Nayak!" />
              <meta property="og:url" content="https://home-on-internet.vercel.app/blogs" />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="https://user-images.githubusercontent.com/60464414/168478444-0b79ae2e-cd2e-4ca3-b062-f3b2d6ddb7a7.png"/>
              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href={canonicalUrl} />
          </Head>
             {
                 posts?.length && 
                 posts.map((post)=><BlogCard externalBlog={false} key={post.link} post={post}/>)
             }
             {
                 data?.length && 
                 data.map((blog,index)=><BlogCard externalBlog={true} key={index} thumbnailUrl={blog?.thumbnail ? blog.thumbnail : '/default-blog-thumbnail.gif'} blogTitle={blog.title} publishDate={blog.pubDate} mediumLink={blog.link} meta="" post=""/>)
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
