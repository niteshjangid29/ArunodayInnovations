import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { gallery } from "../Data/galleryData";

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className="gallery w-4/5 flex flex-col m-auto items-center mt-16 font-[poppins]">
        <h1 className="font-[600] text-2xl md:text-4xl">- Gallery -</h1>
        <div class="flex flex-col md:grid grid-cols-2 grid-flow-row gap-4 my-16">
          <div class="row-span-4 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[0].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[1].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[2].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[4].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-4 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[3].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full h-full rounded-md md:rounded-xl"
              src={gallery[5].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full max-h-screen rounded-md md:rounded-xl"
              src={gallery[6].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
          <div class="row-span-2 w-full h-full rounded-md md:rounded-xl">
            <img
              className="w-full max-h-screen rounded-md md:rounded-xl"
              src={gallery[7].image}
              alt={gallery.title}
              draggable="false"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
