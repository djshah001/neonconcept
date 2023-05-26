import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";
import DataTable from "react-data-table-component";
import { TableStyle } from "../DataTable/CustomStyles";
import SuccessAlert from "../Alerts/SuccessAlert";
import { useNavigate, useOutletContext } from "react-router-dom";

function ProductCategory(props) {
  const navigate = useNavigate()
  const { setTitle } = useOutletContext();
  const { getProductCategory, DeleteProductcategory } = useContext(
    ProductCategoryContext
  );

  const [ProductCategories, setProductCategories] = useState();

  const [Errors, setErrors] = useState([]);
  const [Alert, setAlert] = useState({
    show: false,
    msg: "",
  });


  const handleClick = (id) => {
    navigate(`./update/${id}`)
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
    console.log('hi')
    setTitle(props.title)
  })

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
      name: "Heading",
      selector: (row) => (row.heading),
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


      <div className="col-10">
        <div className="d-flex flex-row-reverse ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary rounded-pill my-4"
            onClick={() => {
              navigate('./create')
            }}
          >
            <i className="fa-solid fa-plus"></i>
            Add New Product category
          </motion.button>
        </div>
      </div>

    </>
  );
}

export default ProductCategory;
