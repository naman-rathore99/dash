import React from "react";
import { chatImages } from "@/app/data/mockData";

const GroupChat = () => {
  return (
    <div className="w-full rounded-xl border border-[#E7E7E7] lg:row-start-5 xl:row-auto bg-white xl:col-span-4 px-3 py-3">
      <div className="flex gap-6 flex-col">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <span className="text-base text-[#212B36] font-semibold">
            Members <span className="text-[#4F80E1]">(39)</span>
          </span>
          <div className="py-2.5 px-2 border border-[#E7E7E7] flex justify-center items-center gap-1 rounded cursor-pointer group hover:border-[#4F80E1]">
            <span className="text-sm text-[#637381] font-normal group-hover:text-[#4F80E1]">
              View All
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-4 flex-wrap">
            {chatImages?.map((data, index) => (
              <div key={index}>
                <img src={data} alt={`chat-user-${index}`} />
              </div>
            ))}
          </div>
          <span className="text-sm font-normal text-[#212B36]">
            Group Chat
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="max-h-6 max-w-[22px]">
                <img
                  src="/user10.png"
                  alt="user"
                  className="min-w-[22px] min-h-[22px]"
                />
              </div>
              <div className="max-w-xs w-fit bg-[#F6F8FA] px-1.5 py-0.5 rounded-md">
                <span className="text-sm font-normal text-[#637381]">
                  Can you deliver my order before 2 day of delivery date?
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start gap-3 self-end">
              <div className="max-h-6 max-w-[22px]">
                <img
                  src="/user10.png"
                  alt="user"
                  className="min-w-[22px] min-h-[22px]"
                />
              </div>
              <div className="max-w-xs w-fit bg-[#4F80E1] px-1.5 py-0.5 rounded-md">
                <span className="text-sm font-normal text-white">
                  Yes, Sure
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="max-h-6 max-w-[22px]">
                <img
                  src="/user10.png"
                  alt="user"
                  className="min-w-[22px] min-h-[22px]"
                />
              </div>
              <div className="max-w-xs w-fit bg-[#F6F8FA] px-1.5 py-0.5 rounded-md">
                <span className="text-sm font-normal text-[#637381]">
                  Thank You.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3.5 w-full flex gap-3.5">
            <div className="w-4/5 py-3.5 px-3 rounded-md bg-[#F6F8FA]">
              <input
                placeholder="Write here..."
                className="bg-transparent outline-none text-[#637381] w-11/12"
              />
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/mic.svg"
                alt="mic"
                className="min-w-[14px] min-h-[14px] cursor-pointer"
              />
              <img
                src="/dots.svg"
                alt="dots"
                className="min-w-[14px] min-h-[6px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
