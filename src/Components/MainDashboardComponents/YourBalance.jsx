import React from "react";
import image from "../../Assets/us logo.png";
const YourBalance = () => {
  return (
    <div className="flex items-center w-[95%] justify-center">
      <div>
        <p className="text-gray-400 font-semibold">Your balance</p>
        <h2 className="text-[28px] font-bold mt-[-5px] component-text">
          $1,000
        </h2>
      </div>
      <div>
        <div className="w-[50px] h-[50px] rounded-[50px] flex items-center">
          <img src={image} alt="" />
          <select className="outline-none text-white bg-transparent h-[20px]">
            <option></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default YourBalance;
