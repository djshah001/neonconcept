import React from 'react'
import Navhead from './Navhead'
import PhotoGellery from './PhotoGellery'

function Gellery(props) {
  return (
    <div>
        <Navhead title = {props.title} route={props.route}/>

        <div className="container">

            {props.arr.map((imgurl,i) =>{
                    return <PhotoGellery className='mt-3' imgurl={imgurl} key={imgurl+i}/>
                })}
        </div>

    </div>
  )
}

export default Gellery