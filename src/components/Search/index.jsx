import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="text-center relative overflow-hidden mb-10">
      <input
        type="text"
        placeholder="Search Services..."
        className="mb-4 px-10 py-5 w-full md:w-1/2 border-2  border-primary rounded-[30px] md:rounded-l-[30px] placeholder:text-xl placeholder:text-black placeholder:font-rubikRegular focus:border-primary outline-none "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="bg-primary hidden md:block w-10 md:w-16 h-[68px] absolute top-0 right-4  md:right-72 rounded-r-[30px]">
        <CiSearch className="text-white text-3xl m-auto " />
      </button>
    </div>
  );
};

export default Search;
