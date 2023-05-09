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
  const [carInfoDisplay, setCarInfoDisplay] = useState(false)
  const [carSelected, setCarSelected] = useState(null)


 const handleCarSelected = (car) => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    setCarSelected(car);
 }
 const handleCarUnSelected = () => {
  localStorage.removeItem("selectedCar");
    setCarSelected(null);
 }

  const { search } = useLocation();
  const state = new URLSearchParams(search);

  useEffect(() => {
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
    setCarSelected(selectedCar);
  }, []);


  useEffect(() => {
    setCarInfoDisplay(false);
  }, [search]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleCarInfoDisplay = () => {
    setCarInfoDisplay(true)
  }
  const carInfo = {
    pickup: state.get("carPickUp"),
    dropoff: state.get("carDropDown"),
    pickupDate: state.get("startDate"),
    dropoffDate: state.get("endDate"),
  };

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
        <div className=" flex-[0.5] mb-6">
          {search && !carInfoDisplay ? <DCard carSelected={carSelected} carInfo={carInfo} handleCarUnSelected={handleCarUnSelected} handleCarInfoDisplay={handleCarInfoDisplay} /> : <Booking style=" col-1" />}
        </div>
        <div className=" flex-1">
          <RadioFilter
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
          <div className=" gridDisplay">
            {filteredCars.map((car, i) => (
              <CarCard car={car} key={i} index={i} handleCarSelected={handleCarSelected} bookInfo={search} carSelected={carSelected}/>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleModels;
