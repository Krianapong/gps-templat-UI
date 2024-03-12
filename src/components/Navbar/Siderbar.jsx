import React from "react";

const Siderbar = () => {
  return (
    <div className="flex h-screen bg-transparent">
      <div className=" w-56 bg-[#263242]">
        <div className="h-16 ml-3 flex items-center justify-center text-white text-lg font-bold">
          <img
            src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
            alt="Logo"
            className="h-10 w-auto mr-2"
          />
          <p className=" text-sm">GPS Device Manager</p>
        </div>
        <ul className="py-4">
          <li className="px-6 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            Overview
          </li>
          <li className="px-6 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            Real-time Monitoring
          </li>
          <li className="px-6 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            Device Management
          </li>
          <li className="px-6 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            My Account{" "}
          </li>
          <li className="px-6 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            Grouping
          </li>
        </ul>
      </div>

      <div className="flex flex-col flex-1">
        <header className="h-16 bg-[#263242] shadow-sm flex items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Button
            </button>
          </div>
        </header>

        <div className="flex-1 p-4">
          <p>Main Content Area</p>
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
