import React from "react";

interface ProductTableProps {
  data: any[];
}

const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-scroll md:overflow-auto max-w-xl sm:max-w-xl md:max-w-3xl 2xl:max-w-none mt-1">
      <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1">
        <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
          <tr className="">
            <th className="py-3 pl-6 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-l-lg">
              Product
            </th>
            <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Sold Amount
            </th>
            <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Unit Price
            </th>
            <th className="py-3 px-2.5 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Revenue
            </th>
            <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-r-lg">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] bg-[#f6f8fa] cursor-pointer hover:shadow-xl"
            >
              <td className="py-4 pl-6 text-sm font-normal text-[#637381] rounded-l-lg">
                <div className="relative flex gap-1 items-center">
                  <div className="w-[22px] h-[22px]">
                    <img
                      src={item?.image}
                      alt="product-image"
                      className="min-w-[22px] min-h-[22px]"
                    />
                  </div>
                  {item.product}
                </div>
              </td>
              <td className="py-4 px-2 text-sm font-normal text-[#637381]">
                {item.price}
              </td>
              <td className="py-4 px-2.5 text-sm font-normal text-[#637381]">
                {item.unit}
              </td>
              <td className="py-4 px-2.5 text-sm font-normal text-[#637381]">
                {item.revenue}
              </td>
              <td className="py-4 px-1.5 text-sm font-normal text-[#637381] rounded-r-lg">
                <div className="relative flex gap-2 items-center">
                  <div className="w-[10px] h-[10px]">
                    <img
                      src="/star.svg"
                      alt="star"
                      className="min-w-[10px] min-h-[10px]"
                    />
                  </div>
                  {item.rating}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
