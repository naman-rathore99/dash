import React from "react";

interface OrderTableProps {
  data: any[];
}

const OrderTable: React.FC<OrderTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-scroll md:overflow-auto max-w-xl xs:max-w-xl sm:max-w-xl md:max-w-7xl 2xl:max-w-none mt-1">
      <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1">
        <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
          <tr className="">
            <th className="py-3 pl-3 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-l-lg">
              Order ID
            </th>
            <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Product
            </th>
            <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Order time
            </th>
            <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Status
            </th>
            <th className="py-3 px-2.5 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Qty
            </th>
            <th className="py-3 text-[#212B36] text-sm font-normal whitespace-nowrap">
              Total Price
            </th>
            <th className="py-3 pl-1 text-[#212B36] text-sm font-normal whitespace-nowrap rounded-r-lg">
              Customer
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] bg-[#f6f8fa] hover:shadow-2xl cursor-pointer"
            >
              <td className="py-4 pl-3 text-sm font-normal text-[#637381] rounded-l-lg">
                {item.id}
              </td>
              <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                {item.product}
              </td>
              <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                {item.order}
              </td>
              <td
                className="py-4 px-1 text-sm font-normal text-[#637381]"
                style={{
                  color: item?.color,
                }}
              >
                {item.status}
              </td>
              <td className="py-4 px-2.5 text-sm font-normal text-[#637381]">
                {item.Qty}
              </td>
              <td className="py-4 px-1 text-sm font-normal text-[#637381]">
                {item.price}
              </td>
              <td className="py-4 px-1 text-sm font-normal text-[#637381] rounded-r-[8px]">
                <div className="relative flex gap-1 items-center">
                  <div className="w-[22px] h-[22px]">
                    <img
                      src={item?.image}
                      alt="user-avatar"
                      className="min-w-[22px] min-h-[22px]"
                    />
                  </div>
                  {item.customer}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
