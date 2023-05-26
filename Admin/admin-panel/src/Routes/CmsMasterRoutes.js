import React from "react";
import { Route, Routes } from "react-router-dom";
import CmsMaster from "../components/Cms-master/CmsMaster";
import UpdateCms from "../components/Cms-master/UpdateCms";

function CmsMasterRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CmsMaster title="CMS Master" />} />
        {/* <Route
          exact
          path="/create"
          element={
            <ProductCategoryState>
              <EditProductCategory />
            </ProductCategoryState>
          }
        /> */}

        <Route
          exact
          path="/update/:id"
          element={<UpdateCms title="Update" />}
        />
      </Routes>
    </>
  );
}

export default CmsMasterRoutes;
