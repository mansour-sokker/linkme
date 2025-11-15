import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();
  const path = location.pathname;

  // Detect Home page
  const isHome = path === "/";

  // Detect dynamic profile: /u/anything
  const isUserProfile = /^\/u\/[^/]+$/.test(path);

  // Pages where layout must be hidden completely
  const hidePages = ["/login", "/signup", "/dashboard"];

  // Final check: hide layout if page is in list OR user profile
  const hideLayout = hidePages.includes(path) || isUserProfile;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] transition-all">

      {/* Navbar conditions */}
      {!hideLayout && <Navbar />}

      {/* Fix content under navbar */}
      <main className={`flex-grow ${!hideLayout ? "pt-20" : ""}`}>
        {children}
      </main>

      {/* CTA for Home only */}
      {!hideLayout && isHome && (
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-20 bg-white dark:bg-[#0f172a] text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#384f7d] dark:text-white mb-6">
            🎯 Ready to build your NFC Card?
          </h2>
          <p className="text-[#4b5b84]/80 dark:text-gray-300 text-lg mb-8">
            Create your personalized NFC card and start sharing your profile instantly.
          </p>
          <a
            href="/create-card"
            className="inline-block bg-[#384f7d] text-white px-8 py-3 rounded-xl font-semibold text-lg hover:scale-110 transition-transform duration-300 shadow-md"
          >
            Create Now
          </a>
        </section>
      )}

      {/* Footer only when layout visible */}
      {!hideLayout && <Footer />}
    </div>
  );
}
