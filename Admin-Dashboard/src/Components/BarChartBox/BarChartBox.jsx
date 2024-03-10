import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

//___ CSS ___//
import "./BarChartBox.scss";

const BarChartBox = (props) => {
  return (
    <>
      <div className="BarChartBox">
        <h1>{props.title}</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height={100}>
            <BarChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
                cursor={{ fill: "none" }}
              />
              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BarChartBox;
