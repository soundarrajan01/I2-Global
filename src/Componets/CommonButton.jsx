import React from 'react'
import styles from "./CommonInput.module.css"
export default function CommonButton({onPress,BtnName}) {
  return (
    <div onClick={onPress} className={styles.commonBtn}>
        <button  style={{backgroundColor:'transparent',border:'none'}}>{BtnName}</button>
    </div>
  )
}
