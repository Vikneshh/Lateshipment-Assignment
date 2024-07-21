import oneLogo from "../assets/onelogo.png";
import chevrondown from "../assets/chevronDown.png";
import chevronUp from "../assets/chevronUp.png";
import useCounter from "../utils/useCounter";
import useAnimationObserver from "../utils/useAnimationObserver";
const Hero = () => {
  const [refOne, metricOne] = useCounter(72);
  const [refTwo, metricTwo] = useCounter(12);
  const [refThree, metricThree] = useCounter(20);
  const fadeInRight = useAnimationObserver("animate__fadeInRight");
  const bounce = useAnimationObserver("animate__bounce");
  return (
    <section className="custom-hero-bg" ref={fadeInRight}>
      <div className="text-center">
        <span className="fs-2 m-2 custom-text-gradient d-inline-block mt-5 custom-trap-bold">
          LateShipment.com
        </span>
        <img src={oneLogo} alt="" className="img-fluid custom-one-logo" />
      </div>
      <div>
        <h1 className=" display-2 text-center col-11 col-md-8 mx-auto custom-trap-extraBold">
          <span className="custom-pink-color">Move</span> faster with AI for
          Post-Purchase
        </h1>
        <h3 className="fs-4 col-11 col-md-8 mx-auto text-center custom-inter fw-medium">
          Your AI platform to achieve high-value outcomes with your{" "}
          <br className="d-lg-block d-none" /> e-commerce store’s shipping,
          delivery and returns operations
        </h3>
        <div className="text-center mt-5">
          <button className="btn text-black bg-white  mx-3 rounded-4 px-4 py-2 fw-bold white-bg-btn custom-bottom-margin">
            Get Started
          </button>
          <span className="custom-gradient-wrapper rounded-4 m-3 ">
            <button className="text-white  px-4 py-2 fw-bold bg-black rounded-4 black-bg-btn">
              Product Tour
            </button>
          </span>
        </div>
      </div>

      <div
        className="w-75 mx-auto mt-5 d-flex justify-content-between align-items-center flex-wrap p-3 custom-metrics-bg rounded-5 "
        ref={bounce}
      >
        <div className="col-12 col-md-3 p-2" ref={refOne}>
          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-1 mx-3 custom-trap-bold">{metricOne}%</span>
            <img
              src={chevrondown}
              alt="Chevron Down Image"
              className="custom-chevron"
            />
          </div>
          <p className="text-center fs-6 custom-inter fw-medium">
            Reduction in Post-Purchase <br /> Customer Enquiries{" "}
          </p>
        </div>
        <div className="custom-metrics-vr d-md-block d-none"></div>
        <div className="custom-metrics-hr d-block d-md-none"></div>
        <div className="col-12 col-md-3 p-2" ref={refTwo}>
          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-1 mx-3 custom-trap-bold">{metricTwo}%</span>
            <img
              src={chevronUp}
              alt="Chevron Up Image"
              className="custom-chevron-up"
            />
          </div>
          <p className="text-center fs-6 custom-inter fw-medium">
            Increase in Repeat <br /> Purchases{" "}
          </p>
        </div>
        <div className="custom-metrics-vr d-md-block d-none"></div>
        <div className="custom-metrics-hr d-block d-md-none"></div>

        <div className="col-12 col-md-3 p-2" ref={refThree}>
          <div className="d-flex justify-content-center align-items-center">
            <span className="fs-1 mx-3 custom-trap-bold">{metricThree}%</span>
            <img
              src={chevrondown}
              alt="Chevron Down Image"
              className="custom-chevron"
            />
          </div>
          <p className="text-center fs-6 custom-inter fw-medium">
            Reduction in <br /> Shipping Costs{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
