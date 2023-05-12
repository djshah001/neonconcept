import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateProductCategory from "./CreateProductCategory";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";
import UpdateProductCategory from "./UpdateProductCategory";
import DataTable from "react-data-table-component";
import { TableStyle } from "../DataTable/CustomStyles";
import SuccessAlert from "../Alerts/SuccessAlert";
import { useOutletContext } from "react-router-dom";

function ProductCategory(props) {
  const { setTitle } = useOutletContext();
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
      setAlert((prev) => ({ ...prev, show: true, msg: response.msg }));
      // forceUpdate();
    } else {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    getProductCategory().then((res) => {
      setProductCategories(res);
    });
  }, [Alert, getProductCategory]);

  useEffect(() => {
    setTitle(props.title)
  },[])

  const columns = [
    {
      name: "id",
      selector: (row, index) => index + 1,
      // width: "100px",
    },
    {
      name: "title",
      selector: (row) => row.title,
      // width: "300px",
    },
    {
      name: "status",
      selector: (row) => (row.active ? "Active" : "not Active"),
    },
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
              handleDelete(row._id);
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
        data={ProductCategories}
        customStyles={TableStyle}
        fixedHeader
        pagination
        responsive
        highlightOnHover
        style={{ border: "10px solid #ddd" }}
      />

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
