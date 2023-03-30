import React from 'react'

function About() {
    return (
        <section id="introduction">
            <div className="container">
                <div className="row justify-content-center icont">
                    <div className="col-lg-6 col-md-12 in_img align-self-center">
                        <img src="/images/about/about.jpg" className="img-fluid" alt="in_img"/>
                    </div>
                    <div className="col-lg-6 col-md-12 align-items-center">
                        <span className="sub_head">About Neon Creative Concept 11</span>
                        <h2 className="s_head">About Us</h2>
                        <p className="h_body">
                            We are specialised in customised neo lighting. We create any Custom Sign Boards for Home, Shop, office.
                        </p>
                        {/* <!--<div className="text-right">
                            <a href="#" className="button_main btn mb-3">Read more&nbsp;&nbsp;<i className="fas fa-angle-right arrow_go"></i></a>
                        </div>--> */}
                        <div className="row">

                            <div className="icard col-sm-6">
                                <div className="card c2 p-0 mt-1">
                                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                                        <div className="p-2">
                                            <div className="card-title"><i className="fas fa-server"></i></div>
                                        </div>
                                        <div className="crd_bdy">
                                            <p className="card-text">We Design Your Neon Projects with Our Expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="icard col-sm-6">
                                <div className="card c3 p-0 mt-1">
                                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                                        <div className="p-2">
                                            <div className="card-title"><i className="fas fa-shield-alt"></i></div>
                                        </div>
                                        <div className="crd_bdy">
                                            <p className="card-text">We Create No Burnout And No Short Circuit Neon Lights.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="icard col-sm-6">
                                <div className="card c1 p-0 mt-1">
                                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                                        <div className="p-2">
                                            <div className="card-title"><i className="fas fa-globe-asia"></i></div>
                                        </div>
                                        <div className="crd_bdy">
                                            <p className="card-text">We Create Made In India Quality.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="icard col-sm-6">
                                <div className="card c4 p-0 mt-1">
                                    <div className="d-flex flex-row align-items-center h-100 crd_cnt">
                                        <div className="p-2">
                                            <div className="card-title"><i className="far fa-chart-bar"></i></div>
                                        </div>
                                        <div className="crd_bdy">
                                            <p className="card-text">We Provide Our High Expertise And Skills</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About