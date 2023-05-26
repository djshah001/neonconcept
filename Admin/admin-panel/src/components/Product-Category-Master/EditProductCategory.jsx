import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import ProductCategoryContext from "../../ContextApi/contexts/ProductCategoryContext";
import Spinner from "../Alerts/Spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AnimatePresence, motion } from "framer-motion";
import ErrorsAlert from "../Alerts/ErrorAlert";
import SuccessAlert from "../Alerts/SuccessAlert";

function EditProductCategory(props) {
  const { setTitle } = useOutletContext();
  const {
    GetSpecificProductcategory,
    createProductCategory,
    getProductCategory,
    UpdateProductcategory,
  } = useContext(ProductCategoryContext);

  const [Errors, setErrors] = useState("");
  const [Alert, setAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const [ProductCategoryInfo, setProductCategoryInfo] = useState({
    title: "",
    heading: "",
    topTitle: "",
    description: "",
    active: true
  });

  const getproductcategories = async () => {
    const res = await getProductCategory();
    setProductCategoryInfo(res);
  };

  const getproductcategory = async (id) => {
    setLoading(true);
    const res = await GetSpecificProductcategory(id);
    setProductCategoryInfo(res);
    setLoading(false);
  };

  useEffect(() => {
    setTitle(props.title);
    getproductcategories();
    if (id !== undefined) {
      getproductcategory(id);
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
      setProductCategoryInfo({
        ...ProductCategoryInfo,
        [e.target.name]: e.target.checked,
      });
    } else {
      setProductCategoryInfo({
        ...ProductCategoryInfo,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onEditorChange = (e) => {
    setProductCategoryInfo((prev) => ({ ...prev, description: e }));
  };

  const createProduct = async (ProductCategoryInfo) => {
    const res = await createProductCategory(ProductCategoryInfo);
    if (res.errors) {
      setErrors((prev) => ({ ...prev, show: true, errors: res.errors }));
    } else {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      navigate("../", { replace: true });
    }
  };

  const Updateproductcategory = async (id, ProductCategoryInfo) => {
    const res = await UpdateProductcategory(id, ProductCategoryInfo);
    if (res.errors) {
      setErrors((prev) => ({ ...prev, show: true, errors: res.errors }));
    } else {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      navigate("../", { replace: true });
    }
  };

  const handleSubmit = async (e, ProductCategoryInfo) => {
    e.preventDefault();
    if (id !== undefined) {
      Updateproductcategory(id, ProductCategoryInfo);
    } else {
      createProduct(ProductCategoryInfo);
    }
  };

  return (
    <>
      <div className="container form-Dj p-4 mb-4 rounded">
        {Loading && <Spinner />}
        {!Loading && (
          <form
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e, ProductCategoryInfo)}
          >
            <div className="row my-1">
              <div className="form-group col-md-5">
                <label htmlFor="title" className="col-form-label pb-2">
                  Title :
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="title"
                  name="title"
                  placeholder="Enter Title"
                  value={ProductCategoryInfo.title}
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
                  checked={ProductCategoryInfo.active}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-5">
                <label htmlFor="heading" className="col-form-label pb-2">
                  Heading :
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="heading"
                  name="heading"
                  placeholder="Enter heading"
                  value={ProductCategoryInfo.heading}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="topTitle" className="col-form-label pb-2">
                  Top Title :
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="topTitle"
                  name="topTitle"
                  placeholder="Enter Top Title"
                  value={ProductCategoryInfo.topTitle}
                  onChange={handleChange}
                  required
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
                    value={ProductCategoryInfo.description}
                    onChange={onEditorChange}
                    modules={{
                      toolbar: toolbarOptions,
                    }}
                  />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {Errors.show && (
                <ErrorsAlert Errors={Errors} setErrors={setErrors} />
              )}
            </AnimatePresence>

            <div className="row">
              <div className="col-md-6 text-start my-4">
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
              <div className="col-md-6 text-end my-4">
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
                  {id === undefined
                    ? "Add Product Category"
                    : "Update Product Category"}
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
    </>
  );
}

export default EditProductCategory;
