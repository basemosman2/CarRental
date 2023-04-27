import React from 'react';
import { Hero, Booking, HowItWork, RentalFleet, BannerSection, WhyChooseUs, Testimonials } from '../component';


const Home = () => {
  return (
    <div>
        <Hero />
        <Booking/>
        <HowItWork/>
        <RentalFleet/>
        <BannerSection/>
        <WhyChooseUs/>
        <Testimonials/>
    </div>
  )
}

export default Home;