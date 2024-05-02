import React from "react";
import { MdBarChart } from "react-icons/md";
import BarChart from "../../Charts/BarChartComponent";

const BarChartData = () => {
  return (
    <div className=" w-[48%] px-8 h-[100%]">
      <div className="header w-[100%] h-[15%] flex items-center justify-between">
          <span className="text-[22px] font-bold component-text">Weekly Earning</span>
        <div>
          <MdBarChart className="mx-5 text-[22px] component-icons" />
        </div>
      </div>
      <div className="w-[90%] h-[85%]">
        <BarChart/>
      </div>
    </div>
  );
};

export default BarChartData;
