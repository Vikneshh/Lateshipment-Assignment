import Brands from "./components/Brands";
import Contact from "./components/Contact";
import FlowChart from "./components/FlowChart";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Integration from "./components/Integration";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Progress from "./components/Progress";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-black">
        <Brands />
        <FlowChart />
        <Progress />
        <Order />
        <Integration />
        <GetStarted />
        <Contact />
      </div>
    </div>
  );
};

export default App;
