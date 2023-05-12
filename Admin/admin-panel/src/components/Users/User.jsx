import React, { useContext, useEffect, useReducer, useState } from "react";
import UserContext from "../../ContextApi/contexts/UserContext";
import EditUser from "./EditUser";
import { AnimatePresence, motion } from "framer-motion";
import CreateUser from "./CreateUser";
import DataTable from "react-data-table-component";
import { TableStyle } from "../DataTable/CustomStyles";
import SuccessAlert from "../Alerts/SuccessAlert";
import { useOutletContext } from "react-router-dom";

function User(props) {
  const { setTitle } = useOutletContext();
  const userContext = useContext(UserContext);
  const [ShowEdit, setShowEdit] = useState(false);
  const [ShowAddUser, setShowAddUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: " ",
    password: "",
    image: "",
    imageUrl: "",
  });
  const [Errors, setErrors] = useState([]);
  const [Alert, setAlert] = useState({
    show: false,
    msg: "",
  });

  const [render, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setTitle(props.title)
    userContext.getAdminsArray();
  }, [render]);

  useEffect(() => {
    console.log(userInfo.image);
  }, [userInfo.image]);

  const getAdminbyid = userContext.getAdminbyid;
  const handleClick = async (userId) => {
    const res = await getAdminbyid(userId);
    if (!res.errors) {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      forceUpdate();
      setUserInfo(res);
      setShowEdit(!ShowEdit);
    } else {
      setErrors(res.errors);
    }
  };

  const deleteAdmin = userContext.DeleteAdmin;
  const deleteUser = async (userId) => {
    const res = await deleteAdmin(userId);
    if (!res.errors) {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      forceUpdate();
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setUserInfo((prevState) => ({
        ...prevState,
        image: file,
        imageUrl: URL.createObjectURL(file),
      }));
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const updateAdmin = userContext.updateAdmin;
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await updateAdmin(userInfo);
    if (!res.errors) {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      forceUpdate();
      setShowEdit(!ShowEdit);
    } else {
      setErrors(res.errors);
    }
  };

  const columns = [
    {
      name: "id",
      selector: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "Name",
      selector: (row) => <div>{row.name}</div>,
    },
    {
      name: "Email",
      selector: (row) => <div>{row.email}</div>,
    },
    {
      name: "Password",
      selector: (row) => <div>{row.password}</div>,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={
            row.profilePic !== ""
              ? `${process.env.REACT_APP_HOST}images/profilePic/${row.profilePic}`
              : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
          }
          className="img-fluid avatar-md rounded-circle"
          alt=""
          width="100%"
          height="100%"
        />
      ),
    },
    // {
    //   name: "status",
    //   selector: (row) => (row.active ? "Active" : "not Active"),
    // },
    {
      name: "Edit",
      selector: (row) => (
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          whileTap={{ scale: 0.9 }}
          type="button"
          value={row._id}
          className="btn btn-success rounded-pill"
          onClick={() => {
            handleClick(row._id);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
          Edit
        </motion.button>
      ),
      width: "100px",
    },
    {
      name: "delete",
      selector: (row) => (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-danger rounded-pill"
            onClick={() => {
              deleteUser(row._id);
            }}
          >
            <i className="fa-solid fa-trash"></i>
            Delete
          </motion.button>
        </>
      ),
    },
  ];
  

  return (
    <>

      <AnimatePresence>
        {Alert.show && <SuccessAlert Alert={Alert} setAlert={setAlert} />}
      </AnimatePresence>

      <DataTable
        columns={columns}
        data={userContext.users}
        customStyles={TableStyle}
        dense
        pagination
        responsive
        fixedHeader
        highlightOnHover
        fixedHeaderScrollHeight="450px"
      />

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
            Alert={Alert}
            setAlert={setAlert}
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
