import React from 'react'
import { motion } from 'framer-motion'

function Intro(props) {
  return (
    <section id="introduction">
        <div className="container">
            <div className="row justify-content-center icont align-items-center">
                
                        
                    {
                        props.i % 2 === 0 ? (
                            <motion.div 
                            initial={{ x:-200 }}
                            whileInView={{ x:0 }}
                            transition={{duration:1,type:'spring'}}
                            className="col-lg-6 col-md-12 align-items-center justify-content-center px-5">
                                <span className="sub_head">{props.sub}</span>
                                <h2 className="s_head">{props.head}</h2>
                                <p className="h_body">
                                    {props.body}
                                </p>
                            </motion.div>
                        ):
                        (
                            <motion.iframe 
                            initial={{ x:-200 }}
                            whileInView={{ x:0 }}
                            transition={{duration:1,type:'spring'}}
                            width="560" height="315" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></motion.iframe>
                        )
                    }     
                {
                        props.i % 2 === 0 ? (
                            <motion.iframe
                            initial={{ x:200 }}
                            whileInView={{ x:0 }}
                            transition={{duration:1,type:'spring'}} 
                            width="560" height="315" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></motion.iframe>
                        ):
                        (
                            <motion.div 
                            initial={{ x:200 }}
                            whileInView={{ x:0 }}
                            transition={{duration:1,type:'spring'}}
                            className="col-lg-6 px-5 col-md-12 align-items-center mt-3">
                                <span className="sub_head">{props.sub}</span>
                                <h2 className="s_head">{props.head}</h2>
                                <p className="h_body">
                                    {props.body}
                                </p>
                            </motion.div>
                        )
                    }    
            </div>
        </div>			
    </section>
  )
}

export default Intro