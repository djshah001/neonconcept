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
            let response = await axios.post(`${url}getproduct`, { id: id })
            return response.data
        } catch (error) {
            console.warn(error);
        }
    }

    const getProductsCatagories = async () => {
        try {
            let response = await axios.get(`${url}getproductcategories`)
            return response.data
        } catch (error) {
            console.warn(error);
        }
    }

    const getSpecificCatagoriesProducts = async (productsCategoryid) => {
        try {
            let response = await axios.get(`${url}getfilteredproducts?id=${productsCategoryid}`)
            return response.data
        } catch (error) {
            console.warn(error);
        }
    }

    const GetSpecificProductcategory = async (id) => {
        const url = `${process.env.REACT_APP_HOST}getproductcategorybyid`
        const response = await axios.post(url, { id: id })
        return response.data
      }
    

    return(
        <productContext.Provider value={{getproducts,getProduct,getProductsCatagories,getSpecificCatagoriesProducts,GetSpecificProductcategory}}>
            {props.children}
        </productContext.Provider>
    )

}

export default GetProducts