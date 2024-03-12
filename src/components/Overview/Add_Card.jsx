import React from "react";

const Add_Overview = ({ title, count, imageSrc }) => {
  return (
    <button className="bg-[#4CB94A] rounded-lg p-2/3 p-1 border-1 text-center items-center mt-4 w-full">
        <p className="text-white text-lg">+ Add Device</p>
    </button>
  );
};

export default Add_Overview;
