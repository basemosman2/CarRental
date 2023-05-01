import React from "react";
import { HeroPages, HowItWork, Footer } from "../component";

import AboutMain from "../assets/persons/about-main.jpg";

import {
  AiFillCar,
  ImOffice,
  GiAutoRepair,
  BsFillTelephoneFill,
} from "react-icons/all";
const About = () => {
  return (
    <div>
      <HeroPages title="About" />
      <div className="flex flex-col bg-white  md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-20">
        <div className="w-full md:w-1/2">
          <p className=' text-2xl mb-2"'>About Company</p>
          <h1 className="text-5xl font-bold mb-6">
            You start the engine and your adventure begins
          </h1>
          <p className="text-gray-500 text-xl mb-8">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className=" flex md:justify-start gap-8 items-center flex-wrap mb-8">
            <div className=" text-xl">
              <AiFillCar className=" text-3xl text-primary mx-auto" />
              <p>20 Car Type</p>
            </div>
            <div className=" text-xl">
              <ImOffice className=" text-3xl text-primary mx-auto" />
              <p>85 Rental Outlets</p>
            </div>
            <div className=" text-xl">
              <GiAutoRepair className=" text-3xl text-primary mx-auto" />
              <p>75 Repair Shop</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src={AboutMain}
            alt="AboutMain"
            className="object-cover h-full w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      <HowItWork />
      <div className=" relative flex h-[200px] justify-center items-center bg-[#2d2d2d] bg-[url('./assets/cars_images/book-banner.png')] bg-no-repeat bg-center">
        <div className=" bg-black absolute w-full h-full opacity-50 z-0"></div>
        <div className=" text-2xl md:text-4xl flex-wrap text-center px-6 relative flex items-center justify-center gap-4">
          <h2 className=" text-white font-bold ">
            Book a car by getting in touch with us
          </h2>
          <p className=" flex gap-2 items-center  text-primary">
            <span className="">
              <BsFillTelephoneFill />
            </span>
            <span>(123) 456-7890</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
