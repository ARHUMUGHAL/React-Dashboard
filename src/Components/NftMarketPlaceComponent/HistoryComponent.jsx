import React from "react";
import {
  Flex2,
  GrayTextColor,
} from "../../CustomClasses/flex1";
import { FaEthereum } from "react-icons/fa";

const HistoryComponent = ({Image,name,Author,Time}) => {
  return (
    <div className={`${Flex2}`}>
      <div className="w-[70%] flex items-center">
        <div className="w-[60px] h-[60px] rounded-[10px] overflow-hidden">
          <img src={Image} className="w-[100%] h-[100%] object-cover" alt="" />
        </div>
        <div className="mx-2">
          <h2 className={`component-text text-[18px] font-bold`}>
            {name}
          </h2>
          <p className={`text-[13px] ${GrayTextColor}`}>{Author}</p>
        </div>
      </div>
      <div className="w-[30%] flex items-center">
        <div className="flex items-center">
            <div><FaEthereum className="text-[22px] component-icons" /></div>
            <span className="text-[18px] w-[30px] font-bold component-text mx-2">0.91 ETH</span>
        </div>
        <div className={`w-[20px] mx-3 ${GrayTextColor}`}>
            <span>{Time}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
