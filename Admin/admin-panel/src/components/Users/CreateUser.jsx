import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../ContextApi/contexts/UserContext";

function CreateUser(props) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: " ",
    password: "",
    image: "",
    imgUrl: "",
  });

  const [Counter, setCounter] = useState(0);
  const [Errors, setErrors] = useState([]);

  const userContext = useContext(UserContext);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setUserInfo((prevState) => ({
        ...prevState,
        image: file,
        imgUrl: URL.createObjectURL(file),
      }));
      console.log(userInfo.imgUrl);
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const createfun = userContext.createAdmin;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createfun(userInfo);
    setCounter(Counter + 1);
    if (!res.errors) {
      props.setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      props.forceUpdate();
      props.setShowAddUser(false);
    } else {
      setErrors(res.errors);
    }
  };

  useEffect(() => {
    console.log(userInfo.image);
  }, [userInfo.image]);
  
  return (
    <>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: "110vh" }}
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
                {Errors.map((err, i) => {
                  return (
                    <div key={i} className="text-danger text-center">
                      {err.msg}
                    </div>
                  );
                })}
                <form onSubmit={handleSubmit} autoComplete="off">
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
                        autoComplete="no-password"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="example-fileinput"
                      className="col-form-label"
                    >
                      Click to Upload New Image:
                    </label>

                    {userInfo.imgUrl ? (
                      <motion.img
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={userInfo.imgUrl}
                        alt=""
                        className="edit-img img-fluid avatar-md rounded-circle m-3"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    ) : (
                      <motion.img
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={`${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`}
                        alt=""
                        className="edit-img img-fluid avatar-md rounded-circle m-3"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    )}

                    <input
                      type="file"
                      id="fileInput"
                      name="image"
                      className="form-control d-none display-none"
                      accept="image/*"
                      onChange={(e) => handleChange(e)}
                    />
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
