import { motion } from "framer-motion";
import React from "react";
export function CoolBtn({ name, icon ,className }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.19 }}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 8,
      }}
      className={`buy-btn btn ${className}`}
      type="submit"
    >
      <div class="button_mai">
        {name}
        <i class={`fa-solid ${icon}`}></i>
      </div>
    </motion.button>
  );
}
