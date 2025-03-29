import React from "react";
import { messages } from "@/app/data/mockData";

const Messages = () => {
  return (
    <div className="xl:row-span-2 row-span-1 lg:row-start-4 bg-white py-5 xl:col-span-3 px-3 flex flex-col gap-5 h-full rounded-xl border border-[#E7E7E7]">
      <span className="text-sm text-[#212B36] font-semibold -tracking-[0.15px]">
        New Messages
      </span>
      <div className="flex flex-col gap-5">
        {messages?.map((data, index) => (
          <div key={index} className="flex gap-3.5">
            <div className="">
              <img src={data?.image} alt={data?.alt} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-[#212B36] cursor-pointer">
                {data?.name}
              </span>
              <span className="text-sm font-normal text-[#637381] cursor-pointer">
                {data?.message}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
