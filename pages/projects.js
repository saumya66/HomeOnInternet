import React from "react";
import Card from "../components/Card";
import styles from "../styles/Project.module.css"
const Projects = ()=>{
    return(
        <div className={styles.project}>
            <Card type="project" projectName="Cool" projectDesc="Cool"/>
            <Card type="project" projectName="Cool" projectDesc="Cool"/>
            <Card type="project" projectName="Cool" projectDesc="Cool"/>
             
        </div>
    )
}


export default Projects
