import React from "react";
import { Link } from "react-router-dom";

export default function TryLinkMeSection() {
  return (
    <section
      data-aos="fade-up"
      className="
        relative py-24 px-6 md:px-16 
        bg-white dark:bg-[#0f172a] 
        text-center overflow-hidden 
        transition-all
      "
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#384f7d] dark:text-white mb-4">
        Try <span className="text-[#a79cc7] dark:text-[#cbb6df]">LinkMe</span> in Action
      </h2>

      <p className="text-[#384f7d]/70 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-16">
        See how a single tap connects you instantly — no apps, no friction.
      </p>

      {/* Card Demo */}
      <div className="relative mx-auto w-80 md:w-[420px] group">
        {/* glowing background */}
        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr 
            from-[#a79cc7]/20 via-[#c1b0d9]/30 to-[#7a86b6]/20 
            blur-2xl opacity-90 group-hover:opacity-100 
            transition-all duration-500">
        </div>

        {/* NFC Card image */}
        <img
          src="https://picsum.photos/420/260"
          alt="Demo NFC Card"
          className="
            relative w-full rounded-3xl shadow-2xl 
            transform transition-all duration-700 
            group-hover:scale-105 group-hover:-translate-y-2
          "
        />

        {/* Tap effect */}
        <div className="
          absolute inset-0 flex justify-center items-center 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        ">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br 
              from-[#a79cc7]/50 to-[#7a86b6]/40 
              blur-md animate-ping">
          </div>

          <div className="absolute text-[#384f7d]/80 dark:text-white text-lg font-semibold">
            Tap ✨
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <Link
          to="/create-card"
          className="
            inline-block bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] 
            text-white px-8 py-3 rounded-2xl font-semibold text-lg 
            shadow-md hover:shadow-xl hover:scale-105 
            transition-transform duration-300
          "
        >
          Create Your NFC Card
        </Link>
      </div>
    </section>
  );
}
