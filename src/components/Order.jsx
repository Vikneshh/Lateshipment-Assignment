import React, { useState } from "react";
import rightArrow from "../assets/BulletArrow.png";
import tshirt from "../assets/tshirtCart.png";
import magento from "../assets/magento-inner.png";
import shopify from "../assets/shopify-inner.png";
import bigcommerce from "../assets/bigcommerce-inner.png";
import Progress from "./Progress";
import insights from "../assets/carousel-insights.png";
import insurance from "../assets/carousel-insurance.png";
import invoice from "../assets/carousel-invoice.png";
import returns from "../assets/carousel-order-returns.png";
import tracking from "../assets/carousel-tracking.png";
import useAnimationObserver from "../utils/useAnimationObserver";

const Order = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const bounceIn = useAnimationObserver("animate__bounceIn");

  const carouselItems = [
    {
      id: 0,
      title: "01 CONVERT",
      subtitle: "Boost conversions with spot-on delivery times",
      features: [
        "Our mature ML algorithms factors in delay patterns, weather conditions, network congestions and more from over 1.2 million parcels we track daily.",
        "Our mature ML algorithms factors in delay patterns, weather conditions, network congestions and more from over 1.2 million parcels we track daily.",
      ],
      point: ["Order Countdown Timer", "Order Countdown Timer"],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: tshirt,
    },
    {
      id: 1,
      title: "02 INSURANCE",
      subtitle: "Automated Claims Management",
      features: [
        "Submit claims, track statuses, and manage everything-insurance at scale inside a unified portal.",
        "Enable support agents to initiate lost or damaged package claims instantly from inside your helpdesk.",
      ],
      point: ["Centralised Claims Management", "Process Claims from Helpdesk"],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: insurance,
    },
    {
      id: 2,
      title: "03 ORDER TRACKING",
      subtitle: "Branded Order Tracking",
      features: [
        "Create beautiful, personalized and on-brand shipping notifications — be it via email, SMS or Whatsapp alerts",
        "Be it partial order or multi-carrier shipments, allow customers to track all packages from a single page for an order.",
      ],
      point: ["Custom Shipping Notifications", "Advanced Shipment Tracking"],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: tracking,
    },
    {
      id: 3,
      title: "04 ORDER RETURNS",
      subtitle: "Lost and Damaged Claims Management",
      features: [
        "Sit back and watch refunds for lost and damaged parcels get credited back to your account on its own..",
        "Complex paperwork is a thing of the past. Simply select the shipment, upload proof and let automation take over.",
      ],
      point: ["Automated Refund Recovery", "Automated Claims Documentation"],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: returns,
    },
    {
      id: 4,
      title: "05 INVOICE AUDIT",
      subtitle: "Predictive Incident Alerts & Resolution",
      features: [
        "Receive proactive alerts for critical delivery issues like delays, lost in-transit, failed delivery attempts and more.",
        "Automate proactive notifications to customers facing critical delivery issues and take measures to course correct.",
      ],
      point: ["Smart Incident Alerts", "Proactive issue Resolution"],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: invoice,
    },
    {
      id: 5,
      title: "06 INSIGHTS",
      subtitle: "Fulfillment Analytics & Feedback",
      features: [
        "Capture your customers’ delivery experience feedback to make post-purchase improvements that really matter.",
        "Track all important shipping and delivery KPIs from one dashboard or generate custom reports for specific insights.",
      ],
      point: [
        "Delivery Satisifaction Scores",
        "Collaborative Dashboards and Reports",
      ],
      integratesWith: [shopify, bigcommerce, magento],
      imgSrc: insights,
    },
  ];

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <section ref={bounceIn}>
      <Progress activeIndex={activeIndex} />

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="col-md-10 d-flex justify-content-between mt-5 flex-column flex-md-row ms-3 ms-md-5">
                <div className="col-md-5 col-12 mx-auto ms-md-5">
                  <p
                    className={`fw-bold custom-inter ${
                      index === activeIndex ? "custom-pink-color" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                  <h5 className="text-white custom-trap-bold">
                    {item.subtitle}
                    <br />
                  </h5>
                  {item.point.map((point, index) => (
                    <div key={index}>
                      <div className="d-flex align-items-center my-2">
                        <img
                          src={rightArrow}
                          alt="Right Facing Arrow"
                          className="mx-2"
                        />
                        <h6 className="text-white custom-inter fw-semibold mt-2">
                          {point}
                        </h6>
                      </div>
                      <p className="text-white ms-5 mt-2 custom-inter fw-light">
                        {item.features[index]}
                      </p>
                    </div>
                  ))}
                  <p className="text-white custom-trap-semiBold">
                    Integrates with:
                  </p>
                  <div className="d-flex flex-row col-md-12 flex-wrap mb-5 mb-md-0">
                    {item.integratesWith.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`${src} Image`}
                        className="mx-2 my-md-0 my-2 col-2 col-md-3 custom-metrics-bg p-lg-2 p-xl-3 p-2 rounded-4 img-fluid object-fit-contain custom-relative-image"
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-5 col-10 align-self-center custom-order-bg">
                  <img
                    src={item.imgSrc}
                    alt="Cart with T-shirt"
                    className="col-12"
                  />
                  <span className="custom-gradient-wrapper rounded-4 custom-margin-left">
                    <button
                      className={`text-white px-4 py-2  fw-bold bg-black rounded-4 black-bg-btn custom-inter ${
                        activeIndex === 1 ? "mt-2" : ""
                      } ${activeIndex === 2 ? "mt-3" : ""} ${
                        activeIndex === 3 ? "mt-3" : ""
                      }`}
                    >
                      Book a demo
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange(
              (activeIndex - 1 + carouselItems.length) % carouselItems.length
            )
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() =>
            handleSlideChange((activeIndex + 1) % carouselItems.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Order;
