import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundSlider from "./common/BackgroundSlider";
import heroImage1 from "../assets/images/download.png"; // Import your image correctly

const Hero = () => {

  const images = [
    heroImage1,
    "https://www.webnovel.com/book/i-just-inherited-the-arcane-emperor's-legacy_25932662306661805",
    heroImage1,
    // Add more image URLs as needed
  ];

  return (
    <section id="home" className="relative">
      <BackgroundSlider images={images} interval={3000} />

      <div className="absolute bottom-4 top-[7rem] md:top-[8rem] bg-black/80 mx-2 md:mx-0 p-3 text-white text-center items-center justify-center w-full">
        <h4 className="text-4xl uppercase font-bold text-white">
          <h4 className="text-4xl uppercase font-bold">
            Mare<span className="text-blue-700">gdave </span>
            B<span className="text-blue-700">est </span>
            <span className="text-blue-700">Leg</span>acy School
          </h4>
        </h4>
        <p>TO GIVE EVERY CHILD EQUAL OPPORTUNITY TO EXCEL AND ATTAIN GRATER HEIGHT IN HIS / HER CHOSEN CAREER</p>
        <a href="#">
          <button className="bg-blue-700 mt-8 px-4 py-3 rounded-full">Contact Me</button>
        </a>

        <div className="flex md:flex-row flex-col h-[40%] md:h-auto p-4 mx-5 my-7 gap-6 md:text-center text-left items-start justify-between border rounded-md overflow-y-auto">
          <div className="md:w-[30%]">
            <h2>Inspired Educators:</h2>
            <p>Providing individualized learning to strengthen each student’s abilities.</p>
          </div>
          <div className="md:w-[30%]">
            <h2>Computer Based:</h2>
            <p>A structured environment where technology is used for learning purpose.</p>
          </div>
          <div className="md:w-[30%]">
            <h2>Computer Based:</h2>
            <p>A structured environment where technology is used for learning purpose.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
