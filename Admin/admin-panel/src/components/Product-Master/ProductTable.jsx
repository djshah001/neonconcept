import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { TableStyle } from "../DataTable/CustomStyles";
import { AnimatePresence, motion } from "framer-motion";
import ProductContext from "../../ContextApi/contexts/ProductContext";
import SuccessAlert from "../Alerts/SuccessAlert";
import Spinner from "../Alerts/Spinner";
import { EditBtn } from "../Btns/EditBtn";
import { DeleteBtn } from "../Btns/DeleteBtn";

function ProductTable(props) {
  const navigate = useNavigate();
  const { setTitle } = useOutletContext();
  const [Products, setProducts] = useState([]);
  const [Errors, setErrors] = useState("");
  const [Alert, setAlert] = useState("");
  const [Loading, setLoading] = useState(false);

  const { getProducts, DeleteProduct } = useContext(ProductContext);

  const handleClick = async (id) => {
    navigate(`./editproduct/${id}`);
  };

  const handleDelete = async (id) => {
    console.log("hi");
    const res = await DeleteProduct(id);
    if (!res.errors) {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
    } else {
      setErrors(res.errors);
      console.log(Errors);
    }
  };

  const columns = [
    {
      name: "id",
      selector: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "title",
      selector: (row) => <div>{row.title}</div>,
      // width: "200px",
    },
    // {
    //   name: "Description",
    //   selector: (row) => <div>{ReactHtmlParser(row.description)}</div>,
    //   width: "200px",
    // },
    {
      name: "Offer Price",
      selector: (row) => (
        <div>
          {row.offerPrice === "undefined" ? "not given" : row.offerPrice}
        </div>
      ),
      // width: "100px",
    },
    {
      name: "Original Price",
      selector: (row) => (
        <div>
          {row.originalPrice === "undefined" ? "not given" : row.originalPrice}
        </div>
      ),
      // width: "100px",
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={
            row.productImgUrl
              ? `${process.env.REACT_APP_HOST}images/products/${row.productImgUrl}`
              : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
          }
          // className="rounded"
          alt=""
          width="100%"
          height="100%"
        />
      ),
    },
    {
      name: "status",
      selector: (row) => (row.active ? "Active" : "not Active"),
      width: "100px",
    },
    {
      name: "Edit",
      selector: (row) => <EditBtn handleClick={handleClick} id={row._id} />,
      width: "100px",
    },
    {
      name: "delete",
      selector: (row) => (
        <>
          <DeleteBtn handleDelete={handleDelete} id={row._id} />
        </>
      ),
    },
  ];

  const getproducts = async () => {
    setLoading(true);
    const res = await getProducts();
    setProducts(res);
    setLoading(false);
  };

  useEffect(() => {
    setTitle(props.title);
    getproducts();
  }, [Alert.show]);

  const SubHeader = () => (
    <NavLink to="./createproduct">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-primary rounded-pill mx-3"
      >
        <i className="fa-solid fa-plus"></i>
        Add New Product
      </motion.div>
    </NavLink>
  );

  return (
    <>
      <AnimatePresence>
        {Alert.show && <SuccessAlert Alert={Alert} setAlert={setAlert} />}
      </AnimatePresence>
      <DataTable
        columns={columns}
        data={Products}
        customStyles={TableStyle}
        dense
        pagination
        responsive
        fixedHeader
        // highlightOnHover
        fixedHeaderScrollHeight="55vh"
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        subHeaderComponent={<SubHeader />}
        progressPending={Loading}
        progressComponent={<Spinner />}
      />

      {/* <div className="col-10">
        <div className="d-flex flex-row-reverse ">
          <NavLink to="./createproduct">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-primary rounded-pill my-4"
            >
              <i className="fa-solid fa-plus"></i>
              Add New Product
            </motion.div>
          </NavLink>
        </div>
      </div> */}
    </>
  );
}

export default ProductTable;
