import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhatIs from "../components/home/WhatIs";
import HowItWorks from "../components/home/HowItWorks";
import Navbar from "../components/Navbar";

import WhyChoose from "../components/home/WhyChoose";

import FinalCTA from "../components/home/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="dark:bg-brand-dark bg-white">
      <HeroSection />
      <WhatIs />
      <HowItWorks />
      <WhyChoose />
      <FinalCTA />
    </div>
  );
}
