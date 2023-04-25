import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateProductCategory from "./CreateProductCategory";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";
import UpdateProductCategory from "./UpdateProductCategory";

function ProductCategory() {
  const { getProductCategory, DeleteProductcategory } = useContext(
    ProductCategoryContext
  );

  const [ShowCreateProductCategory, setShowCreateProductCategory] =
    useState(false);
  const [updateProductCategory, setUpdateProductCategory] = useState({
    id: "",
    show: false,
  });

  const [ProductCategories, setProductCategories] = useState();

  const [Errors, setErrors] = useState([]);
  const [Alert, setAlert] = useState({
    show: false,
    msg: "",
  });

  const [render, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleClick = (id) => {
    setUpdateProductCategory({
      ...updateProductCategory,
      id: id,
      show: true,
    });
  };

  const handleDelete = async (id) => {
    const response = await DeleteProductcategory(id);
    if (!response.errors) {
      setAlert((prev) => ({ ...prev, show: true, msg: response }));
      forceUpdate();
    } else {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    getProductCategory().then((res) => {
      setProductCategories(res);
    });
  }, [render]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [Alert]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="page-title text-white">Product Category Master</h4>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {Alert.show && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="alert alert-danger alert-dismissible bg-success text-white border-0 fade show"
            role="alert"
          >
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setAlert({ ...Alert, show: false });
              }}
            ></button>
            <strong>Success - {Alert.msg.msg}</strong>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="dataTables_scroll"
        style={{
          position: "relative",
          overflow: "auto",
          maxHeight: "450px",
          width: "100%",
        }}
      >
        <table
          id="scroll-vertical-datatable"
          className="table table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline collapsed"
        >
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {ProductCategories &&
              ProductCategories.map((productsCategory, index) => {
                return (
                  <tr key={productsCategory._id}>
                    <th>{index + 1}</th>

                    {productsCategory.title !== undefined ? (
                      <th>{productsCategory.title}</th>
                    ) : (
                      <th>Not Given</th>
                    )}

                    {productsCategory.active ? (
                      <th>active</th>
                    ) : (
                      <th>not active</th>
                    )}

                    <td>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        value={productsCategory._id}
                        className="btn btn-success rounded-pill"
                        onClick={() => {
                          handleClick(productsCategory._id);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                        Edit
                      </motion.button>
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
                          handleDelete(productsCategory._id);
                        }}
                      >
                        <i className="fa-solid fa-trash"></i>
                        Delete
                      </motion.button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {updateProductCategory.show && (
          <UpdateProductCategory
            setUpdateProductCategory={setUpdateProductCategory}
            forceUpdate={forceUpdate}
            setAlert={setAlert}
            id={updateProductCategory.id}
          />
        )}
      </AnimatePresence>

      <div className="col-10">
        <div className="d-flex flex-row-reverse ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary rounded-pill my-4"
            onClick={() => {
              setShowCreateProductCategory(!ShowCreateProductCategory);
            }}
          >
            <i className="fa-solid fa-plus"></i>
            Add New Product category
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {ShowCreateProductCategory && (
          <CreateProductCategory
            setShowCreateProductCategory={setShowCreateProductCategory}
            setAlert={setAlert}
            Alert={Alert}
            forceUpdate={forceUpdate}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCategory;
