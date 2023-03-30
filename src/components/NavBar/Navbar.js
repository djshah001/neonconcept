import React,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { NavContext } from '../../contexts/NavContext'
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

  const Nav = useContext(NavContext)
  const [nav,setNav] = useState('false') 
 

  return (
    <>
        <nav 
        className="navbar navbar-expand-lg navbar-light fixed-top"
        >
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

        
        <AnimatePresence mode='wait'onExitComplete={()=>null}>

        </AnimatePresence>

          {nav && <motion.div 
                variants={variants}
                initial='hidden'
                animate='shown'
                exit='hidden'
                transition={{duration:0.3}}
                className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About US</NavLink>
              </li>

              <li className="nav-item dropdown" id="no-collapse">
                
                <div className="drop-link dropdown-toggle" data-toggle="dropdown" onClick={()=>Nav.setDropdown(!Nav.dropdown)}role="button" aria-haspopup="true" aria-expanded="false" value="0">Neon Signs</div>
                
                <AnimatePresence mode='wait'onExitComplete={()=>null}>

                {Nav.dropdown &&

                    <motion.div 
                    variants={variants}
                    initial='hidden'
                    animate='shown'
                    exit='hidden'
                    transition={{duration:0.3}} className="dropdown-menu">
                      
                    <NavLink className="dropdown-item" to="/neonfloro" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>Neon FloRo</NavLink>

                    <NavLink className="dropdown-item" to="/multicolor" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>MultiColor Neon</NavLink>

                    <NavLink className="dropdown-item" to="/singlecolor-multipleaction" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>Single color with multiple action</NavLink>
                    <NavLink className="dropdown-item" to="/florocircuit" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>FloRo Circuit</NavLink>

                    <NavLink className="dropdown-item" to="/multicircuit" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>Multiple Color Neon Circuit</NavLink>

                    <NavLink className="dropdown-item" to="/singlecircuit" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>Single Color Neon Circuit</NavLink>
                    
                  </motion.div>
                  }
                </AnimatePresence>
                
              </li>

              <li className="nav-item dropdown" id="no-collapse">
                
                <div className="drop-link dropdown-toggle" data-toggle="dropdown" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)} role="button" aria-haspopup="true" aria-expanded="false" value="0">LED Board</div>
                
                <AnimatePresence mode='wait'onExitComplete={()=>null}>

                {Nav.leddropdown &&

                    <motion.div 
                    variants={variants}
                    initial='hidden'
                    animate='shown'
                    exit='hidden'
                    transition={{duration:0.3}} className="dropdown-menu">
                      
                    {/* <NavLink className="dropdown-item" to="/led" onClick={()=>Nav.setDropdown(!Nav.dropdown)}>Acrylic Letters</NavLink> */}
                    <NavLink className="dropdown-item" to="/ledboard/al" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}>Acrylic Letters</NavLink>
                    <NavLink className="dropdown-item" to="/ledboard/ledsign" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}>Led Sign Board</NavLink>
                    <NavLink className="dropdown-item" to="/ledboard/backlight" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}>Back Light Board</NavLink>
                    <NavLink className="dropdown-item" to="/ledboard/reversible" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}>Reversible Board</NavLink>
                    <NavLink className="dropdown-item" to="/ledboard/flexboard" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}>Flex Board</NavLink>
                    <NavLink className="dropdown-item" to="/ledboard/vinylboard" onClick={()=>Nav.setLedDropdown(!Nav.leddropdown)}
                      >Vinyl Board</NavLink
                    >
                  </motion.div>
                  }
                </AnimatePresence>
                
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/neongo">Neon Go</NavLink>
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
                  onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}}
                  aria-haspopup="true"
                  aria-expanded="false">Gallery</p>

                <AnimatePresence>

                  {Nav.gelleryDropdown && 
                  <motion.div 
                      variants={variants}
                      initial='hidden'
                      animate='shown'
                      exit='hidden'
                      transition={{duration:0.3}} className="dropdown-menu">
                    {/* <div className="dropdown-menu"> */}
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/led">3D LED Letters</NavLink>
                    <NavLink className="dropdown-item" to="/gellery/acrylic"
                      >Acrylic Letters</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/beauty"
                      >Beauty Bar & Nail Salon Neon Signs</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/decor">Home Decor</NavLink>
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/nameplate">Name Plate</NavLink>
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/parties"
                      >Parties & Special Occasions</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/cafe"
                      >Cafe & Diner Signs</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/cheap"
                      >Cheap Neon Signs</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/wedding">Wedding Signs</NavLink>
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/personalized"
                      >Personalized Neon</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/wall"
                      >Wall Art & Light Signs</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/desk"
                      >Desk Lights & Table Lamps</NavLink
                    >
                    <NavLink className="dropdown-item" onClick={()=>{Nav.setGelleryDropdown(!Nav.gelleryDropdown)}} to="/gellery/wooden">Wooden Panels</NavLink>
                    {/* </div> */}
                    </motion.div>}
                </AnimatePresence>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact us</NavLink>
              </li>
            </ul>
          </motion.div>}

      </div>
    </nav>
    </>
  )
}

export default Navbar