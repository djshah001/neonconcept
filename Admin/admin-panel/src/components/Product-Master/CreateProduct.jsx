import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import ProductContext from "../../ContextApi/contexts/ProductContext";
import { AnimatePresence, motion } from "framer-motion";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SuccessAlert from "../Alerts/SuccessAlert";
import ErrorsAlert from "../Alerts/ErrorAlert";
import Spinner from "../Alerts/Spinner";

function CreateProduct(props) {
  const { setTitle } = useOutletContext();
  const { getProductCategories, addProduct, getProduct, UpdateProduct } =
    useContext(ProductContext);
  const [ProductCategories, setProductCategories] = useState([]);
  const [Errors, setErrors] = useState("");
  const [Alert, setAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const [ProductInfo, setProductInfo] = useState({
    productCategoryId: "",
    title: "",
    active: true,
    description: "",
    readyToBuy: true,
    offerPrice: undefined,
    originalPrice: undefined,
    image: null,
    imgUrl: "",
  });

  const getproductcategories = async () => {
    const res = await getProductCategories();
    setProductCategories(res);
  };

  const getproduct = async () => {
    setLoading(true);
    const res = await getProduct(id);
    setProductInfo(res);
    setLoading(false);
  };

  useEffect(() => {
    setTitle(props.title);
    getproductcategories();
    if (id !== undefined) {
      getproduct();
    }
  }, []);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block", "link", "image"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: [] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  const handleChange = async (e) => {
    if (e.target.type === "checkbox") {
      setProductInfo({
        ...ProductInfo,
        [e.target.name]: e.target.checked,
      });
      if (e.target.name === "readyToBuy" && !e.target.checked) {
        setProductInfo({
          ...ProductInfo,
          [e.target.name]: e.target.checked,
          originalPrice: undefined,
          offerPrice: undefined,
        });
      }
    } else if (e.target.type === "file") {
      const file = e.target.files[0];
      const imgUrl = await URL.createObjectURL(file);
      setProductInfo((prevState) => ({
        ...prevState,
        image: file,
        imgUrl: imgUrl,
      }));
    } else {
      setProductInfo({
        ...ProductInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onEditorChange = (e) => {
    setProductInfo((prev) => ({ ...prev, description: e }));
  };

  const createProduct = async (productInfo) => {
    const res = await addProduct(productInfo);
    if (res.errors) {
      setErrors((prev) => ({ ...prev, show: true, errors: res.errors }));
    } else {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      navigate("../", { replace: true });
    }
  };

  const updateProduct = async (id, productInfo) => {
    const res = await UpdateProduct(id, productInfo);
    if (res.errors) {
      setErrors((prev) => ({ ...prev, show: true, errors: res.errors }));
    } else {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      navigate("../", { replace: true });
    }
  };

  const handleSubmit = async (e, productInfo) => {
    e.preventDefault();
    if (id !== undefined) {
      updateProduct(id, productInfo);
    } else {
      createProduct(productInfo);
    }
  };

  return (
    <div className="container form-Dj p-4 mb-4 rounded">
      {Loading && <Spinner />}
      {!Loading && (
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e, ProductInfo)}>
          <div className="row my-1">
            <div className="form-group col-md-4">
              <label htmlFor="title" className="col-form-label pb-2">
                Product Category :
              </label>
              <select
                className="form-control  select2"
                data-toggle="select2"
                name="ProductCategoryId"
                onChange={handleChange}
                defaultValue={ProductInfo.ProductCategoryId}
              >
                <option>Product Category</option>
                {ProductCategories.map((productCategory) => {
                  if (productCategory.active) {
                    return (
                      <option
                        key={productCategory._id}
                        value={productCategory._id}
                      >
                        {productCategory.title}
                      </option>
                    );
                  }
                  return null;
                })}
              </select>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="title" className="col-form-label pb-2">
                Title :
              </label>
              <input
                type="text"
                className="form-control "
                id="title"
                name="title"
                placeholder="Enter Title"
                value={ProductInfo.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-check form-switch col-md-2 ">
              <label className="form-check-label" htmlFor="customSwitch1">
                Active ? :
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                id="customSwitch1"
                name="active"
                checked={ProductInfo.active}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row my-2">
            <div className="form-group col-md-12">
              <label htmlFor="title" className="col-form-label pb-2">
                Product Description :
              </label>
              <div className="bg-light text-black">
                <ReactQuill
                  theme="snow"
                  value={ProductInfo.description}
                  onChange={onEditorChange}
                  modules={{
                    toolbar: toolbarOptions,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-check form-switch col-md-2 my-2">
              <label className="form-check-label" htmlFor="customSwitch1">
                Ready to buy :
              </label>
              <input
                type="checkbox"
                className="form-check-input mx-1"
                id="customSwitch1"
                name="readyToBuy"
                checked={ProductInfo.readyToBuy}
                onChange={handleChange}
              />
            </div>
            <AnimatePresence>
              {ProductInfo.readyToBuy && (
                <motion.div
                  className="row"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="form-group col-md-4">
                    <label htmlFor="Original" className="col-form-label pb-2">
                      Original Price :
                    </label>
                    <input
                      type="text"
                      id="Original"
                      className="form-control "
                      name="originalPrice"
                      placeholder="Enter Price"
                      value={
                        ProductInfo.originalPrice === "undefined"
                          ? undefined
                          : ProductInfo.originalPrice
                      }
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="Offer" className="col-form-label pb-2">
                      Offer Price :
                    </label>
                    <input
                      type="text"
                      id="Offer"
                      className="form-control"
                      name="offerPrice"
                      placeholder="Enter Price"
                      value={
                        ProductInfo.offerPrice === "undefined"
                          ? undefined
                          : ProductInfo.offerPrice
                      }
                      onChange={handleChange}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="form-group col-md-12 my-2">
              <label
                htmlFor="example-fileinput"
                className="col-form-label pb-2"
              >
                Click to Upload New Product Imags:
              </label>
              <br />
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                src={
                  ProductInfo.imgUrl
                    ? ProductInfo.imgUrl
                    : ProductInfo.productImgUrl
                    ? `${process.env.REACT_APP_HOST}images/products/${ProductInfo.productImgUrl}`
                    : `${process.env.REACT_APP_HOST}images/profilePic/OIP.jpeg`
                }
                alt=""
                className="rounded"
                width="20%"
                height="70%"
                onClick={() => document.getElementById("fileInput").click()}
              />

              <input
                type="file"
                id="fileInput"
                name="ProductImage"
                className="form-control d-none display-none"
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <AnimatePresence>
            {Errors.show && (
              <ErrorsAlert Errors={Errors} setErrors={setErrors} />
            )}
          </AnimatePresence>

          <div className="row">
            <div className="col-md-6 text-end my-4">
              <motion.button
                whileHover={{ scale: 1.3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  navigate("../");
                }}
              >
                Cancel
              </motion.button>
            </div>
            <div className="col-md-6 text-strat my-4">
              <motion.button
                whileHover={{ scale: 1.3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                type="submit"
                className="btn btn-primary"
              >
                {id === undefined ? "Add Product" : "Update Product"}
              </motion.button>
            </div>
            <div className="modal-footer"></div>
          </div>
        </form>
      )}
      <AnimatePresence>
        {Alert.show && <SuccessAlert Alert={Alert} setAlert={setAlert} />}
      </AnimatePresence>
    </div>
  );
}

export default CreateProduct;
