import React from 'react'
import productContext from "./ProductContext";
import axios from 'axios'



const GetProducts = (props) => {
    
    const getproducts = async ()=>{
        const products = await axios.get(`${process.env.REACT_APP_HOST}getproducts`)
        return products.data
    }
    
    return(
        <productContext.Provider value={{getproducts}}>
            {props.children}
        </productContext.Provider>
    )

}

export default GetProducts