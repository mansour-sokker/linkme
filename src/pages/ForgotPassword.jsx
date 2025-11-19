import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5000";

export default function ForgotPassword() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong ❌");
        return;
      }

      alert("Password reset link sent! Please check your inbox 📩");
    } catch (error) {
      console.error(error);
      alert("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-light">
      {/* WRAPPER */}
      <section className="section-shell pt-28 pb-20 flex justify-center items-start">
        <div
          data-aos="fade-up"
          className="w-full max-w-md card-glass p-8 md:p-10"
        >
          {/* HEADER */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
              Reset Password
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-1">
              Forgot Your Password?
            </h1>
            <p className="text-gray-600 mt-3 text-sm">
              Don’t worry — we’ll send you a link to reset it.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-primary-clean w-full py-3 text-base rounded-xl shadow-md"
            >
              Send Reset Link
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/3 bg-gray-200"></div>
            <p className="mx-3 text-xs text-gray-500">or</p>
            <div className="h-px w-1/3 bg-gray-200"></div>
          </div>

          {/* Bottom Links */}
          <div className="text-center text-sm text-gray-600">
            <Link
              to="/login"
              className="text-brand-primary font-medium hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
