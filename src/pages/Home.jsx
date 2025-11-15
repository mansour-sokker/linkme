import React from "react";
import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  TryLinkMeSection,

} from "../components/home";

export default function Home() {
  return (
    <div
      className="
        min-h-screen 
        bg-calm-gradient 
        dark:bg-gradient-to-b dark:from-[#0a0a0f] dark:via-[#111223] dark:to-[#181a2f] 
        text-sky-navy 
        dark:text-white 
        overflow-hidden
      "
    >
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TryLinkMeSection />
      {/* <TestimonialsSection /> */}
      {/* <CallToActionSection /> */}
    </div>
  );
}
