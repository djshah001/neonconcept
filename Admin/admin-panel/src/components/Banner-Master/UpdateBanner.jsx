import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import BannerContext from "../../ContextApi/contexts/BannerContext";

function UpdateBanner(props) {
  const { getBannerById, updateBanner } = useContext(BannerContext);

  const [Errors, setErrors] = useState([]);
  const [BannerInfo, setBannerInfo] = useState({
    topTitle: "",
    title: "",
    subTitle: "",
    image: "",
    imgUrl: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateBanner(BannerInfo);
    if (result) {
      props.setAlert((prev) => ({ ...prev, show: true, msg: result }));
      props.forceUpdate();
      props.setupdateBanner({ show: false });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setBannerInfo((prevState) => ({
        ...prevState,
        image: file,
        imgUrl: URL.createObjectURL(file),
      }));
      console.log(BannerInfo.imgUrl);
    } else {
      setBannerInfo({ ...BannerInfo, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    getBannerById(props.id).then((banner) => {
      setBannerInfo(banner);
    });
  }, []);
  // console.log(BannerInfo)

  return (
    <>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: "110vh" }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-scrollable " role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Banner
                </h5>
                <motion.i
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="fa-solid fa-xmark fa-xl"
                  onClick={() => {
                    props.setupdateBanner({ show: false });
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

                {/* <div
                  className="alert alert-success alert-dismissible bg-success text-white border-0 fade show"
                  role="alert"
                >
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                  <strong>Success - </strong> A simple success alert—check it
                  out!
                </div> */}

                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="topTitle" className="col-form-label">
                      Top Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="topTitle"
                      value={BannerInfo.topTitle}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="title" className="col-form-label">
                      Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={BannerInfo.title}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Title"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subTitle" className="col-form-label">
                      Sub Title :
                    </label>
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Enter Sub Title"
                        id="subTitle"
                        name="subTitle"
                        value={BannerInfo.subTitle}
                        onChange={(e) => handleChange(e)}
                        required
                        style={{ height: "100px" }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="example-fileinput"
                      className="col-form-label"
                    >
                      Click to Upload New Image:
                    </label>

                    {BannerInfo.imgUrl !== undefined ? (
                      <motion.img
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={BannerInfo.imgUrl}
                        alt=""
                        className="rounded m-3"
                        width="50%"
                        height="50%"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    ) : (
                      <motion.img
                        whileHover={{ scale: 1.3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src={`${process.env.REACT_APP_HOST}images/banners/${BannerInfo.bannerImg}`}
                        alt=""
                        className="rounded m-3"
                        width="50%"
                        height="50%"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      />
                    )}

                    <input
                      type="file"
                      id="fileInput"
                      name="image"
                      className="form-control d-none display-none"
                      accept="image/*"
                      onChange={(e) => handleChange(e)}
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
                        props.setupdateBanner({ show: false });
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
                      Update
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default UpdateBanner;
