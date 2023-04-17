import React, { useContext, useState } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import SideBarContext from "../../ContextApi/contexts/SideBarContext";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const context = useContext(SideBarContext);
  return (
    <>
      <AnimatePresence>{context.sidebar && <Sidebar />}</AnimatePresence>
      <Topbar sidebar={context.sidebar} setSidebar={context.setSidebar} />
    </>
  );
}

export default Navbar;
