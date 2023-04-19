import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateBanner from "./CreateBanner";
import BannerContext from "../../ContextApi/contexts/BannerContext";

function BannerTable() {
  const [ShowCreateBanner, setShowCreateBanner] = useState(false);
  const [Banners, setBanners] = useState([]);
  const [render, forceUpdate] = useReducer((x) => x + 1, 0);

  const { getBanners } = useContext(BannerContext);

  useEffect(() => {
    getBanners().then((res) => {
      setBanners(res);
    });
  }, [render]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="page-title text-white">Banner Master</h4>
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
            <th>Title</th>
            <th>Sub Title</th>
            <th>Status</th>
            <th>Action</th>
            {/* <th>Salary</th> */}
          </tr>
        </thead>

        <tbody>
          {Banners.map((banner, index) => {
            return (
              <tr key={banner._id}>
                <th>{index + 1}</th>
                <th>{banner.title}</th>
                <th>{banner.subTitle}</th>
                <th>
                  <img
                    src={`${process.env.REACT_APP_HOST}images/banners/${banner.bannerImg}`}
                    className="rounded"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </th>
                <th>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    value={banner._id}
                    className="btn btn-success rounded-pill"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    className="btn btn-danger rounded-pill"
                  >
                    <i className="fa-solid fa-trash"></i>
                    Delete
                  </motion.button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="col-10">
        <div className="d-flex flex-row-reverse ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-primary rounded-pill"
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
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default BannerTable;
