import React from "react";
import Layout from "../Components/Layout";
import CombineComponent from "../Components/MainDashboardComponents/CombineComponent";
import LineChartData from "../Components/MainDashboardComponents/LineChartData";
import BarChartData from "../Components/MainDashboardComponents/BarChartData";
import CheckTable from "../Components/MainDashboardComponents/CheckTable";
import DailyTraffic from "../Components/MainDashboardComponents/DailyTraffic";
import PieChartData from "../Components/MainDashboardComponents/PieChartData";

const MainDashboard = () => {
  return (
    <Layout>
      <div className="absolute top-[10%] w-[100%] h-[100%]">
        <CombineComponent />
        <div className="absolute top-[12%] flex mt-5 h-[30%] w-[85%] justify-between overflow-hidden">
          <LineChartData/>
          <BarChartData/>
        </div>
        <div className="absolute bottom-[12%] w-[82%] h-[40%] flex mt-5 justify-between overflow-hidden">
          <CheckTable/>
          <DailyTraffic/>
          <PieChartData/>
        </div>
      </div>
    </Layout>
  );
};

export default MainDashboard;
