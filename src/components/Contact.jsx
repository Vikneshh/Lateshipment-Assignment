import pinkTick from "../assets/pink-tick.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Contact = () => {
  const swing = useAnimationObserver("animate__swing");
  return (
    <footer
      className=" mt-5 col-md-10 col-11 d-flex flex-md-row flex-column justify-content-between align-items-center custom-contact-bg  mx-md-auto rounded-4 flex-column-reverse p-md-4 p-0"
      ref={swing}
    >
      <div className="custom-contact-border p-5 rounded-4 col-md-6 col-12">
        <h3 className="text-white custom-trap-extraBold">
          See AI-powered <br className="d-md-block d-none" />
          <span className="custom-text-gradient">LateShipment.com ONE</span>
          <br className="d-lg-block d-none" /> in action!
        </h3>

        <p className="custom-inter text-white-50 fs-6 col-12">
          Find out why 4500+ leading e-commerce brands globally{" "}
          <br className="d-md-block d-none" /> choose our AI-powered
          Post-purchase Cloud Suite.
        </p>

        <div className="mt-5">
          <div className="position-relative col-md-11">
            <input
              type="email"
              className="form-control  p-3 custom-input-color"
              placeholder="Enter work mail"
            />
            <span className="custom-contact-parent-btn position-absolute custom-display-btn">
              <button className="text-white bg-black custom-contact-btn black-bg-btn">
                Book a demo
              </button>
            </span>
          </div>
          <div className="custom-project">
            <span className="custom-gradient-wrapper rounded-5 m-3 ">
              <button className="text-white  px-3 py-2 fw-bold bg-black rounded-5 black-bg-btn">
                Book a demo
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className=" p-md-5 rounded-5 col-md-7 col-lg-6 col-11 bg-transparent position-relative p-4">
        <h4 className="text-white custom-trap-medium">
          Here’s what you can expect in this{" "}
          <br className="d-lg-block d-none" />
          30-min demo
        </h4>
        <div className="d-flex justify-content-center align-items-center mt-4 custom-firstPoint custom-movement">
          <div className="ms-xxl-1 ms-lg-4 ms-md-3 ms-sm-2 ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Discuss your strategic post-purchase{" "}
            <br className="d-lg-block d-none" /> goals, unique needs and
            challenges
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Get an in-depth understanding of our{" "}
            <br className="d-lg-block d-none" />
            AI-powered platform and its capabilities
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Learn about our 1200+ integrations with{" "}
            <br className="d-md-block d-none" /> shipping carriers and
            e-commerce apps
          </p>
        </div>
        <div className="custom-contact-radial-gradient"></div>
      </div>
    </footer>
  );
};

export default Contact;
