import React from "react";

const CardTips = () => {
  return (
    <div className=" mt-[80px] max-w-screen bg-[#2B3E56] rounded-l-lg border-l-[4px] border-[#3E5CFE] m-4">
      <div className="px-3 py-2">
        <p className="text-sm">Tips</p>
        <p className="text-white text-sm">
          The query returns a maximum of 10000 data. If it exceeds, please
          change the time range.
        </p>
      </div>
    </div>
  );
};

export default CardTips;
