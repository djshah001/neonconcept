import React from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'


function GetLoggedInUser(props) {


  const getuser = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}auth/getuser`,
        {}, {
        headers: {
          authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNjg5NGZjY2I0ZTM2YTg2YjUwZGZjIn0sImlhdCI6MTY4MTM2MTM1OX0.XywFIDU0uqzkb_0cmlyRPQIqozkUed7rHgxfGTa0DVU"
        }
      });
      return response.data
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <UserContext.Provider value={{ getuser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default GetLoggedInUser