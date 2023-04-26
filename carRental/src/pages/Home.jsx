import React from 'react';
import { Hero, Booking, HowItWork, RentalFleet, BannerSection, WhyChooseUs } from '../component';


const Home = () => {
  return (
    <div>
        <Hero />
        <Booking/>
        <HowItWork/>
        <RentalFleet/>
        <BannerSection/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home;