import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Hero from "./components/home/Hero";
import PopularVehicles from "./components/home/PopularVehicles";
import LocationSection from "./components/home/LocationSection";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import AppDownload from "./components/home/AppDownload";

function App() {
  return (
    <MainLayout>
      <Hero />
      <PopularVehicles />
      <LocationSection />
      <HowItWorks />
      <Testimonials />
      <AppDownload />
    </MainLayout>
  );
}

export default App;
