import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useReducer, useState } from "react";
import CreateBanner from "./CreateBanner";
import BannerContext from "../../ContextApi/contexts/BannerContext";
import UpdateBanner from "./UpdateBanner";

function BannerTable() {
  const [ShowCreateBanner, setShowCreateBanner] = useState(false);
  const [Banners, setBanners] = useState([]);
  const [Showmsg, setShowmsg] = useState(false);
  const [render, forceUpdate] = useReducer((x) => x + 1, 0);
  const [updateBanner, setupdateBanner] = useState({
    id: "",
    show: false,
  });

  const { getBanners,deleteBanner } = useContext(BannerContext);

  const handleClick = (id) => {
    setupdateBanner({
      ...updateBanner,
      id: id,
      show: true,
    });
  };

  const handleDelete = async(id) => {
    const res = await deleteBanner(id)
    if(res){
      setShowmsg(!Showmsg);
      forceUpdate()
    }
  };

  useEffect(() => {
    getBanners().then((res) => {
      setBanners(res);
    });
  }, [render]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowmsg(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [Showmsg]);

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
        {Showmsg && (
          <motion.div
            initial={{ opacity: 0 ,x:300}}
            animate={{ opacity: 1,x:0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring",duration: 0.5}}
            className="alert alert-danger alert-dismissible bg-success text-white border-0 fade show"
            role="alert"
          >
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setShowmsg(false);
              }}
            ></button>
            <strong>Success - </strong> Banner Deleted
          </motion.div>
        )}
      </AnimatePresence>

      <table
        id="fixed-header-datatable"
        className="table dt-responsive nowrap table-striped w-100"
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
                <th>{index + 1}</th>
                {banner.topTitle !== undefined ? (
                  <th>{banner.topTitle}</th>
                ) : (
                  <th>Not Given</th>
                )}
                {banner.title !== undefined ? (
                  <th>{banner.title}</th>
                ) : (
                  <th>Not Given</th>
                )}
                {banner.subTitle !== undefined ? (
                  <th>{banner.subTitle}</th>
                ) : (
                  <th>Not Given</th>
                )}
                {/* <th>{banner.subTitle}</th> */}
                <th>
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
                </th>
                <th>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AnimatePresence>
        {updateBanner.show && (
          <UpdateBanner
            setupdateBanner={setupdateBanner}
            forceUpdate={forceUpdate}
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
