import React from 'react'
import Navhead from './Navhead'
import Para from './Para'
import PhotoCarousel from './PhotoCarousel'

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
                <div class="pd_inner_cnt row">
                    <div class="col-lg-6 col-md-6 p-3">
                        <img src="/images/Led_signs/portrait1.jpg" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="row mb-3 p-3">
                            <img src="/images/Led_signs/landscape.jpg" class="img-fluid" alt="" />
                        </div>
                        <div class="row p-3">
                            <img src="/images/Led_signs/landscape2.jpg" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Para 
            para1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            />

            <PhotoCarousel/>

        </div>
    )
}

export default LedBoard