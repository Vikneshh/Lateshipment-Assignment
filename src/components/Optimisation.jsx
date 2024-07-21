import analytics from "../assets/analytics.png";
import engagement from "../assets/engagement.png";
const Optimisation = () => {
  return (
    <div className=" custom-optimisation-bg text-white rounded-4 p-2 p-md-2">
      <h6 className="text-white custom-inter fw-semibold text-center mb-4 custom-small-font">
        POST PURCHASE OPTIMIZATION
      </h6>
      <div className="custom-top-border bg-transparent p-2 px-0 row d-flex justify-content-center">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row ">
          <div className="custom-metrics-bg rounded-4  p-1 p-md-3  col-12 col-md-6 ps-0 custom-child-elements mb-2 mb-md-0 d-flex justify-content-between align-items-center">
            <img
              src={analytics}
              alt=""
              className="custom-flowchart-image ms-1"
            />
            <span className="custom-inter  fw-semibold   custom-smallest-font ms-3 ms-md-2 text-center">
              Fulfillment Analytics
            </span>
          </div>
          <div className="custom-metrics-bg rounded-4  p-1 p-md-3 col-12 col-md-6 ps-0 d-flex justify-content-between custom-child-elements align-items-center">
            <img
              src={engagement}
              alt=""
              className=" custom-flowchart-image ms-3"
            />
            <span className="custom-inter  fw-semibold  ms-md-2 custom-smallest-font text-center ms-0">
              Engagement Insights
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimisation;
