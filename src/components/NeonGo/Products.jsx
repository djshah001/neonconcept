import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate();
  const navigateToProduct = () => {
    navigate(`./${props.id}`);
  };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.001 }}
        transition={{ duration: 0.3 }}
        className="bl_sec mb-5"
        id="news"
      >
        <div className="ca row">
          <div className="col-lg-4 col-md-4 col-sm-4 bl_img">
            <img
              src={props.imgurl}
              className="img-fluid "
              alt="thumb"
              onClick={navigateToProduct}
            />
          </div>

          <div className=" col-lg-7 col-sm-8 ">
            <div className="bl_main">
              <motion.h5
                className="bl_title"
                data-text={props.title}
                onClick={navigateToProduct}
                whileHover={{ scale: 1.1 }}
              >
                {props.title}
              </motion.h5>
            </div>
            <hr style={{ backgroundColor: "#ff1744" }} />
            <p
              className="bl_text"
              dangerouslySetInnerHTML={{ __html: props.smalldescription }}
            />

            {props.offerPrice !== "undefined" && (
              <div className="bl_ftr">
                <div className="ln1">
                  <div className="lns2">
                    <span className="usr_name">
                      Offer Price : &nbsp;&nbsp;₹ {props.offerPrice}
                    </span>
                    <span className="usr_date">
                      Original Price :&nbsp;&nbsp;
                      <del>₹{props.originalPrice}</del>
                    </span>
                  </div>
                </div>
                <div className="btns">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className=" buy-btn btn-1"
                  >
                    <div className="button_mai">
                      Buy Now&nbsp;&nbsp;&nbsp;
                      <i className="fas fa-angle-right arrow_go"></i>
                    </div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className=" buy-btn "
                  >
                    <div className="button_mai">
                      <i className="fa-solid fa-cart-shopping fa-lg"></i>
                      &nbsp;&nbsp;&nbsp; Add to cart
                    </div>
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Products;
