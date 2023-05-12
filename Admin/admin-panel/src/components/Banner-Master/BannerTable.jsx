import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateBanner from "./CreateBanner";
import BannerContext from "../../ContextApi/contexts/BannerContext";
import UpdateBanner from "./UpdateBanner";
import DataTable from "react-data-table-component";
import { TableStyle } from "../DataTable/CustomStyles";
import { useOutletContext } from "react-router-dom";

function BannerTable(props) {
  const { setTitle } = useOutletContext();
  const [ShowCreateBanner, setShowCreateBanner] = useState(false);
  const [Banners, setBanners] = useState([]);
  const [Alert, setAlert] = useState({
    show: false,
    msg: "",
  });
  const [render, forceUpdate] = useReducer((x) => x + 1, 0);
  const [updateBanner, setupdateBanner] = useState({
    id: "",
    show: false,
  });

  const { getBanners, deleteBanner } = useContext(BannerContext);

  const handleClick = (id) => {
    setupdateBanner({
      ...updateBanner,
      id: id,
      show: true,
    });
  };

  const handleDelete = async (id) => {
    const res = await deleteBanner(id);
    if (res) {
      setAlert({ ...Alert, show: true, msg: res });
      forceUpdate();
    }
  };

  const columns = [
    {
      name: "id",
      selector: (row, index) => index + 1,
      width: "100px",
    },
    {
      name: "Top Title",
      selector: (row) => <div>{row.topTitle}</div>,
    },
    {
      name: "title",
      selector: (row) => <div>{row.title}</div>,
      width: "300px",
    },
    {
      name: "Sub Title",
      selector: (row) => <div>{row.subTitle}</div>,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          src={
            row.bannerImg !== ""
              ? `${process.env.REACT_APP_HOST}images/banners/${row.bannerImg}`
              : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
          }
          className="rounded"
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



  const ExpandedComponent = ({ data }) => (
    <div
      className="bg-dark"
      style={{
        padding: "20px",
      }}
    >
      <table className="table dt-responsive nowrap table-striped w-100">
        <thead>
          <tr>
            <th>Top Title</th>
            <th> Title </th>
            <th>Sub Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{data.topTitle}</th>
            <th>{data.title}</th>
            <th>{data.subTitle}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );

  useEffect(() => {
    setTitle(props.title)
    getBanners().then((res) => {
      setBanners(res);
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
        columns={columns}
        data={Banners}
        customStyles={TableStyle}
        dense
        pagination
        responsive
        fixedHeader
        expandableRows
        expandOnRowClicked
        expandableRowsHideExpander
        highlightOnHover
        expandableRowsComponent={ExpandedComponent}
        fixedHeaderScrollHeight="400px"
      />

      <AnimatePresence>
        {updateBanner.show && (
          <UpdateBanner
            setupdateBanner={setupdateBanner}
            forceUpdate={forceUpdate}
            setAlert={setAlert}
            id={updateBanner.id}
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
              setShowCreateBanner(!ShowCreateBanner);
            }}
          >
            <i className="fa-solid fa-plus"></i>
            Add New Banner
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {ShowCreateBanner && (
          <CreateBanner
            setShowCreateBanner={setShowCreateBanner}
            forceUpdate={forceUpdate}
            setAlert={setAlert}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default BannerTable;
