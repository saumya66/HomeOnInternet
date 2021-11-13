import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"

const Videos = ({youtubeData})=>{
    const [data, setData] = useState([]);
    useEffect(() => {
		setData(youtubeData?.items)
	}, [youtubeData?.items]);
    return(
        <div className={styles.project}>
            {console.log(data)}
            {data?.length && 
                data.map((video)=>
                <Card key={video.id.videoId} type="video" videoTitle={video.snippet.title} 
                thumbnailUrl={video.snippet.thumbnails.high.url}/>)
                 
            }
        </div>
    )
}

export async function getStaticProps(context) {
    const { API_KEY } = process.env;
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCx-HdHfKu1rXgNIfNaKMsAA&maxResults=20&order=date&type=video&key=${API_KEY}`)
    const youtubeData = await res.json();
  
    if (!youtubeData) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { youtubeData },  
    }
  }
export default Videos
