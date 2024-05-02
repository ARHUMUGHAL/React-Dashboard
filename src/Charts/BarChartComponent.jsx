import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const data = [
    {
      name: '17',
      ProductB: 4000,
      ProductA: 2400,
      amt: 2400,
    },
    {
      name: '18',
      ProductB: 3000,
      ProductA: 1398,
      amt: 2210,
    },
    {
      name: '19',
      ProductB: 2000,
      ProductA: 9800,
      amt: 2290,
    },
    {
      name: '20',
      ProductB: 2780,
      ProductA: 3908,
      amt: 2000,
    },
    {
      name: '21',
      ProductB: 1890,
      ProductA: 4800,
      amt: 2181,
    },
    {
      name: '22',
      ProductB: 2390,
      ProductA: 3800,
      amt: 2500,
    },
    {
      name: '23',
      ProductB: 3490,
      ProductA: 4300,
      amt: 2100,
    },
  ];

  return (
<ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="ProductB" stackId="a"  fill="#56C1FF" />
          <Bar dataKey="ProductA" stackId="a" fill="#5F3BFF" />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default BarChartComponent;
