import React, { useContext, useEffect } from "react";
import LoginContext from "../../ContextApi/contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const context = useContext(LoginContext);
  const navigate = useNavigate();
  const loginFunc = context.login;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await loginFunc();
  };

  useEffect(() => {
    if (context.res.success) {
      navigate("/");
      context.setRes({ success: "" });
    }
  }, [context, context.res.success, navigate]);

  return (
    <div className="authentication-bg bg-gray">
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                <div
                  className="card-header text-center bg-black"
                  style={{ borderRadius: "5rem 5rem 0 0" }}
                >
                  <img src="/images/logo-light.png" alt="logo" width="50%" />
                </div>

                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto ">
                    <h4 className="text-dark-50 text-center pb-0 fw-bold text-black">
                      Sign In
                    </h4>
                    <p className="text-muted mb-4">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>

                  {context.res.success === false && (
                    <motion.p
                    initial={{height:0}}
                    animate={{ scale: 1.5 ,height:'auto'}}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }} 
                    className="text-danger text-center">Invalid Email & Password</motion.p>
                  )}

                  <form onSubmit={HandleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="emailaddress"
                        className="form-label mb-3 text-black"
                      >
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required=""
                        placeholder="Enter your email"
                        name="email"
                        value={context.User.email}
                        onChange={context.handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      {/* <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a> */}
                      <label
                        htmlFor="password"
                        className="form-label mb-3
                      text-black"
                      >
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          name="password"
                          value={context.User.password}
                          onChange={context.handleChange}
                        />
                        {/* <div className="input-group-text" data-password="false">
                          <span className="password-eye"></span>
                        </div> */}
                      </div>
                    </div>

                    <div className="mb-3 mb-0 text-center">
                      <motion.button 
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-submit" type="submit">
                        {" "}
                        Log In{" "}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-alt">
        {new Date().getFullYear()} © neonconcept.com
      </footer>
      <script src="assets/js/vendor.min.js"></script>
      <script src="assets/js/app.min.js"></script>
    </div>
  );
}

export default Login;
