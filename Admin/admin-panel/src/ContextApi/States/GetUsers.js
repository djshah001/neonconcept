import React, { useState } from 'react'
import axios from 'axios'
import UserContext from '../contexts/UserContext'

function GetUsers(props) {
    const [users, setUsers] = useState([])
    const getUsersArray = async()=> {
        try {
            let response = await axios.get(`${process.env.REACT_APP_HOST}auth/getusers`)
            console.log(response)
            setUsers(response.data)
          } 
        catch (error) 
          {
            console.warn(error);
          }
    }
  return (
    <UserContext.Provider value={{getUsersArray,users}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default GetUsers