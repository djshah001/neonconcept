import { createContext,useState } from "react";
import React from 'react'

export const NavContext = createContext()

const NavState = (props) => {
    const [dropdown,setDropdown] = useState('false')
    const [gelleryDropdown,setGelleryDropdown] = useState('false') 

    
    return(
        <NavContext.Provider value={{dropdown,setDropdown,gelleryDropdown,setGelleryDropdown}}>
            {props.children}
        </NavContext.Provider>
    )

}

export default NavState
