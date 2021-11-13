import React  from "react";
import styles from "../styles/Project.module.css";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import hackrNews from "../public/projectAssets/hackrnews.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Card = ({type,thumbnailUrl,githubUrl, liveUrl,videoTitle,projectTitle,projectDesc,publishDate,blogTitle, blogDesc, link })=>{
    return(
        <div className={styles.projectCard}>
         
            { type==="project" ?
            <>
             <div className={styles.imageContainer}>
                <div className={styles.projectLinksCont}> 
                    <div className={styles.linkCont}>
                        <a href={liveUrl} alt="" target="_blank">
                            <FontAwesomeIcon icon={faEye} size="2x" color="white"/>
                        </a>
                    </div>
                    <div className={styles.linkCont}>
                        <a href={githubUrl} alt="" target="_blank">
                            <FontAwesomeIcon icon={faGithub}  size="2x" color="white"/>
                        </a>
                    </div>
                </div>
                <Image src={hackrNews} layout='fill'  objectFit='cover'/>
                <div className={styles.curve}></div>
            </div>
            <div className={styles.projectInfo}>
                <h1 className={styles.projectName}>{projectTitle}</h1>
                <p className={styles.projectDesc}>{projectDesc}</p>
            </div></> : 
            type==="video" ? 
            <>
             <div className={styles.videoImageContainer}>
                <Image src={thumbnailUrl} alt={videoTitle} layout='fill'  objectFit='cover'/>
                <div className={styles.curve}></div>
            </div>
                <div className={styles.videoInfo}>
                    <p className={styles.videoName}>{videoTitle}</p>
                </div>
             </> : 
             type==="blog" &&
             <>
                <div className={styles.imageContainer}>
                    {console.log(thumbnailUrl)}
                    <Image src={thumbnailUrl} alt="" layout='fill'  width={2250}
    height={1390}  objectFit='cover'/>
                    <div className={styles.curve}></div>
                </div>
                <div className={styles.projectInfo}>
                    <p className={styles.projectName}>{blogTitle}</p>
                    <p className={styles.projectDesc}>{blogDesc}</p>
                </div>
             </>
            }
        </div>
    )
}

export default Card