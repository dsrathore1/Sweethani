"use client"
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import CartBox from "../Components/cartBox";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  return (
    <div className="h-[100vh] w-full text-white px-4">
      <div className="p-4 flex justify-between items-center">
        <AiOutlineLeft onClick={() => router.back()} size={25} color="white" />
        <h1 className="text-2xl">Cart</h1>
        <BsPerson size={25} color="white" />
      </div>
      <div className="space-y-8 overflow-hidden overflow-y-scroll my-5">
        <CartBox />
        <CartBox />
        <CartBox />
        <CartBox />
      </div>
    </div>
  );
};

export default Cart;
