import React from "react";
import GroupCar from "../assets/cars_Images/groupCar.png";
import PriceIcon from "../assets/png-icons/priceIcon.png";
import CrossCar from "../assets/png-icons/crossCar.png";
import HiddenPrice from "../assets/png-icons/hiddenPrice.png";

const WhyChooseUs = () => {
  return (
    <div className=' py-20 px-10 bg-[url("./assets/cars_Images/tireBg.png")] bg-no-repeat bg-cover'>
      <img
        src={GroupCar}
        alt="groupCar"
        className=" w-3/4 mx-auto object-contain relative z-10 mb-6"
      />
      <div className=" flex gap-24 px-8 flex-col lg:flex-row">
        <div className='  flex-1 flex flex-col gap-4'>
          <p className=" font-semibold text-2xl">Why Choose Us</p>
          <h2 className=" font-bold text-3xl lg:text-6xl">
            Best valued deals you will ever find
          </h2>
          <p className=" text-text leading-7 mt-2">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
        </div>
        <div className=" flex-1 flex flex-col gap-6">
            <div className=" flex flex-col lg:flex-row items-center gap-2">
                <img src={CrossCar} alt="CrossCar" />
                <div>
                    <h2 className=" font-bold text-2xl mb-1">Cross Country Drive</h2>
                    <p className=" w-3/4 text-text">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row items-center gap-2">
                <img src={PriceIcon} alt="PriceIcon" />
                <div>
                    <h2 className=" font-bold text-2xl mb-1">All Inclusive Pricing</h2>
                    <p className=" w-3/4 text-text">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row items-center gap-2">
                <img src={HiddenPrice} alt="HiddenPrice" />
                <div>
                    <h2 className=" font-bold text-2xl mb-1">No Hidden Charges</h2>
                    <p className=" w-3/4 text-text">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
