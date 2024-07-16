import pinkTick from "../assets/pink-tick.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Contact = () => {
  const swing = useAnimationObserver("animate__swing");
  return (
    <footer
      className=" mt-5 col-md-10 col-11 d-flex flex-md-row flex-column justify-content-between align-items-center custom-contact-bg p-4 mx-md-auto rounded-4 "
      ref={swing}
    >
      <div className="custom-contact-border p-5 rounded-4 col-md-6 col-12">
        <h3 className="text-white fw-bold">
          See AI-powered <br />{" "}
          <span className="custom-text-gradient">LateShipment.com ONE</span>
          <br /> in action!
        </h3>

        <p className="custom-inter text-white-50 fs-6">
          Find out why 4500+ leading e-commerce brands globally <br /> choose
          our AI-powered Post-purchase Cloud Suite.
        </p>

        <div className="mt-5">
          <div className="position-relative w-100">
            <input
              type="email"
              className="form-control  p-3 custom-input-color"
              placeholder="Enter work mail"
            />
            <span className="custom-contact-parent-btn position-absolute  ">
              <button className="text-white bg-black custom-contact-btn">
                Book a demo
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className=" p-5 rounded-5 col-md-5 col-12 bg-transparent position-relative">
        <h4 className="text-white">
          Here’s what you can expect in this <br />
          30-min demo
        </h4>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className=" ms-xl-1 ms-lg-4 ms-md-3 ms-sm-2 ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Discuss your strategic post-purchase <br /> goals, unique needs and
            challenges
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Get an in-depth understanding of our <br />
            AI-powered platform and its capabilities
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="ms-4">
            <img src={pinkTick} alt="Tick" className="" />
          </div>
          <p className="text-white ms-3 custom-inter">
            Learn about our 1200+ integrations with <br /> shipping carriers and
            e-commerce apps
          </p>
        </div>
        <div className="custom-contact-radial-gradient"></div>
      </div>
    </footer>
  );
};

export default Contact;
