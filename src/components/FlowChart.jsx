import Optimisation from "./Optimisation";
import PPJOrchestra from "./PPJOrchestra";
import Shipping from "./Shipping";
import Unify from "./Unify";
import Decision from "./Decision";
import rightArrow from "../assets/flowchart-right.png";
import leftArrow from "../assets/flowchart-left.png";
import downArrow from "../assets/flowchart-down.png";
import combinedArrow from "../assets/flowchart-combined-arrow.png";
import useAnimationObserver from "../utils/useAnimationObserver";
const FlowChart = () => {
  const rollIn = useAnimationObserver("animate__rollIn");
  const fadeInLeft = useAnimationObserver("animate__fadeInLeft");
  return (
    <section className="mt-5">
      <h1
        className="display-2 text-center col-xs-12 col-11 col-md-10 mx-auto text-white custom-trap-extraBold"
        ref={fadeInLeft}
      >
        Your <span className="custom-pink-color">AI-powered </span> Path{" "}
        <br className="d-md-block d-none" />
        to Post-purchase Success
      </h1>

      <div
        className="containers text-white custom-responsive-alteration"
        ref={rollIn}
      >
        <div className="item item-1 cards">
          <Unify />
        </div>
        <div className="item item-2">
          <img src={rightArrow} alt="right arrow" className="mt-5" />
        </div>
        <div className="item item-3 cards">
          <Decision />
        </div>
        <div className="item item-4">
          <img src={combinedArrow} alt="combined arrow" className="mt-5" />
        </div>
        <div className="item item-5 cards">
          <PPJOrchestra />
        </div>
        <div className="item item-6">
          <img src={downArrow} alt="down arrow" />
        </div>
        <div className="item item-7"></div>
        <div className="item item-8"></div>
        <div className="item item-9"></div>
        <div className="item item-10 cards">
          <Shipping />
        </div>
        <div className="item item-11">
          <img src={leftArrow} alt="left arrow" />
        </div>
        <div className="item item-12 cards">
          <Optimisation />
        </div>
        <div className="item item-13">
          <img src={leftArrow} alt="left arrow" />
        </div>
      </div>
    </section>
  );
};

export default FlowChart;
