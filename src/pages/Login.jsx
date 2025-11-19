import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5000";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Invalid email or password ❌");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-brand-light">
      {/* SECTION WRAPPER */}
      <section className="section-shell pt-28 pb-20 flex justify-center items-start">
        <div
          data-aos="fade-up"
          className="w-full max-w-md card-glass p-8 md:p-10"
        >
          {/* HEADER */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
              Welcome Back
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mt-1">
              Log In to LinkMe
            </h1>
            <p className="text-gray-600 mt-3 text-sm">
              Access your smart digital identity in seconds.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn-primary-clean w-full py-3 text-base rounded-xl shadow-md"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/3 bg-gray-200"></div>
            <p className="mx-3 text-xs text-gray-500">or</p>
            <div className="h-px w-1/3 bg-gray-200"></div>
          </div>

          {/* Extra Options */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-brand-primary font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>

            <Link
              to="/forgot-password"
              className="text-brand-primary/70 hover:underline block mt-2"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
