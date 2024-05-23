import React from "react";
import ProductBox from "../Components/ProductBox";

const TopProduct = () => {
  return (
    <>
      <div className="h-[70vh] mx-28 my-10 rounded-[5rem] bg-[#fece5472]">
        <h1 className="text-center text-4xl uppercase font-bold pt-3">
          Our Popular Sweets
        </h1>
        <div className="flex flex-wrap gap-5 justify-evenly items-center w-full h-full -mt-7">
          <ProductBox price="630" review="2.1" subName="Mohanthal" name="Dadi ka pyaar" />
          <ProductBox price="650" review="3.4" subName="Mohanthal" name="Nani ka pyaar" />
          <ProductBox price="640" review="1.2" subName="Both in one" name="Apna Pann" />
        </div>
      </div>
    </>
  );
};

export default TopProduct;
