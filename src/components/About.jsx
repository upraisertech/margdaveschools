import React from "react";
import aboutImg from "../assets/images/student1.png";
const About = () => {
  const info = [
    { text: "CERTIFIED TEACHERS", count: "200", plus: "+" },
    { text: "STUDENTS ENROLLED", count: "5000", plus: "+" },
    { text: "PASSING TO UNIVERSITIES", count: "96%" },
    { text: "SATISFIED PARENTS", count: "99%" },
  ];

  return (
    <section id="about" className="py-10 text-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-2xl sm:text-4xl font-semibold">
          About <span className="text-blue-700">Us</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-800 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                WE ARE IN TUNE WITH THE FUTURE OF LEARNING, AND FOR 19 YEARS WE HAVE CONTINUED TO LEAD THE PACK IN WORLD-CLASS EDUCATION.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-gray-800">
                      {content.count}
                      <span className="text-blue-700">{content.plus}</span>{" "}
                    </h3>
                    <span className="text-[13px]">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a>
                <button className="cursor-pointer btn-primary w-[115px]"> See more</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg h-[400px]">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
