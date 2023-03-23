import React from 'react'
import Navbar from './Navbar'
import { Outlet,ScrollRestoration } from 'react-router-dom'
import Footer from './Footer'

function Rootlayout() {
  return (
    <>
        <div>
            <Navbar/>
            {/* <Home/> */}
        </div>
        <main>
            <Outlet />
            <ScrollRestoration/>
        </main>
        <Footer/>
    </>
  )
}

export default Rootlayout