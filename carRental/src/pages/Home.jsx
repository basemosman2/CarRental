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
      <Booking />
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
