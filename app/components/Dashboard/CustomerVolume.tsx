import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { pieChartOptions } from "@/app/data/mockData";

const CustomerVolume = () => {
  return (
    <div className="px-4 pt-4 pb-7 bg-white flex-col gap-1 justify-between w-full max-h-64 xl:col-span-3 xl:row-start-2 lg:row-start-3 rounded-xl border border-[#E7E7E7]">
      <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px]">
        Customer Volume
      </span>
      <div className="flex justify-between sm:flex-col md:flex-row max-w-xs 2xl:max-w-none h-full max-h-60 md:pb-5">
        <div className="sm:mt-2 md:mt-0 self-center md:self-end">
          <div className="flex gap-1 items-center">
            <div className="h-2 w-3 bg-[#497AF9] rounded-sm"></div>
            <div className="text-[10px] flex gap-1">
              <span className="">62%</span>
              <span className="text-[#637381]">New</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-3 bg-[#18CDCA] rounded-sm"></div>
            <div className="text-[10px] flex gap-1">
              <span>13% </span>
              <span className="text-[#637381]">Returning</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="h-2 w-3 bg-[#000000]/20 rounded-sm"></div>
            <div className="text-[10px] flex gap-1">
              <span>23%</span>
              <span className="text-[#637381]">Inactive</span>
            </div>
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default CustomerVolume;
