import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import NavState from '../contexts/NavContext'
import { motion,AnimatePresence } from 'framer-motion'


function Navbar() {

  const variants = {
    hidden:{
      height:0,
      opacity:0 
    },
    shown:{
      height:'auto',
      opacity:1
    }
  }

  const a = useContext(NavState)
  // console.log(a)
  const [nav,setNav] = useState('false') 
  const [dropdown,setDropdown] = useState('false') 
  const [gellerydropdown,setgelleryDropdown] = useState('false') 

  const showDropdown = ()=> {
    setDropdown(!dropdown)
  }

  // document.addEventListener('click', ()=>{
  //   setDropdown(false);
  //   setgelleryDropdown(false)
  // })
  // document.addEventListener('click', ()=>(setgelleryDropdown(false)))

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/images/logo.png" height="40" alt="logo" />&nbsp;Neon
          Creative Concept 11
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>{setNav(!nav)}}
        >
          <i className="fas fa-bars"></i>
        </button>

        {nav && <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About US</NavLink>
            </li>

            <li className="nav-item dropdown" id="no-collapse">
              
              <div className="drop-link dropdown-toggle" data-toggle="dropdown" onClick={()=>showDropdown()}role="button" aria-haspopup="true" aria-expanded="false" value="0">Neon Signs</div>
              
              <AnimatePresence mode='wait'onExitComplete={()=>null}>

              {dropdown &&

                  <motion.div 
                  variants={variants}
                  initial='hidden'
                  animate='shown'
                  exit='hidden'
                  transition={{duration:0.3}} className="dropdown-menu">
                    
                  <NavLink className="dropdown-item" to="/led" onClick={()=>showDropdown()}>3D LED Letters</NavLink>
                  <NavLink className="dropdown-item" to="/acrylic" onClick={()=>showDropdown()}>Acrylic Letters</NavLink>
                  <NavLink className="dropdown-item" to="/beauty" onClick={()=>showDropdown()}>Beauty Bar & Nail Salon Neon Signs</NavLink>
                  <NavLink className="dropdown-item" to="/decor" onClick={()=>showDropdown()}>Home Decor</NavLink>
                  <NavLink className="dropdown-item" to="/nameplate" onClick={()=>showDropdown()}>Name Plate</NavLink>
                  <NavLink className="dropdown-item" to="/parties" onClick={()=>showDropdown()}>Parties & Special Occasions</NavLink>
                  <NavLink className="dropdown-item" to="/cafe" onClick={()=>showDropdown()}
                    >Cafe & Diner Signs</NavLink
                  >
                  <NavLink className="dropdown-item" to="/cheap" onClick={()=>showDropdown()}>Cheap Neon Signs</NavLink>
                  <NavLink className="dropdown-item" to="/wedding" onClick={()=>showDropdown()}>Wedding Signs</NavLink>
                  <NavLink className="dropdown-item" to="/personalized" onClick={()=>showDropdown()}>
                    Personalized Neon
                  </NavLink>
                  <NavLink className="dropdown-item" to="/wall" onClick={()=>showDropdown()}>
                    Wall Art & Light Signs
                  </NavLink>
                  <NavLink className="dropdown-item" to="/desk" onClick={()=>showDropdown()}>
                    Desk Lights & Table Lamps
                  </NavLink>
                  <NavLink className="dropdown-item" to="/wooden" onClick={()=>showDropdown()}>
                    Wooden Panels
                  </NavLink>
                </motion.div>
                }
              </AnimatePresence>
              
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ledboard">LED Board</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/flexboard">Flex Board</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/customize">Customize Sign</NavLink>
            </li>

            <li className="nav-item dropdown" id="no-collapse">
              <p
                className="drop-link dropdown-toggle"
                data-toggle="dropdown"
                // to="javascript:void(0)"
                role="button"
                onClick={()=>{setgelleryDropdown(!gellerydropdown)}}
                aria-haspopup="true"
                aria-expanded="false">Gallery</p>

              <AnimatePresence>

                {gellerydropdown && 
                <motion.div 
                    variants={variants}
                    initial='hidden'
                    animate='shown'
                    exit='hidden'
                    transition={{duration:0.3}} className="dropdown-menu">
                  {/* <div className="dropdown-menu"> */}
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/led">3D LED Letters</NavLink>
                  <NavLink className="dropdown-item" to="/gellery'/acrylic"
                    >Acrylic Letters</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/beauty"
                    >Beauty Bar & Nail Salon Neon Signs</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/decor">Home Decor</NavLink>
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/nameplate">Name Plate</NavLink>
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/parties"
                    >Parties & Special Occasions</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/cafe"
                    >Cafe & Diner Signs</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/cheap"
                    >Cheap Neon Signs</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/wedding">Wedding Signs</NavLink>
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/personalized"
                    >Personalized Neon</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/wall"
                    >Wall Art & Light Signs</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/desk"
                    >Desk Lights & Table Lamps</NavLink
                  >
                  <NavLink className="dropdown-item" onClick={()=>{setgelleryDropdown(!gellerydropdown)}} to="/gellery/wooden">Wooden Panels</NavLink>
                  {/* </div> */}
                  </motion.div>}
              </AnimatePresence>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>}

      </div>
    </nav>
    </div>
  )
}

export default Navbar