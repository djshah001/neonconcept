import React, { useState } from 'react'
import axios from 'axios'
import UserContext from '../contexts/UserContext'

function GetUsers(props) {
  const [users, setUsers] = useState([])
  const [isChanged, setIsChanged] = useState(false);

  const updateIsChanged = () => {
    setIsChanged(!isChanged);
  };

  const getAdminsArray = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_HOST}auth/getadmins`)
      setUsers(response.data)
    }
    catch (error) {
      console.warn(error);
    }
  }

  const getAdminbyid = async (userId) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_HOST}auth/getadminbyid`, { id: userId })
      return response.data
    }
    catch (error) {
      console.warn(error);
    }
  }

  const createAdmin = async (user) => {
    try {
      const formdata = new FormData();
      formdata.append('name', user.name)
      formdata.append('email', user.email)
      formdata.append('password', user.password)
      formdata.append('image', user.image)
      let response = await axios.post(`${process.env.REACT_APP_HOST}auth/createadmin`, formdata)
      return response.data
    }
    catch (error) {
      console.warn(error);
    }
  }

  const updateAdmin = async (user) => {
    try {
      const formdata = new FormData();
      formdata.append('name', user.name)
      formdata.append('email', user.email)
      formdata.append('password', user.password)
      formdata.append('image', user.image)
      formdata.append('id', user._id)
      let response = await axios.post(`${process.env.REACT_APP_HOST}auth/updateuser`, formdata)
      updateIsChanged()
      return response.data
    }
    catch (error) {
      console.warn(error);
    }
  }

  const DeleteAdmin = async (userId) => {
    try {
      let response = await axios.post(`${process.env.REACT_APP_HOST}auth/deleteadmin`, { userId: userId })
      return response.data
    }
    catch (error) {

    }
  }

  return (
    <UserContext.Provider value={{ getAdminsArray, getAdminbyid, createAdmin, updateAdmin, users, DeleteAdmin}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default GetUsers