import { createContext,useState } from "react";
import React from 'react'

export const NavContext = createContext()

const NavState = (props) => {
    const [dropdown,setDropdown] = useState(false)
    const [ProductDropdown,setProductDropdown] = useState(false)
    const [gelleryDropdown,setGelleryDropdown] = useState(false) 
    const [leddropdown,setLedDropdown] = useState(false) 

    
    return(
        <NavContext.Provider value={{dropdown,setDropdown,gelleryDropdown,setGelleryDropdown,leddropdown,setLedDropdown,ProductDropdown,setProductDropdown}}>
            {props.children}
        </NavContext.Provider>
    )

}

export default NavState
