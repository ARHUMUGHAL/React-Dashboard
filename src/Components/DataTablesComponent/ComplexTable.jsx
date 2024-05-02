import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { Flex2, FontStyle,FontStyle2 } from "../../CustomClasses/flex1";
import { FcApproval } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { MdErrorOutline } from "react-icons/md";

const ComplexTable = () => {
  return (
    <div className="flex flex-col px-8 mt-8 w-[100%] h-[100%]">
    <div className="flex items-center justify-between">
      <h2 className="text-[22px] font-bold component-text">Complex Table</h2>
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
          <h2 className={`${FontStyle}`}>STATUS</h2>
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] rounded-[50px] flex items-center justify-center text-[22px]"><FcApproval/></div>
            <p className={`${FontStyle2}`}> Approved</p>
          </div>
          <div className="flex items-center">
            <div className="w-[16px] h-[16px] rounded-[50px] flex items-center justify-center bg-red-500"><RxCross1 className='text-[12px] text-white font-bold' /></div>
            <p className={`${FontStyle2}`}> Disable</p>
          </div>
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] rounded-[50px] flex items-center justify-center text-[22px] text-[orange]"><MdErrorOutline /></div>
            <p className={`${FontStyle2}`}> Error</p>
          </div>
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] rounded-[50px] flex items-center justify-center text-[22px]"><FcApproval/></div>
            <p className={`${FontStyle2}`}> Approved</p>
          </div>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>DATE</h2>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
          <p className={`${FontStyle2}`}> 12 Jan 2024</p>
        </div>

        <div className="w-[20%] flex flex-col justify-between">
          <h2 className={`${FontStyle}`}>PROGRESS</h2>
          <div className="w-[100%] h-[5px] rounded-[50px] develop_bar"></div>
          <div className="w-[80%] h-[5px] rounded-[50px] develop_bar"></div>
          <div className="w-[68%] h-[5px] rounded-[50px] develop_bar"></div>
          <div className="w-[75%] h-[5px] rounded-[50px] develop_bar"></div>
        </div>
      </div>
  </div>
  )
}

export default ComplexTable