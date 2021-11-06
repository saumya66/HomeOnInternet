import React from "react";
import ProjectCard from "../components/ProjectCard";
import styles from "../styles/Project.module.css"
const Projects = ()=>{
    return(
        <div className={styles.project}>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}

export default Projects
