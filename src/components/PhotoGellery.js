import React from 'react'

function PhotoGellery(props) {
    return (
        <div className=" grid-item col-lg-3 col-md-6 FiltImg mt-5" data-filter="led">

            <div className="featureCol w-100 mb-5">
                <div>
                    <div className="imgHolder position-relative w-100 overflow-hidden">
                        <img src={props.imgurl} alt=" " className="img-fluid w-100" />
                        {/* <h1>{props.imgurl}</h1> */}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default PhotoGellery