"use client"

import React from "react";
import Cards from "../Cards/Cards";
import OrderTable from "../Tables/OrderTable";
import ProductTable from "../Tables/ProductTable";
import { cardData, TableData, productData } from "@/app/data/mockData";
import DropDown from "../Dropdowns/DropDown";
import { people, resultDropdown } from "@/app/data/mockData";
import CustomerVolume from "./CustomerVolume";
import SalesVolume from "./SalesVolume";
import Messages from "./Messages";
import GroupChat from "./GroupChat";

const Dashboard = () => {
  return (
    <div className="w-full py-3 pl-7 pr-5 grid xl:grid-cols-12 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-start">
      <Cards cardData={cardData} />
      <CustomerVolume />
      <SalesVolume />
      <Messages />
      
      <div className="p-3 bg-white flex flex-col xl:col-span-9 xl:row-auto lg:row-start-4 lg:col-span-2 rounded-xl border border-[#E7E7E7]">
        <div className="flex items-center justify-between flex-wrap gap-1">
          <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px] whitespace-nowrap">
            Recent Order
          </span>
          <DropDown list={people} />
        </div>
        <OrderTable data={TableData} />
      </div>

      <div className="p-3 bg-white flex flex-col xl:col-span-8 lg:row-start-5 xl:row-auto lg:col-span-2 rounded-xl border border-[#E7E7E7] h-max">
        <div className="flex items-center justify-between flex-wrap gap-1">
          <span className="text-[#212B36] text-base font-semibold -tracking-[0.15px] whitespace-nowrap">
            Recent Order
          </span>
          <DropDown list={resultDropdown} />
        </div>
        <ProductTable data={productData} />
      </div>

      <GroupChat />
    </div>
  );
};

export default Dashboard;
