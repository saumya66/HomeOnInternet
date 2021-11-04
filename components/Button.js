import React from 'react';
import styles from "../styles/Layout.module.css"

const Button = ({name})=>{
  return(
    <button className={styles.downloadButton}>{name}</button>
  )
}
export default Button;