import React from "react";

//___ Css ___//
import "./Home.scss";

//___ Components ___//
import Summery from "../../Components/Summery/Summery";
import Linechart from "../../Components/LineChart/Linechart";

const Home = () => {
  return (
    <div className="Home">
      <div className="content">
        <Summery />
      </div>
      <div className="content">
        <Linechart />
      </div>
    </div>
  );
};

export default Home;
