import React from "react";
import Footer from "../components/Footer";
import Navbar from "./../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div>
        <div className="flex flex-col py-16 md:py-24 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
          <h1 className="font-[poppins] font-[600] md:text-3xl text-2xl text-center mb-5">
            - About Us -
          </h1>
          {/* <img className="md:w-3/6 w-5/6 mb-3 m-auto" src="./images/logo.png" alt="logo" draggable="false" /> */}
          <div>
            <p className="font-[poppins] tracking-wide text-justify">
              Arunoday Innovations and Research is one of the fastest-growing
              companies for automation and robotics. Its innovations on
              Automated Mobile Robots used in housing and urban industries,
              Agriculture, Waste management division, Power plants, and other
              sectors to safely carry different weights of payload from one
              industrial place to another industrial place. Arunoday Innovations
              and Research is a start-up from IIT Roorkee, one of the
              prestigious institutes of India. Its board of directors includes
              Professor and Research Scholar from IIT Roorkee. Arunoday
              Innovations and Research has a highly dedicated team of
              professionals, including Ph.D., M.Tech, and B.Tech students from
              IITs and other top institutes in India. It has outreach in more
              than three states of India.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 py-8">
        <div className="flex flex-col py-16 md:py-24 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
          <h1 className="font-[poppins] font-[600] md:text-3xl text-2xl text-center">
            - Mission and Vision -
          </h1>
          <div>
            <h2 className="font-[600] mb-3 mt-8 font-[poppins] text-xl">
              Mission
            </h2>
            <p className="font-[poppins] font-[400] tracking-wide text-justify">
              At Arunoday Innovations and Research, we are enthusiastic about
              finding inventive answers for modernizing Robots for the most
              outstanding proficiency. Our objective drives us to create the
              most productive and monetarily front-line innovation for our
              esteemed clients. Our team is committed to enhancing individuals'
              lives with reliable, eco-friendly products.
            </p>
          </div>
          <div>
            <h2 className="font-[600] mb-3 mt-8 font-[poppins] text-xl">
              Vision
            </h2>
            <p className="font-[poppins] font-[400] tracking-wide text-justify">
              Arunoday Innovations and Research strives to become the best and
              only choice for various industries' Robotics and Automation
              systems. We empower our organizations to zero in on their specific
              business sectors and clients and adjust rapidly and explicitly to
              changes.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col py-20 md:py-24 md:w-4/6 sm:w-10/12 w-11/12 m-auto">
          <h1 className="font-[poppins] font-[600] md:text-3xl text-2xl text-center mb-5">
            - Our Achievements -
          </h1>
          <ul className="ml-5 tracking-wide text-justify">
            <li className="list-decimal font-[poppins] my-3">
              Arunoday Innovations and Research is recognized as a startup by
              the Department for Promotion of Industry and Internal Trade,
              Ministry of Commerce and Industry, Govt. of India.
            </li>
            <li className="list-decimal font-[poppins] my-3">
              Arunoday Innovations and Research is incubated by Technology
              Innovation & Development of Entrepreneurship Support (TIDES)
              Business Incubator under the aegis of Technology Incubation and
              Entrepreneurship Development Society (TIDES) at the Indian
              Institute of Technology Roorkee.
            </li>
            <li className="list-decimal font-[poppins] my-3">
              Project on Multi-Agent-based Automated Mobile Robots (AMRs) of
              Arunoday Innovations and Research received a fund of{" "}
              <strong className="font-[600]">INR 1 million</strong> from the
              NIDHI PRAYAS Scheme under the Department of Science and
              Technology, Govt. of India.
            </li>
            <li className="list-decimal font-[poppins] my-3">
              Arunoday Innovations and Research is the industrial collaborator
              with iHUB IIT Roorkee for the project titled “Design and
              development of a low-cost compact automated guided vehicle for
              payload movement in housing and urban industries.”
            </li>
            <li className="list-decimal font-[poppins] my-3">
              Arunoday Innovations and Research is recognized by the Ministry of
              Micro, Small and Medium Enterprises, Government of India (MSME).
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
