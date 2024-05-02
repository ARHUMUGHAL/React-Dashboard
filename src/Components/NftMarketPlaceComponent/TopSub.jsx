import React from "react";
import { Flex } from "../../CustomClasses/flex1";

const TopSub = ({FirstHeading,SecondHeading,ThirdHeading,name,Image,Artworks,Width}) => {
  return (
    <div className="flex items-start justify-between mt-5">
      <div className="w-[50%]">
        <p>{FirstHeading}</p>
        <div className={`${Flex} mt-6`}>
          <div className="w-[25px] h-[25px] rounded-[50px] bg-black overflow-hidden">
            <img
              src={Image}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
          </div>
          <p className="mx-2 text-[14px] font-semibold ">{name}</p>
        </div>
      </div>

      <div className="flex items-start flex-col w-[25%]">
        <p>{SecondHeading}</p>
        <p className="mt-6">{Artworks}</p>
      </div>

      <div className="flex items-start flex-col w-[25%]">
        <p>{ThirdHeading}</p>
        <div className={`h-[10px] bg-[#422AFB] rounded-[50px] mt-6 ${Width}`}></div>
      </div>
    </div>
  );
};

export default TopSub;
