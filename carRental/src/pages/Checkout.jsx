import React, { useEffect, useState } from "react";
import { carData } from "../assets/contents";
import { CgClose } from "react-icons/all";

import { HeroPages, Footer, DCard } from "../component";

const Checkout = () => {
  const [carSelected, setCarSelected] = useState({});
  const [bookingData, setBookingData] = useState({});
  const [message, setMessage] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ageChecked, setAgeChecked] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName && lastName && email && phone && ageChecked) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAgeChecked(false);
      setIsSubmit(true);
      const booking = {
        carSelected,
        bookingData,
        details: { firstName, lastName, email, phone, ageChecked },
      };
    } else {
      setMessage("Make sure you have filled the required fields **");
    }
  };

  useEffect(() => {
    const bData = JSON.parse(sessionStorage.getItem("bookingData"));
    const selectedCar = JSON.parse(sessionStorage.getItem("selectedCar"));
    if (bData && selectedCar) {
      setBookingData(bData);
      setCarSelected(selectedCar);
    }
  }, []);

  const Confirm = ({ message }) => (
    <div className=" text-lg bg-green-300 py-4 rounded-md flex justify-between items-center px-6">
      <p className=" font-bold text-gray-800">{message}</p>
      <CgClose className=" cursor-pointer" onClick={() => setIsSubmit(false)} />
    </div>
  );

  return (
    <div>
      <HeroPages title="Checkout" subTitle="Vehicle Models / Checkout" />
      <div className=" relative py-10 px-6 lg:px-10 lg:py-20 flex flex-col lg:flex-row-reverse">
        <div className=" flex-[0.5] mb-6 lg:mb-0 lg:sticky lg:top-6 lg:min-h-screen lg:h-screen">
          <DCard
            carSelected={carSelected}
            bookingData={bookingData}
            checkout={true}
          />
        </div>
        <div className=" flex-1">
          <form className=" py-6 lg:w-4/5" onSubmit={handleSubmit}>
            {isSubmit && (
              <Confirm message="Check your email to confirm an order." />
            )}
            <p className=" mb-4 text-red-400 text-lg">{message}</p>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="note"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Note
              </label>
              <div className="mt-2.5">
                <textarea
                  placeholder="Do we need to know anything else"
                  name="note"
                  id="note"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className="my-6 text-lg">
              <label htmlFor="age" className="block font-medium text-gray-700">
                Are you over 25 years old?
              </label>
              <input
                type="checkbox"
                id="age"
                checked={ageChecked}
                onChange={(e) => setAgeChecked(e.target.checked)}
                className="mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 w-4 h-4"
              />
              <span className="ml-2 text-gray-700">
                I confirm that I am over 25 years old.
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-red-700 text-xl text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
