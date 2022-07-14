import React from "react";
import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import { teamMembers } from "../Data/teamMembersData";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col my-6 py-6 md:py-10 items-center">
        <h1 className="font-semibold md:font-bold text-xl md:text-2xl">
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
    </div>
  );
};

export default Team;