import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-2xl sm:text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            As a Front-end developer, I appreciate your willingness 
            to contribute and collaborate. While I don't have specific 
            tasks or assignments for you at the moment, I'd be happy 
            to answer any questions you have related to front-end 
            development or assist you with any coding challenges you might 
            be facing. Feel free to share any specific topics or 
            areas of interest, and I'll do my best to provide guidance and support.
          </p>
          <a href="https://api.whatsapp.com/send?phone=7081418052&text=I%20checked%20your%20work%20on%20upraisertech%20website,%20and%20I%20have%20a%20few%20questions%20to%20ask,%20by%20the%20way%20My%20name%20is__"> 
            <button className="btn-primary mt-10">Say Hello</button>
          </a>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[46rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
