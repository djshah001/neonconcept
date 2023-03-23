import React from 'react'

function Contactdiv() {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 cnt_head align-self-center">
                        <span className="sub_head">Feel free to contact us</span>
                        <h2 className="s_head">Contact Us</h2>
                        <p className="h_body">If you need to help with our services, have questions about our work or experiencing any technical difficulties, please do not hesitate to contact us.</p>
                        <div className="cntc_info d-flex flex-row flex-wrap">
                            <div className="cntc_info_e">
                                <div className="cntc_info_head"><span><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Address</span><br /></div>
                                <span className="cntc_info_b"> Krishna Electricals,<br />203, Mangal Bazar, Pratap Margas Pole, Bajwada, Mandvi, Vadodara, Gujarat 390001</span>
                            </div>
                            <div className="cntc_info_e">
                                <div className="cntc_info_head"><span><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;Phone</span><br /></div>
                                <span className="cntc_info_b"><a href="tel:9724467687" style={{color: '#acacac'}}>+91 9724467687</a></span><br />
                                <span className="cntc_info_b"><a href="tel:0987654321" style={{color: '#acacac'}}>+91098 7654 321</a></span>
                            </div>
                            <div className="cntc_info_e">
                                <div className="cntc_info_head"><span><i className="fas fa-envelope"></i>&nbsp;&nbsp;Email</span><br /></div>
                                <span className="cntc_info_b"><a href="#" style={{color:'#acacac'}}>bhagyesh.sheth@gmail.com</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 cntc_form align-self-center" id="Design-Your-Neon">
                        <iframe title='header' width="100%" height="410" frameBorder="0" style={{border:0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3949028737798!2d73.2067299!3d22.3009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc58aa4f07291%3A0x225feaceab9dc9ce!2sKrishna%20Electricals!5e0!3m2!1sen!2sin!4v1655287064129!5m2!1sen!2sin" allowFullScreen=""></iframe>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactdiv