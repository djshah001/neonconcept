import React, { useContext, useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Contact from "./components/Contact/Contact";
import Custom from "./components/Customize/Custom";
import Gellery from "./components/Gellery";

import Home from "./components/Home/Home";
import LedBoard from "./components/LedBoard";
import Rootlayout from "./components/Layout/Rootlayout";
import Signs from "./components/Signs";
import NavState from "./contexts/NavContext";
import { ledboardInfo, workInfo } from "./Info";
import NeonSign from "./components/NeonSigns/NeonSign";
import DropDownContext from "./contexts/DropDownContext";
import HomeState from "./states/HomeState";
import NeonGORoute from "./routes/NeonGORoute";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./css/all.min.css";
import "./css/gallery.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/picbox.css";
import LogIn from "./components/LoginSystem/LogIn";
import SignUp from "./components/LoginSystem/SignUp";
import CustomerState from "./contexts/States/CustomerState";

function App() {
  const [neonSignarr, setneonSignarr] = useState([]);
  const dropDown = useContext(DropDownContext);
  useEffect(() => {
    dropDown.getneonsigns().then((dp) => {
      setneonSignarr(dp);
    });
    // console.log(dropDown)
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Rootlayout />}>
          <Route
            path="/"
            element={
              <HomeState>
                <Home />
              </HomeState>
            }
          />
          <Route path="/about" element={<Aboutus />} />

          {workInfo.map((obj, value) => {
            return (
              <Route
                path={"/" + obj.path}
                key={obj.path}
                element={
                  <Signs
                    title={obj.title}
                    key={obj.path}
                    description={obj.description}
                    route="Gellery"
                    path={obj.path}
                    arr={obj.arr}
                  />
                }
              />
            );
          })}

          {neonSignarr.map((obj, i) => {
            return (
              <Route
                path={obj._id}
                key={obj._id}
                element={
                  <NeonSign
                    title={obj.title}
                    description={obj.description}
                    videoUrls={obj.videoUrls}
                    route={obj.title}
                  />
                }
              />
            );
          })}

          <Route
            path="/flexboard"
            element={
              <LedBoard
                title="Flex Board"
                description="Vestibulum at accumsan lectus, vestibulum porttitor metus. Nullam convallis erat vel iaculis posuere. Praesent tempor elementum tellus, eget aliquet nibh sollicitudin vel. Donec lacinia tortor sed felis mattis tempus. Cras euismod commodo nulla. Proin ut viverra erat, in lobortis lectus. Etiam consequat nisi eu arcu sollicitudin venenatis. Nullam at elementum erat, at aliquet velit."
                route="FLEX BOARD"
              />
            }
          />

          <Route
            path="/customize"
            element={
              <Custom title="Neon Customization" route="CUSTOMIZATION" />
            }
          />

          {ledboardInfo.map((obj, i) => {
            return (
              <Route
                path={"/ledboard/" + obj.path}
                key={obj.path}
                element={
                  <LedBoard
                    title={obj.title}
                    description={obj.description}
                    imgurls={obj.imgurls}
                    route={obj.title}
                    key={obj.path}
                  />
                }
              />
            );
          })}

          <Route path="products/*" element={<NeonGORoute />} />

          {workInfo.map((obj, value) => {
            return (
              <Route
                path={"/gellery/" + obj.path}
                key={obj.path}
                element={
                  <Gellery
                    title={obj.title}
                    key={obj.path}
                    description={obj.description}
                    route="Gellery"
                    path={obj.path}
                    arr={obj.arr}
                  />
                }
              />
            );
          })}

          <Route
            path="/contact"
            element={<Contact title="Our Creatives" route="Contact Us" />}
          />
        </Route>
        <Route
          path="/login"
          element={
            <CustomerState>
              <LogIn />
            </CustomerState>
          }
        />
        <Route
          path="/signup"
          element={
            <CustomerState>
              <SignUp />
            </CustomerState>
          }
        />
      </>
    )
  );

  return (
    <NavState>
      <RouterProvider router={router} />
    </NavState>
  );
}

export default App;
