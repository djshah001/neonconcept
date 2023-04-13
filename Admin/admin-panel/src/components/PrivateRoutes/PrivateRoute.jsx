import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoginContext from '../../ContextApi/contexts/LoginContext';

function PrivateRoute() {
    const { res } = useContext(LoginContext);
    const loggedIn = window.localStorage.getItem('loggedIn');

    // console.log(res)
  return (
    <>
      {loggedIn !== null ? <Outlet /> : <Navigate to="/login" />}
    </>
  );
}

export default PrivateRoute;
