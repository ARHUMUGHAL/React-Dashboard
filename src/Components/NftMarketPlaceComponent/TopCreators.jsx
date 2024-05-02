import React from "react";
import {
  Flex2,
  GrayTextColor,
} from "../../CustomClasses/flex1";
import TopSub from "./TopSub";
import PrfImg1 from "../../Assets/Component 1.png"
import PrfImg2 from "../../Assets/Component 2.png"
import PrfImg3 from "../../Assets/Component 3.png"
import PrfImg4 from "../../Assets/Component 4.png"
import PrfImg5 from "../../Assets/Component 5.png"

const TopCreators = () => {
  return (
    <div className="w-[100%] h-[60vh]">
      <div className={`w-[100%] px-5 ${Flex2} items-center`}>
        <h2 className={`font-semibold text-[25px] component-text`}>
          Top Creators
        </h2>
        <span className="component-text">See all</span>
      </div>
      <div className="w-[100%]">
        <div
          className={` font-bold ${GrayTextColor} text-[13px] mt-5 px-5 `}
        >
        
          <div className="w-[100%]">
            <TopSub FirstHeading="NAME" SecondHeading="Artworks" Artworks="2907" Width="w-[80px]" Image={PrfImg1} name="@venus.sys" ThirdHeading="Rating" />
          </div>
          <div className="w-[100%]">
            <TopSub name="@horizon.ui" Artworks="1250" Width="w-[50px]" Image={PrfImg2} />
          </div>
          <div className="w-[100%]">
            <TopSub name="@simmmple.web" Artworks="1080" Width="w-[20px]" Image={PrfImg3}/>
          </div>
          <div className="w-[100%]">
            <TopSub name="@abraham47.y" Artworks="1600" Width="w-[35px]" Image={PrfImg4}/>
          </div>
          <div className="w-[100%]">
            <TopSub name="@andreea.1z" Artworks="1980" Width="w-[48px]" Image={PrfImg5}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
