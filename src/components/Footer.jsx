import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Globe,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0f1d] text-[#c9c9d9] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-3xl font-extrabold text-white">LinkMe</h3>
          <p className="text-sm text-[#9ea0b5] leading-relaxed">
            Smart NFC-powered identity. Share your profile with a single tap.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a className="hover:text-brand-primary transition" href="#">
              <Globe size={18} />
            </a>
            <a className="hover:text-brand-primary transition" href="#">
              <Instagram size={18} />
            </a>
            <a className="hover:text-brand-primary transition" href="#">
              <Twitter size={18} />
            </a>
            <a className="hover:text-brand-primary transition" href="#">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-[#a1a3b8]">
            <li>
              <Link to="/" className="hover:text-brand-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/how" className="hover:text-brand-primary transition">
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className="hover:text-brand-primary transition"
              >
                Create Card
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-brand-primary transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-[#a1a3b8]">
            <li>
              <Phone size={16} className="inline mr-2 text-brand-primary" />
              +962 7X XXX XXXX
            </li>

            <li>
              <Mail size={16} className="inline mr-2 text-brand-primary" />
              support@linkme.io
            </li>

            <li>
              <MapPin size={16} className="inline mr-2 text-brand-primary" />
              Amman, Jordan
            </li>
          </ul>
        </div>

        {/* Mini Photos */}
        <div>
          <h4 className="text-white font-semibold mb-3">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-20 h-20 bg-[#141728] rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="mt-12 pt-6 border-t border-[#1d2133] text-center text-xs text-[#7e8093]">
        © {new Date().getFullYear()} LinkMe. All rights reserved.
      </div>
    </footer>
  );
}
