import React, { useState }  from "react";
import styles from "../styles/Project.module.css";
import Image from "next/image";
import { faGithub,faYoutube,faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye,faPlusSquare,faPlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"

const Card = ({type,thumbnailUrl,githubUrl, liveUrl,videoTitle,projectTitle,projectDesc,publishDate,blogTitle, blogDesc, link })=>{
    const [showIcon, setShowIcon] = useState(false);
    return(
        <motion.div className={styles.projectCard}      
        whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        >
         
            { type==="project" ?
            <>
             <div className={styles.imageContainer}>
                <div className={styles.projectLinksCont}> 
                    <div className={styles.linkCont}>
                        <a href={liveUrl} alt="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEye} size="2x" color="white"/>
                        </a>
                    </div>
                    <div className={styles.linkCont}>
                        <a href={githubUrl} alt="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}  size="2x" color="white"/>
                        </a>
                    </div>
                </div>
                <Image src={thumbnailUrl} layout='fill'  objectFit='cover' alt=""  width={2250} height={1390}/>
                <div className={styles.curve}></div>
            </div>
            <div className={styles.projectInfo}>
                <p className={styles.projectName}>{projectTitle}</p>
                <p className={styles.projectDesc}>{projectDesc}</p>
            </div></> : 
            type==="video" ? 
            <>             
             <div onMouseEnter={() => setShowIcon(true)} onMouseLeave={() => setShowIcon(false)} className={styles.videoImageContainer}>
                <div className={showIcon ? styles.playIcon : styles.hidePlayIcon}>
                        <a href={link} alt="" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube}  size="5x" color="white"/>
                        </a>
                    </div>
                <Image src={thumbnailUrl} alt={videoTitle} layout='fill'  objectFit='cover'/>
                <div className={styles.curve}></div>
            </div>
                <div className={styles.videoInfo}>
                    <a href={link} alt="" target="_blank" rel="noreferrer">
                        <p className={styles.videoName}>{videoTitle}</p>
                    </a>
                </div>
             </> : 
             type==="blog" &&
             <>
                <div className={styles.imageContainer}>
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
        </motion.div>
    )
}

export default Card