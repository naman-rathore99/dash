import React from "react";
import { CardItem } from "@/app/types";

interface CardsProps {
  cardData: CardItem[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="px-4 py-4 bg-white flex flex-col gap-4 xl:col-span-3 rounded-xl border border-[#E7E7E7]"
        >
          <div className="flex justify-between items-center">
            <span className="text-[#637381] text-sm font-normal">
              {card.type}
            </span>
            <div className="flex items-center gap-1">
              <img src={card.arrow} alt="arrow" />
              <span className="text-[#10B860] text-sm font-medium">
                {card.percentage}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-[#212B36] text-2xl font-semibold">
              {card.price}
            </span>
            <img src={card.graph} alt="graph" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;