import { carData, cities } from "../assets/contents";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { AiFillCar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import bookBg from "../assets/book-bg.png";

const Booking = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div
      className={` px-4 py-6 bg-white rounded-lg relative -top-[50%] lg:w-2/3`}
    >
      <img
        src={bookBg}
        alt="book Background"
        className=" absolute inset-0 object-cover w-full h-full -z-0"
      />
      <div className=" relative z-1 grid md:grid-cols-2 gap-4">
        <div className=" flex items-center border border-gray-300 rounded-sm p-2">
          <AiFillCar className=" text-primary text-xl" />
          <label htmlFor="carSelect"></label>
          <select
            name="carSelect"
            id="carSelect"
            className=" w-full p-2 bg-transparent text-lg font-semibold text-text outline-none"
          >
            <option value="SelectYourCarType<">Select Your Car Type</option>
            {carData.map((carSelect) => (
              <option value={carSelect.name} key={carSelect.id}>
                {carSelect.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex items-center border border-gray-300 rounded-sm p-2">
          <MdLocationOn className=" text-primary text-xl" />
          <label htmlFor="SelectPickUpLocation"></label>
          <select
            name="SelectPickUpLocation"
            id="SelectPickUpLocation"
            className=" w-full p-2 bg-transparent text-lg font-semibold text-text outline-none"
          >
            <option value="SelectPickUpLocation<">
              Select Pick Up Location
            </option>
            {cities.map((carSelect, i) => (
              <option value={carSelect.name} key={i}>
                {carSelect.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex items-center border border-gray-300 rounded-sm p-2">
          <MdLocationOn className=" text-primary text-xl" />
          <label htmlFor="DropOffLocation"></label>
          <select
            name="DropOffLocation"
            id="DropOffLocation"
            className=" w-full p-2 bg-transparent text-lg font-semibold text-text outline-none"
          >
            <option value="SelectDropOffLocation">
              Select Drop Off Location
            </option>
            {cities.map((carSelect, i) => (
              <option value={carSelect.name} key={i}>
                {carSelect.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" border border-gray-300 rounded-sm p-2 flex items-center">
          <label htmlFor="datePickUp"></label>
          <Datepicker
            useRange={false}
            value={value}
            onChange={handleValueChange}
            inputClassName=" bg-transparent w-full outline-none text-lg font-semibold text-text"
            placeholder={"Select Date Range ..."}
            startFrom="2023-01-01"
            displayFormat={"DD/MM/YYYY"}
            eadOnly={true}
            minDate={new Date("2023-01-05")}
          />
        </div>
        <button className=" bg-primary py-4 rounded-md text-white text-xl font-semibold tracking-wider">
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Booking;
