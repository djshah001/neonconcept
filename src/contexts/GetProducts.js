import React from 'react'
import productContext from "./ProductContext";
import axios from 'axios'


const GetProducts = (props) => {

    const url = `${process.env.REACT_APP_HOST}`

    
    const getproducts = async ()=>{
        const products = await axios.get(`${process.env.REACT_APP_HOST}getproducts`)
        return products.data
    }
    
    const getProduct = async (id) => {
        try {
            console.log('hi')
            let response = await axios.post(`${url}getproduct`, { id: id })
            return response.data
        } catch (error) {
            console.warn(error);
        }
    }

    return(
        <productContext.Provider value={{getproducts,getProduct}}>
            {props.children}
        </productContext.Provider>
    )

}

export default GetProducts