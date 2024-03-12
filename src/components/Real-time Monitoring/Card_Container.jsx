    import React, { useState } from "react";
    import data from "../../model/data";

    const ITEMS_PER_PAGE = 4;

    const Card_Container = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="flex flex-col text-white h-full">
        <div className="grid grid-cols-2 gap-4 justify-center text-[12px] w-full">
            {currentItems.map((item) => (
            <div
                key={item.id}
                className="rounded-lg shadow-md bg-[#2B3E56] p-2 flex flex-col"
            >
                <div className="flex justify-between items-center mb-4 border-b-2 border-[#263242] pb-2">
                <div>
                    <h2 className="text-base">Container </h2>
                    <p className="text-[#A9A9A9]">{item.deviceId}</p>
                </div>
                <p className="text-right">Battery {item.battery}</p>
                </div>
                <div className="flex justify-between ">
                <p>Temperature</p>
                <p>{item.temperature}</p>
                </div>
                <div className="flex justify-between">
                <p>Humidity</p>
                <p>{item.humidity}</p>
                </div>
                <div className="flex justify-between ">
                <p>Light</p>
                <p>{item.light}</p>
                </div>
                <div className="flex justify-between ">
                <p>Vibration</p>
                <p>{item.vibration}</p>
                </div>
                <div className="flex justify-between ">
                <p>RSSI</p>
                <p>{item.rssi}</p>
                </div>
                <div className="flex justify-between border-t-2 border-[#263242] mt-4 pt-2">
                <p>{item.time}</p>
                <button className="text-xs text-[#FFC107] hover:underline">
                View Details  
                </button>
                </div>
            </div>
            ))}
        </div>
        <div className="flex justify-end items-center mt-4">
            <button
            onClick={handlePrevPage}
            className={`px-3 py-2 bg-transparent rounded-md border border-white ${
                currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentPage === 1}
            >
            {"<"}
            </button>
            <button
            className="px-3 py-2 bg-transparent rounded-md border border-white"
            disabled
            >
            {currentPage}
            </button>
            <button
            onClick={handleNextPage}
            className={`px-3 py-2 bg-transparent rounded-md border border-white ${
                currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
            disabled={currentPage === totalPages}
            >
            {">"}
            </button>
        </div>
        </div>
    );
    };

    export default Card_Container;
