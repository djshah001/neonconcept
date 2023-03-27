import React,{useContext} from 'react'
import Navbar from './Navbar'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'
import { NavContext } from '../contexts/NavContext'

function Rootlayout() {

  const Nav = useContext(NavContext)

  return (
    <div >
        <div>
            <Navbar/>
            {/* <Home/> */}
        </div>
        <main onClick={() => {
          Nav.setDropdown(false)
          Nav.setGelleryDropdown(false)
          }}>
            <Outlet />
            <ScrollRestoration/>
        </main>
        <Footer />
    </div>
  )
}

export default Rootlayout