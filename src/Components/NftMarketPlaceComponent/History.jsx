import React from "react";
import { Flex2 } from "../../CustomClasses/flex1";
import HistoryComponent from "./HistoryComponent";
import Image from "../../Assets/Component 1.png";
import Image1 from "../../Assets/Component 2.png";
import Image2 from "../../Assets/Component 3.png";
import Image3 from "../../Assets/Component 4.png";
import Image4 from "../../Assets/Component 5.png";
import Image5 from "../../Assets/Component 6.png";

const History = () => {
  return (
    <div className="w-[100%] h-[100vh] px-5">
      <div className={`w-[100%] ${Flex2} items-center`}>
        <h2 className={`font-semibold text-[25px] component-text`}>
          History
        </h2>
        <span className="component-text">See all</span>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image} name="Colorful Heaven" Author="By Mark Benjamin" Time="30s Ago"/>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image2} name="Abstract Colors" Author="By Esthera Jackson" Time="58s Ago"/>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image1} name="ETH AI Brain" Author="By Nick Wilson" Time="1m Ago"/>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image3} name="Swipe Circles" Author="By Peter Will" Time="2m Ago"/>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image4} name="Mesh Gradients" Author="By Will Smith" Time="3m Ago"/>
      </div>
      <div className={`w-[100%] mt-12`}>
        <HistoryComponent Image={Image5} name="3D Cubes Art" Author="By Manny Gates" Time="4m Ago"/>
      </div>
    </div>
  );
};

export default History;
