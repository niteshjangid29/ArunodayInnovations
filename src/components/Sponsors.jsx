import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sliderData } from "../Data/sponsorsData";

const Sponsors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = sliderData.length;
  const slides = document.getElementsByClassName("slide");

  let autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    for (let i = 0; i < length; i++) {
      slides[i].classList.remove("current");

      if (i === currentSlide) {
        slides[i].classList.add("current");
      }
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="flex flex-col py-16">
      <h1 className="flex justify-center text-xl md:text-2xl lg:text-3xl font-medium mb-5">
        Trusted and Supported By
      </h1>
      <div className="md:hidden flex justify-evenly items-center">
        <div onClick={prevSlide} className="p-2 rounded-full">
          <FontAwesomeIcon icon="fa-solid fa-angle-left" />
        </div>
        <div className="flex slider justify-center">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={
                  index === currentSlide ? "slide w-28 current" : "slide"
                }
                key={index}
              >
                {index === currentSlide && (
                  <div>
                    <img src={slide.logo} alt={slide.title} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div onClick={nextSlide} className="p-2 rounded-full">
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
      </div>

      <div className="md:flex hidden flex-wrap justify-center w-3/5 m-auto">
        {sliderData.map((slide, index) => {
          return (
            <img
              className="w-16 p-2 md:p-6 basis-1/5"
              src={slide.logo}
              alt={slide.title}
              key={index}
            />
          );
        })}
        
        {/* <img
          className="w-16 p-2 md:p-6 basis-1/5"
          src="./images/DST.png"
          alt="DST"
        />
        <img
          className="w-16 p-2 md:p-6 basis-1/5"
          src="./images/tides.png"
          alt="tides"
        />
        <img
          className="w-16 p-2 md:p-6 basis-1/5"
          src="./images/iitRoorkee.png"
          alt="iitRoorkee"
        />
        <img
          className="w-16 p-2 md:p-6 basis-1/5"
          src="./images/nidhiPrayas.png"
          alt="nidhiPrayas"
        />
        <img
          className="w-16 p-2 md:p-6 basis-1/5"
          src="./images/startUpIndia.png"
          alt="startUpIndia"
        /> */}
      </div>
    </div>
  );
};

export default Sponsors;
