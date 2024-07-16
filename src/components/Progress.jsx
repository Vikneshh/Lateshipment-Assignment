import Arrow from "../assets/rightarrow.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Progress = () => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  return (
    <section className="mt-5 ms-md-5" ref={fadeInLeft}>
      <p className="display-3 text-center col-11 col-md-8 mx-auto fw-bold text-white">
        One single platform for all things post-purchase
      </p>

      <div className="mt-5">
        <div className="progress-container"></div>
        <div className="d-flex justify-content-between custom-main-progress-container ">
          <div className="parent custom-pink-color">
            PRE-PURCHASE
            <div className="custom-outer-radius"></div>
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent">
            INSURANCE
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent">
            ORDER TRACKING
            <div className="child"></div>
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
          <div className="parent">
            ORDER RETURNS
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent">
            INVOICE AUDIT
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent">
            INSIGHTS
            <div className="child"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
