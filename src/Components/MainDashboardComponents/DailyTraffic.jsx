import React from "react";
import { Flex2,GrayTextColor,GreenText } from "../../CustomClasses/flex1";
import DailyTrafficChart from "../../Charts/DailyTrafficChart";

const DailyTraffic = () => {
  return (
    <div className="w-[20%] mt-8 h-[50vh] flex flex-col">
      <div className={`w-[100%] h-[25%] ${Flex2}`}>
        <div>
            <h2 className={`${GrayTextColor}`}>Daily Traffic</h2>
            <div className="flex items-end">
                <h2 className={`component-text text-[30px] font-bold`}>2.579</h2>
                <p className={`${GrayTextColor} pb-1 px-2 text-[12px]`}>Visitors</p>
            </div>
        </div>
        <div>
            <p className={`${GreenText} font-bold`}>+2.45%</p>
        </div>
      </div>
      <div className="w-[100%] h-[75%]">
      <DailyTrafficChart/>
      </div>
    </div>
  );
};

export default DailyTraffic;
