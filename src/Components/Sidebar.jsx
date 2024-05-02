import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";


const Sidebar = () => {
  const tabs = [
    {
      name: "Main Dashboard",
      path: "/",
      icon: <IoHomeSharp />,
    },
    {
      name: "NFT Marketplace",
      path: "/nftmarketplace",
      icon: <FaShoppingCart />,
    },
    {
      name: "Data Tables",
      path: "/datatables",
      icon: <SiSimpleanalytics />,
    }
  ];

  const { pathname } = useLocation();

  return (
    <div className={` sidebar fixed  text-white  h-screen overflow-hidden`}>
      <div className="flex items-center justify-center h-[110px] border-b-[1px] border-gray-300">
        <div className={`font-extrabold  text-[25px] text-md tracking-wide`}>
          <h1>THE</h1>
        </div>
        <div className={`font-normal  text-[25px] text-md tracking-wide`}>
          <h1>BEATLES</h1>
        </div>
      </div>

      <div className={`pt-5 w-100% h-[20%]  flex flex-col justify-between`}>
        {tabs?.map((name, index) => {
          return (
            <div
              className={`w-100% h-10 px-5 flex items-center border-[#422AFB] ${ pathname === name.path ? "border-r-[3px]" : ""} `} key={index}>
              <Link to={name.path} className="flex items-center">
                <div className={`mx-2 ${ pathname === name.path ? "text-[#422AFB]" : "component-text" }`}>
                  {name.icon}
                </div>
                <div className={`mx-2 ${ pathname === name.path ? "component-text font-bold tracking-wide" : "component-text" }`}>
                  {name.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
