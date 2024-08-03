import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Marquee from "./Components/Marquee";
import CollectionSection from "./Components/CollectionSection";
import BenefitSection from "./Components/BenefitSection";
import Testimonial from "./Components/Testimonial";

function page() {
  return (
    
    <main className="w-full h-[400vh]">
      <Marquee/>
      <Navbar />
      <HeroSection/>
      <CollectionSection/>
      <BenefitSection/>
      <Testimonial/>

      

    </main>
  );
}

export default page;
