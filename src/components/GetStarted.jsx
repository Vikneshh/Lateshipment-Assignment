import shield from "../assets/shield.png";
import gdpr from "../assets/gdpr.png";
import aws from "../assets/aws.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const GetStarted = () => {
  const fadeInRight = useAnimationObserver("animate__fadeInRight");
  const backInUp = useAnimationObserver("animate__backInUp");
  return (
    <section className="mt-5 mx-2 ">
      <h1
        className="display-2 text-center col-12 col-md-10 mx-auto text-white custom-trap-extraBold"
        ref={fadeInRight}
      >
        Scalable and reliable tech for <br className="d-xxl-block d-none" />{" "}
        businesses of all sizes
      </h1>
      <div
        className="d-flex justify-content-between align-items-center custom-metrics-bg col-md-11 col-12 mx-auto flex-md-row flex-column text-center mt-5 rounded-5"
        ref={backInUp}
      >
        <div className=" d-flex justify-content-between flex-column col-md-4 col-11">
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 custom-trap-bold">
              220 Million+
            </span>
            <p className="text-white mx-2 custom-inter">
              Packages Tracked in Real-time
            </p>
          </div>
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 custom-trap-bold">
              8 Billion+
            </span>
            <p className="text-white mx-2 custom-inter">
              APIs & Webhooks Processed
            </p>
          </div>
          <div className="col-md-12 col-11">
            <span className="fs-2 mx-2 custom-text-gradient d-inline-block mt-5 custom-trap-bold">
              1.6 Billion+
            </span>
            <p className="text-white mx-2 custom-inter mb-md-5">
              Shipping Notifications Delivered
            </p>
          </div>
        </div>
        <div className="custom-getStarted-vr d-none d-md-block"></div>
        <div className="custom-getStarted2-hr d-block d-md-none my-4"></div>
        <div className="col-md-6 col-11">
          <h4 className="fs-2 mx-2 custom-text-gradient d-inline-block mt-2 custom-trap-bold">
            Our Data Privacy and <br className="d-md-block d-none" /> Security
            Standards
          </h4>
          <div className="d-flex flex-md-row flex-column justify-content-between m-3 align-items-center ">
            <div className="d-flex justify-content-between flex-md-column  my-1 my-md-0 align-items-center custom-arrangement">
              <div className="ms-sm-5 ms-md-0 ">
                <img src={shield} alt="" className="col-md-8 col-7 " />
              </div>
              <p className="text-white mt-3 custom-inter ms-sm-5 ms-md-0 ">
                Enterprise-grade <br className="d-md-block d-none" />
                Data Security
              </p>
            </div>
            <div className="d-flex justify-content-between flex-md-column  my-1 my-md-0 align-items-center custom-arrangement">
              <div className="">
                <img src={gdpr} alt="" className="col-md-9 col-7" />
              </div>
              <p className="text-white mt-3 custom-inter ms-sm-1 ms-md-0">
                General Data <br className="d-md-block d-none" /> Protection
                Regulation
              </p>
            </div>
            <div className="d-flex justify-content-between flex-md-column  my-1 my-md-0 align-items-center custom-arrangement">
              <div>
                <img src={aws} alt="" className="col-md-6 col-7" />
              </div>
              <p className="text-white mt-1 custom-inter ms-sm-4 ms-md-0">
                Secure Hosting <br className="d-md-block d-none" /> Platform
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn text-black bg-white  mx-3 rounded-4 px-5 py-2 fw-bold white-bg-btn custom-inter">
          Request Demo
        </button>
      </div>

      <div className="custom-getStarted-hr my-5 w-50 d-md-block d-none"></div>
    </section>
  );
};

export default GetStarted;
