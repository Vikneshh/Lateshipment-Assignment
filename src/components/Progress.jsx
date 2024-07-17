import Arrow from "../assets/rightarrow.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Progress = () => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  return (
    <section className="mt-5 ms-md-5" ref={fadeInLeft}>
      <h1 className="display-4 text-center col-11 col-md-10 mx-auto text-white custom-trap-extraBold">
        One single platform for all things <br className="d-md-block d-none" />
        post-purchase
      </h1>

      <div className="mt-5">
        <div className="progress-container"></div>
        <div className="d-flex justify-content-between custom-main-progress-container ">
          <div className="parent custom-pink-color custom-trap-bold ">
            PRE-PURCHASE
            <div className="custom-outer-radius"></div>
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent custom-trap-bold text-secondary">
            INSURANCE
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent custom-trap-bold text-secondary">
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
          <div className="parent custom-trap-bold text-secondary">
            ORDER RETURNS
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent custom-trap-bold text-secondary">
            INVOICE AUDIT
            <div className="child"></div>
            <div className="text-center my-2 d-block d-md-none">
              <img src={Arrow} alt="" className="custom-rotate" />
            </div>
          </div>
          <div className="parent custom-trap-bold text-secondary">
            INSIGHTS
            <div className="child"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
