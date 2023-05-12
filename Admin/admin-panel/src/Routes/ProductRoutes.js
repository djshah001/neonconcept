import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductState from '../ContextApi/States/ProductState'
import ProductTable from '../components/Product-Master/ProductTable'
import CreateProduct from '../components/Product-Master/CreateProduct'

function ProductRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={
                    <ProductState>
                        <ProductTable title='Product Table' />
                    </ProductState>
                } />
                <Route exact path="/createproduct" element={
                    <ProductState>
                        <CreateProduct title="Add Product" />
                    </ProductState>
                } />
                <Route exact path="/editproduct/:id" element={
                    <ProductState>
                        <CreateProduct title="Edit Product" />
                    </ProductState>
                } />
            </Routes>
        </>
    )
}

export default ProductRoutes
