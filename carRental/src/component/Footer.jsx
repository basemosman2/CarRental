import React from "react";

import Logo from "../assets/png-icons/logo.png";

import { BsFillTelephoneFill, MdEmail, FaLocationArrow } from "react-icons/all";

const Footer = () => {
  return (
    <footer className=" bg-white text-black py-12">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4">
          <div className="flex flex-col items-left gap-4 mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-12 mr-4" />
            <p className=" max-w-xs text-text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className=" space-y-1">
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <BsFillTelephoneFill />
                </span>
                <span>(123) 456-7890</span>
              </p>
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <MdEmail />
                </span>
                <span>email@example.com</span>
              </p>
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <FaLocationArrow />
                </span>
                <span>123 Main St, Anytown Uk</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-2 font-bold text-2xl">Pages</p>
            <a href="#" className="mb-1 text-md hover:text-primary">
              Home
            </a>
            <a href="#" className="mb-1 text-md hover:text-primary">
                About
            </a>
            <a href="#" className="mb-1 text-md hover:text-primary">
              Contact
            </a>
            <a href="#" className="mb-1 text-md hover:text-primary">
                Vehicles Model
            </a>
          </div>
          <div className="flex flex-col">
            <p className="mb-2 font-bold text-2xl">Working Hours</p>
            <p className="mb-1 text-md">Mon-Fri: 9am-5pm</p>
            <p className="text-md">Sat-Sun: Closed</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-2 font-bold text-2xl">Subscribe to our Newsletter</p>
            <form className=" flex flex-col justify-left items-left">
              <input
                type="email"
                className="mb-2 px-2 py-4 rounded-md w-1/2 md:w-full border border-gray-400 text-gray-800"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-primary w-1/2 md:w-full  text-white px-4 py-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
