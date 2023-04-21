import React from "react";


function Cover(props) {


  return (
    <div className={`carousel-item ${props.active}`}>

      <div
        className="d-block w-100 banner-bg-image"
        style={{ backgroundImage: `url(${process.env.REACT_APP_HOST}images/banners/${props.imgurl})` }}
      >
        <div className="carousel-caption d-md-block">
          <div className="row cvr_row">
            <div className="col-xl-8 col-lg-12 col-md-12 cvr-ttl align-self-center">
              <h5>{props.uptitle}</h5>
              <p className="cvr-title">
                <span className="cvr-title-tp">{props.title}</span>
              </p>
              <p className="cvr-title">
              {/* <span className="cvr-title-tp"> 
                {props.i}
              </span >  */}
            </p>
              {/* <p className="cvr-title">
              {props.imgurl}</p> */}
              <p className="cvr-body">{props.subtitle}</p>
              <div className="row cvr-btns d-flex flex-row flex-wrap align-items-center">
                <a href="#introduction" className="button_main btn mb-3">
                  Get Started&nbsp;&nbsp;&nbsp;
                  <i className="fas fa-angle-right arrow_go"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
