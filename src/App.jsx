import Brands from "./components/Brands";
import Contact from "./components/Contact";
import FlowChart from "./components/FlowChart";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Integration from "./components/Integration";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import Progress from "./components/Progress";
import { Helmet } from "react-helmet";
import logo from "../src/assets/lateshipment_logo.jpg";

const App = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
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
