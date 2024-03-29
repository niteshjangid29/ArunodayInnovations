import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import contactInfo from "../config/default";
import swal from "sweetalert";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  // const [isTextVisible, setIsTextVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contactInfo.YOUR_SERVICE_ID,
        contactInfo.YOUR_TEMPLATE_ID,
        e.target,
        contactInfo.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            title: "Thanks!",
            text: "You response have been recorded.",
            icon: "success",
            button: "Ok",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <footer className="bg-[#2d2f39] text-white font-[poppins]">
      <div className="text-center py-12">
        <h1 className="text-3xl font-[500] mb-5">Our Social Media</h1>
        <div className="flex justify-center text-black">
          <a href="https://www.facebook.com/ArunodayFounderDirector/">
            <FontAwesomeIcon
              className="h-[30px] w-[28px] mx-1.5 bg-white transition-all delay-125 hover:text-white hover:bg-orange-500 hover:-translate-y-1 hover:scale-105 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-facebook-f"
            />
          </a>
          <a href="https://www.linkedin.com/in/arunoday-innovations-and-research-46988b219/">
            <FontAwesomeIcon
              className="h-[30px] w-[28px] mx-1.5 bg-white transition-all delay-125 hover:text-white hover:bg-orange-500 hover:-translate-y-1 hover:scale-105 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-linkedin-in"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="h-[30px] w-[28px] mx-1.5 bg-white transition-all delay-125 hover:text-white hover:bg-orange-500 hover:-translate-y-1 hover:scale-105 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-instagram"
            />
          </a>
          <a href="/">
            <FontAwesomeIcon
              className="h-[30px] w-[28px] mx-1.5 bg-white transition-all delay-125 hover:text-white hover:bg-orange-500 hover:-translate-y-1 hover:scale-105 px-[7px] py-[7px] rounded-lg"
              icon="fa-brands fa-twitter"
            />
          </a>
        </div>
      </div>

      <hr className="w-full h-0.5 border-none bg-white" />

      <div className="flex flex-col lg:flex-row py-10 lg:w-11/12 m-auto items-center">
        <div className="lg:basis-2/5 w-11/12 sm:w-5/6 md:w-4/6 bg-gray-600 text-black p-5 rounded-md">
          <form onSubmit={sendEmail} className="flex flex-col items-center">
            <input
              className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
            <input
              className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea
              className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full max-h-28"
              name="user_message"
              cols="30"
              rows="4"
              placeholder="Messages"
              required
            ></textarea>
            <input
              className="outline-none p-2 px-5 border-2 border-black cursor-pointer bg-yellow-100 m-2 rounded-md max-w-fit font-[600] hover:bg-black hover:text-white transition-all delay-75"
              type="submit"
              value="Submit"
            />
            {/* <p
              className={`${
                isTextVisible ? "visible text-sm text-green-400" : "hidden"
              }`}
            >
              <FontAwesomeIcon
                className="mr-1"
                icon="fa-solid fa-circle-check"
              />
              Form submitted successfully!
            </p> */}
          </form>
        </div>
        <div className="lg:basis-1/5 flex flex-col text-center my-5">
          <h2 className="font-[500] text-lg my-3 underline underline-offset-2">
            Quick Links
          </h2>
          <ul className="flex lg:flex-col">
            <li className="mx-1 xs:p-1 hover:text-orange-500 transition-all delay-75">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-1 xs:p-1 hover:text-orange-500 transition-all delay-75">
              <Link to="/team">Team</Link>
            </li>
            <li className="mx-1 xs:p-1 hover:text-orange-500 transition-all delay-75">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="mx-1 xs:p-1 hover:text-orange-500 transition-all delay-75">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="mx-1 xs:p-1 hover:text-orange-500 transition-all delay-75">
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="lg:basis-2/5 w-11/12 flex flex-col">
          <h1 className="font-[500] text-3xl mb-3 text-center">Contact Us</h1>
          <div className="flex items-center border-2 py-2 px-3 rounded-lg justify-between my-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-xl mr-1"
                icon="fa-solid fa-phone"
              />
              <a href="tel:919851051479">+91 9851051479</a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-xl mr-2"
                icon="fa-solid fa-phone"
              />
              <a href="tel:918348910519">+91 8348910519</a>
            </div>
          </div>
          <div className="flex flex-col border-2 py-2 px-3 rounded-lg my-2">
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-xl mr-2"
                icon="fa-solid fa-envelope"
              />
              <a
                className="text-sm"
                href="mailto:support@arunodayinnovations.com"
              >
                support@arunodayinnovations.com
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="hidden pp2:block md:text-xl mr-2"
                icon="fa-solid fa-envelope"
              />
              <a
                className="text-xs pp1:text-sm md:text-base mr-2"
                href="mailto:arunodayinnovationsandresearch@gmail.com"
              >
                arunodayinnovationsandresearch@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-xl mr-2"
                icon="fa-solid fa-envelope"
              />
              <a className="text-sm" href="mailto:director.arunoday@gmail.com">
                director.arunoday@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-lg my-2">
            <FontAwesomeIcon
              className="text-2xl mr-2"
              icon="fa-solid fa-location-dot"
            />
            <a href="/">
              I7, TIDES Business Incubator, IIT Roorkee, Roorkee - 247667,
              Uttarakhand, India
            </a>
          </div>
        </div>
      </div>

      <hr className="w-full h-0.5 border-none bg-white" />

      <div className="flex items-center text-center justify-center bg-black p-2">
        <FontAwesomeIcon className="sm:mr-1" icon="fa-regular fa-copyright" />
        <p>
          Copyright {currentYear} | ARUNODAY INNOVATIONS AND RESEARCH | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
