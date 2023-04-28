import React from "react";

import AppStore from "../assets/png-icons/apple.svg";
import GoogleStore from "../assets/png-icons/google.svg";

const DownloadSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-20 py-20 bg-[url('./assets/png-icons/downloadBgSection.png')] bg-no-repeat bg-top bg-cover  ">
      <div className="w-full md:w-2/5 flex flex-col gap-8 items-start text-left">
        <h1 className="text-5xl font-bold">
          Download our app to get most out of it
        </h1>
        <p className="text-gray-500 text-xl">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="flex items-center gap-2">
          <img src={AppStore} alt="AppStore" />
          <img src={GoogleStore} alt="GoogleStore" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
