import React, { useState, useEffect } from "react";
import Table_Time from "./Table_Time";
import data from "../model/data";
import LocationInformation from "./LocationInformation";

const Device = React.memo(({ property, value }) => {
  return (
    <div className="bg-[#2B3E56] rounded-lg p-2 border-l-4 border-[#F19237] flex justify-between items-center">
      <div>
        <p>{property}</p>
        <p className="text-[#F19237] text-2xl">{value}</p>
      </div>
      <img
        src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
        alt="Device"
        className="w-10 h-auto mr-2"
      />
    </div>
  );
});

const DeviceGrid = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    setDevice(data[0]);
  }, []);

  return (
    <div className="m-4">
      {device ? (
        <div className="bg-[#263242] p-4 text-white rounded-lg mb-4">
          <p>Device ID: {device.deviceId}</p>
          <div className="grid grid-cols-3 gap-8 m-6 ">
            <Device property="Temperature" value={device.temperature} />
            <Device property="Humidity" value={device.humidity} />
            <Device property="Light" value={device.light} />
            <Device property="Vibration" value={device.vibration} />
            <Device property="RSSI" value={device.rssi} />
            <Device property="Battery" value={device.battery} />
          </div>
          <Table_Time />
          <LocationInformation />
        </div>
      ) : (
        <p>No devices available</p>
      )}
    </div>
  );
};

export default DeviceGrid;
