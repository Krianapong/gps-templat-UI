import React, { useState } from "react";
import { format } from "date-fns";
import SearchIcon from "@mui/icons-material/Search";
import data from "../model/data"
import CardTips from "./Alerts_Tip";
const TableTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [timeSpan, setTimeSpan] = useState("1 hour");
  const itemsPerPage = 10; // Number of items per page

  const handleViewButtonClick = () => {
    // Add functionality for the View button click event
  };


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Generate rows for the current page
  const generateRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((item) => (
      <tr key={item.id}>
        <td className="px-4 py-2 text-center">{item.id}</td>
        <td className="px-4 py-2 text-center">{item.time}</td>
        <td className="px-4 py-2 text-center">{item.temperature}</td>
        <td className="px-4 py-2 text-center">{item.humidity}</td>
      </tr>
    ));
  };

  // Handle previous page button click
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle next page button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl">
          {format(currentTime, "yyyy/MM/dd HH:mm:ss")}
        </h1>
      </div>
      <p className="mr-4 mb-3">Time Span:</p>

      <div className="flex items-center mb-4 text-white">
        <input
          type="datetime-local"
          value={format(startTime, "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => setStartTime(new Date(e.target.value))}
          className="px-4 py-2 border rounded-md mr-4 bg-transparent"
        />
        <input
          type="datetime-local"
          value={format(endTime, "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => setEndTime(new Date(e.target.value))}
          className="px-4 py-2 border rounded-md mr-4 bg-transparent"
        />
        <button
          onClick={handleViewButtonClick}
          className="px-4 py-2 pr-10 bg-[#4CB94A] text-white rounded-md flex items-center"
        >
          <SearchIcon className="mr-2" />
          View
        </button>
      </div>
      <div>
        <table className="w-full border-transparent">
          <thead className="border-t-2 border-b-2 border-[#04B0C1]">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Temperature</th>
              <th className="px-4 py-2">Humidity</th>
            </tr>
          </thead>
          <tbody>{generateRows()}</tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handlePreviousPage}
          className={`px-4 py-2 bg-transparent rounded-md border border-white ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <button
          className="px-4 py-2 bg-transparent rounded-md border border-white"
          disabled
        >
          {currentPage}
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-transparent rounded-md border border-white ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          disabled={currentPage === totalPages}
        >
          {" "}
          &gt;{" "}
        </button>
      </div>
      <CardTips />
    </div>
  );
};

export default TableTime;
