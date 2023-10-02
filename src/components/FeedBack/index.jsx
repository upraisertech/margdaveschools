import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact"
import Feedback from "./feedback";

const Routes = ({ defaultTab }) => {
  let navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1); //defaultTab

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className="flex space-x-5 items-center justify-start pt-2 mx-auto rounded-md w-full mb-0">
        <button
          className={`text-2xl md:text-[22px] focus:outline-none ${
            activeTab === 1 ? 'border-cyan-600 border-t-none border-b-[4px] text-cyan-600' : 'text-white'
          }`}
          onClick={() => handleTabClick(1)}
        >
          <div className="flex flex-col gap-0.5 items-center justify-center px-3">
            <div
              className="text-[17px] w-auto"
              size="txtSatoshiVariableMedium11WhiteA700"
            >
              Contact
            </div>
          </div>
        </button>

        <div className="bg-blue_gray-100_01 h-6 w-0.5"></div>

        <button
          className={`text-2xl md:text-[22px] focus:outline-none ${
            activeTab === 2 ? 'border-cyan-600 border-t-none border-b-[4px] text-cyan-600' : 'text-white'
          }`}
          onClick={() => handleTabClick(2)}
        >
          <div className="flex flex-col gap-0.5 items-center justify-center px-3">
            <div
              className="text-[17px] w-auto"
              size="txtSatoshiVariableMedium11OrangeA200"
            >
              Feedback
            </div>
          </div>
        </button>
      </div>

      <div className="bg-blue_gray-100_01 h-6 w-0.5"></div>

      {/* Content for each tab */}
      {activeTab === 1 && <div><Contact /></div>}
      {activeTab === 2 && <div><Feedback /></div>}
    </div>
  );
};

export default Routes;

  // className={`capitalize text-2xl md:text-[22px] w-auto
             
