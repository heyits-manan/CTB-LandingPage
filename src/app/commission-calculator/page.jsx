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
    // Perform the calculation
    const totalCommission =
      ((monthlyOrders * avgOrderSize * numOutlets) / 100) *
      commissionPercentage *
      12;
    setCalculationResult(totalCommission);
    // Show the pop-up
    setShowPopup(true);
  };

  return (
    <main>
      <div className="flex flex-col w-[150vw] sm:h-[650px] md:flex-row md:mt-20 md:ml-[1vw]  md:h-[600px] md:w-[800px] lg:h-[600px] lg:w-[900px] lg:flex-row lg:ml-[6vw] lg:mt-20 xl:w-[1200px] xl:ml-[8vw] 2xl:w-[1200px] 2xl:ml-[18vw] bg-green-400 border-none">
        <div className="ml-[12vw] text-center w-[30em] md:text-start md:ml-10 md:mt-[5em]  md:w-[90em] lg:w-[30em] lg:text-start lg:mt-[6em] lg:ml-10 xl:text-start xl:mt-[5em] xl:w-[30em] ">
          <div className="mt-10  font-medium mb-5 w-96 text-3xl lg:w-[10em] lg:text-5xl md:text-5xl xl:text-5xl">
            Calculate how much commission are you giving to aggregators annually
          </div>
          <div className=" ml-4 text-sm text-black w-[25em] md:ml-0 md:w-[30em] md:text-base lg:w-[30em] xl:text-lg xl:w-[30em] ">
            Don&apos;t let go of your hard-earned money!
            <b> Join Close to Buy and save commission costs.</b>
          </div>
        </div>
        <div className="mt-[2em] md:h-[400px] md:flex md:flex-row  md:mt-0  lg:ml-[4em] xl:mt-0 xl:ml-[16em] 2xl:mt-0 2xl:ml-[16em] ">
          <div className="text-sm items-center  shadow-2xl  bg-white p-16  md:items-center md:text-sm rounded-sm md:flex md:flex-row md:w-[490px] md:h-[600px]  xl:w-[490px] xl:h-[600px]  2xl:w-[490px] 2xl:h-[600px]">
            <div className="ml-12">
              <div className="flex flex-row  gap-5 md:flex-row">
                <div className="flex flex-col gap-1 items-center">
                  <label className="font-bold">No of Outlets</label>
                  <input
                    type="number"
                    value={numOutlets}
                    onChange={(e) => setNumOutlets(parseInt(e.target.value))}
                    className="p-3 border-black border-2 w-28 h-10 rounded-sm"
                  />
                </div>
                <div className="flex flex-col  items-center gap-1 ">
                  <label className="font-bold">Monthly Orders</label>
                  <input
                    type="number"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(parseInt(e.target.value))}
                    className="p-3 border-black border-2 w-28 h-10 rounded-sm"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-1 mt-10 text-center">
                <div className="flex flex-col  items-center gap-1 text-center">
                  <label className="font-bold w-28">
                    Average Order Size (Rs.)
                  </label>
                  <input
                    type="number"
                    value={avgOrderSize}
                    onChange={(e) => setAvgOrderSize(parseInt(e.target.value))}
                    className="p-3 border-black border-2 w-28 h-10 rounded-sm"
                  />
                </div>
                <div className="flex flex-col  items-center gap-1 ">
                  <label className="font-bold w-36">
                    Average % age of commission (%)
                  </label>
                  <input
                    type="number"
                    value={commissionPercentage}
                    onChange={(e) =>
                      setCommissionPercentage(parseInt(e.target.value))
                    }
                    className="p-3 border-black border-2 w-28 h-10 rounded-sm"
                  />
                </div>
              </div>
              <button
                className="p-3 w-36 mt-14 ml-10 bg-black text-white font-bold rounded-full hover:bg-gray-600 hover:text-white"
                type="button"
                onClick={handleCalculate}
              >
                Calculate
              </button>
            </div>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-20 rounded-lg flex flex-col items-start">
                <h2 className="font-bold mb-4 text-4xl">Calculation Result</h2>
                <hr className="bg-black w-96 mb-5" />
                <span>
                  <p className="font-normal">Total commission annually:</p>
                  <p className="text-4xl font-bold text-green-600">
                    {" "}
                    Rs. {calculationResult}{" "}
                  </p>
                </span>
                <button
                  onClick={() => setShowPopup(false)}
                  className="p-2 mt-10 w-36 bg-black text-white rounded-full hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
