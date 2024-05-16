import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartBox = () => {
  return (
    <>
      <div className="h-32 w-full bg-[#f5f5f5] rounded-lg flex justify-between gap-x-4 items-center px-2 text-[#111111]">
        <div className="h-28 w-36 bg-gray-400 rounded" />
        <div className="w-[90%] space-y-5">
          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-xl font-bold">Dadi Ka pyaar</h1>
              <h1 className="font-light text-sm">Mohanthal</h1>
            </div>
            <input type="checkbox" />
          </div>
          <div className="flex w-full justify-between items-center">
            <h1 className="text-xl">₹ 511</h1>
            <div className="flex items-center gap-x-4">
              <button className="h-6 w-6 flex justify-center items-center rounded-full bg-[#f4a4a4]">
                <AiOutlineMinus color="white" size={20} />
              </button>
              <h1 className="text-xl">
                <span>3</span> Kg
              </h1>
              <button className="h-6 w-6 flex justify-center items-center  rounded-full bg-[#f4a4a4]">
                <AiOutlinePlus color="white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBox;
