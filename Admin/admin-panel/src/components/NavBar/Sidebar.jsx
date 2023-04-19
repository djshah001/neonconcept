import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../ContextApi/contexts/UserContext";

function Sidebar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [UserInfo, setUserInfo] = useState({})


  const variants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    shown: {
      height: "auto",
      opacity: 1,
    },
  };

  const sideBarVariants = {
    initial: {width: "auto", height: "auto"},
    animate:{width: "auto", height: "auto"},
    exit:{width: "0", height: "auto"}
  }

  const userContext = useContext(UserContext)
  
  useEffect(()=>{
      userContext.getloggedinuser().then((r)=>{
        setUserInfo(r)
      })
  },[userContext, userContext.isChanged])

  return (
    <>
      <motion.div 
      variants={sideBarVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className="leftside-menu">
        <div
          className="button-sm-hover"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Show Full Sidebar"
        >
          <i className="ri-checkbox-blank-circle-line align-middle"></i>
        </div>

        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle"></i>
        </div>

        <div className="h-100" id="leftside-menu-container" data-simplebar>
          <div className="leftbar-user">
            <NavLink to="pages-profile.html">
              <img
                src={`${process.env.REACT_APP_HOST}images/profilePic/${UserInfo.profilePic}`}
                alt=""
                height="42"
                className="img-fluid avatar-lg rounded-circle"
              />
              <h3 className="leftbar-user-name mt-2">{UserInfo.name}</h3>
            </NavLink>
          </div>

          <ul className="side-nav">
            <li className="side-nav-title">SETUP</li>

            <li className="side-nav-item">
              <h1
                className="side-nav-link"
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <i className="uil uil-tachometer-fast"></i>
                <span> set up </span>
                <motion.span 
                // whileTap={{rotateX:'180deg'}}
                className="menu-arrow"></motion.span>
              </h1>

              <AnimatePresence>
                {dropdown && (
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="shown"
                    exit="hidden"
                    className=""
                    id="sidebarEcommerce"
                  >
                    <ul className="side-nav-second-level ">
                      <li>
                        <NavLink to="">DashBoard</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Menu Master</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Roles Responsibillity</NavLink>
                      </li>
                      <li>
                        <NavLink to="/user">User</NavLink>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

            </li>

            <li className="side-nav-item">
              <h1
                className="side-nav-link"
                onClick={() => {
                  setDropdown2(!dropdown2);
                }}
              >
                <i className="uil-store"></i>
                <span> Ecommerce </span>
                <span className="menu-arrow"></span>
              </h1>

              <AnimatePresence>
                {dropdown2 && (
                  <motion.div 
                    variants={variants}
                    initial="hidden"
                    animate="shown"
                    exit="hidden"
                    className="collaps" 
                    id="sidebarEcommerce">
                    <ul className="side-nav-second-level">
                      <li>
                        <NavLink  to="/banner">Banner Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to=""> CMS Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Email Template Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">MailAddress Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Enquiry Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Size Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Color Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Font Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Social Icon Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Product Category Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Product Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to=""> Product Image Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Product Video Master</NavLink>
                      </li>
                      <li>
                        <NavLink  to="">Gallery Master</NavLink>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </li>

          </ul>

          <div className="clearfix"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
