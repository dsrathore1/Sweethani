import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
      <div className="bg-[#ededed] flex h-14 mx-2 justify-center items-center px-4 rounded">
        <AiOutlineSearch color="#afafaf" size={30} />
        <input
          className="text-xl bg-transparent text-center outline-none text-black w-full h-full"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBar;
