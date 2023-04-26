import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { TiTickOutline } from "react-icons/ti";
import { MdKeyboardArrowRight } from "react-icons/md";
import HeroCar from "../assets/HeroCar.png";
import Tire from "../assets/tire.png";

const Hero = () => {
  return (
    <div className=" px-10 flex justify-center items-center relative py-16">
      <div className=" flex flex-[0.75] md:items-start md:text-left flex-col justify-center items-center text-center mb-6">
        <p className=" text-xl font-semibold">Plan your trip now</p>
        <h1 className=" text-6xl font-bold mt-4 mb-8">
          Save <strong className=" text-primary">big</strong> with our car
          rental
        </h1>
        <p className=" text-text text-base lg:w-3/4">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className=" flex justify-center md:justify-start gap-4 flex-wrap mt-8">
          <Link className=" bg-primary px-4 py-2 lg:px-8 lg:py-4 rounded-md font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary shadow-secondary text-xl text-white capitalize flex items-center gap-4">
            book Ride
            <TiTickOutline className=" text-3xl" />
          </Link>
          <Link className=" hover:bg-transparent hover:text-black bg-black border border-black px-4 py-2 lg:px-8 lg:py-4 rounded-md font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary shadow-secondary text-xl text-white capitalize flex items-center gap-2">
            Learn more
            <MdKeyboardArrowRight className=" text-3xl" />
          </Link>
        </div>
      </div>
      <div className=" flex-1 relative z-0 hidden md:block">
        <div className=" absolute top-0 right-[10%] md:w-[70%] md:h-[130%] bg-gradient-to-tr from-[#fd5c3e] to-[#fd6c31] -z-0 rounded-lg">
          <img
            src={Tire}
            alt="tire"
            className=" absolute w-full object-contain bottom-0 right-0 grayscale opacity-10"
          />
        </div>
        <img
          src={HeroCar}
          alt="HeroCar"
          className=" w-full object-contain relative z-30"
        />
      </div>
    </div>
  );
};

export default Hero;
