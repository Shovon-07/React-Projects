import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

//___ CSS ___//
import "./ChartBox.scss";

// type Props = {
//   color: string,
//   icon: string,
//   title: string,
//   dataKey: string,
//   number: number | string,
//   percentage: number,
//   chartData: object[],
// };

const ChartBox = (props) => {
  return (
    <>
      <div className="ChartBox">
        <div className="boxInfo">
          <div className="title">
            {/* <img src="/images/user.svg" alt="" /> */}
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to="/brand" style={{ color: props.color }}>
            View all
          </Link>
        </div>
        <div className="chartInfo">
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: "10", y: "50" }}
                />
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="texts">
            <div
              className="percentage"
              style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
            >
              {props.percentage} %
            </div>
            <div className="duration">This month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBox;
