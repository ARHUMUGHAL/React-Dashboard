import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Flex2,
  FontStyle,
  FontStyle2,
} from "../../CustomClasses/flex1";

const ColumnTable = () => {
  return (
    <div className="flex flex-col px-8 mt-8 w-[100%] h-[100%]">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold component-text">4-Column Table</h2>
        <BsThreeDots className="text-[23px] component-icons" />
      </div>
      <div className={`w-[100%] mt-10 h-[70%]  ${Flex2}`}>
        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle} w-[100%]`}>NAME</h2>
          <p className={`${FontStyle2} w-[100%]`}>Marketplace</p>
          <p className={`${FontStyle2} w-[100%]`}>Venus DB PRO</p>
          <p className={`${FontStyle2} w-[100%]`}>Venus DS</p>
          <p className={`${FontStyle2} w-[100%] text-[15px]`}>Venus 3D Asset</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>PROGRESS</h2>
          <p className={`${FontStyle2}`}> 75.5%</p>
          <p className={`${FontStyle2}`}> 34.4%</p>
          <p className={`${FontStyle2}`}> 25%</p>
          <p className={`${FontStyle2}`}> 100%</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>QUANTITY</h2>
          <p className={`${FontStyle2}`}> 2458</p>
          <p className={`${FontStyle2}`}> 1458</p>
          <p className={`${FontStyle2}`}> 1024</p>
          <p className={`${FontStyle2}`}> 858</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>DATE</h2>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ColumnTable;
