import React from 'react'
import styles from "./Header.module.css"
import { useLocation, useNavigate } from 'react-router'
export default function Header() {
    const navigate =useNavigate()
    const {pathname}=useLocation()
    const handleLogout=()=>{
        localStorage.removeItem('userDetails')
        navigate("/")
    }
  return (
    <div className={styles.headerOutline}>
        <div className={styles.headerOutline}>
        <p onClick={()=>navigate('dashboard')} className={pathname.includes('dashboard')?styles.SelectedHeader: styles.unselectedHeader}>Dashboard</p>
            <p onClick={()=>navigate('account')} className={pathname.includes('account')?styles.SelectedHeader: styles.unselectedHeader}>Account</p>
            <p onClick={()=>navigate('notes')} className={pathname.includes('notes')?styles.SelectedHeader: styles.unselectedHeader}>Notes</p>
        </div>
        <div onClick={handleLogout}>  
            <p className={styles.unselectedHeader}>Logout</p>
        </div>
        </div>
   
  )
}
