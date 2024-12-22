import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total", count: 1200, fill: "white" },
  { name: "Girls", count: 500, fill: "#FAE27C" },
  {
    name: "Boys",
    count: 700,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar background dataKey="count" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default CountChart;
