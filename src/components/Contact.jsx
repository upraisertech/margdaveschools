import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactPage from '../components/FeedBack/index';

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "akoredesalaudeen54@gmail.com", url: "https://gmail.com/akoredesalaudeen54@gmail.com", },
    { logo: "logo-whatsapp", 
      text: "+234 708 141 8052", 
      url: "https://api.whatsapp.com/send?phone=2347081418052&text=I%20checked%20your%20work%20on%20your%20website,%20and%20I%20have%20a%20few%20questions%20to%20ask,%20by%20the%20way%20My%20name%20is__", 
    },
    {
      logo: "location",
      text: "Everywhere",
    },
  ];
  let navigate = useNavigate();

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-2xl sm:text-4xl font-semibold">
          Get in <span className="text-cyan-600">touch</span>
        </h3>

        <div
          className="mt-8 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <div className="flex flex-col flex-1 gap-5"><ContactPage /></div>
          
          <div className="flex flex-col md:mt-16 gap-7 ">
            {contact_info.map((contact, i) => (
              <a
                key={i} href={contact.url}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
