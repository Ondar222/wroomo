import React from "react";
import Hero from "../home/Hero";
import PopularVehicles from "../home/PopularVehicles";
import LocationSection from "../home/LocationSection";
import HowItWorks from "../home/HowItWorks";
import Testimonials from "../home/Testimonials";
import AppDownload from "../home/AppDownload";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularVehicles />
      <LocationSection />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
    </>
  );
};

export default HomePage;
