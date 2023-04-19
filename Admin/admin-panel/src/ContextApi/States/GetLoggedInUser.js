import React, { useState } from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'


function GetLoggedInUser(props) {
  const [isChanged, setIsChanged] = useState(false);

  const updateIsChanged = () => {
    setIsChanged(!isChanged);
  };

  const getloggedinuser = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}auth/getuser`,
        {}, {
        headers: {
          authToken: window.localStorage.getItem('authToken'),
        }
      });
      updateIsChanged()
      return response.data
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <UserContext.Provider value={{ getloggedinuser,isChanged}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default GetLoggedInUser