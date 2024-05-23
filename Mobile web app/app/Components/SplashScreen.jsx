import React from "react";
import Image from "next/image";
import BrandName from "../../../Assets/Sweethani-Brand-name-removebg-preview.png";

const SplashScreen = () => {
  return (
    <>
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">
        <span className="text-7xl text-white text-center ml-[1.5rem] mb-5">.</span>
        <Image
          className="-rotate-90 object-contain w-[100rem]"
          alt="#brand_name"
          src={BrandName}
        />
      </div>
    </>
  );
};

export default SplashScreen;
