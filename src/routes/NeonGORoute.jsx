import React from "react";
import { Route, Routes } from "react-router-dom";
import GetProducts from "../contexts/GetProducts";
import NeonGO from "../components/NeonGo/NeonGO";
import Product from "../components/Product/Product";

function NeonGORoute() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <GetProducts>
            <NeonGO />
          </GetProducts>
        }
      />
      <Route
        exact
        path="/products/:id"
        element={
          <GetProducts>
            <Product />
          </GetProducts>
        }
      />
    </Routes>
  );
}

export default NeonGORoute;
