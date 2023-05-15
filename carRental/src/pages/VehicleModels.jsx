import React, { useEffect, useState } from "react";
import { carData } from "../assets/contents";
import {
  HeroPages,
  Footer,
  Booking,
  CarCard,
  RadioFilter,
  DCard,
} from "../component";
import { useLocation } from "react-router-dom";

const VehicleModels = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [carInfoDisplay, setCarInfoDisplay] = useState(false);
  const [carSelected, setCarSelected] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  const { search } = useLocation();

  const handleCarSelected = (car) => {
    sessionStorage.setItem("selectedCar", JSON.stringify(car));
    setCarSelected(car);
  };
  const handleCarUnSelected = () => {
    sessionStorage.removeItem("selectedCar");
    setCarSelected(null);
  };

  useEffect(() => {
    const bData = JSON.parse(sessionStorage.getItem("bookingData"));
    if (!carSelected) {
      const selectedCar = JSON.parse(sessionStorage.getItem("selectedCar"));
      setCarSelected(selectedCar);
    }

    if (search.length > 0) {
      const state = new URLSearchParams(search);
      const carInfo = {
        pickup: state.get("carPickUp"),
        dropoff: state.get("carDropDown"),
        pickupDate: state.get("startDate"),
        dropoffDate: state.get("endDate"),
      };
      sessionStorage.setItem("bookingData", JSON.stringify(carInfo));
      setBookingData(carInfo);
      setCarInfoDisplay(false);
    }
    else if(bData){
      setBookingData(bData);
      setCarInfoDisplay(false);
    }
  }, [search]);

  const filteredCars = carData.filter((car) => {
    if (selectedOption === "all") {
      return carData;
    } else {
      return car.filterType === selectedOption;
    }
  });

  return (
    <div>
      <HeroPages title="Vehicle Models" />
      <div className=" relative px-10 py-24 flex flex-col lg:flex-row-reverse">
        <div className=" flex-[0.5] mb-6 lg:mb-0 lg:sticky lg:top-6 lg:min-h-screen lg:h-screen">
          {bookingData && !carInfoDisplay ? (
            <DCard
              carSelected={carSelected}
              bookingData={bookingData}
              handleCarUnSelected={handleCarUnSelected}
              handleCarInfoDisplay={() => setCarInfoDisplay(true)}
            />
          ) : (
            <Booking style=" col-1" />
          )}
        </div>
        <div className=" flex-1">
          <RadioFilter
            handleOptionChange={(e) => setSelectedOption(e.target.value)}
            selectedOption={selectedOption}
          />
          <div className=" gridDisplay">
            {filteredCars.map((car, i) => (
              <CarCard
                car={car}
                key={i}
                index={i}
                handleCarSelected={handleCarSelected}
                bookInfo={bookingData}
                carSelected={carSelected}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleModels;
