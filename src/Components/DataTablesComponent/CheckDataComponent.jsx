import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Flex2,
  FontStyle,
  FontStyle2,
} from "../../CustomClasses/flex1";

const CheckDataComponent = () => {
  return (
    <div className="flex flex-col px-8 mt-8 w-[100%] h-[100%]">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold component-text">Check Table</h2>
        <BsThreeDots className="text-[23px] component-icons" />
      </div>
      <div className={`w-[100%] mt-10 h-[80%]  ${Flex2}`}>
        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>NAME</h2>
          <p className={`${FontStyle2}`}>Marketplace</p>
          <p className={`${FontStyle2}`}>Venus DB PRO</p>
          <p className={`${FontStyle2}`}>Venus DS</p>
          <p className={`${FontStyle2}`}>Venus 3D Asset</p>
          <p className={`${FontStyle2}`}>Marketplace</p>
          <p className={`${FontStyle2}`}>Venus DB PRO</p>
          <p className={`${FontStyle2}`}>Marketplace</p>
          <p className={`${FontStyle2}`}>Venus DB PRO</p>
          <p className={`${FontStyle2}`}>Venus 3D Asset</p>
          <p className={`${FontStyle2}`}>Marketplace</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>PROGRESS</h2>
          <p className={`${FontStyle2}`}> 75.5%</p>
          <p className={`${FontStyle2}`}> 34.4%</p>
          <p className={`${FontStyle2}`}> 25%</p>
          <p className={`${FontStyle2}`}> 100%</p>
          <p className={`${FontStyle2}`}> 75.5%</p>
          <p className={`${FontStyle2}`}> 15.5%</p>
          <p className={`${FontStyle2}`}> 38%</p>
          <p className={`${FontStyle2}`}> 75.5%</p>
          <p className={`${FontStyle2}`}> 65%</p>
          <p className={`${FontStyle2}`}> 75.5%</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>QUANTITY</h2>
          <p className={`${FontStyle2}`}> 1502</p>
          <p className={`${FontStyle2}`}> 1860</p>
          <p className={`${FontStyle2}`}> 1600</p>
          <p className={`${FontStyle2}`}> 1192</p>
          <p className={`${FontStyle2}`}> 7112</p>
          <p className={`${FontStyle2}`}> 500</p>
          <p className={`${FontStyle2}`}> 800</p>
          <p className={`${FontStyle2}`}> 1000</p>
          <p className={`${FontStyle2}`}> 358</p>
          <p className={`${FontStyle2}`}> 850</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>DATE</h2>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
        </div>
      </div>
    </div>
  );
};

export default CheckDataComponent;
