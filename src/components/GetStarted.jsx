import shield from "../assets/shield.png";
import gdpr from "../assets/gdpr.png";
import aws from "../assets/aws.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const GetStarted = () => {
  const fadeInRight = useAnimationObserver("animate__fadeInRight");
  const backInUp = useAnimationObserver("animate__backInUp");
  return (
    <section className="mt-5 mx-2 ">
      <p
        className="display-5 text-center col-10 col-md-8 mx-auto fw-bold text-white"
        ref={fadeInRight}
      >
        Scalable and reliable tech for <br /> businesses of all sizes
      </p>
      <div
        className="d-flex justify-content-between align-items-center custom-metrics-bg col-md-10 col-11 mx-auto flex-md-row flex-column text-center mt-5 rounded-5"
        ref={backInUp}
      >
        <div className=" d-flex justify-content-between flex-column col-md-5 col-11">
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 fw-bold">
              220 Million+
            </span>
            <p className="text-white mx-2 custome-inter">
              Packages Tracked in Real-time
            </p>
          </div>
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 fw-bold">
              8 Billion+
            </span>
            <p className="text-white mx-2 custom-inter">
              APIs & Webhooks Processed
            </p>
          </div>
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 fw-bold">
              1.6 Billion +
            </span>
            <p className="text-white mx-2 custom-inter mb-md-5">
              Shipping Notifications Delivered
            </p>
          </div>
        </div>
        <div className="custom-getStarted-vr d-none d-md-block"></div>
        <div className="custom-getStarted-hr d-block d-md-none my-4"></div>
        <div className="col-md-5 col-11">
          <p className="fs-2 mx-2 custom-text-gradient d-inline-block mt-2 fw-bold">
            Our Data Privacy and <br /> Security Standards
          </p>
          <div className="d-flex flex-md-row flex-column justify-content-between m-3 align-items-center ">
            <div className="d-flex justify-content-between flex-md-column flex-row my-3 my-md-0 align-items-center">
              <div>
                <img src={shield} alt="" className="col-md-8 col-7" />
              </div>
              <p className="text-white mt-3">
                Enterprise-grade <br />
                Data Security
              </p>
            </div>
            <div className="d-flex justify-content-between flex-md-column flex-row my-3 my-md-0 align-items-center">
              <div>
                <img src={gdpr} alt="" className="col-md-9 col-7" />
              </div>
              <p className="text-white mt-3">
                General Data <br /> Protection Regulation
              </p>
            </div>
            <div className="d-flex justify-content-between flex-md-column flex-row my-3 my-md-0 align-items-center">
              <div>
                <img src={aws} alt="" className="col-md-6 col-7" />
              </div>
              <p className="text-white mt-3">
                Secure Hosting <br /> Platform
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn text-black bg-white  mx-3 rounded-4 px-5 py-2 fw-bold">
          Request Demo
        </button>
      </div>

      <div className="custom-getStarted-hr my-5 w-50 d-md-block d-none"></div>
    </section>
  );
};

export default GetStarted;
