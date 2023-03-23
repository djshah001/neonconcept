import React, { useState, useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion"
import Cover from "./Cover";
import headerContent from "../Info";

function Header() {

  const variants = {
    hidden:{
      x:'110vw',
      opacity:'0',
      // transition:{duration:0.5}
    },
    shown:{
      x:'0',
      opacity:'1',
      transition:{duration:0.5}
    },
    exit:{
      x:'-110vw',
      opacity:'1',
      transition:{duration:0.5}
    },
  }

  const [slideNo, setSlideNo] = useState(0);
  useEffect(()=>{
    
    const interval = setInterval(()=>{
      setSlideNo(slideNo === 2 ? 0 : slideNo + 1)
    },3000)
    return () =>clearInterval(interval)
  },[slideNo])

  const increaseSlide = () => {
    // console.log(slideNo)
    setSlideNo(slideNo === 2 ? 0 : slideNo + 1);
  };
  const decreaseSlide = () => {
    // console.log(slideNo)
    setSlideNo(slideNo === 0 ? 2 : slideNo - 1);
    // console.log(slideNo)
  };

  const showSlide = (i) => {
    setSlideNo(i);
  };
  return (
    <div>
      <section id="cover" style={{ overflowX: "hidden" }}>
        <div className="container-fluid p-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >

            <ol className="carousel-indicators">
              {headerContent.map((obj, i) => {
                // console.log(i, slideNo);
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
                {headerContent.map((obj, i) => {
                  // console.log(i,slideNo)
                  return (
                    <React.Fragment key={i}>
                      <AnimatePresence mode="sync">
                      {
                        i === slideNo && 
                        <motion.div 
                          variants={variants}
                          initial='hidden'
                          animate='shown'
                          exit='exit'>
                            <Cover
                              i={i}
                              active="active"
                              uptitle={obj.up_title}
                              title={obj.title}
                              subtitle={obj.subtitle}
                              imgurl={obj.imgurl}
                            />
                          </motion.div>
                      }
                      </AnimatePresence>
                    </React.Fragment>
                  );
                })}
              </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
              onClick={() => decreaseSlide()}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
              onClick={() => increaseSlide()}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="row">
            <div
              className="col-md-12 d-flex px-5 justify-content-between cvr-ftr align-items-center flex-wrap"
              style={{ zIndex: 999 }}
            >
              <div className="p-2 ftr-pr d-flex flex-row justify-content-between">
                {/* <a href="#contact" className="button_main btn mb-3 mx-5">Products</a> */}
                <a
                  href="#contact"
                  style={{ padding: "8px 16px" }}
                  className="button_main btn mb-3"
                >
                  Contact US
                </a>
                {/* // style={{border: "1px solid #ff1744"; padding: "8px 16px"}} */}
              </div>
              <div className="p-2 ftr-sc d-flex flex-row justify-content-between">
                {/* <!--<a href="#" className=""><i className="fab fa-twitter"></i></a>--> */}
                <a
                  href="https://www.facebook.com/neoncreativeconcept11/"
                  target="_blank"
                  className="ml-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/neon_creative_concept11?utm_medium=copy_link"
                  target="_blank"
                  className="ml-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/919724467687/?text=Neon Creative Concept 11"
                  target="_blank"
                  className="ml-2"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                {/* <!--<a href="#" className="ml-2"><i className="fab fa-youtube"></i></a>--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
