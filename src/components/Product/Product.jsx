import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productContext from "../../contexts/ProductContext";
import { useState } from "react";
import "./product.css";

function Product() {
  const { getProduct } = useContext(productContext);
  const { id } = useParams();

  const [Product, setProduct] = useState({});
  const [Quantity, setQuantity] = useState(0);
  const url = `${process.env.REACT_APP_HOST}`;

  const getClickedProduct = async (id) => {
    const res = await getProduct(id);
    setProduct(res);
  };

  useEffect(() => {
    getClickedProduct(id);
  }, []);

  return (
    <>
      <div className="container-fluid row product-container">
        <div className="col-md-3 col-sm-12">
          <img
            src={`${url}images/products/${Product.productImgUrl}`}
            alt=""
            srcset=""
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 col-sm-12 product-info">
          <h2 className="">{Product.title}</h2>
          <hr style={{ backgroundColor: "#ff1744" }} />

          <p
            className="bl_text"
            dangerouslySetInnerHTML={{ __html: Product.description }}
          />
        </div>

        <div className="col-md-3 col-sm-12 price">
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
                onClick={() => setQuantity(Quantity === 0 ? 0 : Quantity - 1)}
                id="minus"
              >
                <i class="fa-solid fa-minus"></i>
              </button>

              <span className="counter-value" id="value">
                {Quantity}
              </span>

              <button
                className="counter-button"
                type="button"
                id="plus"
                onClick={() => setQuantity(Quantity + 1)}
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="btn-combo text-center">
            <button className="Btn btn1">Add TO Cart</button>
            <button className="Btn btn2">Buy Now </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
