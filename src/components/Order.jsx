import rightArrow from "../assets/BulletArrow.png";
import tshirt from "../assets/tshirtCart.png";
import magento from "../assets/magento-inner.png";
import shopify from "../assets/shopify-inner.png";
import bigcommerce from "../assets/bigcommerce-inner.png";
import doubleChevron from "../assets/doubleChevron.png";
import changeImage from "../assets/progress-change.png";
import useAnimationObserver from "../utils/useAnimationObserver";
import { useState } from "react";
const Order = () => {
  const [image, setImage] = useState(tshirt);
  const handleChangeImage = () => {
    if (image === tshirt) {
      setImage(changeImage);
    } else {
      setImage(tshirt);
    }
  };

  const bounceIn = useAnimationObserver("animate__bounceIn");
  return (
    <>
      <section
        className="col-md-10  d-flex justify-content-between mt-5 flex-column flex-md-row ms-3 ms-md-5 "
        ref={bounceIn}
        onClick={handleChangeImage}
      >
        <div className="col-md-5 col-12 mx-auto  ms-md-5">
          <p className="custom-pink-color fw-bold custom-inter">
            {image === tshirt ? "01 CONVERT" : "01/10"}
          </p>
          <h5 className="text-white custom-trap-bold">
            Boost conversions with spot-on delivery <br /> times{" "}
            {image === tshirt ? "word word" : ""}
          </h5>
          <div>
            <img src={rightArrow} alt="Right Facing Arrow" className="mx-2" />
            <h6 className="text-white d-inline custom-inter fw-semibold">
              Order Countdown Timer
            </h6>
            <p className="text-white ms-5 mt-2 custom-inter fw-light">
              Our mature ML algorithms factors in delay patterns,
              <br /> weather conditions, network congestions and more from over
              1.2 million parcels we track daily.
            </p>
          </div>
          <div>
            <img src={rightArrow} alt="Right Facing Arrow" className="mx-2" />
            <h6 className="text-white d-inline custom-inter fw-semibold">
              Order Countdown Timer
            </h6>
            <p className="text-white ms-5 mt-2 custom-inter fw-light">
              Our mature ML algorithms factors in delay patterns, <br /> weather
              conditions, network congestions and more from over 1.2 million
              parcels we track daily.
            </p>
          </div>

          <p className="text-white custom-trap-semiBold">Integrates with:</p>
          <div className="d-flex flex-row col-md-12 flex-wrap mb-5 mb-md-0 ">
            <img
              src={shopify}
              alt="Shopify Image"
              className="mx-2 my-md-0 my-2 col-2 col-md-3 custom-metrics-bg p-md-3 p-2 rounded-4 img-fluid object-fit-contain"
            />
            <img
              src={bigcommerce}
              alt="Bigcommerce Image"
              className="mx-2 col-2 my-md-0 my-2 col-md-3 custom-metrics-bg p-md-3 p-2 rounded-4 img-fluid object-fit-contain"
            />
            <img
              src={magento}
              alt="Magento Image"
              className="mx-2 col-2 my-md-0 my-2 col-md-3 custom-metrics-bg p-md-3 p-2 rounded-4 img-fluid object-fit-contain"
            />
          </div>
        </div>
        <div className="col-md-5 col-10  align-self-center custom-order-bg">
          <img src={image} alt="Cart with T-shirt" className="col-12 " />
          <span className="custom-gradient-wrapper rounded-4 custom-margin-left">
            <button className="text-white  px-4 py-2 fw-bold bg-black rounded-4 black-bg-btn custom-inter">
              Book a demo
            </button>
          </span>
        </div>
      </section>
      <p className="text-center my-3 ">
        <span className="text-white custom-inter fw-semibold">SKIP</span>
        <img src={doubleChevron} alt="Double Chevron Image" />
      </p>
    </>
  );
};

export default Order;
