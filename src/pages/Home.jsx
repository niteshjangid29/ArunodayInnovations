import React from "react";
import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import MemberCard from "../components/MemberCard";
import { teamMembers } from "../Data/teamMembersData";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sponsors />

      <div className="flex flex-col py-6 md:py-10 items-center bg-orange-100">
        <h1 className="font-semibold md:font-medium text-xl md:text-2xl lg:text-3xl">
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
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
