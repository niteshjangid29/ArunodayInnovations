import React from "react";
import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";
import { teamMembers } from "../Data/teamMembersData";
import Footer from "../components/Footer";
import { AlgorithmInterns } from "../Data/internsData";
import { ElectricalInterns } from "../Data/internsData";
import { MechanicalInterns } from "../Data/internsData";
import { WebDevelopmentInterns } from "../Data/internsData";
import StudentCard from "../components/StudentCard";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col my-6 py-6 md:py-10 items-center">
        <h1 className="font-[600] text-2xl md:text-3xl font-[poppins]">
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

      <div className="flex flex-col my-6 py-6 md:py-10 items-center">
        <h1 className="font-[600] text-2xl md:text-3xl font-[poppins]">
          - Student Internships -
        </h1>

        <div className="flex flex-col text-center w-11/12">
          <h1 className="font-[poppins] font-[500] text-xl mt-8 mb-4">
            Algorithm
          </h1>
          <div className="md:flex flex-wrap justify-center m-auto ">
            {AlgorithmInterns.map((intern, index) => {
              return (
                <StudentCard name={intern.name} url={intern.url} key={index} />
              );
            })}
          </div>

          <h1 className="font-[poppins] font-[500] text-xl mt-8 mb-4">
            Electrical and Electronics Systems
          </h1>
          <div className="md:flex flex-wrap justify-center m-auto ">
            {ElectricalInterns.map((intern, index) => {
              return (
                <StudentCard name={intern.name} url={intern.url} key={index} />
              );
            })}
          </div>

          <h1 className="font-[poppins] font-[500] text-xl mt-8 mb-4">
            Mechanical Systems
          </h1>
          <div className="md:flex flex-wrap justify-center m-auto ">
            {MechanicalInterns.map((intern, index) => {
              return (
                <StudentCard name={intern.name} url={intern.url} key={index} />
              );
            })}
          </div>

          <h1 className="font-[poppins] font-[500] text-xl mt-8 mb-4">
            Web Development
          </h1>
          <div className="md:flex flex-wrap justify-center m-auto ">
            {WebDevelopmentInterns.map((intern, index) => {
              return (
                <StudentCard name={intern.name} url={intern.url} key={index} />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
