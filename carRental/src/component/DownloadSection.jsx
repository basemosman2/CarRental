import React from "react";

import AppStore from "../assets/png-icons/apple.svg";
import GoogleStore from "../assets/png-icons/google.svg";

const DownloadSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 md:px-20 py-20  md:bg-[url('./assets/png-icons/downloadBgSection.png')] bg-no-repeat bg-top bg-cover  ">
      <div className="w-full md:w-2/5 flex flex-col gap-8 items-start text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Download our app to get most out of it
        </h1>
        <p className="text-gray-500 text-md lg:text-xl">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flex flex-col md:flex-row items-center w-1/2 gap-4">
          <img src={AppStore} alt="AppStore" className=" cursor-pointer" />
          <img src={GoogleStore} alt="GoogleStore" className=" cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
