import React from "react";

function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="scroltop fa fa-chevron-up"
      style={{ display: "block" }}
      onClick={() => {
        scrollToTop();
      }}
    ></button>
  );
}

export default ScrollTop;
