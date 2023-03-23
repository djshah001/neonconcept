import React from 'react'
import Navhead from './Navhead'
import PhotoGellery from './PhotoGellery'

function Signs(props) {
  return (
    <div>
        <Navhead title = {props.title} route={props.route}/>
        <div className="my-5 container col-md-9">
          <div className="col-md-10">

						<h2>{props.title}</h2>
						<p className="mb-5">
							{props.description}
						</p>
          </div>
        
        <div className="container">
          
          {
              props.arr.map((imgurl) =>{
                  return <PhotoGellery imgurl={imgurl} key={imgurl}/>
              })
          }
        </div>


        </div>
    </div>
  )
}

export default Signs