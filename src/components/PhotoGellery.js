import React from 'react'
import { motion } from 'framer-motion'

function PhotoGellery(props) {
    return (
        <div className=" grid-item col-lg-3 col-md-6 FiltImg mt-5" data-filter="led">

            <div className="featureCol w-100 mb-5">
                <div>
                    <div className="imgHolder position-relative w-100 overflow-hidden">
                        <motion.img 
                        src={props.imgurl} alt=" " 
                        className="img-fluid w-100" 
                        initial={{y:-200,opacity:0}}
                        animate={{y:0,opacity:1}}
                        transition={{duration:0.8,delay:`${props.i}`*0.2,type:'spring'}}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PhotoGellery