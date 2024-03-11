import React from "react";

const SearchQuery = () => {
  return (
    <div className="flex items-center border-b border-b-2 border-blue-500 py-2 ">
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Search..."
        aria-label="Search"
      />
      <button
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Query
      </button>
    </div>
  );
};

export default SearchQuery;
