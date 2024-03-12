import React from "react";

const Card_Overview = ({ title, count, imageSrc, theme_color, font_color }) => {
  return (
    <div
      className={`bg-[#2B3E56] rounded-lg p-2/3 p-1 border-l-4 border-${theme_color} flex justify-between items-center mt-4 shadow`}
    >
      <div>
        <p>{title}</p>
        <p className={`text-${font_color} text-2xl`}>{count}</p>
      </div>
      <img src={imageSrc} alt="Device" className="w-10 h-auto mr-2" />
    </div>
  );
};

export default Card_Overview;
