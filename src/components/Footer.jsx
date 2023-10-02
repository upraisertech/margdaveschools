import React from "react";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaLinks = [
    {
      id: 1,
      icon: <GitHub />,
      url: "https://github.com/upraisertech",
    },
    {
      id: 2,
      icon: <LinkedIn />,
      url: "https://linkedin.com/in/upraisertech",
    },
    {
      id: 3,
      icon: <Twitter />,
      url: "https://www.twitter.com/upraisertech",
    },
    {
      id: 4,
      icon: <Instagram />,
      url: "https://www.instagram.com/upraisertech",
    },
    {
      id: 5,
      icon: <Facebook />,
      url: "https://www.facebook.com/upraisertech",
    },
  ];

  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      <div className="mt-8 text-3xl flex items-center justify-center gap-5">
        <div className="flex mt-10 items-center text-gray-600 cursor-pointer gap-7">
          {socialMediaLinks.map((socialMedia) => (
            <a key={socialMedia.id} href={socialMedia.url}>
              <span className="text-xs md:text-base hover:text-white">
                {socialMedia.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:text-center text-left items-start justify-between">
        <div>Copyright © {currentYear} <span className="bg-gray-800 hover:text-cyan-600">Maregdave Best Legacy School</span>. All Rights reserved.</div>
        <div>Powered by <a href="https://upraisertech.vercel.app" className="hover:bg-gray-800 text-cyan-600">UpraiserTech</a></div>
      </div>
    </div>
  );
};

export default Footer;
