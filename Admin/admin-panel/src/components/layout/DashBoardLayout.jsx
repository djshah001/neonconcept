import React, { useContext, useState } from "react";
import { Outlet} from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import SideBarContext from "../../ContextApi/contexts/SideBarContext";
import Footer from "../Footer/Footer";

function DashBoardLayout() {
  const { sidebar } = useContext(SideBarContext);
  const [title, setTitle] = useState("");

  return (
    <>
      <Navbar />
      <div className={sidebar ? `content-page` : `full-content-page`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h3 className="page-title text-white ">{title}</h3>
              </div>
            </div>
          </div>
          <Outlet context={{ setTitle }} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DashBoardLayout;
