import React from "react";

const LocationInformation = () => {
  return (
    <div className="flex justify-center h-[28rem] mb-6">
      <div className="w-[70%] bg-gray-200">{/* ตำแหน่งของแผนที่ */}</div>
      <div className="ml-6">
        <p className="text-sm border-b-2 border-[#04B0C1] pb-2">
          Location Information
        </p>
      </div>
    </div>
  );
};

export default LocationInformation;
