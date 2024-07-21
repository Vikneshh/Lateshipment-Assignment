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
      <h1 className="display-4 text-center col-10 col-md-8 mx-auto text-white custom-trap-extraBold">
        Trusted by <span className="custom-pink-color">4500 +</span> e-commerce{" "}
        <br className="d-xxl-block d-none" /> brands globally
      </h1>

      <div className="img-container col-12 mx-auto">
        <div className="marquee-container my-3">
          <div className="marquee left">
            {firstRow.map((image, index) =>
              index === 0 ? (
                <img
                  key={index}
                  src={image}
                  alt="Brand Image"
                  className="img-fluid  mx-5"
                />
              ) : (
                <img
                  key={index}
                  src={image}
                  alt="Brand Image"
                  className="img-fluid custom-brand-logo mx-5"
                />
              )
            )}
          </div>
        </div>

        <div className="marquee-container my-3">
          <div className="marquee right">
            {secondRow.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Brand Image"
                className="img-fluid custom-brand-logo mx-5"
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="d-flex col-md-11 custom-metrics-bg mx-auto col-12 flex-md-row flex-column position-relative p-md-1 p-3 mt-5"
        ref={slideInDown}
      >
        <div className="mx-auto mx-md-0">
          <img src={lady} alt="Lady Image" className="custom-lady-position" />
        </div>
        <div className="d-flex justify-content-between flex-column ms-4 pt-3 w-100">
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-white fs-5 custom-inter col-10">
              LateShipment.com has helped us automate shipping refunds for
              service <br className="d-none d-xl-block" /> by FedEx and DHL
              through and through LateShipment.com has helped us{" "}
              <br className="d-none d-xl-block" /> automate shipping refunds for
              service failures refunds refunds.
            </p>
            <div>
              <img src={quotes} alt="" className="custom-quotes-position" />
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="custom-pink-color fs-5 custom-inter fw-semibold w-100 w-md-auto text-center text-md-start mb-3 mb-md-0 custom-testimonial-name">
              Keisha Celene, Director of Customer Success
            </p>
            <div className="align-self-end">
              <img src={branch} alt="" className="me-4 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
