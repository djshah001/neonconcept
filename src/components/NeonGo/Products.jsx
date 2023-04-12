import React from 'react'
import { motion } from 'framer-motion'

function Products(props) {


  return (
    <>
    <motion.div 
    whileHover={{ scale: 1.05 }}
    transition={{duration:0.3}}
    className="col-lg-4 col-md-6 col-sm-12 bl_sec mb-5" id='news'>
        <div className="card">
                    <div className="bl_img">
                        <img src={`${process.env.REACT_APP_HOST}${props.imgurl}`} className="img-fluid" alt="thumb"/>
                    </div>
                    
                    <div className="bl_body">
                        <div className="bl_main ">
                            <span className="bl_title">
                                <a href="blog_article.html">{props.title}</a>
                            </span>
                            <br/>
                            <p className="bl_text">{props.description}</p>
                        </div>

                        <div className="bl_ftr d-flex justify-content-between align-items-center">
                            <div href="#" className="ln1 d-flex align-items-center">
                                &nbsp;&nbsp;
                                <div className="lns2">
                                    <span className="usr_date">Original Price : 
                                        <del>₹{props.originalPrice}</del>
                                    </span>
                                </div>	
                            </div>
                            <div className="ln2">Offer Price : <span className="usr_cmt">&nbsp;&nbsp;₹{props.offerPrice}</span></div>
                        </div>

                    </div>

                    <div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration:0.1,type: "spring"}}
                    className=" d-flex justify-content-center align-items-center buy-btn">
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="py-3" >
                            <div className="button_mai">Buy Now&nbsp;&nbsp;&nbsp;<i className="fas fa-angle-right arrow_go"></i></div>
                        </motion.div>
                    </div>
                    
                </div>
    </motion.div>                
    </>
  )
}

export default Products