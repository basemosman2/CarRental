import React from "react";
import TestimonialCard from "./TestimonialCard";
import { PersonsReview } from "../assets/contents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSwiper } from "swiper/react";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const CustomArrows = () => {
  const swiper = useSwiper();
  return (
    <div className=" flex justify-center gap-6 mt-4 text-3xl text-btnBg">
      <button className="" onClick={() => swiper.slidePrev()}>
        <BsFillArrowLeftCircleFill className=" hover:text-btnBgHover " />
      </button>
      <button
        className=" hover:text-btnBgHover "
        onClick={() => swiper.slideNext()}
      >
        <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="lg:px-10 px-6 py-24 text-center">
      <p className="  text-black text-base leading-6">Reviewed by People</p>
      <h2 className=" text-5xl text-black my-6 leading-6 font-medium">
      Client's Testimonials
      </h2>
      <p className=" text-text mx-auto text-center leading-6 lg:w-1/2">
      Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className=" mt-20 lg:w-3/4 cursor-pointer mx-auto"
      >
        {PersonsReview.map((person) => (
          <SwiperSlide key={person.id} className=" w-full">
            <TestimonialCard
              name={person.name}
              message={person.message}
              img={person.img}
              city={person.city}
            />
          </SwiperSlide>
        ))}
        <CustomArrows />
      </Swiper>
    </div>
  );
};

export default Testimonials;
