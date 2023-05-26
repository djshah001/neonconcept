import React from "react";
import "./login.css";
import { motion } from "framer-motion";
import { CoolBtn } from "../Fixed_Elements/CoolBtn";
import { NavLink } from "react-router-dom";
function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="log-in-div">
      <div className="glass">
        <div className="login">
          <h1>Login</h1>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
              <input
                type="text"
                name="UserName"
                placeholder="Username"
                required="required"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required="required"
              />
              <div className="text-center">
                <CoolBtn
                  name="Log In &nbsp;"
                  icon="fa-arrow-right-to-bracket"
                  className="my-2"
                />
              </div>
            </div>
          </form>
          <div className="forget text-center">
            <NavLink to="">
              <motion.p
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.19 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 8,
                }}
                className="my-1"
              >
                Forgot Password ?
              </motion.p>
            </NavLink>
            <br />
            New to Neon 11 ?{" "}
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
                Sign Up
              </motion.p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
