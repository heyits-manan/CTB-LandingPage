import Image from "next/image";
import React from "react";

export default function Order() {
  return (
    <div className="relative flex flex-col justify-center items-center text-black h-screen px-4 md:px-6 lg:px-10">
      <div className="absolute -z-50 inset-0 bg-order-food bg-contain opacity-10"></div>

      <div className="text-2xl md:text-3xl lg:text-5xl font-semibold items-center mb-3">
        <p>Order Food</p>
      </div>

      <div className="text-center text-sm md:text-base lg:text-lg w-full max-w-md font-medium text-gray-600 mb-8">
        Discover delicious meals from your favorite restaurants delivered to
        your door with just a few clicks.
      </div>

      <div className="relative w-full max-w-md mb-3">
        <input
          type="text"
          placeholder="Search for food"
          className="border border-gray-300 rounded-lg px-4 py-3 md:py-4 w-full text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF5F4D] transition duration-200"
        />
      </div>

      <div className="w-full max-w-md">
        <button className="bg-[#FF5F4D] text-white font-semibold rounded-lg w-full px-4 py-3 md:py-4 text-sm md:text-base hover:bg-[#ff4c3a] transition duration-200">
          Search
        </button>
      </div>
    </div>
  );
}
