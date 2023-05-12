import React, { useEffect } from "react";
import { motion } from "framer-motion";

function ErrorsAlert({ Errors, setErrors }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setErrors({ ...Errors, show: false });
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [Errors]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show my-2"
      role="alert"
    >
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          setErrors({ ...Errors, show: false });
        }}
      ></button>
      {Errors.errors.map((err) => {
        return <h5><strong>Error - {err.msg}</strong></h5>;
      })}
    </motion.div>
  );
}

export default ErrorsAlert;
