import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Carrier = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-16 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
        <h1 className="font-[poppins] font-[600] sm:text-3xl text-2xl text-center mb-5">
          - Opening Positions -
        </h1>
        {/* flex flex-col py-20 md:py-24 md:w-4/6 sm:w-10/12 w-11/12 m-auto */}
        <ul className="ml-5 tracking-wide text-center text-lg">
          <li className="font-[poppins] my-3">Come Soon for internship</li>
          <li className="font-[poppins] my-3">JRF Position</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Carrier;
