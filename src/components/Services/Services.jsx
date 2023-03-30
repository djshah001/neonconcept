import React from 'react'
import { serviceInfo } from '../../Info'
import Service from './Service'

function Services() {
    return (
        <section id="counter_up">
            <div className="container" id="services">
                <div className="row">
                    <div className="col-lg-12 col-md-12 cnt_head">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="sub_head">We work for your best experience</span>
                                <h2 className="s_head mt-0">Our Services</h2>
                            </div>
                            <div className="col-lg-6">
                                <p className="h_body">We provide best ever services for your great experience. We make all efforts for the revolutionary change. We promise you that you will never get disappointed.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ser_cnt">

                    {serviceInfo.map((obj, i) =>{
                    return<Service
                        key={i+''}
                        i={i}
                        imgurl={obj.imgurl}
                        title={obj.title}
                        description={obj.description}
                        />
                    })}

                    {/* <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Acrylic-Letters">
                        <div className="card" style="background-image:url(assets/images/service_single/2.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                2
                            </span>
                            <span className="ser_ttl">Acrylic Letters</span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon2.html" className="ser_lnk float-left" data-filter="acrylic">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Beauty-Bar-Nail-Salon-Neon-Signs">
                        <div className="card" style="background-image:url(assets/images/service_single/3.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                3
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon3.html" className="ser_lnk float-left" data-filter="beauty">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Home-Decor">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                4
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon4.html" className="ser_lnk float-left" data-filter="decor">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Name-Plate">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                5
                            </span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon5.html" className="ser_lnk float-left" data-filter="nameplate">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Parties-Special-Occasions">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                6
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon6.html" className="ser_lnk float-left" data-filter="parties">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Cafe-Diner-Signs">
                        <div className="card" style="background-image:url(assets/images/service_single/4.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                7
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon7.html" className="ser_lnk float-left" data-filter="cafe">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Cheap-Neon-Signs">
                        <div className="card" style="background-image:url(assets/images/service_single/5.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                8
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text">Shop our awesome range of LED neon lights and cheap neon signs for sale and get a cool neon effect sign for your office, party, bedroom, home bar, pub, man cave or garage. Aesthetic, cool, cute, hipster, sexy – whatever you’re after we’ve either got it in our store or we can make it for you (see our Custom Neon® Signs page).</p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon8.html" className="ser_lnk float-left" data-filter="cheap">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Wedding-Signs">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                9
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon9.html" className="ser_lnk float-left" data-filter="wedding">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Personalized-Neon">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                10
                            </span>
                            <span className="ser_ttl">Personalized</span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon10.html" className="ser_lnk float-left" data-filter="personalized">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Wall-Art-Light-Signs">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                11
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon11.html" className="ser_lnk float-left" data-filter="wall">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="Desk-Lights-Table-Lamps">
                        <div className="card" style="background-image:url(assets/images/service_single/6.jpg)">
                            <span className="ser_ico numbering-backgroung">
                                12
                            </span>
                            <span className="ser_ttl"></span>
                            <p className="ser_dsc card-text"></p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon12.html" className="ser_lnk float-left" data-filter="desk">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 serv" id="Wooden-Panels">
                        <div className="card" style={{backgroundImage:'url(/images/service_single/6.jpg)'}}>
                            <span className="ser_ico numbering-backgroung">
                                13
                            </span>
                            <span className="ser_ttl">Wooden Panels</span>
                            <p className="ser_dsc card-text">
                                Whilst the majority of neon signs that we produce are fitted onto either an acrylic panel, or within an acrylic case, we are also able to fit the neon onto wooden backings too.
                                <br />
                                We are generally able to source reclaimed pine floor boards, or MDF, which we can paint to your specified colour.
                                <br />
                                Or if you prefer, you can supply us with your own wooden backing, and we can then fit the neon onto this in our workshop.
                            </p>
                            <div className="filters">
                                <div className="filter-ul-tab">
                                    <a href="neon13.html" className="ser_lnk float-left" data-filter="wooden">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                    <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!--<div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="cvr-btns align-items-center text-right">
                            <a href="#" className="button_main btn mb-3">View more&nbsp;&nbsp;<i className="fas fa-angle-right arrow_go"></i></a>
                        </div>
                    </div>
                </div>--> */}
            </div>
        </section>
    )
}

export default Services