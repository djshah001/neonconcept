import { createContext,useState } from "react";
import React from 'react'

export const NavContext = createContext()

const NavState = (props) => {
    const [dropdown,setDropdown] = useState('false')
    const [gelleryDropdown,setGelleryDropdown] = useState('false') 
    const [leddropdown,setLedDropdown] = useState('false') 

    
    return(
        <NavContext.Provider value={{dropdown,setDropdown,gelleryDropdown,setGelleryDropdown,leddropdown,setLedDropdown}}>
            {props.children}
        </NavContext.Provider>
    )

}

export default NavState
