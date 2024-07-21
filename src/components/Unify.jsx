import shipment from "../assets/shipment-data.png";
import order from "../assets/order-data.png";
import customer from "../assets/customer-data.png";
import product from "../assets/product-data.png";
const Unify = () => {
  return (
    <div className="p-5 custom-height-width text-white rounded-5">
      <h6 className="text-white custom-inter fw-semibold text-center mb-3 custom-small-font">
        UNIFY DATA
      </h6>
      <div className="custom-dotted-border bg-transparent p-3 row d-flex justify-content-center">
        <div className="custom-metrics-bg p-2  rounded-4 custom-child-heightWidth text-center mx-2 mb-3 col-8 col-md-5">
          <p className="text-center custom-inter fw-semibold custom-small-font">
            Shipment Data
          </p>
          <img
            src={shipment}
            alt=""
            className="col-lg-6 col-md-8 col-7 col-xl-8"
          />
        </div>
        <div className="custom-metrics-bg p-2  rounded-4 custom-child-heightWidth text-center mx-2 mb-3 col-8 col-md-5">
          <p className="text-center custom-inter fw-semibold custom-small-font">
            Order Data
          </p>
          <img
            src={order}
            alt=""
            className="col-lg-6 col-md-8 col-7 col-xl-8"
          />
        </div>
        <div className="custom-metrics-bg p-2    rounded-4 custom-child-heightWidth text-center mx-2 mb-1 col-8 col-md-5">
          <p className="text-center custom-inter fw-semibold custom-small-font">
            Customer Data
          </p>
          <img
            src={customer}
            alt=""
            className="col-lg-6 col-md-8 col-7 col-xl-8"
          />
        </div>
        <div className="custom-metrics-bg p-2  rounded-4 custom-child-heightWidth text-center mx-2 mb-1 col-8 col-md-5 mt-2 mt-md-0">
          <p className="text-center custom-inter fw-semibold custom-small-font">
            Product Data
          </p>
          <img
            src={product}
            alt=""
            className="col-lg-6 col-md-8 col-7 col-xl-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Unify;
