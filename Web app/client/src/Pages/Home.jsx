import React from "react";
import Navbar from "../Components/Navbar";
import Timer from "../Assets/timer-icon.png";
import Delivery from "../Assets/delivery-icon.png";
import Mohanthal from "../Assets/mohanthal.png";
import TopProduct from "./TopProduct";

const Home = () => {
  return (
    <div className="px-5">
      <Navbar />
      <div className="h-[70vh] w-[30%] right-0 top-0 bg-[#ffd47ed3] absolute -z-10" />
      <div className="h-[40vh] w-[42%] right-0 bottom-10 bg-[#ffbf40] absolute -z-10 rounded-s-full" />
      <div className="bg-[#111111aa] h-10 w-[28%] bottom-[8rem] -rotate-[15deg] right-[10rem] absolute rounded-full opacity-50 blur-xl" />
      <div className="h-[80vh] flex justify-between items-center">
        <div className="w-[40%]">
          <h1 className="text-6xl font-bold leading-[5rem]">
            <span className="font-medium">Welcome to</span>{" "}
            <span className="text-[#fece54]">Sweethani </span>& Enjoy Delicious
            Sweets<span className="text-[#fece54]">.</span>
          </h1>
          <div className="mt-14 mb-4 w-[80%] flex justify-between items-center">
            <button className="text-lg bg-[#fece54] hover:border-2 hover:border-[#fece54] hover:bg-transparent hover:text-[#111111] transition-all ease-linear duration-200 py-2 px-10 text-[#f5f5f5] shadow-md rounded-full">
              Show Product
            </button>
            <button className="text-lg border-[#111] border-2 py-2 px-10 shadow-md hover:bg-[#fece54] hover:text-[#f5f5f5] text-[#111111] hover:border-transparent transition-all ease-linear duration-200 rounded-full">
              Know more
            </button>
          </div>
          <div className="w-[80%] flex justify-center gap-x-20 mt-10 items-center">
            <div className="capitalize flex flex-col justify-center items-center">
              <img className="h-12 w-12" alt="#delivery" src={Delivery} />
              <span className="text-md font-bold">free delivery</span>
            </div>
            <div className="capitalize flex flex-col justify-center items-center">
              <img className="h-12 w-12" alt="#timer" src={Timer} />
              <span className="text-md font-bold">Delivery in 45 min</span>
            </div>
          </div>
        </div>
        {/* Left Side */}
        <div className="absolute right-[6rem]">
          <img className="w-[100%] mt-24" alt="#mohanthal" src={Mohanthal} />
        </div>
      </div>
      <TopProduct/>
    </div>
  );
};

export default Home;
