import React from 'react'
import Navhead from '../Navhead'

function NeonSign(props) {
  return (
    <>
        <Navhead title={props.title} route={props.route} />
            <div className="my-5 container col-md-9">
                <div className="col-md-10">
                    <h1 className="mb-4" >{props.title}</h1>
                    <p className="mb-5">
                        {props.description}
                    </p>
                </div>
            </div>

        <div className="container">

            <div className="row ">
                {
                    props.videourls.map((videourl,i) => {

                    return <div className="col-lg-4 col-md-6 col-sm-12 bl_sec mb-3" key={i}>
                            <div className="car">
                                <div className="bl_img">
                                    <iframe width="310" height="200" src={videourl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    frameBorder='0' allowFullScreen></iframe>
                                </div>                   
                            </div>				
                        </div>
                    })
                }
            </div>
        </div>
    </>
  )
}

export default NeonSign