import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { TiTickOutline } from "react-icons/ti";
import HeroCar from "../assets/HeroCar.png";
import City from "../assets/City.png";
import Tire from "../assets/tire.png";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center h-screen relative">
      <div className=" flex flex-[0.75] md:items-start md:text-left flex-col justify-center items-center text-center">
        <p className=" text-xl font-semibold">Plan your trip now</p>
        <h1 className=" text-6xl font-bold mt-4 mb-8">
          Save <strong className=" text-primary">big</strong> with our car
          rental
        </h1>
        <p className=" text-text text-base lg:w-3/4">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <Link className="mt-8 bg-primary px-8 py-4 rounded-md font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary shadow-secondary text-xl text-white capitalize flex items-center gap-4">
          book Ride
          <TiTickOutline className=" text-3xl" />
        </Link>
      </div>
      <div className=" flex-1 relative z-0 hidden md:block">
        <div className=" absolute -top-[30%] right-[10%] md:w-[70%] md:h-[160%] bg-gradient-to-tr from-[#fd5c3e] to-[#fd6c31] -z-0 rounded-lg">
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
