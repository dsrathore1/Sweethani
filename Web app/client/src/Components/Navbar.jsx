import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#ffffff] rounded shadow-md my-3 w-full h-20 flex items-center justify-between px-4">
        <h1 className="uppercase text-3xl font-bold">
          <span className="text-[#fece54]">swee</span>thani
          <span className="text-[#fece54] font-black">.</span>
        </h1>
        <ul className="flex items-center gap-10 cursor-default">
          <li className="h-8 text-lg w-20 hover:text-[#fece54] hover:font-bold transition-all ease-linear duration-150 text-center">
            Home
          </li>
          <li className="h-8 text-lg w-32 hover:text-[#fece54] hover:font-bold transition-all ease-linear duration-150 text-center">
            Sweets
          </li>
          <li className="h-8 text-lg w-32 hover:text-[#fece54] hover:font-bold transition-all ease-linear duration-150 text-center">
            About Us
          </li>
          <li className="h-8 text-lg w-32 hover:text-[#fece54] hover:font-bold transition-all ease-linear duration-150 text-center">
            Contact Us
          </li>
        </ul>
        <div>
          <button className="border-2 border-[#fece54] rounded h-12 text-lg uppercase text-[#fece54] hover:bg-[#fece54] hover:text-white transition-all ease-linear shadow active:translate-y-1 duration-200 w-32 outline-none">
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
