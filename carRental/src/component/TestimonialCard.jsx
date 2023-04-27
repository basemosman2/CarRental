import React from "react";
import { FaQuoteLeft} from 'react-icons/fa'

const TestimonialCard = ({city, message, name, img}) => {
  return (
    <section className="relative isolate  overflow-hidden bg-white px-4 py-2 w-2/3 sm:w-full mx-auto md:mx-0 rounded-md">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <FaQuoteLeft className=" mx-auto text-3xl text-primary"/>
        <figure className="mt-2">
          <blockquote className=" text-xl font-semibold leading-6 text-text">
            <p>
                {message}
           </p>
          </blockquote>
          <figcaption className="my-4 flex items-center gap-4">
            <img
              className=" h-12 w-12 rounded-full"
              src={img} alt=""
            />
            <div className=" flex flex-col text-base">
              <div className="font-semibold text-gray-900">{name}</div>
              <div className="text-gray-600">{city}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialCard;
