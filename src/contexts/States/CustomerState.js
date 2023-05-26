import React from "react";
import CustomerContext from "../CustomerContext";
import axios from "axios";

function CustomerState(props) {
  const url = `${process.env.REACT_APP_HOST}`;

  const signUp =async (Customer)=> {
    try {
        const formdata = new FormData();
        formdata.append('firstName', Customer.firstName)
        formdata.append('lastName', Customer.lastName)
        formdata.append('email', Customer.email)
        formdata.append('contactNumber', Customer.contactNumber)
        formdata.append('password', Customer.password)
        formdata.append('image', Customer.image)
        let response = await axios.post(`${url}auth/customer/signup`, formdata)
        return response.data
      }
      catch (error) {
        console.warn(error);
      }
  }

  return (
    <CustomerContext.Provider value={{signUp}}>
      {props.children}
    </CustomerContext.Provider>
  );
}

export default CustomerState;
