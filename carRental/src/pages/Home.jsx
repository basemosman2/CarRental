import React from "react";
import {
  Hero,
  Booking,
  HowItWork,
  RentalFleet,
  BannerSection,
  WhyChooseUs,
  Testimonials,
  FAQs,
  DownloadSection,
  Footer
} from "../component";

const Home = () => {
  return (
    <div>
      <Hero />
      <Booking style=' w-3/5 -top-10' cols='md:grid-cols-2'/>
      <HowItWork />
      <RentalFleet />
      <BannerSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQs/>
      <DownloadSection/>
      <Footer/>
    </div>
  );
};

export default Home;
