import { WhatsApp } from "@material-ui/icons";
import React from "react";

const Bot = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=2347081418052&text=I%20checked%20your%20work%20on%20your%20website,%20and%20I%20have%20a%20few%20questions%20to%20ask,%20by%20the%20way%20My%20name%20is__">
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-[45px] h-[45px] flex items-center justify-center rounded-full animate-bounce">
        <WhatsApp className=""/>
      </div>
    </a>
  );
};

export default Bot;
