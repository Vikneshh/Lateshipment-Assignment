import calendar from "../assets/calendar.png";
import shield from "../assets/shield-spark.png";
import bell from "../assets/bell.png";
import caution from "../assets/caution.png";
import profile from "../assets/customer-profile.png";
import star from "../assets/feedback-star.png";
import flows from "../assets/self-service-flows.png";
import returns from "../assets/returns-management.png";
const PPJOrchestra = () => {
  return (
    <div className="p-5 custom-ppj-bg text-white rounded-5">
      <h6 className="text-white custom-inter fw-semibold text-center mb-3 custom-small-font">
        POST PURCHASE JOURNEY ORCHESTRATION
      </h6>
      <div className="custom-dotted-border bg-transparent p-2 px-0 row d-flex justify-content-center">
        <div className="mb-3 mt-2">
          <h6 className="custom-inter fw-semibold text-center">
            Order Shipping
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center pb-2 flex-column  flex-md-row ">
          <div className="custom-metrics-bg rounded-4  p-3 col-12  ps-0 custom-child-elements col-md-6 my-2 my-md-0">
            <img
              src={calendar}
              alt=""
              className="custom-flowchart-image ms-1 col-md-2"
            />
            <span className="custom-inter  fw-semibold custom-nowrap ms-2 custom-smallest-font d-inline-block col-md-9">
              Delivery Estimate
            </span>
          </div>
          <div className="custom-metrics-bg rounded-4  p-3 col-12 col-md-6 ps-0 custom-child-elements">
            <img
              src={shield}
              alt=""
              className="custom-flowchart-image ms-1 col-md-2"
            />
            <span className="custom-inter  fw-semibold custom-nowrap ms-0 ms-md-2 custom-smallest-font d-inline-block col-md-9">
              Package Insurance
            </span>
          </div>
        </div>
      </div>

      <div className="custom-dotted-border bg-transparent p-2 px-0 row d-flex justify-content-center mt-4 ">
        <div className="mb-3 mt-2">
          <h6 className="custom-inter fw-semibold text-center">
            Order Delivery
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-column  flex-md-row">
          <div className="custom-metrics-bg rounded-4  p-2 col-12 col-md-6 ps-0 d-flex justify-content-between align-items-center custom-child-elements my-2 my-md-0">
            <img
              src={bell}
              alt=""
              className="custom-flowchart-image ms-3 col-md-2"
            />
            <span className="custom-inter  fw-semibold ms-md-0 ms-2 custom-smallest-font text-center d-inline-block col-md-9">
              Shipping Notifications{" "}
            </span>
          </div>
          <div className="custom-metrics-bg rounded-4  p-2 col-12 col-md-6 ps-0 d-flex justify-content-between align-items-center custom-child-elements">
            <img
              src={caution}
              alt=""
              className="custom-flowchart-image ms-3 col-md-2"
            />
            <span className="custom-inter  fw-semibold  ms-2 custom-smallest-font text-center d-inline-block col-md-9 ms-md-1">
              Predictive Exception Alerts
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 pb-2 flex-column  flex-md-row ">
          <div className="custom-metrics-bg rounded-4  p-2 col-12 col-md-6 ps-0 d-flex justify-content-between align-items-center custom-child-elements my-2 my-md-0">
            <img
              src={profile}
              alt=""
              className="custom-flowchart-image ms-3 col-md-2"
            />
            <span className="custom-inter  fw-semibold  ms-2 ms-md-1 custom-smallest-font text-center d-inline-block col-md-9">
              Product Recommend
            </span>
          </div>
          <div className="custom-metrics-bg rounded-4  p-2 col-12 col-md-6 ps-0 d-flex justify-content-between align-items-center custom-child-elements my-2 my-md-0">
            <img
              src={star}
              alt=""
              className="custom-flowchart-image ms-3 col-md-2"
            />
            <span className="custom-inter  fw-semibold  ms-2 custom-smallest-font text-center d-inline-block col-md-9 ms-md-0">
              Customer Feedback
            </span>
          </div>
        </div>
      </div>
      <div className="custom-dotted-border bg-transparent p-2 px-0 row d-flex justify-content-center mt-4  p-4">
        <div className="mb-2  mt-2">
          <h6 className="custom-inter fw-semibold text-center">
            Order Returns and Exchanges
          </h6>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-column  flex-md-row ">
          <div className="custom-metrics-bg rounded-4  p-3 col-12 col-md-6 ps-0 custom-child-elements my-2 my-md-0">
            <img
              src={flows}
              alt=""
              className="custom-flowchart-image ms-1 col-md-2"
            />
            <span className="custom-inter  fw-semibold ms-2 custom-smallest-font d-inline-block col-md-9 text-center">
              Self-service Flows
            </span>
          </div>
          <div className="custom-metrics-bg rounded-4  p-2 col-12 col-md-6 ps-0 d-flex justify-content-between custom-child-elements align-items-center">
            <img
              src={returns}
              alt=""
              className=" custom-flowchart-image ms-3 col-md-2"
            />
            <span className="custom-inter  fw-semibold  ms-2 custom-smallest-font text-center d-inline-block col-md-9 ms-md-0">
              Returns Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPJOrchestra;
