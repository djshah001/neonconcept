import React from 'react'
import Contactdiv from './Contactdiv'
// import Contactdiv from './Contactdiv'
import Navhead from '../Navhead'

function Contact(props) {
  return (
    <div>
        <Navhead title={props.title} route={props.route}/>
        <Contactdiv/>
    </div>
  )
}

export default Contact