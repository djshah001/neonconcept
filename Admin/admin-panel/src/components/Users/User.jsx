import React, { useContext, useEffect } from "react";
import UserContext from "../../ContextApi/contexts/UserContext";
import { NavLink } from "react-router-dom";

function User() {
  const userContext = useContext(UserContext);
  useEffect(() => {
    userContext.getUsersArray();
  }, []);
  return (
    <div className="content-page">
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
            <th>Status</th>
            <th>Action</th>
            {/* <th>Salary</th> */}
          </tr>
        </thead>

        <tbody>
          {userContext.users.map((user, index) => {
            return (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.name}</th>
                <th>{user.name}</th>
                <th>
                  <NavLink
                    type="button"
                    className="btn btn-success rounded-pill"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Edit
                  </NavLink>
                  <NavLink
                    type="button"
                    className="btn btn-danger rounded-pill"
                  >
                    <i className="fa-solid fa-trash"></i>
                    Delete
                  </NavLink>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
