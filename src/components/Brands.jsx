import React from "react";
import lagos from "../assets/lagos.png";
import phorm from "../assets/1stphorm.png";
import branch from "../assets/Branch.png";
import chillys from "../assets/Chillys.png";
import lindt from "../assets/Lindt.png";
import kors from "../assets/Michael-kors.png";
import princess from "../assets/Princess-polly.png";
import sumber from "../assets/Sumberpod.png";
import chicago from "../assets/Tasteofchicago.png";
import wild from "../assets/Wild.png";
import vampire from "../assets/Vampirefreaks.png";
import winona from "../assets/winona.png";
import lady from "../assets/lady.png";
import quotes from "../assets/quotes.png";
import useAnimationObserver from "../utils/useAnimationObserver";

const Brands = () => {
  const slideInDown = useAnimationObserver("animate__slideInDown");

  const imgArray = [
    princess,
    kors,
    lagos,
    winona,
    sumber,
    branch,
    chillys,
    phorm,
    lindt,
    wild,
    chicago,
    vampire,
  ];

  const firstRow = imgArray.slice(0, 6);
  const secondRow = imgArray.slice(6);

  return (
    <section className="pt-5 p-3">
      <p className="display-5 text-center col-10 col-md-8 mx-auto fw-bold text-white">
        Trusted by <span className="custom-pink-color">4500 +</span> e-commerce{" "}
        <br /> brands globally
      </p>

      <div className="img-container col-10 mx-auto">
        <div className="marquee-container my-3">
          <div className="marquee left">
            {firstRow.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Brand Image"
                className="img-fluid custom-brand-logo mx-4"
              />
            ))}
          </div>
        </div>

        <div className="marquee-container my-3">
          <div className="marquee right">
            {secondRow.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Brand Image"
                className="img-fluid custom-brand-logo mx-4"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="custom-metrics-bg col-11 mx-auto d-flex justify-content-between align-items-center position-relative mt-5 flex-column flex-md-row p-3"
        ref={slideInDown}
      >
        <img
          src={lady}
          alt="A Lady Image"
          className="custom-testimonial-lady ms-2"
        />
        <div className="d-flex flex-column justify-content-between ms-3">
          <p className="text-white custom-inter">
            LateShipment.com has helped us automate shipping refunds for service
            by FedEx and DHL through and through LateShipment.com has helped us
            automate shipping refunds for service failures refunds refunds.
          </p>
          <p className="custom-pink-color custom-inter">
            Keisha Celene, Director of Customer Success
          </p>
        </div>
        <img src={quotes} alt="" className="custom-testimonial-quotes" />
        <img
          src={branch}
          alt="Branch Image"
          className="custom-testimonial-branch"
        />
      </div>
    </section>
  );
};

export default Brands;
