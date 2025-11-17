import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-brand-gradient text-white flex items-center overflow-hidden">
      <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Your Business Card Just Got{" "}
            <span className="text-brand-accent">Smarter</span>.
          </h1>

          <p className="text-lg text-gray-300 max-w-md">
            Dot LinkMe helps you share your identity instantly...
          </p>

          <ul className="text-gray-300 space-y-2 ml-1">
            <li>⚡ Smart NFC Technology</li>
            <li>📊 Real-Time Analytics Dashboard</li>
            <li>🎨 Fully Customizable Digital Profile</li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-4">
            <a className="btn-accent flex items-center gap-2">
              Get Your Smart Card
            </a>
            <a className="btn-ghost">See Example Profile</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative animate-slideInRight first">
          <img
            src="/images/hand-nfc.png"
            alt="Mockup"
            className="w-[360px] md:w-[460px] relative -bottom-24 md:-bottom-32 drop-shadow-2xl"
          />

          {/* glow */}
          <div className="absolute -z-10 blur-3xl opacity-40 bg-brand-primary w-[300px] h-[300px] rounded-full bottom-0"></div>
        </div>
      </div>
    </section>
  );
}
