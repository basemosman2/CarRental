import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/all";
import { BsFillTelephoneFill, MdEmail, FaLocationArrow } from "react-icons/all";
import { HeroPages, Footer } from "../component";

const Contact = () => {
  const [message, setMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName && email && note) {
      setFullName("");
      setEmail("");
      setNote("");
      setMessage("");
      setIsSubmit(true);
    } else {
      setMessage("Make sure you have filled the required fields **");
    }
  };

  const Confirm = ({ message }) => (
    <div className=" text-sm lg:text-lg bg-green-300 py-4 rounded-md flex justify-between items-center px-6">
      <p className=" w-4/5 lg:flex-1  font-bold text-gray-800">{message}</p>
      <CgClose className="  cursor-pointer" onClick={() => setIsSubmit(false)} />
    </div>
  );

  return (
    <div>
      <HeroPages title="Contact" />
      <div className=" relative py-10 px-6 lg:px-14 lg:py-20 flex flex-col lg:flex-row items-center gap-8 bg-[url('./assets/png-icons/world.png')]  bg-center bg-cover bg-repeat">
        <div className=" flex-1 mb-6 lg:mb-0 space-y-4">
          <h1 className=" text-4xl lg:text-6xl font-bold">Need additional information?</h1>
          <p className=" text-md lg:text-xl text-gray-600 w-2/3">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className=" space-y-1">
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <BsFillTelephoneFill />
                </span>
                <span>(123) 456-7890</span>
              </p>
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <MdEmail />
                </span>
                <span>email@example.com</span>
              </p>
              <p className="text-lg flex gap-2 items-center">
                <span className=" text-primary text-xl">
                  <FaLocationArrow />
                </span>
                <span>123 Main St, Anytown Uk</span>
              </p>
            </div>
        </div>
        <div className=" flex-1 w-full">
          <form className=" py-6" onSubmit={handleSubmit}>
            {isSubmit && (
              <Confirm message="Thanks we received the message, We will got back to you Asap." />
            )}
            <p className=" mb-4 text-red-400 text-lg">{message}</p>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className=" appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Enter your first name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
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
                  value={note}
                  onChange={(e)=> setNote(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <div className=" mt-6">
              <button
                className="bg-primary hover:bg-red-700 text-xl shadow-lg shadow-secondary text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
