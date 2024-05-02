import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {



  return (
    <div className={`relative flex h-[190vh] overflow-hidden `}>
      <div className="w-[16%]">
        <Sidebar/>
      </div>
      <div className="w-[84%]">
        <Header/>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
