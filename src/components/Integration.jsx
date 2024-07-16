import helpdesk from "../assets/Helpdesk.png";
import email from "../assets/Email-marketing.png";
import crm from "../assets/crm.png";
import ecommerce from "../assets/e-commerce.png";
import order from "../assets/order-management.png";
import shipping from "../assets/Shipping.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const Integration = () => {
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  const fadeDown = useAnimationObserver("animate__fadeInDownBig");
  let imgArray = [shipping, ecommerce, order, email, crm, helpdesk];
  return (
    <section className="mt-5 ms-md-5 ">
      <p
        className="display-5 text-center col-10 col-md-8 mx-auto fw-bold text-white"
        ref={fadeInLeft}
      >
        Pre-built integrations <br /> with
        <span className="custom-pink-color">1200+ </span> carriers and apps
      </p>

      <div
        className="grid-container col-md-10 col-11 d-flex justify-content-md-between justify-content-center align-items-center flex-wrap px-5 mx-auto"
        ref={fadeDown}
      >
        {imgArray.map((item, index) => {
          return (
            <div key={index} className="mt-4 ">
              <img src={item} alt="Brand Images" />
            </div>
          );
        })}
      </div>
      <div className="text-center mt-5 ">
        <button className="btn text-black bg-white  mx-3 rounded-4 px-4 py-2 fw-bold custom-inter mb-3 mb-sm-0">
          View All Integrations
        </button>
        <span className="custom-gradient-wrapper rounded-4 m-3 ">
          <button className="text-white  px-4 py-2 fw-bold bg-black rounded-4 custom-inter ">
            Talk to an Intergrations expert
          </button>
        </span>
      </div>
    </section>
  );
};

export default Integration;
