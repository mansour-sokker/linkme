import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateCard from "./pages/CreateCard";
import ScrollToTop from "./components/ScrollToTop";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
