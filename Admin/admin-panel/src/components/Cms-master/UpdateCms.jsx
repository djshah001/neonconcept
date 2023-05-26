import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import SuccessAlert from "../Alerts/SuccessAlert";
import { AnimatePresence, motion } from "framer-motion";
import ReactQuill from "react-quill";
import { toolbarOptions } from "../DataTable/CustomStyles";
import ErrorsAlert from "../Alerts/ErrorAlert";
import Spinner from "../Alerts/Spinner";
import CmsMasterContext from "../../ContextApi/contexts/CmsMasterContext";

function UpdateCms(props) {
  const { setTitle } = useOutletContext();
  const [Errors, setErrors] = useState("");
  const [Alert, setAlert] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const { getCmsMasterById, updateCmsMaster } = useContext(CmsMasterContext);
  const [CmsInfo, setCmsInfo] = useState({
    tagLine: "a",
    description: "",
  });

  const handleSubmit = async (e, id, cmsInfo) => {
    e.preventDefault();
    const res = await updateCmsMaster(id, cmsInfo);
    if (res.errors) {
      setErrors((prev) => ({ ...prev, show: true, errors: res.errors }));
    } else {
      setAlert((prev) => ({ ...prev, show: true, msg: res.msg }));
      navigate("../", { replace: true });
    }
  };

  const handleChange = (e) => {
    setCmsInfo({
      ...CmsInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onEditorChange = (e) => {
    setCmsInfo((prev) => ({ ...prev, description: e }));
  };

  const getCmsInfo = async () => {
    setLoading(true);
    const res = await getCmsMasterById(id);
    setCmsInfo(res);
    setLoading(false);
  };

  useEffect(() => {
    setTitle(props.title);
    getCmsInfo(id);
  }, []);

  return (
    <>
      <div className="container form-Dj p-4 mb-4 rounded">
        {Loading && <Spinner />}
        {!Loading && (
          <form
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e, id, CmsInfo)}
          >
            <div className="row my-1">
              <div className="form-group col-md-12">
                <label htmlFor="tagLine" className="col-form-label pb-2">
                  Tag Line :
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  type="textarea"
                  className="form-control "
                  id="tagLine"
                  name="tagLine"
                  placeholder="Enter Tag Line"
                  value={CmsInfo.tagLine}
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
                    value={CmsInfo.description}
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
    </>
  );
}

export default UpdateCms;
