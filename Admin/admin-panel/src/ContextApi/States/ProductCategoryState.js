import React from 'react'
import ProductCategoryContext from '../contexts/ProductCategoryContext'
import axios from 'axios'

function ProductCategoryState(props) {

  const createProductCategory = async (productCategory) => {
    const url = `${process.env.REACT_APP_HOST}createproductcategory`
    const response = await axios.post(url, productCategory)
    console.log(response.data)
    return response.data
  }

  const getProductCategory = async () => {
    const url = `${process.env.REACT_APP_HOST}getproductcategories`
    const response = await axios.get(url)
    return response.data
  }

  const DeleteProductcategory = async (id) => {
    const url = `${process.env.REACT_APP_HOST}deleteproductcategory`
    const response = await axios.post(url, { id: id })
    return response.data
  }

  const UpdateProductcategory = async (id, ProductCategoryInfo) => {
    console.log(id)
    const url = `${process.env.REACT_APP_HOST}updateproductcategory`
    const response = await axios.post(url,
    {id: id, 
    title: ProductCategoryInfo.title,
    active: ProductCategoryInfo.active })
    return response.data
  }

  const GetSpecificProductcategory = async (id) => {
    const url = `${process.env.REACT_APP_HOST}getproductcategorybyid`
    const response = await axios.post(url, { id: id })
    return response.data
  }


  return (
    <ProductCategoryContext.Provider value={{ createProductCategory, getProductCategory, DeleteProductcategory, UpdateProductcategory, GetSpecificProductcategory }}>
      {props.children}
    </ProductCategoryContext.Provider>
  )
}

export default ProductCategoryState

