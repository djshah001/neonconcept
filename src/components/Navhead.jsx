import React from 'react'
import { NavLink } from 'react-router-dom'

function Navhead(props) {
  return (
    <section id="cover">
        <div className="container">
            <div className="row cover_wrapper">
                <div className="col-lg-6 align-self-center">
                    <h1 className="wrapper_head">{props.title}</h1>
                    <h5 className="wrapper_nav"><span><NavLink to="/" className="wrapper_nav_link">Home</NavLink></span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>{props.route}</span></h5>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navhead