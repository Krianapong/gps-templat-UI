import React from "react";

const Device = React.memo(({ property, value }) => {
  return (
    <div className="bg-[#2B3E56] rounded-lg p-2 border-l-4 border-[#F19237]">
      <p>{property}</p>
      <p className="text-[#F19237] text-2xl">{value}</p>
    </div>
  );
});

const DeviceGrid = ({ devices }) => {
  return (
    <div className="m-4">
      {devices && devices.length > 0 ? (
        devices.map((device, index) => (
          <div key={index} className="bg-[#263242] p-4 text-white rounded-lg">
            <p>Device ID: {device.deviceId}</p>
            <div className="grid grid-cols-3 gap-2 m-6 ">
              <Device property="Temperature" value={device.temperature} />
              <Device property="Humidity" value={device.humidity} />
              <Device property="Light" value={device.light} />
              <Device property="Vibration" value={device.vibration} />
              <Device property="RSSI" value={device.rssi} />
              <Device property="Battery" value={device.battery} />
            </div>
          </div>
        ))
      ) : (
        <p>No devices available</p>
      )}
    </div>
  );
};

export default DeviceGrid;
