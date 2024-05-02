import React from "react";
import { Link } from "react-router-dom";
import { Flex3 } from "../../CustomClasses/flex1";
import Image from "../../Assets/discover component.png";

const Discover = () => {
  return (
    <div className="absolute top-0 w-[90%] bg-[#4517EB] mx-5 h-[350px] rounded-[50px] overflow-hidden">
      <div className="flex justify-between">
        <div className="w-[45%]">
          <h1 className="font-semibold text-white text-[35px] w-[100%] mt-10 mx-10 leading-[45px]">
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <p className="text-white font-semibold w-[100%] mx-10 mt-3">
            Enter in this creative world. Discover now the latest NFTs or start
            creating your own!
          </p>
        </div>
        <div className="relative left-[80px] w-[450px] mt-5 h-[200px]">
            <img src={Image} className="w-[100%] h-[100%] object-contain" alt="" />
        </div>
      </div>
      <div className="flex mx-10">
        <Link
          to="/"
          className={`w-[150px] h-[40px] bg-white ${Flex3} rounded-[50px] font-semibold mt-5`}
        >
          Discover Now
        </Link>
        <Link to="/" className={`${Flex3} text-white mx-6 font-semibold mt-5`}>
          Watch Video
        </Link>
      </div>
    </div>
  );
};

export default Discover;
