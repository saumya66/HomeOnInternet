import React from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"
import {projects} from "../components/projects"

const Projects = ()=>{
    return(
        <div className={styles.project}>
            {
                
                projects.map((project,index) => 
                    <Card type="project" key={index} thumbnailUrl={project.thumbnail} projectTitle={project.name} projectDesc={project.description} liveUrl={project.live} githubUrl={project.github}/>
                )
            }
        </div>
    )
}


export default Projects
