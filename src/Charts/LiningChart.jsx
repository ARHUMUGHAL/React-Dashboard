import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";


const LiningChart = () => {
  const data = [
    {
      name: "SEP",
      Revenue: 50,
      Profit: 30,
    },
    {
      name: "OCT",
      Revenue: 64,
      Profit: 40,
    },
    {
      name: "NOV",
      Revenue: 48,
      Profit: 24,
    },
    {
      name: "DEC",
      Revenue: 66,
      Profit: 46,
    },
    {
      name: "JAN",
      Revenue: 49,
      Profit: 20,
    },
    {
      name: "FEB",
      Revenue: 68,
      Profit: 46,
    },
  ];

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" style={{ color: "#A3AED0" }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Revenue"
          stroke="#5F3BFF"
          strokeWidth={"5px"}
        />
        <Line
          type="monotone"
          dataKey="Profit"
          stroke="#56C1FF"
          strokeWidth={"5px"}
        />
      </LineChart>
    </ResponsiveContainer>
  );

};

export default LiningChart;
