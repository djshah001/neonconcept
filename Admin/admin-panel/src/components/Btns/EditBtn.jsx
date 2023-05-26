import { motion } from "framer-motion";
import React from "react";
export function EditBtn({ handleClick,id }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.2,
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
      value={id}
      className="btn btn-success rounded-pill"
      onClick={() => {
        handleClick(id);
      }}
    >
      <i className="fa-solid fa-pen-to-square"></i>
      Edit
    </motion.button>
  );
}
