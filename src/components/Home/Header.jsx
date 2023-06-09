import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cover from "./Cover";
import headerContent from "../../Info";

function Header({Banners}) {
  const variants = {
    right: {
      x: "110vw",
      transition: { duration: 0.5 },
    },
    shown: {
      x: "0",
      transition: { duration: 0.5 },
    },
    left: {
      x: "-110vw",
      transition: { duration: 0.5 },
    },
  };

  const [slideNo, setSlideNo] = useState(0);
  const [clickedBtn, setclickedBtn] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNo(slideNo === Banners.length - 1 ? 0 : slideNo + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [slideNo]);

  const increaseSlide = () => {
    setSlideNo(slideNo === Banners.length - 1 ? 0 : slideNo + 1);
    setclickedBtn("right");
  };
  const decreaseSlide = () => {
    setSlideNo(slideNo === 0 ? Banners.length - 1 : slideNo - 1);
    setclickedBtn("left");
  };

  const showSlide = (i) => {
    setSlideNo(i);
  };
  return (
    <>
      <section id="cover" style={{ overflowX: "hidden" }}>
        <div className="container-fluid p-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              {Banners.map((obj, i) => {
                return (
                  <li
                    key={"" + i}
                    className={`${i === slideNo ? "active" : "ll"}`}
                    onClick={() => showSlide(i)}
                  ></li>
                );
              })}
            </ol>

            <div className="carousel-inner">
              {Banners.map((obj, i) => {
                return (
                  <React.Fragment key={i}>
                    <AnimatePresence mode="sync">
                      {i === slideNo && (
                        <motion.div
                          variants={variants}
                          initial={clickedBtn === "right" ? "right" : "left"}
                          animate="shown"
                          exit={clickedBtn === "right" ? "left" : "right"}
                        >
                          <Cover
                            i={i}
                            active="active"
                            uptitle={obj.topTitle}
                            title={obj.title}
                            subtitle={obj.subTitle}
                            imgurl={obj.bannerImg}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              })}
            </div>

            <div
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                onClick={() => decreaseSlide()}
              ></span>
              <span className="sr-only">Previous</span>
            </div>

            <div
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                onClick={() => increaseSlide()}
              ></span>
              <span className="sr-only">Next</span>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-md-12 d-flex px-5 justify-content-between cvr-ftr align-items-center flex-wrap"
                style={{ zIndex: 999 }}
              >
                <div className="p-2 ftr-pr d-flex flex-row justify-content-between">
                  <a
                    href="#works"
                    style={{ border: "1px solid #ff1744", padding: "8px 16px" }}
                    className="button_main  mb-3 mx-4"
                  >
                    Products
                  </a>
                  <a
                    href="#contact"
                    // style={{ padding: "6px 16px" }}
                    style={{
                      border: "1px solid #ff1744",
                      padding: "8px 16px",
                      scrollBehavior: "smooth",
                    }}
                    className="button_main btn mb-3"
                  >
                    Contact US
                  </a>
                </div>
                <div className="p-2 ftr-sc d-flex flex-row justify-content-between">
                  <a
                    href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
                    className=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/neoncreativeconcept11/"
                    className="ml-2"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
                    className="ml-2"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://wa.me/919724467687/?text=Neon Creative Concept 11"
                    className="ml-2"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  {/* <!--<a href="#" className="ml-2"><i className="fab fa-youtube"></i></a>--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
