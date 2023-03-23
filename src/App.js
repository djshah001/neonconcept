import React from 'react'


import ReactDOM from "react-dom/client";
// import { BrowserRouter,Route,Routes,ScrollRestoration } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Custom from './components/Custom';
import Gellery from './components/Gellery';

import Home from './components/Home'
import LedBoard from './components/LedBoard';
import Rootlayout from './components/Rootlayout';
import Signs from './components/Signs';
import NavState from './contexts/NavContext';
import { workInfo } from './Info';



function App() {

  
  const router = createBrowserRouter(
    // <ScrollRestoration/>
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<Aboutus/>}/>

        {workInfo.map((obj,value) =>{
          // console.log(obj.path)
          return <Route path={'/'+obj.path} key={obj.path}
            element={
            <Signs title={obj.title}
            key={obj.path}
            description={obj.description}
            route='Gellery' path={obj.path} arr={obj.arr}/>
            }/>
        })}

        <Route path="/ledboard"  
        element={<LedBoard
          title="Glow Sign Board" 
          description="Vestibulum at accumsan lectus, vestibulum porttitor metus. Nullam convallis erat vel iaculis posuere. Praesent tempor elementum tellus, eget aliquet nibh sollicitudin vel. Donec lacinia tortor sed felis mattis tempus. Cras euismod commodo nulla. Proin ut viverra erat, in lobortis lectus. Etiam consequat nisi eu arcu sollicitudin venenatis. Nullam at elementum erat, at aliquet velit."
          route="Led Board"
        />}/>

        <Route path="/flexboard"  
        element={<LedBoard
          title="Flex Board" 
          description="Vestibulum at accumsan lectus, vestibulum porttitor metus. Nullam convallis erat vel iaculis posuere. Praesent tempor elementum tellus, eget aliquet nibh sollicitudin vel. Donec lacinia tortor sed felis mattis tempus. Cras euismod commodo nulla. Proin ut viverra erat, in lobortis lectus. Etiam consequat nisi eu arcu sollicitudin venenatis. Nullam at elementum erat, at aliquet velit."
          route="FLEX BOARD"
        />}/>

        <Route path="/customize" 
        element={<Custom
          title='Neon Customization'
          route="CUSTOMIZATION"
        />}/>

        {workInfo.map((obj,value) =>{
          // console.log(obj.path)
          return <Route path={'/gellery/'+obj.path} key={obj.path}
            element={
            <Gellery title={obj.title}
            key={obj.path}
            description={obj.description}
            route='Gellery' path={obj.path} arr={obj.arr}/>}
            />
        })}

        <Route path="/contact" 
          element={<Contact
          title='Our Creatives'
          route="Contact Us"
        />}/>
        
      </Route>
    ))

  return (
    <NavState>
      <RouterProvider router={router} />
    </NavState>
  )
}

export default App