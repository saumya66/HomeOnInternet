import React from "react"
import styles from "../styles/Work.module.css"
import Image from "next/image"

const WorkCard = ({ work, index }) => {
    return <div className={index % 2 ? styles.rightWorkCard : styles.leftWorkCard}>
        <div className={styles.workContainer}>
            <div className={styles.topContainer}>
                <div style={{ borderRadius: '15px', overflow: 'hidden', width: "50px", height: "50px" }} >
                    <Image src={work.thumbnail} alt="" width="50" height="50" />
                </div>
                <div style={{ height: '100%', width: '78%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '10px', paddingTop: '4px', paddingBottom: '4px' }}>
                    <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{work.name}</p>
                    <p style={{ fontSize: '0.8rem' }}>{work.role}</p>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <p style={{ fontSize: '0.7rem' }}>{work.contribution}</p>
            </div>
        </div>
    </div>
}

export default WorkCard