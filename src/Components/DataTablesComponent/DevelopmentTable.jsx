import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Flex2,
  FontStyle,
  FontStyle2,
} from "../../CustomClasses/flex1";
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";

const DevelopmentTable = () => {
  return (
    <div className="flex flex-col px-8 mt-8 w-[100%] h-[100%]">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold component-text">
          Development Table
        </h2>
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

        <div className="w-[20%] flex flex-col component-icons justify-between">
          <h2 className={`${FontStyle}`}>Tech</h2>
          <div className="flex text-[25px] w-[80%] justify-between">
            <FaApple />
            <BsAndroid2 />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[80%] justify-between">
            <FaApple />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <FaApple />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <BsAndroid2 />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <FaApple />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <FaApple />
            <BsAndroid2 />
          </div>
          <div className="flex text-[25px] w-[80%] justify-between">
            <FaApple />
            <BsAndroid2 />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <FaApple />
            <FaWindows />
          </div>
          <div className="flex text-[25px] w-[80%] justify-between">
            <FaApple />
          </div>
          <div className="flex text-[25px] w-[50%] justify-between">
            <FaApple />
            <FaWindows />
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>Date</h2>
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

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>Progress</h2>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 75.5%</p>
            <div className="develop_bar w-[50%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 34.4%</p>
            <div className="develop_bar w-[30%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 25%</p>
            <div className="develop_bar w-[25%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 100%</p>
            <div className="develop_bar w-[100%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 75.5%</p>
            <div className="develop_bar w-[50%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 15.5%</p>
            <div className="develop_bar w-[15%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 38%</p>
            <div className="develop_bar w-[38%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 75.5%</p>
            <div className="develop_bar w-[50%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 65%</p>
            <div className="develop_bar w-[50%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
          <div className="flex items-center">
            <p className={`${FontStyle2}`}> 75.5%</p>
            <div className="develop_bar w-[50%] h-[5px] rounded-[50px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTable;
