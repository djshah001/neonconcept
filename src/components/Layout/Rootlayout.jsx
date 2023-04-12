import React,{useContext} from 'react'
import Navbar from '../NavBar/Navbar'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import Footer from '../footer/Footer'
import { NavContext } from '../../contexts/NavContext'
import ScrollTop from '../Fixed_Elements/ScrollTop'
import Wapp from '../Fixed_Elements/Wapp'

function Rootlayout() {

  const Nav = useContext(NavContext)

  return (
    <div >
        <>
            <Navbar/>
        </>
        <main onClick={() => {
          Nav.setDropdown(false)
          Nav.setGelleryDropdown(false)
          Nav.setLedDropdown(false)
          }}>
            <Wapp/>
            <ScrollTop/>
            <Outlet />
            <ScrollRestoration/>
        </main>
        <Footer />
    </div>
  )
}

export default Rootlayout