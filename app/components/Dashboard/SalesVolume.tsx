import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { columnChartOptions, graphDropdown } from "@/app/data/mockData";
import DropDown from "../Dropdowns/DropDown";

const SalesVolume = () => {
  return (
    <div className="px-4 py-4 bg-white flex-col sm:col-span-2 w-full max-h-64 xl:col-span-6 xl:row-start-2 lg:row-start-3 rounded-xl border border-[#E7E7E7]">
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px] whitespace-nowrap">
            Sales Volume
          </span>
          <div className="sm:flex gap-2 items-center hidden">
            <span className="text-sm font-medium text-[#212B36] -tracking-[0.15px] cursor-pointer">
              Daily
            </span>
            <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
              Weekly
            </span>
            <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
              Monthly
            </span>
            <span className="text-[#637381] text-sm font-medium -tracking-[0.15px] cursor-pointer">
              Yearly
            </span>
          </div>
          <div className="block sm:hidden">
            <DropDown list={graphDropdown} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full h-full">
            <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesVolume;
