import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

export default function CheckEmail() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />

      <section className="section-shell pt-28 pb-20 flex justify-center items-start">
        <div
          data-aos="fade-up"
          className="w-full max-w-md card-glass p-8 md:p-10 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="floating-icon text-brand-primary bg-brand-primary/10">
              📩
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-brand-dark mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            We’ve sent you a password reset link. Please check your inbox and
            follow the instructions.
          </p>

          <p className="text-xs text-gray-500 mb-8">
            Didn’t receive it? Check your spam folder.
          </p>

          <Link
            to="/login"
            className="btn-primary-clean w-full block py-3 text-base rounded-xl shadow-md"
          >
            Back to Login
          </Link>
        </div>
      </section>
    </div>
  );
}
