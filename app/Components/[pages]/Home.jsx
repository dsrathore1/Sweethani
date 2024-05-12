import React from "react";
import SearchBar from "../SearchBar";
import MainBox from "../MainBox";

const Home = () => {
  return (
    <>
      <div className="h-[100vh] py-8 px-4 flex flex-col ">
        <div>
          <SearchBar />
        </div>
        <div className="h-full w-full">
          <h2 className="text-white mt-10 mx-2 text-xl">Best Deal</h2>
          <div className="my-5 h-[38%] flex flex-wrap overflow-hidden overflow-x-scroll flex-col gap-x-4 justify-center items-center px-5">
            <MainBox price={499} name={"Dadi ka pyaar"} />
            <MainBox price={549} name={"Nani ka pyaar"} />
            <MainBox price={1039} name={"Apna pann"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
