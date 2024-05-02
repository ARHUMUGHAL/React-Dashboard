import React from 'react'
import Earning from "../MainDashboardComponents/Earning";
import NewTask from "../MainDashboardComponents/NewTasks";
import Sales from "../MainDashboardComponents/Sales";
import SpendThisMonth from "../MainDashboardComponents/SpendThisMonth";
import TotalProject from "../MainDashboardComponents/TotalProjects";
import YourBalance from "../MainDashboardComponents/YourBalance";

const CombineComponent = () => {
  return (
    <div className="w-[83%] h-[10%] flex items-center px-5 justify-between">
          <div className="w-[16%] h-[80%] shadow-xl border-2 flex items-center justify-center">
            <Earning />
          </div>
          <div className="w-[16%] h-[80%] shadow-xl border-2 flex items-center justify-center">
          <SpendThisMonth/>
          </div>
          <div className="w-[16%] h-[80%] shadow-xl border-2 flex items-center justify-center">
            <Sales/>
          </div>
          <div className="w-[16%] relative h-[80%] shadow-xl border-2 flex items-center justify-center">
            <YourBalance/>
          </div>
          <div className="w-[16%] h-[80%] shadow-xl border-2 flex items-center justify-center">
            <NewTask/>
          </div>
          <div className="w-[16%] h-[80%] shadow-xl border-2 flex items-center justify-center">
          <TotalProject/>
          </div>
        </div>
  )
}

export default CombineComponent