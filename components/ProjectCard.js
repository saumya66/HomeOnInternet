import React  from "react";
import styles from "../styles/Project.module.css";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import hackrNews from "../public/projectAssets/hackrnews.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ()=>{
    return(
        <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
                <div className={styles.projectLinksCont}> 
                    <div className={styles.linkCont}>
                        <a href="" alt="" target="_blank">
                            <FontAwesomeIcon icon={faEye} size="2x" color="white"/>
                        </a>
                    </div>
                    <div className={styles.linkCont}>
                        <a href="" alt="" target="_blank">
                            <FontAwesomeIcon icon={faGithub}  size="2x" color="white"/>
                        </a>
                    </div>
                </div>
                <Image src={hackrNews} layout='fill'  objectFit='cover'/>
            </div>
            <div className={styles.projectInfo}>
                
                <h1 className={styles.projectName}>SpaceRes</h1>
                <p className={styles.projectDesc}>This a project I have been working on recently.</p>
            </div>
        </div>
    )
}

export default ProjectCard