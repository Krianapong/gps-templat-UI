import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../routers/routers";

const Sidebar = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="w-56 bg-[#263242] h-screen flex flex-col">
      <div className="h-16 flex items-center justify-center text-white text-lg font-bold">
        <img
          src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
          alt="Logo"
          className="h-10 w-auto mr-2"
        />
        <p className="text-sm">GPS Device Manager</p>
      </div>
      <ul className="py-4">
        {routes.map((route, index) => (
          <li
            key={index}
            className="px-6 py-2 text-gray-300 hover:bg-[#4CB94A] cursor-pointer"
            onClick={() => navigateTo(route.path)}
          >
            {route.path}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MainContent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="flex flex-col flex-grow">
      <header className="h-16 bg-[#263242] shadow-sm flex items-center justify-between px-4">
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-4 relative">
          <button
            className="relative bg-transparent text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            <img
              src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-1/309236580_467119878788909_3610437146745676163_n.png?stp=dst-png_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ns7wtTuOXVwAX-0yvGJ&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfC4M8PryMz9IjbK062uGBWaxmeRSSL9bpNEd8HhS51NKg&oe=65F3BAD6"
              alt="Profile"
              className="h-8 w-auto rounded-full"
            />
            {showDropdown && (
              <div className="absolute right-0 mt-5 w-48 bg-[#263242] drop-shadow-xl rounded shadow-md z-10 text-left text-white">
                <ul className="py-2">
                  <li className="block px-4 py-2 mb-2 hover:bg-[#3b506a] cursor-pointer">
                    My Account
                  </li>
                  <li className="block px-4 py-2 hover:bg-[#3b506a] cursor-pointer">
                    Quit
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </header>

      <div className="flex-1 p-4 m-2 overflow-y-auto flex items-stretch">
        {/* Routes */}
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#263242] text-white text-center py-4">
      © 2024 GPS Device Manager. All rights reserved.
    </footer>
  );
};

const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-transparent">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Dashboard;
