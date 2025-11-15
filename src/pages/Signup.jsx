import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";

// 🔥 رابط الباك إند للاختبار المحلي
const API_URL = "http://localhost:5000";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed ❌");
        return;
      }

      // حفظ معلومات المستخدم
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Account created successfully ✅");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f4fb] via-[#e9e6f8] to-[#d9d7f2] dark:from-[#4a4a79] dark:via-[#434378] dark:to-[#111118] transition">

      <Navbar />

      <div className="flex items-center justify-center px-6 pt-40 pb-10">
        <div
          data-aos="fade-up"
          className="bg-white/90 dark:bg-[#1b1b24]/90 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-md p-10 border border-[#a79cc7]/30 dark:border-gray-700/30"
        >
          <h2 className="text-3xl font-extrabold text-center text-[#384f7d] dark:text-white mb-6">
            Create Your Account 🚀
          </h2>

          <p className="text-center text-[#384f7d]/70 dark:text-gray-300 mb-8 text-sm">
            Start building your smart LinkMe profile today.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block text-[#384f7d]/80 dark:text-gray-300 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 dark:border-gray-600 bg-white dark:bg-[#3f3f5d] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a79cc7]/40"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#384f7d]/80 dark:text-gray-300 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 dark:border-gray-600 bg-white dark:bg-[#646482] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a79cc7]/40"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[#384f7d]/80 dark:text-gray-300 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 dark:border-gray-600 bg-white dark:bg-[#6d6d97] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#a79cc7]/40"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#7a86b6] to-[#988cbb] dark:from-[#514c88] dark:to-[#7b74d4] text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-[#384f7d]/70 dark:text-gray-300">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-[#737fad] font-medium hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
