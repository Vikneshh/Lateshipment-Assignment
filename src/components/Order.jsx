import rightArrow from "../assets/BulletArrow.png";
import tshirt from "../assets/tshirtCart.png";
import magento from "../assets/magento.png";
import shopify from "../assets/shopify.png";
import bigcommerce from "../assets/bigcommerce.png";
import doubleChevron from "../assets/doubleChevron.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Order = () => {
  const rotate = useAnimationObserver("animate__rotateInDownRight");
  return (
    <>
      <section
        className="col-md-10 col-11 d-flex justify-content-between mt-5 flex-column flex-md-row ms-3 ms-md-5"
        ref={rotate}
      >
        <div className="col-md-5 col-11  ms-md-5">
          <p className="custom-pink-color">01 CONVERT</p>
          <p className="text-white">
            Boost conversions with spot-on delivery times word word
          </p>
          <div>
            <img src={rightArrow} alt="Right Facing Arrow" className="mx-2" />
            <span className="text-white">Order Countdown Timer</span>
            <p className="text-white ms-5 mt-2">
              Our mature ML algorithms factors in delay patterns,
              <br /> weather conditions, network congestions and more from over
              1.2 million parcels we track daily.
            </p>
          </div>
          <div>
            <img src={rightArrow} alt="Right Facing Arrow" className="mx-2" />
            <span className="text-white">Order Countdown Timer</span>
            <p className="text-white ms-5 mt-2">
              Our mature ML algorithms factors in delay patterns, <br /> weather
              conditions, network congestions and more from over 1.2 million
              parcels we track daily.
            </p>
          </div>

          <p className="text-white">Integrates with:</p>
          <div className="d-flex flex-row col-md-12 flex-wrap mb-5 mb-md-0">
            <img
              src={shopify}
              alt="Shopify Image"
              className="mx-2 my-md-0 my-2 col-3 col-md-2"
            />
            <img
              src={bigcommerce}
              alt="Bigcommerce Image"
              className="mx-2 col-3 my-md-0 my-2 col-md-2"
            />
            <img
              src={magento}
              alt="Magento Image"
              className="mx-2 col-3 my-md-0 my-2 col-md-2"
            />
          </div>
        </div>
        <div className="col-md-5 col-10  align-self-center custom-order-bg">
          <img src={tshirt} alt="Cart with T-shirt" className="col-12 " />
          <span className="custom-gradient-wrapper rounded-4 custom-margin-left">
            <button className="text-white  px-4 py-2 fw-bold bg-black rounded-4 ">
              Book a demo
            </button>
          </span>
        </div>
      </section>
      <p className="text-center my-3 ">
        <span className="text-white ">SKIP</span>
        <img src={doubleChevron} alt="Double Chevron Image" />
      </p>
    </>
  );
};

export default Order;
