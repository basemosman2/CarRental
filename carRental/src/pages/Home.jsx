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
  DownloadSection
} from "../component";

const Home = () => {
  return (
    <div>
      <Hero />
      <Booking />
      <HowItWork />
      <RentalFleet />
      <BannerSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQs/>
      <DownloadSection/>
    </div>
  );
};

export default Home;
