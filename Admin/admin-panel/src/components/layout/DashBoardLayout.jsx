import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import SideBarContext from '../../ContextApi/contexts/SideBarContext'
import Footer from '../Footer/Footer'

function DashBoardLayout() {
  const {sidebar} = useContext(SideBarContext)
  return (
    <>  
        <Navbar/>
        <div className={sidebar ? `content-page`:`full-content-page`}>
          <Outlet/>
          <Footer/>
        </div>
    </>
  )
}

export default DashBoardLayout