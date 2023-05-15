import React from "react";
import { Link } from "react-router-dom";

const DCard = ({
  bookingData,
  handleCarInfoDisplay,
  carSelected,
  handleCarUnSelected,
  checkout,
}) => {
  const pickUpD = new Date(bookingData.pickupDate);
  const dropOffD = new Date(bookingData.dropoffDate);
  const diffInMs = dropOffD.getTime() - pickUpD.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const pickUpDate = `${pickUpD
    .toDateString("en-GB")
    .slice(0, 3)}, ${pickUpD.getDate()} ${pickUpD.toLocaleString("default", {
    month: "long",
  })} ${pickUpD.getFullYear()}`;

  const dropOffDate = `${dropOffD
    .toDateString("en-GB")
    .slice(0, 3)}, ${dropOffD.getDate()} ${dropOffD.toLocaleString("default", {
    month: "long",
  })} ${dropOffD.getFullYear()}`;

  return (
    <div>
      <div className="mx-4 shadow ">
        <h1 className=" bg-secondaryBg px-2 py-4 text-xl">
          Your enquiry details
        </h1>
        <div className=" px-2 py-4  bg-white flex">
          <div className=" flex-1">
            <p className=" font-semibold text-lg mb-1">Pick up</p>
            <p>{bookingData.pickup}</p>
            <p>{pickUpDate}</p>
            <p className="  text-text text-sm">
              Ready from 8<small>Am</small>{" "}
            </p>
          </div>
          {!checkout && (
            <div
              className=" text-blue-700 text-md m-4 cursor-pointer"
              onClick={() => handleCarInfoDisplay()}
            >
              Edit
            </div>
          )}
        </div>
        <hr />
        <div className=" px-2 py-4 bg-white flex">
          <div className=" flex-1">
            <p className=" font-semibold text-lg mb-1">Drop off</p>
            <p>{bookingData.dropoff}</p>
            <p>{dropOffDate}</p>
            <p className="  text-text text-sm">
              Drop Off 8<small>Am</small>{" "}
            </p>
          </div>
          {!checkout && (
            <div
              className=" text-blue-700 text-md m-4 cursor-pointer"
              onClick={() => handleCarInfoDisplay()}
            >
              Edit
            </div>
          )}
        </div>
        <hr />
        {carSelected && (
          <>
            <div className=" px-2 py-4 bg-white flex">
              <div className=" flex-1">
                <p className=" font-semibold text-lg mb-1">Vehicle details</p>
                <p>{carSelected.name}</p>
                <p>
                  {carSelected.seats} seats | {carSelected.bag} bags |{" "}
                  {carSelected.doors} doors | {carSelected.transmission}{" "}
                </p>
                <img src={carSelected.img} alt="car" className=" w-30 h-24 mx-auto" />
              </div>
              {!checkout && (
                <div
                  className=" text-blue-700 text-md m-4 cursor-pointer"
                  onClick={() => handleCarUnSelected()}
                >
                  Remove
                </div>
              )}
            </div>
            <hr />
            <div className=" px-2 py-4 bg-white flex flex-col">
              <div className=" flex justify-between items-center mb-6">
                <div>
                  <p className=" text-2xl font-semibold"> Total</p>
                  <p className=" text-sm text-text ">Incl. insurance & VAT</p>
                  <p className=" text-sm text-text ">
                    (£{carSelected?.price}pd x {diffInDays}day)
                  </p>
                </div>
                <div>
                  <p className=" text-3xl font-bold ">
                    £{carSelected?.price * diffInDays}
                  </p>
                </div>
              </div>
              {!checkout && (
                <Link
                  to="checkout"
                  className=" bg-primary rounded-md text-white text-center text-2xl py-2 mx-4 my-2"
                >
                  Continue
                </Link>
              )}
            </div>
          </>
        )}
      </div>
      <div className=" mx-4 bg-white mt-4 px-2 py-4 shadow flex gap-1">
        <p className=" font-semibold">Got a question?</p>
        <p className=" text-text">
          Call us on <span className=" text-primary">(123) 456-7890</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DCard;
