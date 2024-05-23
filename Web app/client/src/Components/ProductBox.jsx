import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ProductBox = ({ name, subName, review, price }) => {
  return (
    <div className="bg-white hover:shadow-lg hover:shadow-[#ffbf40] transition-all ease-linear duration-200 w-[25%] rounded-xl h-[55vh] justify-start items-center flex flex-col space-y-2">
      <div className="h-[12rem] w-[12rem] my-4 bg-gray-200 rounded-full" />
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase">{name}</h1>
        <h2 className="text-lg font-light">{subName}</h2>
      </div>
      <h2 className="font-bold text-lg">{price} Rs/kg</h2>
      <div className="flex items-center">
        <FaStar color="orange" size={20} />
        <FaStar color="orange" size={20} />
        <FaStar color="orange" size={20} />
        <FaStar color="orange" size={20} />
        <FaStarHalf color="orange" size={20} />
        <h3>({review}k Review)</h3>
      </div>
    </div>
  );
};

export default ProductBox;
