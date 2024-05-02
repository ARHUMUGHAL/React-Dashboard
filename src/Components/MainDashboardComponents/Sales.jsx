import React from "react";

const Sales = () => {
  return (
    <div className="flex flex-col justify-between mx-4">
      <p className="text-gray-400 font-semibold w-[120%]">Sales</p>
      <h2 className="text-[28px] font-semibold mt-[-5px] component-text">
        $574.34
      </h2>
      <div className="flex w-[110%] items-center">
        <span className="font-extrabold text-[#24BF87] text-[12px]">+23%</span>
        <p className="text-[15px] mx-1 text-[#A7B1D2]">since last month</p>
        </div>
    </div>
  );
};

export default Sales;
