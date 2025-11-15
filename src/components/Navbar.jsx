import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  /* -------------------- Load Theme ---------------------- */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* -------------------- Auto Close Drawer on Resize ---------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsMenuOpen(false);
        setIsClosing(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* -------------------- Hide Navbar on Scroll ---------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrollY(current);

      if (current > lastScrollY && current > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* -------------------- Drawer Close Animation ---------------------- */
  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  /* -------------------- Scroll To Section ---------------------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleHowItWorksClick = () => {
    if (location.pathname !== "/") {
      navigate("/?scroll=how-it-works");
    } else {
      scrollToSection("how-it-works");
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[100]
        backdrop-blur-xl transition-all duration-500
        ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        ${
          scrollY > 80
            ? darkMode
              ? "bg-sky-navy/90 shadow-xl"
              : "bg-white shadow-lg"
            : "bg-transparent shadow-none"
        }
      `}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo-light.png" className="block dark:hidden w-20" alt="logo" />
          <img src="/images/logo-dark.png" className="hidden dark:block w-20" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/create-card">Create Card</Link></li>
          <li><button onClick={handleHowItWorksClick} className="nav-link">How It Works</button></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle border px-3 py-2 rounded-xl"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-sky-navy" />
            )}
          </button>

          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleDarkMode} className="theme-toggle border px-3 py-2 rounded-xl">
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl dark:text-white text-sky-navy"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* -------------------- Drawer -------------------- */}
      {isMenuOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            onClick={handleCloseMenu}
          ></div>

          {/* Drawer Panel */}
          <div
            className={`
              fixed top-0 right-0 min-h-screen w-72 sm:w-80
              flex flex-col gap-8 px-8 pt-20 pb-10
              transition-transform duration-300 shadow-2xl
              bg-white dark:bg-[#0d0f12]
              text-sky-navy dark:text-white
              ${isClosing ? "translate-x-full" : "translate-x-0"}
              z-[9999]
            `}
          >

            {/* Logo inside drawer */}
            <div className="flex justify-center mb-6">
              <img
                src="/images/logo-light.png"
                className="block dark:hidden w-24"
                alt="logo"
              />
              <img
                src="/images/logo-dark.png"
                className="hidden dark:block w-24"
                alt="logo"
              />
            </div>

            <Link to="/" onClick={handleCloseMenu} className="drawer-item">Home</Link>
            <Link to="/create-card" onClick={handleCloseMenu} className="drawer-item">Create Card</Link>

            <button
              onClick={() => {
                handleHowItWorksClick();
                handleCloseMenu();
              }}
              className="drawer-item text-left"
            >
              How It Works
            </button>

            <Link to="/about" onClick={handleCloseMenu} className="drawer-item">About Us</Link>
            <Link to="/contact" onClick={handleCloseMenu} className="drawer-item">Contact</Link>

            {/* Drawer Buttons */}
            <div className="w-full flex flex-col mt-4 gap-3">
              <Link
                to="/login"
                onClick={handleCloseMenu}
                className="py-3 w-full rounded-xl border text-center font-medium
                  border-sky-navy/30 dark:border-white/20
                "
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={handleCloseMenu}
                className="py-3 w-full rounded-xl text-center font-semibold
                  bg-sky-navy text-white
                  dark:bg-white dark:text-black
                "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
