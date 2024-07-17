import flowChart from "../assets/flow.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import arrow from "../assets/Arrow.png";
import rightArrow from "../assets/rightarrow.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const FlowChart = () => {
  const rollIn = useAnimationObserver("animate__rollIn");
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  return (
    <section className="mt-5">
      <h1
        className="display-2 text-center col-11 col-md-10 mx-auto text-white custom-trap-extraBold"
        ref={fadeInLeft}
      >
        Your <span className="custom-pink-color">AI-powered </span> Path{" "}
        <br className="d-md-block d-none" />
        to Post-purchase Success
      </h1>

      <div
        className="w-75 mx-auto text-center mt-5 d-none d-md-block"
        ref={rollIn}
      >
        <img
          src={flowChart}
          alt="Flow chart Image"
          className="custom-img-flow"
        />
      </div>

      <div className=" mx-auto text-center mt-5 d-block d-md-none" ref={rollIn}>
        <div>
          <div className="col-11">
            <img src={card1} alt="Flow chart Image" className="col-8 ms-5" />
          </div>
          <div className="custom-arrow-margin">
            <img src={arrow} alt="Arrow Image" className="custom-rotate" />
          </div>
          <div className="col-11">
            <img src={card2} alt="Flow chart Image" className="col-4 ms-5" />
          </div>
          <div className="custom-arrow-margin">
            <img src={arrow} alt="Arrow Image" className="custom-rotate" />
          </div>
          <div className="col-11">
            <img src={card3} alt="Flow chart Image" className="col-8 ms-5" />
          </div>
          <div className="custom-arrow-margin">
            <img src={arrow} alt="Arrow Image" className="custom-rotate" />
          </div>
          <div className="col-11">
            <img src={card4} alt="Flow chart Image" className="col-4 ms-5" />
            <span className="custom-arrow-margin ">
              <img src={rightArrow} alt="Arrow Image" />
            </span>
            <img src={card5} alt="Flow chart Image" className="col-4 m-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowChart;
