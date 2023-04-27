import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateProductCategory from "./CreateProductCategory";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";
import UpdateProductCategory from "./UpdateProductCategory";
import DataTable, { createTheme } from "react-data-table-component";

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

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#252020",
        borderBottom: "1px solid #fff",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "700",
      },
    },
    // cells: {
    //   style: {
    //     backgroundColor: "#121212",
    //     color: "#fff",
    //     fontSize: "14px",
    //     fontWeight: "400",
    //   },
    // },
    rows: {
      style: {
        backgroundColor: "#121212",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "500",
        padding: "20px 0",
        transition: "all 0.3s ease-in-out",
      },
      // highlightOnHoverStyle: {
      //   backgroundColor: "#d9edf7",
      //   color: "#121212",
      //   transition: "all 0.3s ease-in-out",
      // },
    },
    pagination: {
      style: {
        backgroundColor: "#0b0b0b",
        color: "#aaa",
        fontSize: "12px",
      },
    },
  };

  createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#002b36",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(193, 172, 172, 0.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

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

      <DataTable
        // title="Product Categories"
        columns={columns}
        data={ProductCategories}
        customStyles={customStyles}
        fixedHeader
        pagination
        responsive
        highlightOnHover
        theme="solarized"
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
