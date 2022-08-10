import React from "react";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
// import MemberCard from "../components/MemberCard";
// import { teamMembers } from "../Data/teamMembersData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-[calc(100vh-65px)] text-center p-3">
        <div className="m-auto">
          <h1 className="font-[poppins] font-[600] md:text-5xl text-3xl mb-10">
            <span className="md:text-3xl text-2xl">Welcome to</span>
            <br />
            Arunoday Innovations and Research
          </h1>
          <Link
            to="/about"
            className="font-[poppins] font-[500] bg-orange-500 py-2 px-6 rounded-md text-base text-white hover:text-lg transition-all delay-75"
          >
            Explore
          </Link>
        </div>
      </div>

      <div className="bg-[#2d2f39]">
        <div className="flex flex-col md:w-4/6 sm:w-10/12 w-11/12 m-auto text-justify items-center text-white py-20">
          <h1 className="font-[poppins] font-[600] text-2xl md:text-3xl mb-6">
            - Quick Introduction -
          </h1>
          <p className="font-[poppins]">
            Arunoday Innovations and Research is one of the fastest-growing
            companies for automation and robotics. Its innovations on Automated
            Mobile Robots used in housing and urban industries, Agriculture,
            Waste management division, Power plants, and other sectors to safely
            carry different weights of payload from one industrial place to
            another industrial place.Arunoday Innovations and Research is a
            start-up from IIT Roorkee, one of the prestigious institutes of
            India. Its board of directors includes Professor and Research
            Scholar from IIT Roorkee. Arunoday Innovations and Research has a
            highly dedicated team of professionals, including Ph.D., M.Tech, and
            B.Tech students from IITs and other top institutes in India. It has
            outreach in more than three states of India.
          </p>
        </div>
      </div>

      <Sponsors />

      {/* <div className="flex flex-col py-6 md:py-10 items-center bg-orange-100">
        <h1 className="font-[poppins] font-[600] text-2xl md:text-3xl">
          - Board Members -
        </h1>

        {teamMembers.map((member, index) => {
          return (
            <MemberCard
              name={member.name}
              image={member.image}
              position={member.position}
              about={member.about}
              url={member.url}
              key={index}
            />
          );
        })}
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;
