import React,{useEffect, useState} from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'


function GetLoggedInUser(props) {

    const [UserInfo, setUserInfo] = useState({})

    const getuser = async ()=> {
        console.log('hi')
      try {
          axios.post(`${process.env.REACT_APP_HOST}auth/getuser`,{},
          {headers:
            {
                authToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNjg5NGZjY2I0ZTM2YTg2YjUwZGZjIn0sImlhdCI6MTY4MTI5MjQ5MX0.s4wgR8o5LWySbdblgBbCagIv5rmeqE9hdxeQY99TNEQ"
            }}
            ).then((response) => {
            // console.log(response.data)
            if (Object.keys(response.data).length > 0) {
                setUserInfo(response.data)
            }
          })
        } 
      catch (error) 
        {
          console.warn(error);
        }
    }

    useEffect(() => {
        if (Object.keys(UserInfo).length > 0) {
            console.log(UserInfo)
        }
    },[UserInfo])

    

  return (
    <UserContext.Provider value={{getuser,UserInfo}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default GetLoggedInUser