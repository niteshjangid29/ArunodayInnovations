import React from "react";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-16 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
        <h1 className="font-[poppins] font-[600] md:text-3xl text-2xl text-center mb-5">
          - Ongoing Projects -
        </h1>
        {/* flex flex-col py-20 md:py-24 md:w-4/6 sm:w-10/12 w-11/12 m-auto */}
        <ul className="ml-5 tracking-wide text-justify text-lg">
          <li className="list-decimal font-[poppins] my-3">
            "Multi-Agent-based Low-Cost Automated Mobile Robots (AMRs) for
            Indian Industries."
            <br />
            <span className="text-sm">
              - funded by DST-NIDHI PRAYAS Govt. of India
            </span>
          </li>
          <li className="list-decimal font-[poppins] my-3">
            "Design and development of a low-cost compact automated guided
            vehicle for payload movement in housing and urban industries."
            <br />
            <span className="text-sm">
              - funded by iHUB Divyasampark IIT Roorkee
            </span>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
