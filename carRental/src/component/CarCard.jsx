import React, { useState } from "react";
import Bag from "../assets/cars_Images/icon-bag.svg";
import Door from "../assets/cars_Images/icon-door.svg";
import Gear from "../assets/cars_Images/icon-gear.svg";
import Person from "../assets/cars_Images/icon-person.svg";

const CarCard = ({ car, handleCarSelected, bookInfo, carSelected }) => {
  // const [selected, setSelected] = useState(false);

  // const handleSelectedCar = (value) => {
  //   setSelected(value);
  // };

  return (
    <div
      key={car.id}
      className=" text-center overflow-hidden bg-secondaryBg rounded-md shadow max-w-[400px]"
    >
      <img
        src={car.img}
        alt={car.name}
        className=" w-full object-contain my-4"
        loading="lazy"
      />
      <div className=" bg-white py-4 text text-left px-4">
        <h2 className=" font-semibold">{car.type}</h2>
        <p className=" text-text text-base">{car.name} or similar</p>
        <div className=" grid md:grid-cols-2 gap-4  my-4">
          <div className=" flex items-center gap-3">
            <img src={Person} alt="person" className=" w-[30px] h-[30px]" />
            <p className=" text-base">{car.seats} Seats</p>
          </div>
          <div className=" flex items-center gap-3">
            <img src={Door} alt="door" className=" w-[30px] h-[30px]" />
            <p className=" text-base">{car.doors} Doors</p>
          </div>
          <div className=" flex items-center gap-3">
            <img src={Bag} alt="Bag" className=" w-[30px] h-[30px]" />
            <p className=" text-base">{car.bag} Bags</p>
          </div>
          <div className=" flex items-center gap-3">
            <img src={Gear} alt="gear" className=" w-[30px] h-[30px]" />
            <p className=" text-base">{car.transmission} </p>
          </div>
        </div>
        <hr />
        {bookInfo ? (
          <div className=" flex justify-between items-center mt-4">
            <p className=" text-3xl font-semibold">£{car.price}<span className=" text-xs text-text">P/Day</span></p>
            <button
              className={` ${
                carSelected?.id === car.id ? " bg-red-700" : " bg-primary hover:bg-orange-600"
              }  px-6 py-2 text-xl text-white rounded-md  tracking-wide`}
              onClick={() => {
                handleCarSelected(car);
              }}

              
            >
              {carSelected?.id === car.id ? "Selected" : "Select"}
            </button>
          </div>
        ) : (
          <div className=" flex justify-between items-center mt-4">
            <p className=" text-lg ">Select Date and Location </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
