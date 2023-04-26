import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { carData } from "../assets/contents";
import { AiOutlineClose } from "react-icons/ai";
import Bag from "../assets/cars_Images/icon-bag.svg";
import Door from "../assets/cars_Images/icon-door.svg";
import Gear from "../assets/cars_Images/icon-gear.svg";
import Person from "../assets/cars_Images/icon-person.svg";

const RentalFleet = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const Model = ({ activeSlide }) => {
    const selectedCar = carData[activeSlide];
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 grid place-items-center">
        <AiOutlineClose
          className=" text-5xl cursor-pointer absolute top-3 right-6 text-white border rounded-full p-1"
          onClick={() => setModelOpen(false)}
        />
        <div className="w-max max-h-max md:px-4 py-10 bg-white relative rounded-md flex flex-col justify-center md:flex-row">
          <div className=" flex flex-1 flex-col justify-center items-center">
            <img src={selectedCar.img} alt={selectedCar.name} />
            <h2 className=" font-semibold">{selectedCar.type}</h2>
            <p className=" text-text text-base">{selectedCar.name} or similar</p>
          </div>
          <div className=" flex flex-1 flex-col justify-center gap-4 mt-8 md:mt-0 md:gap-10 items-stretch">
            <p className=" text-center px-4 lg:px-0 md:px-0  md:text-left text-sm md:text-md text-text lg:leading-6 md:w-4/5">{selectedCar.text}</p>
            <div className=" grid md:grid-cols-2 ml-4 md:ml-0 gap-2 md:gap-6">
              <div className=" flex items-center gap-3">
                <img src={Person} alt="person" />
                <p className=" text-base">{selectedCar.seats} Seats</p>
              </div>
              <div className=" flex items-center gap-3">
                <img src={Door} alt="door" />
                <p className=" text-base">{selectedCar.doors} Doors</p>
              </div>
              <div className=" flex items-center gap-3">
                <img src={Bag} alt="Bag" />
                <p className=" text-base">{selectedCar.bag} Bags</p>
              </div>
              <div className=" flex items-center gap-3">
                <img src={Gear} alt="gear" />
                <p className=" text-base">{selectedCar.transmission} </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" flex flex-col justify-center items-center my-6">
      <p className="  text-black text-base leading-6">Vehicle Models</p>
      <h2 className=" text-3xl text-black my-2 leading-6 font-medium">
        Our rental fleet
      </h2>
      <p className=" text-text text-center leading-5 lg:w-1/3">
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 200,
          },
        }}
        className=" mt-4 w-3/4 cursor-pointer mx-auto"
      >
        {carData.map((car, i) => (
          <SwiperSlide
            key={car.id}
            className=" w-full my-10"
            onClick={() => {
              setActiveSlide(i);
              setModelOpen(true);
            }}
          >
            <div className="text-center overflow-hidden bg-secondaryBg rounded-md shadow  w-[250px]">
              <img
                src={car.img}
                alt={car.name}
                className=" w-full h-full object-contain my-4"
                loading="lazy"
              />
              <div className=" text-center bg-white py-4">
                <h2 className=" font-semibold">{car.type}</h2>
                <p className=" text-text text-base">{car.name} or similar</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modelOpen && <Model activeSlide={activeSlide} />}
    </div>
  );
};

export default RentalFleet;
