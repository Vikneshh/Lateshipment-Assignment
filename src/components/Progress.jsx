import React from "react";
import Arrow from "../assets/rightarrow.png";
import useAnimationObserver from "../utils/useAnimationObserver";

const Progress = ({ activeIndex }) => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");

  return (
    <section className="mt-5 ms-md-5" ref={fadeInLeft}>
      <h1 className="display-4 text-center col-11 col-md-10 mx-auto text-white custom-trap-extraBold">
        One single platform for all things <br className="d-xl-block d-none" />
        post-purchase
      </h1>

      <div className="mt-5">
        <div className="progress-container"></div>
        <div className="d-flex justify-content-between custom-main-progress-container">
          <div
            className={`parent custom-trap-bold ${
              activeIndex === 0 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            PRE-PURCHASE
            <div
              className={`${activeIndex === 0 ? "custom-outer-radius" : ""}`}
            ></div>
            <div
              className={`${
                activeIndex === 0 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div
            className={`parent custom-trap-bold mx-2 ${
              activeIndex === 1 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            INSURANCE
            <div
              className={`${
                activeIndex === 1 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div
            className={`parent custom-trap-bold ${
              activeIndex === 2 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            ORDER TRACKING
            <div
              className={`${
                activeIndex === 2 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="dot mx-2"></div>
            <div className="dot mx-2"></div>
            <div className="dot mx-2"></div>
            <div className="dot mx-2"></div>
            <div className="dot mx-2"></div>
          </div>
          <div
            className={`parent custom-trap-bold ${
              activeIndex === 3 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            ORDER RETURNS
            <div
              className={`${
                activeIndex === 3 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div
            className={`parent custom-trap-bold ${
              activeIndex === 4 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            INVOICE AUDIT
            <div
              className={`${
                activeIndex === 4 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div
            className={`parent custom-trap-bold ${
              activeIndex === 5 ? "custom-pink-color" : "text-secondary"
            }`}
          >
            INSIGHTS
            <div
              className={`${
                activeIndex === 5 ? "custom-bg-change-progress" : ""
              } child`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
