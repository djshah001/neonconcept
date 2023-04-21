import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateBanner from "./CreateBanner";
import BannerContext from "../../ContextApi/contexts/BannerContext";
import UpdateBanner from "./UpdateBanner";

function BannerTable() {
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

  useEffect(() => {
    getBanners().then((res) => {
      setBanners(res);
    });
  }, [render]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [Alert.show]);

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
              <th>Top Title</th>
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
                  <td>{index + 1}</td>
                  {banner.topTitle !== undefined ? (
                    <td>{banner.topTitle}</td>
                  ) : (
                    <td>Not Given</td>
                  )}
                  {banner.title !== undefined ? (
                    <td className="col-1">{banner.title}</td>
                  ) : (
                    <td>Not Given</td>
                  )}
                  {banner.subTitle !== undefined ? (
                    <td className="col-1">{banner.subTitle}</td>
                  ) : (
                    <td>Not Given</td>
                  )}
                  {/* <th>{banner.subTitle}</th> */}
                  <td className="col-1">
                    <img
                      src={
                        banner.bannerImg !== ""
                          ? `${process.env.REACT_APP_HOST}images/banners/${banner.bannerImg}`
                          : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
                      }
                      className="rounded"
                      alt=""
                      width="100%"
                      height="100%"
                    />
                  </td>
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
                      value={banner._id}
                      className="btn btn-success rounded-pill"
                      onClick={() => {
                        handleClick(banner._id);
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
                        handleDelete(banner._id);
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
