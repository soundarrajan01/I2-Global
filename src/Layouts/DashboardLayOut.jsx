import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Componets/Header'

export default function DashboardLayOut() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
