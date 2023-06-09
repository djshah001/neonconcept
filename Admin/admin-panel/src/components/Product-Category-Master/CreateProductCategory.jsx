import { motion } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";

function CreateProductCategory(props) {

  const productCategory = useContext(ProductCategoryContext)
  const [Errors,setErrors] = useState([])

  const [ProductCategoryInfo, setProductCategoryInfo] = useState({
    title: "",
    active: true,
  });


  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await productCategory.createProductCategory(ProductCategoryInfo)
    console.log(res);
    if (!res.errors) {
      props.setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      props.setShowCreateProductCategory(false);
      // props.forceUpdate();
    }
    else{
      setErrors(res.errors)
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "active") {
      setProductCategoryInfo({
        ...ProductCategoryInfo,
        active: e.target.checked,
      });  
    } 
    else {
      setProductCategoryInfo({
        ...ProductCategoryInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      exit={{ y: "110vh" }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create New Product Category
              </h5>
              <motion.i
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="fa-solid fa-xmark fa-xl"
                onClick={() => {
                  props.setShowCreateProductCategory(false);
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
                  <label htmlFor="title" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={ProductCategoryInfo.title}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Title"
                    required
                  />
                </div>

                <div className="form-check-reverse form-switch my-3">
                  <label className="form-check-label " htmlFor="customSwitch1">
                    Active?
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input mx-2"
                    id="customSwitch1"
                    name="active"
                    checked={ProductCategoryInfo.active}
                    onChange={handleChange}
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
                      props.setShowCreateProductCategory(false);
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
                    Create
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

export default CreateProductCategory;
