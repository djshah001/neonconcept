import { motion } from "framer-motion";
import React from "react";

function EditUser(props) {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "100vh" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="modal"
      id="exampleModal"
      tabIndex="-1"
    >
      <div className="modal-dialog " role="document">
        <div className="Modal-content">
          <div className="modal-body">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <motion.i
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="fa-solid fa-xmark fa-xl"
                onClick={() => {
                  props.setShowEdit(false);
                }}
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={props.userInfo.name}
                    onChange={(e) => props.handleChange(e)}
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
                    value={props.userInfo.email}
                    onChange={(e) => props.handleChange(e)}
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
                      value={props.userInfo.password}
                      onChange={(e) => props.handleChange(e)}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="example-fileinput" className="col-form-label">
                    Click to Upload New Image:
                  </label>

                  {props.imgUrl?
                    <motion.img
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    src={props.imgUrl}
                    alt=""
                    className="edit-img img-fluid avatar-md rounded-circle m-3"
                    onClick={() => document.getElementById("fileInput").click()}
                  />
                  :<motion.img
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    src={`${process.env.REACT_APP_HOST}images/profilePic/${props.userInfo.profilePic}`}
                    alt=""
                    className="edit-img img-fluid avatar-md rounded-circle m-3"
                    onClick={() => document.getElementById("fileInput").click()}
                  />}

                  <input
                    type="file"
                    id="fileInput"
                    name="image"
                    className="form-control d-none display-none"
                    accept="image/*"
                    onChange={(e) => props.handleChange(e)}
                  />
                </div>

                <div className="modal-footer">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => {
                      props.setShowEdit(false);
                    }}
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                      props.handleUpdate(e);
                    }}
                  >
                    Update
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EditUser;
