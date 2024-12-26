import { Input } from 'antd'
import React from 'react'
import styles from "./CommonInput.module.css"
export default function CommonInput({placeHolder,commonStyle,heading ,onChange,name,values,errorsTxt}) {
  return (
    <div className={styles.textFieldOutline}>
        <div className={styles.headingOutline}>
        <p className={styles.HeadingText}>{heading}</p>
        <p className={styles.requiredsymbol}>*</p>
        </div>
    <div >
        <Input placeholder={placeHolder} style={commonStyle} value={values} onChange={onChange} name={name}/>
    </div>
    <p className={styles.errorText}>{errorsTxt}</p>
    </div>
  )
}
