import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import contactInfo from "../config/default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
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
          // console.log(result.text);
          // document.getElementById("hello").innerText = "Form Submitted";
          alert("Form Submitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="py-14">
          <h1 className="font-[poppins] font-[600] text-3xl text-center mb-5">
            - Contact Us -
          </h1>
          <div className="flex lg:flex-row flex-col lg:justify-evenly py-0 md:py-5 px-5">
            <div className="lg:basis-1/2 flex flex-col lg:max-w-xl max-w-lg w-full lg:mx-5 my-5 mx-auto">
              <h1 className="font-[500] text-lg text-orange-500 mb-3 text-left uppercase">
                Contact Details
              </h1>

              <div className="flex md:flex-row flex-col items-center border-2 py-2 px-3 rounded-lg my-2 font-[Roboto]">
                <img
                  className="w-[75px] h-[80px] bg-[#f0f3f0] py-[20px] px-[17px] rounded-[10px] mr-[18px] transition-all delay-75 hover:invert hover:bg-[#008beb] hover:cursor-pointer"
                  src="./images/location.png"
                  alt="Location"
                  draggable="false"
                />
                <div className="flex flex-col text-center md:text-left">
                  <h2 className="font-[600] text-[22px] text-[#212529]">
                    Our Address
                  </h2>
                  <a className="text-[#606060] font-[500] text-[16px]" href="/">
                    TIDES Business Incubator, IIT Roorkee, Uttarakhand, INDIA
                  </a>
                </div>
              </div>

              <div className="flex md:flex-row flex-col border-2 py-2 px-3 rounded-lg my-2 items-center">
                <img
                  className="w-[75px] h-[80px] bg-[#f0f3f0] py-[20px] px-[17px] rounded-[10px] mr-[18px] transition-all delay-75 hover:invert hover:bg-[#008beb] hover:cursor-pointer"
                  src="./images/email.png"
                  alt="Location"
                  draggable="false"
                />
                <div className="flex flex-col text-center md:text-left">
                  <h2 className="font-[600] text-[22px] text-[#212529]">
                    Email
                  </h2>
                  <div>
                    <span className="text-[#606060] font-[500] text-[16px] mr-2">
                      Mail:
                    </span>
                    <a
                      className="text-[#ff5757] font-[500] text-[16px]"
                      href="mailto:director.arunoday@gmail.com"
                    >
                      director.arunoday@gmail.com ,
                    </a>
                  </div>
                  <a
                    className="text-[#ff5757] font-[500] text-[16px]"
                    href="mailto:arunodayinnovationsandresearch@gmail.com"
                  >
                    arunodayinnovationsandresearch@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex md:flex-row flex-col border-2 py-2 px-3 rounded-lg my-2 items-center font-[Roboto]">
                <img
                  className="w-[75px] h-[80px] bg-[#f0f3f0] py-[20px] px-[17px] rounded-[10px] mr-[18px] transition-all delay-75 hover:invert hover:bg-[#008beb] hover:cursor-pointer"
                  src="./images/phone-call.png"
                  alt="Location"
                  draggable="false"
                />
                <div className="flex flex-col text-center md:text-left">
                  <h2 className="font-[600] text-[22px] text-[#212529]">
                    Contact
                  </h2>
                  <div className="flex flex-col">
                    <span className="text-[#606060] font-[500] text-[16px]">
                      Mobile:{" "}
                      <a
                        className="text-[#ff5757] font-[500] text-[16px] mr-2"
                        href="tel:919851051479"
                      >
                        +91 9851051479 ,
                      </a>
                    </span>
                    <a
                      className="text-[#ff5757] font-[500] text-[16px]"
                      href="tel:918348910519"
                    >
                      +91 8348910519
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:basis-1/2 bg-orange-500 text-black px-5 py-8 rounded-md lg:max-w-xl max-w-lg w-full lg:mx-5 m-auto">
              <form onSubmit={sendEmail} className="flex flex-col items-center">
                <input
                  className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="outline-none border-2 p-2 bg-yellow-100 m-2 rounded-md focus:border-black w-full max-h-28"
                  name="user_message"
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
                <input
                  id="hello"
                  className="outline-none p-2 px-5 border-2 border-black cursor-pointer bg-yellow-100 m-2 rounded-md max-w-fit font-[600] hover:bg-black hover:text-white transition-all delay-75"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>

        {/* <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my_modal"
        >
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white`"></div>
        </div> */}

        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.00159876091!2d77.8943031150382!3d29.864227731948223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36f9f0d78bf%3A0x77b04aca8e125fe4!2sTIDES%20Business%20Incubator!5e0!3m2!1sen!2sin!4v1658124624592!5m2!1sen!2sin"
          allowfullscreen=""
          title="ArunodayInnovations"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
