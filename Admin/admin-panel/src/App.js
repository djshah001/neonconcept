import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Rootlayout from './components/layout/Rootlayout';
import LoginState from './ContextApi/States/LoginState';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import DashBoardLayout from './components/layout/DashBoardLayout';
import User from './components/Users/User';
import GetUsers from './ContextApi/States/GetUsers';
import GetLoggedInUser from './ContextApi/States/GetLoggedInUser';
import SideBarState from './ContextApi/States/SideBarState';
import BannerTable from './components/Banner-Master/BannerTable';
import BannerState from './ContextApi/States/BannerState';
import ProductCategory from './components/Product-Category-Master/ProductCategory';
import ProductCategoryState from './ContextApi/States/ProductCategoryState';
import ProductRoutes from './Routes/ProductRoutes';


function App() {
  const loggedIn = window.localStorage.getItem('loggedIn');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>

        <Route path="/login" element={
          <Login />
        } />

        <Route exact path='/' element={<PrivateRoute />}>
          <Route element={
            <GetLoggedInUser>
              <SideBarState>
                <DashBoardLayout />
              </SideBarState>
            </GetLoggedInUser>
          }>

            <Route exact path='/' element={<Home title='Home' />} />

            <Route exact path='/user' element={
              <GetUsers>
                <User title='Admin Table' />
              </GetUsers>
            } />

            <Route exact path='/banner' element={
              <BannerState>
                <BannerTable title='Banners' />
              </BannerState>
            } />

            <Route exact path='/productcategory' element={
              <ProductCategoryState>
                <ProductCategory title='Product Category Table' />
              </ProductCategoryState>
            } />

            <Route path='/products/productmaster/*' element={<ProductRoutes/>
            } />

            <Route exact path='/hi' element={<div>hi</div>} />
          </Route>
        </Route>
      </Route>
    ))

  return (
    <LoginState>
      <RouterProvider router={router} />
    </LoginState>

  );
}

export default App;
