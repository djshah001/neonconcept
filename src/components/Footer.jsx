import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    const style = {
        padding: '23px 30px 23px 30px',
        textAlign:'center'
    }
    const footerStyle ={
        color:'#ffffff',
        fontWeight:600,
        textDecoration:'underline'
    } 
  return (
    <footer id="footer">
        <div className="container ftr_main">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 align-self-center">
                    <div className="ftr_brand">
                        <NavLink to="/"><img src="/images/logo.png" height="40" alt="logo"/>&nbsp;&nbsp;Neon Creative Concept 11</NavLink>
                    </div>
                    <div className="ftr_intro">
                        <p>We build results-oriented brand strategies and continually refine your canpaigns for the greatest outcome.</p>
                    </div>
                    <div className="ftr_bdy" style={style}>
                        <div className="ftr_cnt">
                            <div className="ftr_lnk_sc">
                                <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                <NavLink to="https://www.facebook.com/neoncreativeconcept11/" target="_blank"><i className="fab fa-facebook-f"></i></NavLink>
                                <NavLink to="https://instagram.com/neon_creative_concept11?utm_medium=copy_link" target="_blank"><i className="fab fa-instagram"></i></NavLink>
                                {/* <!--<NavLink to="#"><i className="fab fa-youtube"></i></NavLink>--> */}
                                <NavLink to="https://wa.me/919724467687/?text=Neon Creative Concept 11" target="_blank"><i className="fab fa-whatsapp"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 ftr_bdy align-self-center">
                    <div className="ftr_cnt ml-3 mr-3 d-flex flex-row justify-content-between flex-wrap">
                        <div className="ftr_clb">
                            <span className="ftr_clb_t1">Have an idea?</span><br />
                            <span className="ftr_clb_t2">We love to collab with creatives & innovatives. Let's do work together!</span><br />
                        </div>
                        <div className="ftr_lnk d-flex flex-column">
                            <div className="ftr_lnk_cmp mt-4 ml-auto">
                                <span className="ftr_lnk_head">Quick Links</span><br />
                                <span className="ftr_lnk_bdy">
                                    <NavLink to="/about">About Us</NavLink>
                                </span><br />
                                
                                <span className="ftr_lnk_bdy">
                                    <NavLink to="/ledboard">led board</NavLink>
                                </span><br />

                                {/* <span className="ftr_lnk_bdy">
                                    <NavLink to="/flexboard">flex board</NavLink>
                                </span><br /> */}

                                <span className="ftr_lnk_bdy">
                                    <NavLink to="/customize">Customize Sign</NavLink>
                                </span><br />

                                <span className="ftr_lnk_bdy">
                                    <NavLink to="/gellery">Gallery</NavLink>
                                </span><br />
                                <span className="ftr_lnk_bdy">
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <section className="ftr_btm">
            <div className="container">
                <div className="row copyright">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-left">
                        <h6>© Copyright 2022 <span style={footerStyle}>Neon Creative Concept 11</span> | All rights reserved.</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 copyright-right">
                        <h6>Design By : <NavLink to="https://www.barodaweb.com/">Barodaweb | The E-catalogue Designer.</NavLink></h6>
                    </div>

                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer