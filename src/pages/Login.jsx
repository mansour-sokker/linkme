import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";

// 🔥 رابط الباك إند للاختبار المحلي
const API_URL = "http://localhost:5000";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
        alert(data.message || "Login failed ❌");
        return;
      }

      // تخزين البيانات
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful ✅");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f4fb] via-[#e9e6f8] to-[#d9d7f2] dark:from-[#343466] dark:via-[#5d5d97] dark:to-[#111118] transition">

      <Navbar />

      <div className="flex items-center justify-center px-6 pt-40 pb-10">
        <div
          data-aos="fade-up"
          className="bg-white/80 dark:bg-[#1b1b24]/90 backdrop-blur-xl shadow-2xl rounded-3xl w-full max-w-md p-10 border border-[#a79cc7]/30 dark:border-gray-700/30"
        >
          <h2 className="text-3xl font-extrabold text-center text-[#384f7d] dark:text-white mb-6">
            Welcome Back 👋
          </h2>

          <p className="text-center text-[#384f7d]/70 dark:text-gray-300 mb-8 text-sm">
            Log in to access your LinkMe dashboard
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-[#384f7d]/80 dark:text-gray-300 text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 dark:border-gray-600 bg-white dark:bg-[#6a6a97] text-black dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-[#384f7d]/80 dark:text-gray-300 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 dark:border-gray-600 bg-white dark:bg-[#474786] text-black dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] dark:from-[#433b95] dark:to-[#5d55c4] text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-[#384f7d]/70 dark:text-gray-300">
            <p>
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#7a86b6] font-medium hover:underline">
                Sign Up
              </Link>
            </p>

            <Link to="/forgot-password" className="text-[#a79cc7] dark:text-[#847ce6] block mt-2 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
