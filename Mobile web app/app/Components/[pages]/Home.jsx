"use client";

import React from "react";
import SearchBar from "../SearchBar";
import MainBox from "../MainBox";
import { BsPerson } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-[100vh] py-8 px-4 flex flex-col ">
        <div className="my-2 flex justify-between items-center">
          <BiMenu size={30} color="#f5f5f5" />
          <h1 className="text-[#f5f5f5] text-xl">Sweethani</h1>
          <BsPerson size={30} color="white" />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="h-full w-full flex flex-col justify-between items-start">
          <h2 className="text-white text-start mt-10 mx-2 text-xl">
            Best Deal
          </h2>
          <div className="my-5 h-[70%] flex flex-wrap overflow-hidden overflow-x-scroll overflow-y-scroll flex-col gap-x-4 justify-center items-center px-5">
            <MainBox price={610} name={"Dadi ka pyaar"} />
            <MainBox price={620} name={"Nani ka pyaar"} />
            <MainBox price={615} name={"Apna pann"} />
          </div>
          <div className="w-full h-28 flex justify-between items-center text-white border-t-2 border-opacity-40 border-gray-300">
            <div className="">
              <h1 className="text-xl font-bold">Total Amount</h1>
              <h2 className="text-lg font-thin">Total items</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">₹ 1099</h1>
              <h2 className="text-lg font-medium">3</h2>
            </div>
          </div>
          <div className="h-14 w-full flex justify-center items-center">
            <button
              onClick={() =>{ router.push("/cart"); console.log("Clicked")}}
              className="text-white text-lg w-full h-[95%] mb-4 rounded font-semibold capitalize bg-[#f4a4a4]"
            >
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
