import React from 'react'
import styles from "../../assets/styles/Planning.module.css"
const Planning = ({sec_seventh_title,sec_seventh_desc}) => {
  return (
    <div className={styles.maindiv}>
<div className='container'>
    <div className='row'>
        <div className={styles.mainheading}>
            <h3>{sec_seventh_title}</h3>
            <p>{sec_seventh_desc}</p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Planning