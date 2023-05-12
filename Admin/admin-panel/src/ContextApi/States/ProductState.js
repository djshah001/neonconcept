import React from 'react'
import ProductContext from '../contexts/ProductContext'
import axios from 'axios'

function ProductState(props) {
    const url = `${process.env.REACT_APP_HOST}`

    const getProducts = async () => {
        const response = await axios.get(`${url}getproducts`)
        return response.data
    }

    const getProductCategories = async () => {
        const response = await axios.get(`${url}getproductcategories`)
        return response.data
    }

    const addProduct = async (Product) => {
        try {
            const formdata = new FormData();
            formdata.append('title', Product.title)
            formdata.append('description', Product.description)
            formdata.append('active', Product.active)
            formdata.append('readyToBuy', Product.readyToBuy)
            formdata.append('offerPrice', Product.offerPrice)
            formdata.append('originalPrice', Product.originalPrice)
            formdata.append('ProductImage', Product.image)
            formdata.append('ProductCategoryId', Product.ProductCategoryId)
            let response = await axios.post(`${url}addproduct`, formdata)
            console.log(response.data)
            return response.data
        }
        catch (error) {
            console.warn(error);
        }
    }

    const UpdateProduct = async (id,Product) => {
        try {
            const formdata = new FormData();
            formdata.append('id', id)
            formdata.append('title', Product.title)
            formdata.append('description', Product.description)
            formdata.append('active', Product.active)
            formdata.append('readyToBuy', Product.readyToBuy)
            formdata.append('offerPrice', Product.offerPrice)
            formdata.append('originalPrice', Product.originalPrice)
            formdata.append('ProductImage', Product.image)
            formdata.append('ProductCategoryId', Product.ProductCategoryId)
            let response = await axios.post(`${url}updateproduct`, formdata)
            console.log(response.data)
            return response.data
        }
        catch (error) {
            console.warn(error);
        }
    }
    

    const getProduct = async (id) => {
        try {
            let response = await axios.post(`${url}getproduct`, { id: id })
            return response.data
        } catch (error) {
            console.warn(error);
        }
    }

    const DeleteProduct = async (id) => {
        const response = await axios.post(`${url}deleteproduct`, { id: id })
        return response.data
    }

    return (
        <ProductContext.Provider value={{ getProducts, getProductCategories, addProduct, UpdateProduct, DeleteProduct, getProduct }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
