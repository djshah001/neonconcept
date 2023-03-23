import React from 'react'
import About from './About'
import Contactdiv from './Contactdiv'
import Form from './Form'
import Goals from './Goals'
import Header from './Header'
import Services from './Services'
import Works from './Works'

function Home() {
  return (
    <div>
      <Header/>
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