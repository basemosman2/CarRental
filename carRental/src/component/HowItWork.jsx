import React from "react";
import icon1 from "../assets/png-icons/icon1.png";
import icon2 from "../assets/png-icons/icon2.png";
import icon3 from "../assets/png-icons/icon3.png";

const HowItWork = () => {
  return (
    <div className=" px-10 flex flex-col items-center my-20">
      <p className=" text-xl font-semibold text-black ">Plan your trip now</p>
      <h2 className=" text-5xl font-bold text-center my-4">
        Quick & easy car rental
      </h2>
      <div className=" grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 text-center w-full">
        <div className=" my-6">
          <img src={icon1} alt="icon1" className=" mx-auto" />
          <h3 className=" text-2xl font-bold my-1">Select Car</h3>
          <p className=" leading-6 text-text text-lg w-2/3 mx-auto">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className=" my-6">
          <img src={icon2} alt="icon1" className=" mx-auto" />
          <h3 className=" text-2xl font-bold my-1">Contact Operator</h3>
          <p className=" leading-6 text-text text-lg w-2/3 mx-auto">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className=" my-6">
          <img src={icon3} alt="icon1" className=" mx-auto" />
          <h3 className=" text-2xl font-bold my-1">Let's Drive</h3>
          <p className=" leading-6 text-text text-lg w-2/3 mx-auto">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
