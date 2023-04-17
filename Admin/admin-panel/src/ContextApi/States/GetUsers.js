import React, { useState } from 'react'
import axios from 'axios'
import UserContext from '../contexts/UserContext'

function GetUsers(props) {
    const [users, setUsers] = useState([])
    const getUsersArray = async()=> {
        try {
            let response = await axios.get(`${process.env.REACT_APP_HOST}auth/getusers`)
            setUsers(response.data)
          } 
        catch (error) 
          {
            console.warn(error);
          }
    }

    const getuserbyid = async(userId)=> {
      try {
          let response = await axios.post(`${process.env.REACT_APP_HOST}auth/getuserbyid`,{id:userId})
          return response.data
        } 
      catch (error) 
        {
          console.warn(error);
        }
    }

    const createUser = async(user)=>{
      try {
        const formdata = new FormData();
        formdata.append('name',user.name)
        formdata.append('email',user.email)
        formdata.append('password',user.password)
        formdata.append('image',user.image)
        // let response = await axios.post(`${process.env.REACT_APP_HOST}auth/createuser`,user)
        let response = await axios.post(`${process.env.REACT_APP_HOST}auth/createuser`,formdata)
        console.log(response.data)
          return response.data
      } 
      catch (error)
      {
        console.warn(error);
      }
    }
    const DeleteUserById = async(userId)=>{
      try {
        let response = await axios.post(`${process.env.REACT_APP_HOST}auth/deleteuserbyid`,{userId:userId})
        console.log(response.data)
          return response.data
      } 
      catch (error) {
        
      }
    }

  return (
    <UserContext.Provider value={{getUsersArray,getuserbyid,createUser,users,DeleteUserById}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default GetUsers