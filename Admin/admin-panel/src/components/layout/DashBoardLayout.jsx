import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'

function DashBoardLayout() {
  return (
    <>  
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default DashBoardLayout