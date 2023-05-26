import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productContext from "../../contexts/ProductContext";
import { useState } from "react";
import "./product.css";
import { motion } from "framer-motion";

function Product() {
  const { getProduct } = useContext(productContext);
  const { productId } = useParams();

  const [Product, setProduct] = useState({});
  const [Quantity, setQuantity] = useState(0);
  const url = `${process.env.REACT_APP_HOST}`;

  const getClickedProduct = async (id) => {
    const res = await getProduct(productId);
    setProduct(res);
  };

  useEffect(() => {
    getClickedProduct(productId);
  }, [productId]);

  return (
    <>
      <div className="container-fluid pt-5 mt-5">
        <div className="row">
          <div className="product-container">
            <div className="col-md-3 col-sm-12">
              <div className="imgDiv">
                <img
                  src={`${url}images/products/${Product.productImgUrl}`}
                  alt=""
                  className="img-fluid"
                />
                {Product.offerPrice !== "undefined" && (
                  <>
                    <h2 className="mt-2 text-sec">₹ {Product.offerPrice}</h2>
                    <del>{Product.originalPrice}</del>
                  </>
                )}
              </div>
            </div>

            <div className="col-md-5 col-sm-12 product-info">
              <h2 className="product_title">{Product.title}</h2>
              <hr style={{ backgroundColor: "#ff1744" }} />

              <p
                className="bl_text"
                dangerouslySetInnerHTML={{ __html: Product.description }}
              />
            </div>

            {Product.offerPrice !== "undefined" && (
              <div className="col-md-3 col-sm-12">
                <div className="price">
                  <h2>₹ {Product.offerPrice}</h2>
                  <del>{Product.originalPrice}</del>

                  <hr style={{ backgroundColor: "#ff1744" }} />

                  <div className="icon">
                    <i className="fa-solid fa-location-dot fa-2xl"></i>
                  </div>
                  <span className="deliver">
                    Deliver to :<p>Address</p>
                  </span>

                  <div className="counter">
                    <p>Quntity :</p>
                    <div className="con">
                      <button
                        className="counter-button"
                        type="button"
                        onClick={() =>
                          setQuantity(Quantity === 0 ? 0 : Quantity - 1)
                        }
                        id="minus"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>

                      <span className="counter-value" id="value">
                        {Quantity}
                      </span>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          duration: 0.1,
                          type: "spring",
                          stiffness: 400,
                          damping: 8,
                        }}
                        className="counter-button"
                        type="button"
                        id="plus"
                        onClick={() => setQuantity(Quantity + 1)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </motion.button>
                    </div>
                  </div>

                  <div className="btn-combo text-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        duration: 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 8,
                      }}
                      className="Btn btn1"
                    >
                      <i className="fa-solid fa-cart-shopping fa-lg" />
                      &nbsp;&nbsp;&nbsp;Add TO Cart
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.15 }}
                      transition={{
                        duration: 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 8,
                      }}
                      className="Btn btn2"
                    >
                      Buy Now &nbsp;&nbsp;&nbsp;
                      <i className="fas fa-angle-right arrow_go"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
