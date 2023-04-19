import React, { useContext, useEffect, useReducer, useState } from "react";
import UserContext from "../../ContextApi/contexts/UserContext";
import EditUser from "./EditUser";
import { AnimatePresence, motion,} from "framer-motion";
import CreateUser from "./CreateUser";

function User() {
  const userContext = useContext(UserContext);
  const [ShowEdit, setShowEdit] = useState(false);
  const [ShowAddUser, setShowAddUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: " ",
    password: "",
    image:'',
    imageUrl: "",
  });
  const [Errors, setErrors] = useState([]);

  const [render, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    userContext.getUsersArray();
  }, [render]);

  useEffect(() => {
    console.log(userInfo.image);
  }, [userInfo.image]);

  const getuserbyid = userContext.getuserbyid;
  const handleClick = async (userId) => {
    console.log(userId);
    const res = await getuserbyid(userId);
    console.log(res)
    setUserInfo(res);
    console.log(userInfo)
    setShowEdit(!ShowEdit);
  };

  const deleteuserbyid = userContext.DeleteUserById;
  const deleteUser = async (userId) => {
    const res = await deleteuserbyid(userId);
    forceUpdate();
    console.log(res);
  };

  const handleChange = (e) => {
    if(e.target.name === 'image'){
    const file = e.target.files[0];
    setUserInfo((prevState) => ({
      ...prevState,
      image: file,
      imageUrl: URL.createObjectURL(file),
    }));
    }
    else{
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const updateUser = userContext.updateUser
  const handleUpdate = async(e) => {
    e.preventDefault();
    const res = await updateUser(userInfo)
    forceUpdate()
    if (!res.errors) {
      setShowEdit(!ShowEdit)
    } else {
      setErrors(res.errors);
      console.log(Errors);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="page-title text-white">Users</h4>
            </div>
          </div>
        </div>
      </div>
      <table
        id="fixed-header-datatable"
        className="table dt-responsive nowrap table-striped w-100"
      >
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>password</th>
            <th>Status</th>
            <th>Action</th>
            {/* <th>Salary</th> */}
          </tr>
        </thead>

        <tbody >
          {userContext.users.map((user, index) => {
            return (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>
                      <img
                        src={`${process.env.REACT_APP_HOST}images/profilePic/${user.profilePic}`}
                        className="img-fluid avatar-sm rounded-circle"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                </th>
                <th>{user.password}</th>
                <th>{user.name}</th>
                <th>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    value={user._id}
                    className="btn btn-success rounded-pill"
                    onClick={() => handleClick(user._id)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="btn btn-danger rounded-pill"
                    onClick={() => deleteUser(user._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                    Delete
                  </motion.button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AnimatePresence>
        {ShowEdit && (
          <EditUser
            setShowEdit={setShowEdit}
            userInfo={userInfo}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
            imgUrl={userInfo.imageUrl}
            Errors={Errors}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {ShowAddUser && (
          <CreateUser
            setShowAddUser={setShowAddUser}
            forceUpdate={forceUpdate}
          />
        )}
      </AnimatePresence>

      <div className="col-10">
        <div className="d-flex flex-row-reverse ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary rounded-pill"
            onClick={() => setShowAddUser(true)}
          >
            <i className="fa-solid fa-plus"></i>
            Create New User
          </motion.button>
        </div>
      </div>
    </>
  );
}

export default User;
