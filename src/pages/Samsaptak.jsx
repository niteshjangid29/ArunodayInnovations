import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const s_ghosh = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col py-16 md:py-20 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
        <h1 className="font-[poppins] font-[500] md:text-3xl text-2xl">
          Mr. Samsaptak Ghosh
        </h1>
        <h2 className="font-semibold text-md text-red-500">
          Founder Director & CEO
        </h2>

        <div className="flex flex-col justify-center md:flex-row mt-5">
          <img
            src="./images/Samsaptak.jpeg"
            alt="Samsaptak Ghosh"
            className="w-40 h-fit m-auto"
          />
          <p className="font-[poppins] tracking-wide text-justify pl-0 md:pl-5 mt-5 md:mt-0">
            <strong className="font-semibold">Mr. Samsaptak Ghosh</strong> is a
            young and dynamic entrepreneur who stands to empower young pioneers
            who will push the world forward through entrepreneurship and
            innovation. He is currently working towards his Ph.D. at the
            Department of Electrical Engineering, Indian Institute of Technology
            Roorkee. He does research in Electrical Engineering, Robot Control,
            Mobile Robotics, and Control Systems Engineering. In his Ph.D., he
            worked as a research scientist on an industrial project related to
            Automated Guided Vehicle, sponsored by TMS Pvt Ltd and IIT Roorkee.
          </p>
        </div>
        <div className="w-40 flex justify-center text-red-500 my-5 mx-auto md:mx-0">
          <a
            href="https://www.facebook.com/samsaptak.ghosh.5/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              className="h-[20px] w-fit mx-1.5 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-facebook-f"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/samsaptak-ghosh-407680158/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="h-[21px] w-fit mx-1.5 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-linkedin-in"
            />
          </a>
          <a
            href="mailto: director.arunoday@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="h-[21px] w-fit mx-1.5 px-[7px] py-[7px] rounded-lg"
              icon="fa-solid fa-envelope"
            />
          </a>
        </div>

        <div>
          <ul className="font-[poppins] list-disc ml-5 text-justify">
            <li className="my-3">
              He is working towards his{" "}
              <strong className="font-semibold">Ph.D.</strong> at the Department
              of <strong className="font-medium">Electrical Engineering</strong>
              ,{" "}
              <strong className="font-semibold">
                Indian Institute of Technology Roorkee.
              </strong>
              He does research in Electrical Engineering, Robot Control, Mobile
              Robotics, and Control Systems Engineering.
            </li>
            <li className="my-3">
              During his post-graduation time, he joined Texas A&M University,
              Sandia National Lab, and Oak Ridge National USA as a trainee. In
              his Ph.D., he worked as a research scientist on an industrial
              project related to Automated Guided Vehicle, sponsored by TMS Pvt
              Ltd and IIT Roorkee.
            </li>
            <li className="my-3">
              He has two copyrights on the Design of the Automated Guided
              Vehicle. He recently filed an Indian patent on the Design and
              development of Automated Mobile Robots (AMRs).
            </li>
            <li className="my-3">
              He is serving as the{" "}
              <strong className="font-semibold">Founder-Director</strong> and{" "}
              <strong className="font-semibold">CEO</strong> of the startup{" "}
              <strong className="font-semibold">
                Arunoday Innovations and Research Pvt Ltd.
              </strong>{" "}
              He also worked as the industrial collaborator with iHUB IIT
              Roorkee on a project related to Automated Guided Vehicle (AGV).
            </li>
            <li className="my-3">
              He served as the principal investigator of the project titled,
              Multi-Agent based low-cost Automated Mobile Robots (AMRs) for
              Indian Industries, funded by DST-Govt. of India. He has also
              interested in robotics hand exoskeleton control. In this research
              area, two IEEE conference paper was published during his Ph.D.
            </li>
            <li className="my-3">
              He has five years of experience in project management. Many B.
              Tech and M. Tech interns worked with him. He is keenly interested
              in Control Systems Engineering, Robotics and Robot Control,
              Multi-Agent Control, Sliding Mode Control, and Automated Mobile
              Robots.
            </li>
            <li className="my-3">
              He knows the hardware related to robots and software like Robot
              Operating System (ROS), MATLAB, Labview, Solidworks, Multisim,
              Code Composer Studio, and IAR Embedded workbench.
            </li>
            <li className="my-3">
              He believes in consistency, continuous learning, and an innovative
              approach. Besides English, Hindi, and Bengali, he also knows the
              Japanese language.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default s_ghosh;
