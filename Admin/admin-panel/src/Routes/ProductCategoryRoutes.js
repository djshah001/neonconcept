import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductCategoryState from "../ContextApi/States/ProductCategoryState";
import ProductCategory from "../components/Product-Category-Master/ProductCategory";
import EditProductCategory from "../components/Product-Category-Master/EditProductCategory";

function ProductCategoryRoutes() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProductCategoryState>
              <ProductCategory title="Product Categories Table" />
            </ProductCategoryState>
          }
        />
        <Route
          exact
          path="/create"
          element={
            <ProductCategoryState>
              <EditProductCategory />
            </ProductCategoryState>
          }
        />

        <Route
          exact
          path="/update/:id"
          element={
            <ProductCategoryState>
              <EditProductCategory title="Update Product Category" />
            </ProductCategoryState>
          }
        />
      </Routes>
    </>
  );
}

export default ProductCategoryRoutes;
