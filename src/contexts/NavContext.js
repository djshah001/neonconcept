import { createContext,useState } from "react";
import React from 'react'

const NavContext = createContext()

const NavState = (props) => {
    const Dj = {
        name:'dj',
        work:'op'
    }
    const [dropdown,setDropdown] = useState('false') 
    return(
        <NavContext.Provider value={Dj}>
            {props.children}
        </NavContext.Provider>
    )

}

export default NavState
