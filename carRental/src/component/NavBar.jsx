import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";
import Logo from "../assets/png-icons/logo.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className=" xl:px-20 lg:px-14 px-4 py-6 flex items-center justify-between ">
      <div className=" flex ">
        <p className=" text-3xl font-semibold">
          <span className=" text-primary">I</span>
          Rent
        </p>
        <img src={Logo} alt="logo" className=" h-8" />
      </div>
      <div className=" lg:flex flex-1 justify-center hidden">
        <NavLinks />
      </div>
      {!mobileMenuOpen ? (
        <BiMenuAltRight
          className=" lg:hidden text-3xl cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      ) : (
        <AiOutlineClose
          className=" lg:hidden text-3xl cursor-pointer fixed top-8 right-4  z-50 text-white"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={` fixed bottom-0 top-0 z-40 bg-black opacity-100 backdrop-blur-md text-white flex flex-col items-center justify-center smooth-transition ${
          mobileMenuOpen ? " left-0 right-0" : " -left-full "
        }`}
      >
        <NavLinks menuOpen="flex-col" closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default NavBar;
