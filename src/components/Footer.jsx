import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      data-aos="fade-up"
      className="relative bg-gradient-to-b from-[#0b0b0f] via-[#131427] to-[#1b1c34] text-[#e3e2f5] py-16 px-6 md:px-20 overflow-hidden"
    >
      {/* floating glow shapes */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#a79cc7]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#7a86b6]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* main content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo + about */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-4">
            LinkMe
          </h3>
          <p className="text-sm text-[#b9b8cc] leading-relaxed mb-6">
            Simplify your networking. Create, customize, and share your NFC card
            with one tap.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://linkme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a79cc7] transition"
            >
              🌐
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a79cc7] transition"
              
            >
              📸
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a79cc7] transition"
            >
              🐦
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#a79cc7] transition"
            >
              💼
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Company Links</h4>
          <ul className="space-y-2 text-[#b9b8cc] text-sm">
            <li>
              <Link to="/" className="hover:text-[#a79cc7] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#a79cc7] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/how" className="hover:text-[#a79cc7] transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-[#a79cc7] transition">
                Create Card
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#a79cc7] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-[#b9b8cc]">
            <li>
              <span className="text-[#a79cc7]">📞</span> +962 7X XXX XXXX
            </li>
            <li>
              <span className="text-[#a79cc7]">✉️</span> support@linkme.io
            </li>
            <li>
              <span className="text-[#a79cc7]">📍</span> Amman, Jordan
            </li>
          </ul>
        </div>

        {/* Column 4: Instagram grid */}
        <div>
          <h4 className="font-semibold text-white mb-4">Our Moments</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="w-20 h-20 bg-[#23233b] rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="border-t border-[#2a2a35]/60 mt-12 pt-6 text-center text-xs text-[#8888a1]">
        © {new Date().getFullYear()} LinkMe. All rights reserved.
      </div>

      {/* top glowing bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-[#a79cc7]/60 to-transparent"></div>
    </footer>
  );
}
