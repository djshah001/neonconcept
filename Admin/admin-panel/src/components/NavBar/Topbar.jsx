import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
    const navigate = useNavigate()
    const loggedIn = window.localStorage.getItem('loggedIn')
    const logout = () => {
        window.localStorage.setItem('loggedIn','false')
        console.log(loggedIn)
        navigate('/login')
        window.localStorage.removeItem('loggedIn')
        window.localStorage.removeItem('authToken')
    }
  return (
    <>
      <div className="navbar-custom">
        <div className="topbar container-fluid">
          <div className="d-flex align-items-center ">
            <div className="logo-topbar">
              <span className="logo-lg">
                <img src="/images/logo.png" alt="logo" height="40" />
              </span>
            </div>
            <h3 className="text-light">neonconcept</h3>

            {/* <button className="button-toggle-menu">
                            <i className="mdi mdi-menu"></i>
                        </button> */}
          </div>

          <ul className="topbar-menu d-flex align-items-center gap-3">
            {/* <li className="d-none d-sm-inline-block">
                            <a className="nav-link" data-bs-toggle="offcanvas" href="#theme-settings-offcanvas">
                                <i className="ri-settings-3-line font-22"></i>
                            </a>
                        </li>

                        <li className="d-none d-sm-inline-block">
                            <div className="nav-link" id="light-dark-mode" data-bs-toggle="tooltip" data-bs-placement="left" title="Theme Mode">
                                <i className="ri-moon-line font-22"></i>
                            </div>
                        </li>


                        <li className="d-none d-md-inline-block">
                            <a className="nav-link" href="#" data-toggle="fullscreen">
                                <i className="ri-fullscreen-line font-22"></i>
                            </a>
                        </li> */}

            <li className="dropdown">
              <div className="nav-link dropdown-toggle arrow-none nav-user px-2">
                <span className="account-user-avatar">
                  <img
                    src="/images/users/avatar-1.jpg"
                    alt=""
                    width="32"
                    className="rounded-circle"
                  />
                </span>
                <span className="d-lg-flex flex-column gap-1 d-none">
                  <h5 className="my-0">Admin</h5>
                  <h6 className="my-0 fw-normal">Admin</h6>
                </span>
              </div>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome !</h6>
                </div>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-account-circle me-1"></i>
                  <span>My Account</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-account-edit me-1"></i>
                  <span>Settings</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lifebuoy me-1"></i>
                  <span>Support</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-lock-outline me-1"></i>
                  <span>Lock Screen</span>
                </a>

                <a href="#" className="dropdown-item">
                  <i className="mdi mdi-logout me-1"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
            <li className="text-center">
              <motion.button 
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn btn-primary" 
              type="submit"
              onClick={() => {
                logout()
                }}>
                Log Out
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Topbar;
