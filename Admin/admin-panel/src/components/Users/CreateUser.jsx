import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../ContextApi/contexts/UserContext";
import { useNavigate } from "react-router-dom";

function CreateUser(props) {
  const [userInfo, setUserInfo] = useState({
    name:'',
    email:'',
    password:'',
  });

  const userContext = useContext(UserContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const createfun = userContext.createUser
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("hi");
    await createfun(userInfo)
    props.setShowAddUser(false);
  };
  useEffect(()=>{

  },[])
  return (
    <>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: 600 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="modal"
        id="exampleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog " role="document">
          <div className="Modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create New User
                </h5>
                <motion.i
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="fa-solid fa-xmark fa-xl"
                  onClick={() => {
                    props.setShowAddUser(false);
                  }}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={userInfo.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="col-form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userInfo.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="col-form-label">
                      password:
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => {
                        props.setShowAddUser(false);
                      }}
                    >
                      Close
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CreateUser;
