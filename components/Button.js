import React from 'react';
import styles from "../styles/Layout.module.css"

const Button = ({name, handleClick})=>{
  return(
    <button onClick={(e)=>handleClick(e)} className={styles.downloadButton}>{name}</button>
  )
}
export default Button;