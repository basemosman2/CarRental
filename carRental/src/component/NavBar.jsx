import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import  NavLinks from './NavLinks';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    };

  return (
    <div className=" xl:px-20 lg:px-14 px-10 py-10 flex items-center justify-between ">
      <h1 className=" text-3xl font-bold">Car Rental</h1>
      <div className=" lg:flex flex-1 justify-center hidden">
        <NavLinks/>
      </div>
      <div className=" lg:flex justify-end gap-4 hidden">
        <button className=" font-semibold text-lg hover:text-primary">
          <NavLink to="/signup" className={(active)=> active && '' }>Sign Up</NavLink>
        </button>
        <button className=" bg-primary py-3 px-6  text-lg rounded-lg text-white font-semibold hover: shadow-xl hover:shadow-secondary cursor-pointer ">
          <NavLink to="/signin" className={(active)=> active && '' }>Sing In</NavLink>
        </button>
      </div>
      {!mobileMenuOpen ? (
        <BiMenuAltRight
          className=" lg:hidden text-3xl cursor-pointer"
          onClick={() => setMobileMenuOpen(true)}
        />
      ) : (
        <AiOutlineClose
          className=" lg:hidden text-3xl cursor-pointer relative z-20 text-white"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={` absolute top-0 w-full h-screen z-10 bg-black opacity-95 backdrop-blur-md text-white flex flex-col items-center justify-center smooth-transition ${
          mobileMenuOpen ? " -left-0" : " -left-full"
        }`}
      >
        <NavLinks menuOpen='flex-col' closeMenu={closeMenu}/>
        <div className=" mt-10 flex gap-4">
          <button className=" font-semibold text-lg hover:text-primary">
            <NavLink to="/signup" className={(active)=> active && '' } onClick={closeMenu}>Sign Up</NavLink>
          </button>
          <button className=" bg-primary py-3 px-6  text-lg rounded-lg text-white font-semibold hover: shadow-sm hover:shadow-secondary cursor-pointer ">
            <NavLink to="/signin" className={(active)=> active && '' } onClick={closeMenu}>Sing In</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
