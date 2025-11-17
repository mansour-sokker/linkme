import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateCard from "./pages/CreateCard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
// import PublicProfile from "./pages/PublicProfile";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Layout>
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-card" element={<CreateCard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/u/:slug" element={<PublicProfile />} /> */}
            <Route path="/u/:slug" element={<Profile />} />
          </Routes>
        </>
      </Layout>
    </Router>
  );
}

export default App;
