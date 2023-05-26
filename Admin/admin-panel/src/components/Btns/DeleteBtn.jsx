import { motion } from "framer-motion";
import React from "react";
export function DeleteBtn({ handleDelete,id }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileTap={{
        scale: 0.9,
      }}
      type="button"
      className="btn btn-danger rounded-pill"
      onClick={() => {
        handleDelete(id);
      }}
    >
      <i className="fa-solid fa-trash"></i>
      Delete
    </motion.button>
  );
}
