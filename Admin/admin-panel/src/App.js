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


function App() {
  const loggedIn = window.localStorage.getItem('loggedIn');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout/>}>
        <Route path="/login" element={
            <GetLoggedInUser>
              <Login />
            </GetLoggedInUser>

        }/>
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route element={
            <GetLoggedInUser>
              <DashBoardLayout />
            </GetLoggedInUser>
          }>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/user' element={
              <GetUsers>
                <User/>
              </GetUsers>
            }/>
            <Route exact path='/hi' element={<div>hi</div>}/>
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
