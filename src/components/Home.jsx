import React from 'react'
import { introInfo } from '../Info'
import About from './Aboutus/About'
import Contactdiv from './Contact/Contactdiv'
import Form from './Form'
import Goals from './Goals'
import Header from './Header'
import Intro from './Intro'
import Services from './Services/Services'
import Works from './Works'

function Home() {
  return (
    <div>
      <Header/>
      {
        introInfo.map((obj, i) =>{
          return (
            <Intro 
            key={i+''}
            sub={obj.sub}
            head={obj.head}
            body={obj.body}
            video={obj.video}
            i={i}
            />
          )
        })
      }
      <About/>
      <Goals/>
      <Services/>
      <Works/>
      <Form/>
      <Contactdiv/>
    </div>
  )
}

export default Home