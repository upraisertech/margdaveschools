import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Facilities", link: "#facilities" },
    { name: "News&Events", link: "#news" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 bg-black/60 z-[999] ${sticky ? "bg-black  text-[#FFFDD0]" : "text-white"
        }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex mx-5 md:mx-7 gap-x-4 items-center justify-center">
          {/* <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] object-cover bg-cyan-600 rounded-[50%]"
          /> */}
          <div>
          <h4 className="text-2xl md:text-4xl uppercase font-bold">
            MB<span className="text-blue-700">LS</span> School
          </h4>
          <p className="text-blue-700 italic">Christ leads we follow...</p>
          </div>
        </div>
        <div
          className={` ${sticky ? "md:bg-white/0 bg-white text-white" : "bg-[#FFFDD0] text-gray-900"
            } lg:block hidden px-7 py-2 m-[-5px] font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-blue-700">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${open ? "text-gray-900" : "text-gray-100"
            } text-3xl lg:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`lg:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
            }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-blue-700"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
