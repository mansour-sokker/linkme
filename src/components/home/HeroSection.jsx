import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [counter, setCounter] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = ["Share Smart.", "Connect Instantly.", "Be Remembered."];

  // Counter animation
  useEffect(() => {
    const target = 120;
    const increment = 2;
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + increment;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Tagline rotation
  // Tagline rotation
useEffect(() => {
  const interval = setInterval(() => {
    setTaglineIndex((prev) => (prev + 1) % taglines.length);
  }, 2000);

  return () => clearInterval(interval);
}, [taglines.length]);

  return (
    <section
      data-aos="fade-up"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 lg:py-24 overflow-hidden"
    >
      {/* Floating decor */}
      <div className="absolute -left-20 top-10 w-44 h-44 rounded-full bg-frost-lilac/30 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute left-10 bottom-12 w-32 h-32 rounded-full bg-soft-blue/25 blur-2xl animate-blob animation-delay-4000"></div>

      {/* LEFT */}
      <div className="md:w-1/2 z-20 text-center md:text-left">
        <h2 className="text-base text-soft-blue font-semibold mb-3">
          Introducing
        </h2>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Your Digital Identity,
          <br />
          <span className="text-sky-navy/90">One Tap Away</span>
        </h1>

        <p className="text-base md:text-lg text-sky-navy/75 mb-8 max-w-xl">
          Build your custom NFC card, link your socials, and share your profile
          with one tap or QR scan. Designed for creators, professionals, and
          innovators like <span className="font-semibold">you</span>.
        </p>

        {/* Animated tagline */}
        <div className="h-6 mt-2 mb-4 text-soft-blue font-semibold text-lg transition-all duration-700">
          {taglines[taglineIndex]}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <Link
            to="/create-card"
            className="inline-flex items-center justify-center gap-3 bg-sky-navy text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition"
          >
            Create Your Card
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l6 7-6 7" />
            </svg>
          </Link>

          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-sky-navy px-6 py-3 rounded-2xl font-semibold hover:bg-sky-navy hover:text-white transition"
          >
            Learn how it works
          </Link>
        </div>

        {/* Scrolling badges */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-8 whitespace-nowrap animate-marquee text-sky-navy/70 text-sm font-medium">
            <span>⚡ Tap to Share</span>
            <span>🔒 Secure & Encrypted</span>
            <span>🎨 Custom Designs</span>
            <span>📊 Analytics Dashboard</span>
            <span>💼 Perfect for Businesses</span>
            <span>🌐 Works on iOS & Android</span>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 justify-center md:justify-start">
          <div className="text-4xl font-extrabold text-soft-blue counter">
            +{counter}
          </div>
          <div className="text-sky-navy/70">
            Cards Created <br /> and Growing Daily 🚀
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 relative z-20 flex justify-center md:justify-end">
        <div className="relative group">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-soft-blue/20 via-frost-lilac/30 to-cloudy-lilac/10 blur-3xl opacity-90 pulse-glow"></div>

          <img
            src="https://picsum.photos/420/300"
            alt="NFC card mockup"
            className="relative w-72 md:w-[420px] rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
          />
        </div>
      </div>
    </section>
  );
}
