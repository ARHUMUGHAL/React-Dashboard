import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Flex, Size, Flex2, FontStyle,FontStyle2 } from "../../CustomClasses/flex1";

const CheckTable = () => {
  return (
    <div className="flex flex-col px-8 mt-8 w-[46%]">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold component-text">Check Table</h2>
        <BsThreeDots className="text-[23px] component-icons" />
      </div>
      <div className={`w-[100%] mt-2 h-[80%]  ${Flex2}`}>
        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>NAME</h2>
          <div className={`mt-1 ${Flex}`}>
            <input type="checkbox" id="check1" className={`${Size}`} checked />
            <label htmlFor="check1" className={`${FontStyle2}`}>
              Check no 1
            </label>
          </div>
          <div className={`mt-1 ${Flex}`}>
            <input type="checkbox" id="check2" className="w-[15px] h-[15px]" checked />
            <label htmlFor="check2" className={`${FontStyle2}`}>
              Check no 2
            </label>
          </div>
          <div className={`mt-1 ${Flex}`}>
            <input type="checkbox" id="check3" className="w-[15px] h-[15px]" checked />
            <label htmlFor="check3" className={`${FontStyle2}`}>
              Check no 3
            </label>
          </div>
          <div className={`mt-1 ${Flex}`}>
            <input type="checkbox" id="check4" className="w-[15px] h-[15px]" checked />
            <label htmlFor="check4" className={`${FontStyle2}`}>
              Check no 4
            </label>
          </div>
          <div className={`mt-1 ${Flex}`}>
            <input type="checkbox" id="check5" className="w-[15px] h-[15px]" />
            <label htmlFor="check5" className={`${FontStyle2}`}>
              Check no 5
            </label>
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>PROGRESS</h2>
          <p className={`${FontStyle2}`}> 17.5%</p>
          <p className={`${FontStyle2}`}> 20.5%</p>
          <p className={`${FontStyle2}`}> 11.8%</p>
          <p className={`${FontStyle2}`}> 8.8%</p>
          <p className={`${FontStyle2}`}> 50.8%</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>QUANTITY</h2>
          <p className={`${FontStyle2}`}> 2458</p>
          <p className={`${FontStyle2}`}> 1458</p>
          <p className={`${FontStyle2}`}> 1024</p>
          <p className={`${FontStyle2}`}> 858</p>
          <p className={`${FontStyle2}`}> 258</p>

          
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>DATE</h2>
          <p className={`${FontStyle2}`}> 17.5%</p>
          <p className={`${FontStyle2}`}> 20.5%</p>
          <p className={`${FontStyle2}`}> 11.8%</p>
          <p className={`${FontStyle2}`}> 8.8%</p>
          <p className={`${FontStyle2}`}> 50.8%</p>
        </div>
      </div>
    </div>
  );
};

export default CheckTable;
