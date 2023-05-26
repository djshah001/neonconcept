import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CoolBtn } from "../Fixed_Elements/CoolBtn";
import CustomerContext from "../../contexts/CustomerContext";

function SignUp() {
  const navigate = useNavigate();
  const [Customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
  });
  const [Errors, setErrors] = useState("");
  const { signUp } = useContext(CustomerContext);

  const handleChange = (e) => {
    setCustomer({
      ...Customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event, Customer) => {
    event.preventDefault();
    const res = await signUp(Customer);
    if (res.errors) {
      setErrors(res.errors);
    } else {
      navigate("/login");
    }
    console.log(res);
  };

  return (
    <>
      <div className="log-in-div">
        <div className="glass">
          <div className="login">
            <h1>Sign up</h1>
            {Errors &&
              Errors.map((err) => {
                return <p className="text-warning">{err.msg}</p>;
              })}
            <form method="post" onSubmit={(e) => handleSubmit(e, Customer)}>
              <div className="form">
                <div className="row">
                  <div className="col-md-10 col-sm-12 mx-auto">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required="required"
                      value={Customer.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-10 col-sm-12 mx-auto">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required="required"
                      value={Customer.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-10 col-sm-12 mx-auto">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      value={Customer.email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-10 col-sm-12 mx-auto">
                    <input
                      type="text"
                      name="contactNumber"
                      placeholder="Enter Contact Number"
                      required="required"
                      value={Customer.contactNumber}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-10 col-sm-12 mx-auto">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      required="required"
                      value={Customer.password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div className="text-center">
                  <CoolBtn
                    name="Sign Up &nbsp;"
                    icon="fa-user-plus"
                    className="my-2"
                  />
                </div>
              </div>
            </form>
            <div className="forget text-center">
              Already have an account ?{" "}
              <NavLink to="/signup">
                <motion.p
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.19 }}
                  transition={{
                    duration: 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 8,
                  }}
                  className=""
                >
                  Log In
                </motion.p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
