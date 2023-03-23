import React from 'react'
import About from './About'
import PhotoCarousel from './PhotoCarousel'
import Navhead from './Navhead'
import Para from './Para'

function Aboutus() {
  return (
    <div>
       <Navhead title="Get To Know Us" route="About Us"/> 
       <About/>
       <Para 
        para1="Vestibulum at accumsan lectus, vestibulum porttitor metus. Nullam
        convallis erat vel iaculis posuere. Praesent tempor elementum
        tellus, eget aliquet nibh sollicitudin vel. Donec lacinia tortor
        sed felis mattis tempus. Cras euismod commodo nulla. Proin ut
        viverra erat, in lobortis lectus. Etiam consequat nisi eu arcu
        sollicitudin venenatis. Nullam at elementum erat, at aliquet
        velit."

        para2="It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy."
        />
       <PhotoCarousel/>
    </div>
  )
}

export default Aboutus