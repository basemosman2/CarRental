import { useState } from "react";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: "1. What is special about comparing rental car deals?",
      answer:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      question: "2. How do I find the car rental deals?",
      answer:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      question: "3. How do I find such low rental car prices?",
      answer:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className=" py-24 px-10 bg-white bg-[url('./assets/cars_Images//FAQ-bg.png')] bg-no-repeat bg-left-bottom">
      <div className=" text-center">
        <p className="  text-black text-xl leading-6 font-semibold">FAQ</p>
        <h2 className=" text-3xl md:text-5xl text-black my-4 leading-12 md:leading-6 font-medium">
          Frequently Asked Questions
        </h2>
        <p className=" text-text mx-auto text-center leading-6 lg:w-1/2">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="w-4/5 md:w-3/5 mx-auto mt-12">
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={index}>
              <div
                className={`flex group justify-between items-center p-4 transition-colors duration-300 rounded-md cursor-pointer ${
                  activeQuestion === index
                    ? " bg-primary shadow shadow-secondary text-white"
                    : "bg-gray-200 shadow"
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <h2 className="text-xl font-semibold">{q.question}</h2>
                <svg
                  className={`h-6 w-6 transition-transform transform ${
                    activeQuestion === index ? "rotate-180 stroke-white" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeQuestion === index && (
                <div className="bg-gray-100 p-4 rounded-b-md transition-all">
                  <p className="text-gray-700">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
