import React, { useContext, useEffect } from 'react'
import { introInfo } from '../../Info'
import About from '../Aboutus/About'
import Contactdiv from '../Contact/Contactdiv'
import Form from './Form'
import Goals from '../Aboutus/Goals'
import Header from './Header'
import Intro from './Intro'
import Services from '../Services/Services'
import Works from './Works'
import HomeContext from '../../contexts/HomeContext'

function Home() {
  const {Banners,getBanners} = useContext(HomeContext)
  useEffect(()=>{
    getBanners()
  },[])
  return (
    <>
      <Header Banners={Banners}/>
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
    </>
  )
}

export default Home