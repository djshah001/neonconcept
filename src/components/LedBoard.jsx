import React from 'react'
import Navhead from './Navhead'

function LedBoard(props) {
    return (
        <div>
            <Navhead title={props.title} route={props.route} />
            
            <div className="my-5 container col-md-9">
                <div className="col-md-12">

                    <h2>{props.title}</h2>
                    <p className="mb-5">
                        {props.description}
                    </p>
                </div>

                <div className="row">

                    {
                        props.imgurls.map((imgurl)=>{
                            return (<div className="col-lg-6 col-md-6 p-3" key={imgurl}>
                                <img src={imgurl}  className="img-fluid" alt="" />
                            </div>)
                        })
                    }
                </div>

                {/* <div className="pd_inner_cnt row">
                    <div className="col-lg-6 col-md-6 p-3">
                        <img src="/images/Led_signs/portrait1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="row mb-3 p-3">
                            <img src="/images/Led_signs/landscape.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="row p-3">
                            <img src="/images/Led_signs/landscape2.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div> */}

            </div>

        </div>
    )
}

export default LedBoard