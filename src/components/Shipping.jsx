import claims from "../assets/claims.png";
const Shipping = () => {
  return (
    <div className="p-2 custom-shipping-bg text-white rounded-4">
      <h6 className="text-white custom-inter fw-semibold text-center mb-4 custom-small-font">
        SHIPPING INVOICE AUDIT
      </h6>
      <div className="custom-top-border bg-transparent p-2 px-0 row d-flex justify-content-center mx-1">
        <div className="d-flex justify-content-center align-items-center">
          <div className="custom-metrics-bg rounded-4  p-3 col-12  custom-child-elements text-center mt-3">
            <img src={claims} alt="" className="custom-flowchart-image ms-1" />
            <span className="custom-inter  fw-semibold custom-nowrap ms-2 custom-small-font ">
              Claims & Refunds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
