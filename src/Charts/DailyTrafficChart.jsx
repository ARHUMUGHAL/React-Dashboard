import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const DailyTrafficChart = () => {
  const data = [
    {
      name: "17",
      dailyTraffic: 200,
    },
    {
      name: "18",
      dailyTraffic: 300,
    },
    {
      name: "19",
      dailyTraffic: 80,
    },
    {
      name: "20",
      dailyTraffic: 450,
    },
    {
      name: "21",
      dailyTraffic: 520,
    },
    {
      name: "22",
      dailyTraffic: 220,
    },
    {
      name: "23",
      dailyTraffic: 100,
    },
  ];

  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <Tooltip />
        <Bar dataKey="dailyTraffic" fill="#5F3BFF"/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DailyTrafficChart;
