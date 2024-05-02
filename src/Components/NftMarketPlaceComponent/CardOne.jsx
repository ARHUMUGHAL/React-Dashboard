import React from "react";
import { CiHeart } from "react-icons/ci";
import {
  Flex,
  Flex3,
  GrayTextColor,
  SmallImageWrapper,
} from "../../CustomClasses/flex1";
import { Link } from "react-router-dom";

const CardOne = ({ name, nickname, image, prfImg, prfImg2, prfImg3 ,investment }) => {
  return (
    <div className={`mt-5 w-[32%] h-[48vh]`}>
      <div className="relative w-[100%] h-[20vh] rounded-[30px] bg-blue-800 overflow-hidden">
        <img src={image} className="absolute w-[100%] h-[100%] object-cover" alt="" />
        <div
          className={`w-[45px] rounded-[50px] right-3 top-3 h-[45px] bg-white absolute ${Flex3}`}
        >
          <CiHeart className="text-[25px]" />
        </div>
      </div>
      <div className="mt-2">
        <h5 className={`font-bold text-[22px] component-text`}>{name}</h5>
        <p className={`${GrayTextColor} text-[14px]`}>{nickname}</p>
      </div>
      <div className={`mt-3 ${Flex}`}>
        <div className={`${SmallImageWrapper}`}>
          <img src={prfImg} className="w-[100%] h-[100%] object-cover" alt={prfImg} />
        </div>
        <div className={`${SmallImageWrapper}`}>
          <img src={prfImg2} className="w-[100%] h-[100%] object-cover" alt={prfImg2} />
        </div>
        <div className={`${SmallImageWrapper}`}>
          <img src={prfImg3} className="w-[100%] h-[100%] object-cover" alt={prfImg3} />
        </div>
        <p className={`mx-2 component-text font-bold`}>+5</p>
      </div>
      <h3 className={`font-bold component-text mt-2`}>{investment}</h3>
      <Link to="/" className={`w-[150px] h-[40px] mt-3 ${Flex3} bg-[#190793] rounded-[50px] text-white`}>Place Bid</Link>
    </div>
  );
};

export default CardOne;
