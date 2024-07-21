import analytics from "../assets/analytics.png";
import location from "../assets/location.png";
import search from "../assets/search3.png";
import star from "../assets/star.png";
import personalisation from "../assets/personalisation.png";
const decision = () => {
  return (
    <div className="pt-4 custom-height-width text-white rounded-4 custom-decision-bg p-2">
      <h6 className="text-white custom-inter fw-semibold text-center mb-3 custom-small-font">
        LATESHIPMENT.COM DECISION ENGINE
      </h6>
      <div className="bg-tranparent">
        <div className="d-flex justify-content-around align-items-center">
          <div className="col-4 text-center">
            <div className="custom-metrics-bg  mb-1 col-10 p-3 ">
              <img src={location} alt="location" className="col-10" />
            </div>
            <h6 className="custom-inter fw-semibold custom-small-font custom-nowrap d-flex justify-content-center">
              Tracking AI
            </h6>
          </div>
          <div className="col-4 text-center">
            <div className="custom-metrics-bg  mb-2 col-10 p-3">
              <img src={star} alt="star" className="col-11" />
            </div>
            <h6 className="custom-inter fw-semibold custom-small-font custom-nowrap d-flex justify-content-center">
              Predictive AI
            </h6>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div className="col-4 text-center">
            <div className="custom-metrics-bg  mb-1 col-10 p-3 ">
              <img src={search} alt="location" className="col-10" />
            </div>
            <h6 className="custom-inter fw-semibold custom-small-font custom-nowrap d-flex justify-content-center">
              Audit AI
            </h6>
          </div>
          <div className="col-4 text-center">
            <div className="custom-metrics-bg  mb-2 col-10 p-3">
              <img src={analytics} alt="star" className="col-11" />
            </div>
            <h6 className="custom-inter fw-semibold custom-small-font custom-nowrap d-flex justify-content-center">
              Analytics AI
            </h6>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-4 text-center ">
            <div className="custom-metrics-bg  mb-2 col-10 p-3">
              <img src={personalisation} alt="star" className="col-11" />
            </div>
            <h6 className="custom-inter fw-semibold custom-small-font custom-nowrap d-flex justify-content-center">
              Personalization AI
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default decision;
