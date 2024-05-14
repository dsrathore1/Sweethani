import React from "react";
import SweetImage from "../Assets/sweet-image.png";
import Image from "next/image";

const MainBox = ({ name, price }) => {
  return (
    <div className="h-[95%] w-[95%] rounded-xl bg-[#61616141]">
      <div className="w-full flex justify-center items-center">
        <Image
          className="w-full h-[25rem] object-cover rounded-ss-xl rounded-se-xl"
          alt="#sweet-img"
          src={SweetImage}
          height={900}
          width={900}
        />
      </div>
      <div className="flex justify-between items-center px-4 py-6 text-[#f5f5f5]">
        <div className="text-[#f5f5f5]">
          <h1 className="text-xl font-semibold uppercase text-[#f5f5f5]">
            {name}
          </h1>
          <h2 className="font-thin">Mohanthal</h2>
        </div>
        <h1 className="font-bold text-2xl text-[#f4a4a4]"> ₹ {price}</h1>
      </div>
      <div className="flex justify-center items-center h-14">
        <button className="rounded bg-[#f4a4a4] h-full text-white w-[90%] text-xl font-bold">Order Now</button>
      </div>
    </div>
  );
};

export default MainBox;
