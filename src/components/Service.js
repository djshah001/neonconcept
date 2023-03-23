import React from 'react'

function Service(props) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-12 col-xs-12 serv" id="3D-LED-Letters">
            <div className="card" 
            style={{backgroundImage:`url(${props.imgurl})`}}
            >
                <span className="ser_ico numbering-backgroung">
                    {props.i}
                </span>
                <span className="ser_ttl">{props.title}</span>
                <p className="ser_dsc card-text">{props.description}</p>

                    <div className="filters">
                        <div className="filter-ul-tab">
                            <a href="neon1.html" className="ser_lnk float-left" data-filter="led">View more&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                            <a href="customize.html" className="ser_lnk float-right">Customize Sign&nbsp;&nbsp;<i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Service