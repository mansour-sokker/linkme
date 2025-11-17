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

      {/* Footer only when layout visible */}
      {!hideLayout && <Footer />}
    </div>
  );
}
