import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselInfo } from "../Info";
import Photos from "./Photos";

function PhotoCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="projects" className="sd_project">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 cnt_head">
            <span className="sub_head">Some of the Neon Signs</span>
            <h2 className="s_head">Related Neon Signs</h2>
            <p className="h_body">
              We provide best ever services for your great experience. We make
              every effort to meet the needs of the customer.
            </p>
          </div>
        </div>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        partialVisible={false}
        autoPlaySpeed={1000}
        centerMode={false}
        className="dj"
        containerClass="container-fluid"
        dotListClass="owl-dot"
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >

        {
          carouselInfo.map((url) => 
          {
            return <Photos image={url} key={url} />;
          } )
        }

      </Carousel>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="owl-carousel owl-theme pr_cnt owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transition: "all 1s ease 0s",
                    width: "4200px",
                    transform: "translate3d(-2491px, 0px, 0px)",
                  }}
                ></div>
              </div>

              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>

              {/* <div className="owl-dots">
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot">
                  <span></span>
                </button>
                <button role="button" className="owl-dot active">
                  <span></span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoCarousel;
