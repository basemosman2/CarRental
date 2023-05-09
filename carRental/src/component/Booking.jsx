import {cities } from "../assets/contents";

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import { MdLocationOn} from "react-icons/md";
import bookBg from "../assets/book-bg.png";

const Booking = ({style, cols}) => {
  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [carPickUp, setCarPickUp] = useState(null);
  const [carDropDown, setCarDropDown] = useState(null);
  const [message, setMessage] = useState(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const currentDate = `${year}-${month}-${day}`;

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      carPickUp &&
      carDropDown &&
      dateValue.startDate &&
      dateValue.endDate
    ) {
      const queryParams = new URLSearchParams({
        carPickUp,
        carDropDown,
        ...dateValue,
      });
      setMessage(null);
      navigate({
        pathname: "/vehicleModel",
        search: `?${queryParams.toString()}`,
      });
    } else {
      setMessage("Please Select all the fields");
    }
  };

  return (
    <div
      className={` px-4 mx-6 py-6 bg-white rounded-lg relative ${style}`}
    >
      <img
        src={bookBg}
        alt="booking Background"
        className=" absolute inset-0 object-cover w-full h-full -z-0"
      />
      {message && (
        <p className=" mb-4 text-center text-red-600 text-2xl">{message}</p>
      )}
      <form
        onSubmit={onSubmitHandler}
        className={` relative z-1 grid  gap-4 ${cols}`}
      >
        <div className=" flex items-center border border-gray-300 rounded-sm p-2">
          <MdLocationOn className=" text-primary text-xl" />
          <label htmlFor="SelectPickUpLocation"></label>
          <select
            name="SelectPickUpLocation"
            id="SelectPickUpLocation"
            onChange={(e) => setCarPickUp(e.target.value)}
            className=" w-full p-2 bg-transparent text-lg font-semibold text-text outline-none"
          >
            <option value="SelectPickUpLocation">
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
            onChange={(e) => setCarDropDown(e.target.value)}
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
            value={dateValue}
            inputClassName=" bg-transparent w-full outline-none text-lg font-semibold text-text"
            onChange={(newValue) => setDateValue(newValue)}
            placeholder={"Select Date Range ..."}
            startFrom={currentDate}
            displayFormat={"DD/MM/YYYY"}
            eadOnly={true}
            minDate={new Date(currentDate)}
          />
        </div>
        <button
          to="/vehicleModel"
          className=" bg-primary py-4 rounded-md text-white text-xl font-semibold tracking-wider"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Booking;
