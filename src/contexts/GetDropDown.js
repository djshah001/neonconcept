import React from 'react'
import axios from 'axios'
import DropDownContext from './DropDownContext';



const GetDropDown = (props) => {
    
    const getneonsigns = async ()=>{
        const neonSigns = await axios.get(`${process.env.REACT_APP_HOST}getneonsigns`)
        // console.log(neonSigns.data)
        return neonSigns.data
    }
    return(
        <DropDownContext.Provider value={{getneonsigns}}>
            {props.children}
        </DropDownContext.Provider>
    )

}

export default GetDropDown