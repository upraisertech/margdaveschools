import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import project1 from "../assets/images/PR/project-1.png";
import project2 from "../assets/images/PR/project-2.png";
import project3 from "../assets/images/PR/project-3.png";
import project4 from "../assets/images/PR/project-4.png";
import project5 from "../assets/images/PR/project-5.png";
import project6 from "../assets/images/PR/project-6.png";
import project7 from "../assets/images/PR/project-7.png";
import project8 from "../assets/images/PR/project-8.png";
import project9 from "../assets/images/PR/project-9.png";
import project_person from "../assets/images/IMG_2022.jpg";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Tabnovel Authors Dashboard",
      github_link: "",
      live_link: "https://tabnovel-authors-testing.vercel.app",
    },
    {
      img: project2,
      name: "AZCPAY WebSite",
      github_link: "",
      live_link: "https://azcpay.com",
    },
    {
      img: project3,
      name: "TabNovel Website",
      github_link: "",
      live_link: "https://tabnovel-authors-wedsite.vercel.app",
    },
    {
      img: project4,
      name: "Serynity WebSite",
      github_link: "",
      live_link: "https://serynity.vercel.app",
    },
    {
      img: project5,
      name: "EcomoGame",
      github_link: "",
      live_link: "https://ecomo-game-preveiw.vercel.app",
    },
    {
      img: project6,
      name: "Upraise Cloud",
      github_link: "",
      live_link: "https://upraisecloud.vercel.app",
    },
    {
      img: project7,
      name: "Calculator",
      github_link: "",
      live_link: "https://upraisercalculator.netlify.app",
    },
    {
      img: project8,
      name: "Ecommerce Collection Site",
      github_link: "",
      live_link: "https://upraisercollection.netlify.app",
    },
    {
      img: project9,
      name: "Crypto Site",
      github_link: "",
      live_link: "https://ucryptosite.netlify.app",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-2xl sm:text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3  w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              799: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            // pagination={{
            //   clickable: false,
            // }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="lg:h-[250px] w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="h-[230px] lg:h-[130px] rounded-lg" />
                  <h3 className="text-[15px] my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          <div className="lg:block hidden h-full relative w-10/12 aboutImg ">
            <img
              src={project_person}
              alt=""
              className="w-full h-[400px] object-cover bg-cyan-600 rounded-xl"
            />
          </div>
      </div>
    </section>
  );
};

export default Project;
