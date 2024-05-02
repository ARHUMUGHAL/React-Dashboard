import React from "react";
import PieChart from "../../Charts/PieChartComponent";
import {
  Flex2,
  GrayTextColor,
} from "../../CustomClasses/flex1";

const PieChartData = () => {
  return (
    <div className="w-[30%] px-8 mt-8 h-[50vh]">
      <div className={`${Flex2}`}>
        <p className={`component-text font-bold`}>Your Pie Chart</p>
        <select className={`${GrayTextColor} outline-none`}>
          <option value="Montly" selected>
            Montly
          </option>
          <option value="Daily">Daily</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <PieChart />
    </div>
  );
};

export default PieChartData;
