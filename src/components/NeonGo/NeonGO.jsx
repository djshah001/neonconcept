import React, { useEffect, useContext, useState } from "react";
import productContext from "../../contexts/ProductContext";
import Navhead from "../Navhead";
import Products from "./Products";
import { useParams } from "react-router-dom";
function NeonGO(props) {
  const { id, endpoint } = useParams();
  const [products, setProducts] = useState([]);
  const [Productcategory, setProductcategory] = useState([]);

  const { getSpecificCatagoriesProducts, GetSpecificProductcategory } =
    useContext(productContext);

  useEffect(() => {
    getSpecificCatagoriesProducts(id).then((products) => setProducts(products));
    GetSpecificProductcategory(id).then((productcategory) =>
      setProductcategory(productcategory)
    );
    console.log(id, endpoint);
  }, [endpoint]);

  // console.log(products)

  return (
    <>
      <Navhead title={Productcategory.title} route={Productcategory.title} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 cnt_head">
            <span className="sub_head">{Productcategory.topTitle}</span>
            <h2 className="s_head">{Productcategory.heading}</h2>
            <p
              className="h_body"
              dangerouslySetInnerHTML={{ __html: Productcategory.description }}
            ></p>
          </div>
        </div>

        {/* <div className="row"> */}
        {products.map((product, i) => {
          return (
            <Products
              key={i}
              imgurl={
                product.productImgUrl
                  ? `${process.env.REACT_APP_HOST}images/products/${product.productImgUrl}`
                  : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
              }
              id={product._id}
              title={product.title}
              description={product.description}
              smalldescription={product.smalldescription}
              originalPrice={product.originalPrice}
              offerPrice={product.offerPrice}
            />
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}

export default NeonGO;
