import React from "react";

//___ CSS ___//
import "./Home.scss";

//___ Components ___//
import TopBox from "../../Components/TopBox/TopBox";
import ChartBox from "../../Components/ChartBox/ChartBox";
import BarChartBox from "../../Components/BarChartBox/BarChartBox";
import PieChartBox from "../../Components/PieChartBox/PieChartBox";
import BigChartBox from "../../Components/BigChartBox/BigChartBox";

//___ Data ___//
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../Data";

const Home = () => {
  return (
    <div className="Home">
      <div className="box box-1">
        <TopBox />
      </div>
      <div className="box box-2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box-3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box-4">
        <PieChartBox />
      </div>
      <div className="box box-5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box-6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box-7">
        <BigChartBox />
      </div>
      <div className="box box-8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box-9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
