import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-300
        ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-[22px] font-extrabold tracking-tight flex items-center gap-1"
        >
          <span className="text-gray-900">Dot</span>
          <span className="text-brand-primary">LinkMe</span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium text-gray-700">
          <li>
            <Link className="nav-link-pro" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link-pro" to="/create-card">
              Create Card
            </Link>
          </li>
          <li>
            <button
              className="nav-link-pro"
              onClick={() => {
                const section = document.getElementById("how-it-works");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How It Works
            </button>
          </li>
          <li>
            <Link className="nav-link-pro" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-link-pro" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="btn-ghost-clean">
            Login
          </Link>
          <Link to="/signup" className="btn-primary-clean">
            Sign Up
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden text-[28px] text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isMenuOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* drawer */}
          <div
            className="
            fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-[1000]
            flex flex-col gap-6 px-7 pt-20 pb-10
            transition-transform duration-300 translate-x-0
          "
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[28px] absolute top-5 right-6 text-gray-700"
            >
              ✕
            </button>

            <Link
              className="drawer-link-pro"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="drawer-link-pro"
              to="/create-card"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Card
            </Link>

            <button
              className="drawer-link-pro text-left"
              onClick={() => {
                const section = document.getElementById("how-it-works");
                if (section) section.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              How It Works
            </button>

            <Link
              className="drawer-link-pro"
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="drawer-link-pro"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-6 flex flex-col gap-3">
              <Link className="btn-ghost-clean text-center" to="/login">
                Login
              </Link>
              <Link className="btn-primary-clean text-center" to="/signup">
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
