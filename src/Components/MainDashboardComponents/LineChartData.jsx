import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import LineChart from "../../Charts/LiningChart";

const LineChartData = () => {
  return (
    <div className=" w-[48%] px-8 h-[100%]">
      <div className="header w-[100%] h-[15%] flex items-center justify-between">
        <div className="flex items-center text-[#ACB7D5]">
          <FaRegCalendar className="mx-2" />
          <span>This month</span>
        </div>
        <div>
          <MdBarChart className="mx-5 text-[22px] component-icons" />
        </div>
      </div>
      <div className="flex w-[100%] h-[100%]">
        <div className="w-[30%] h-[100%]">
          <h1 className="text-[35px] font-bold component-text">$37.5K</h1>
          <div className="w-[100%] flex items-center">
            <p className="text-[13px] text-[#ACB7D5]">Total Spend</p>
            <p className="mx-2 text-[#139f00] font-bold">+2.45%</p>
          </div>
          <div className="flex text-[#139f00] items-center mt-5">
            <div className="w-[15px] h-[15px] rounded-[50px] bg-[#139f00] text-white flex items-center justify-center">
              <TiTick />
            </div>
            <p className="font-bold mx-2">On track</p>
          </div>
        </div>
        <div className="w-[70%] h-[85%]">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default LineChartData;
