import React from "react";
import data from "../../model/data";

const DeviceManagementPage = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Device Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#263242] text-white">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                #
              </th>
              <th className=" py-3 text-left text-xs font-medium uppercase tracking-wider">
                Device Name
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Device ID
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Group
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                CreateTime
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Expiration
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Operate
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#263242] text-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="text-xs">
                <td className="px-6 py-2 whitespace-normal">{index + 1}</td>
                <td className="px-6 py-2 whitespace-normal">
                  {item.deviceName}
                </td>
                <td className="px-6 py-2 whitespace-normal">{item.deviceId}</td>
                <td className="px-6 py-2 whitespace-normal">{item.model}</td>
                <td className="px-6 py-2 whitespace-normal">{item.group}</td>
                <td className="px-6 py-2 whitespace-normal">
                  {item.createTime}
                </td>
                <td className="px-6 py-2 whitespace-normal">
                  {item.expiration}
                </td>
                <td className="px-6 py-2 whitespace-normal flex justify-between">
                  <div
                    className={`w-4 h-4 rounded-full mr-2 ${
                      item.status === "online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  {item.status}
                </td>
                <td className="px-6 py-2 whitespace-normal">{item.operate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceManagementPage;
