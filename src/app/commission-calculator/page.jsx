"use client";

import React, { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [calculationResult, setCalculationResult] = useState("");
  const [numOutlets, setNumOutlets] = useState("");
  const [monthlyOrders, setMonthlyOrders] = useState("");
  const [avgOrderSize, setAvgOrderSize] = useState("");
  const [commissionPercentage, setCommissionPercentage] = useState(20);

  const handleCalculate = () => {
    const totalCommission =
      ((monthlyOrders * avgOrderSize * numOutlets) / 100) *
      commissionPercentage *
      12;
    setCalculationResult(totalCommission);
    setShowPopup(true);
  };

  return (
    <main className="flex mt-[400px] mb-[400px] justify-center items-center h-[400px] bg-gray-100 md:mt-[300px] md:mb-[300px] ">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg p-5 bg-green-400 rounded-lg shadow-lg border-none">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 p-5">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Calculate how much commission you are giving to aggregators annually
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg">
            Don&apos;t let go of your hard-earned money!
            <b> Join Close to Buy and save commission costs.</b>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mt-8 md:mt-0 md:ml-10 w-full md:w-[400px] lg:w-[500px]">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="font-bold">No of Outlets</label>
              <input
                type="number"
                value={numOutlets}
                onChange={(e) => setNumOutlets(parseInt(e.target.value))}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="font-bold">Monthly Orders</label>
              <input
                type="number"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(parseInt(e.target.value))}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="font-bold">Average Order Size (Rs.)</label>
              <input
                type="number"
                value={avgOrderSize}
                onChange={(e) => setAvgOrderSize(parseInt(e.target.value))}
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="font-bold">Average % of Commission (%)</label>
              <input
                type="number"
                value={commissionPercentage}
                onChange={(e) =>
                  setCommissionPercentage(parseInt(e.target.value))
                }
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <button
              onClick={handleCalculate}
              className="mt-6 w-full py-3 bg-black text-white font-bold rounded-full hover:bg-gray-700 transition"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Calculation Result</h2>
            <hr className="mb-4" />
            <p className="text-lg">Total commission annually:</p>
            <p className="text-4xl font-bold text-green-600">
              Rs. {calculationResult}
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full py-3 bg-black text-white font-bold rounded-full hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
