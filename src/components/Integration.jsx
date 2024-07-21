import helpdesk from "../assets/hepldesk-inner.png";
import email from "../assets/email-inner.png";
import crm from "../assets/crm-inner.png";
import ecommerce from "../assets/ecommerce-inner.png";
import order from "../assets/order-inner.png";
import shipping from "../assets/shipping-inner.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Integration = () => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  const fadeInRight = useAnimationObserver("animate__fadeInRight");
  let imgArray = [shipping, ecommerce, order, email, crm, helpdesk];
  let imgValue = [
    "Shipping Carriers",
    "E-commerce Platforms",
    "Order Management Systems",
    "E-mail Marketing Tools",
    "CRM Platforms",
    "Helpdesk Tools",
  ];
  return (
    <section className="mt-5 ms-md-5 ">
      <h1
        className="display-2 text-center col-11 col-md-10 mx-auto text-white custom-trap-extraBold"
        ref={fadeInLeft}
      >
        Pre-built integrations <br className="d-lg-block d-none" /> with
        <span className="custom-pink-color">1200+ </span> carriers and apps
      </h1>

      <div
        className="grid-container col-md-10 col-12 d-flex justify-content-md-center align-items-center flex-wrap p-lg-5  mx-auto"
        ref={fadeInRight}
      >
        {imgArray.map((item, index) => {
          return (
            <div
              key={index}
              className="mt-4 custom-metrics-bg p-3 rounded-4 mx-md-2 mx-lg-4 mx-auto"
            >
              <div className="text-center">
                <img
                  src={item}
                  alt="Brand Images"
                  className="custom-integrations-logo "
                />
              </div>
              <div className="custom-getStarted-hr"></div>
              <p className="text-white text-center mt-3 custom-trap-semiBold">
                {imgValue[index]}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5 ">
        <button className="btn text-black bg-white  mx-3 rounded-4 px-4 py-2 fw-bold custom-inter mb-3 mb-sm-0 white-bg-btn custom-inter">
          View All Integrations
        </button>
        <span className="custom-gradient-wrapper rounded-4 m-3 ">
          <button className="text-white  px-4 py-2 fw-bold bg-black rounded-4 custom-inter black-bg-btn mt-2">
            Talk to an Intergrations expert
          </button>
        </span>
      </div>
    </section>
  );
};

export default Integration;
