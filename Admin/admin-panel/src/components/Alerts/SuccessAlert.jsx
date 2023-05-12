import { motion } from "framer-motion";
import React, { useEffect } from "react";

function SuccessAlert({ Alert, setAlert }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);

    return () => clearTimeout(timer);
  }, [Alert]);
  return (
    <>
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
        <strong>Success - {Alert.msg}</strong>
      </motion.div>
    </>
  );
}

export default SuccessAlert;
