import React from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'


function GetLoggedInUser(props) {


  const getloggedinuser = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}auth/getuser`,
        {}, {
        headers: {
          authToken: window.localStorage.getItem('authToken'),
        }
      });
      return response.data
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <UserContext.Provider value={{ getloggedinuser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default GetLoggedInUser