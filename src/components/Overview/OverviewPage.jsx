import React from "react";
import Card_Overview from "./Card_Overview";
import Add_Overview from "./Add_Card";
import card_over from "../../model/card_over";
import data from "../../model/data";

const OverviewPage = () => {
  const totalDevices = data.length;
  const onlineDevices = data.filter(
    (device) => device.status === "online"
  ).length;
  const offlineDevices = data.filter(
    (device) => device.status === "offline"
  ).length;

  return (
    <div className="flex bg-[#263242] h-full p-5 text-white w-full">
      <div className="w-[70%] bg-gray-200">{/* Place for map */}</div>
      <div className="ml-6 w-[26%]">
        {card_over.map((card, index) => (
          <Card_Overview
            key={index}
            title={card.label}
            count={
              card.label === "Online Device"
                ? onlineDevices
                : card.label === "Offline Device"
                ? offlineDevices
                : totalDevices
            }
            theme_color={card.theme_color}
            font_color={card.font_color}
            imageSrc={card.imageSrc}
          />
        ))}
        <Add_Overview />
      </div>
    </div>
  );
};

export default OverviewPage;
