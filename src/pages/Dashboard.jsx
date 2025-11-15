import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Eye,
  Smartphone,
  Clock,
  TrendingUp,
  HeartPulse,
  CreditCard,
  ExternalLink,
  Camera,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [avatarFile, setAvatarFile] = useState(null);

  // 🔥 رابط الباك إند المحلي أثناء التطوير
  const API_URL = "http://localhost:5000";

  // scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // fetch user on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token || !userId) return;

    axios
      .get(`${API_URL}/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const u = res.data;
        setUser(u);
        setUpdatedUser({
          name: u.name || u.fullname || "",
          role: u.role || u.jobTitle || "",
        });
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        if (err.response?.status === 401) {
          localStorage.clear();
          window.location.href = "/login";
        }
      });
  }, []);

  // update handler
  const handleUpdate = async () => {
    if (!user) return;
    try {
      const formData = new FormData();
      formData.append("name", updatedUser.name);
      formData.append("role", updatedUser.role);
      if (avatarFile) formData.append("avatar", avatarFile);

      const token = localStorage.getItem("token");

      const res = await axios.put(
        `${API_URL}/api/users/update/${user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
      setEditMode(false);
      setAvatarFile(null);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Update failed. See console for details.");
    }
  };

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen text-xl text-gray-500">
        Loading dashboard...
      </div>
    );

  const stats = [
    { icon: <Eye />, label: "Total Scans", value: user.stats?.totalScans || 0 },
    { icon: <Smartphone />, label: "Unique Devices", value: user.stats?.uniqueDevices || 0 },
    { icon: <Clock />, label: "Avg Tap Speed", value: user.stats?.avgTapSpeed || "0s" },
    { icon: <TrendingUp />, label: "Tap Success Rate", value: `${user.stats?.tapSuccessRate || 0}%` },
  ];

  const deviceData = [
    { name: "iPhone", value: 45, color: "#7487B0" },
    { name: "Android", value: 38, color: "#A6A3C2" },
    { name: "Other", value: 17, color: "#C3AED6" },
  ];

  const hourData = [
    { hour: "8 AM", scans: 30 },
    { hour: "10 AM", scans: 70 },
    { hour: "12 PM", scans: 95 },
    { hour: "2 PM", scans: 120 },
    { hour: "4 PM", scans: 150 },
    { hour: "6 PM", scans: 180 },
    { hour: "8 PM", scans: 130 },
  ];

  const linkClicks = [
    { name: "LinkedIn", clicks: 220 },
    { name: "WhatsApp", clicks: 180 },
    { name: "Instagram", clicks: 140 },
    { name: "Portfolio", clicks: 100 },
  ];

  return (
    <div className="min-h-screen bg-calm-gradient text-sky-navy font-sans">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/80 border-b border-frost-lilac/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-soft-blue" />
            <h1 className="text-2xl font-bold tracking-tight">LinkMe Dashboard</h1>
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="bg-sky-navy text-white px-5 py-2 rounded-xl font-semibold hover:bg-soft-blue transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* PROFILE HEADER */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-frost-lilac/30 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={
                  user.avatar
                    ? `${API_URL}${user.avatar}`
                    : user.profileImage || user.image || "https://i.pravatar.cc/120"
                }
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-soft-blue/40 shadow-lg object-cover"
              />
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-soft-blue text-white rounded-full p-2 cursor-pointer">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                  />
                </label>
              )}
            </div>

            <div>
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={updatedUser.name}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
                    className="text-3xl font-semibold border-b border-gray-300 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={updatedUser.role}
                    onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })}
                    className="text-soft-blue text-lg border-b border-gray-300 focus:outline-none"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-semibold">{user.name || user.fullname}</h2>
                  <p className="text-soft-blue text-lg">{user.role || user.jobTitle}</p>
                </>
              )}
              <div className="flex items-center gap-2 text-sm mt-1">
                <HeartPulse className="w-4 h-4 text-green-500" />
                <span>Active now</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href={`/u/${user._id}`}
              className="flex items-center gap-2 bg-gradient-to-r from-soft-blue to-frost-lilac text-white px-5 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              View My Public Profile <ExternalLink className="w-4 h-4" />
            </a>
            {editMode ? (
              <button onClick={handleUpdate} className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700">
                Save
              </button>
            ) : (
              <button onClick={() => setEditMode(true)} className="bg-soft-blue text-white px-5 py-3 rounded-lg font-semibold hover:bg-sky-navy/80">
                Edit
              </button>
            )}
          </div>
        </div>
      </section>

      {/* STAT CARDS */}
      <section className="max-w-6xl mx-auto px-6 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white/80 border border-frost-lilac/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-md text-center"
          >
            <div className="mx-auto mb-4 w-10 h-10 flex items-center justify-center rounded-full bg-soft-blue text-white">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-sky-navy mb-1">{stat.value}</div>
            <p className="text-soft-blue font-medium">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 mb-20 bg-white/80 border border-frost-lilac/30 rounded-3xl shadow-lg backdrop-blur-md p-8">
        <div className="flex gap-3 flex-wrap mb-10">
          {["overview", "devices", "links"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-sky-navy text-white shadow-md"
                  : "bg-frost-lilac/30 text-sky-navy hover:bg-soft-blue/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={hourData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="hour" stroke="#7487B0" />
              <YAxis stroke="#7487B0" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="scans"
                stroke="#7487B0"
                strokeWidth={3}
                dot={{ r: 5, fill: "#A6A3C2" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        {activeTab === "devices" && (
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={110}
                dataKey="value"
              >
                {deviceData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}

        {activeTab === "links" && (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={linkClicks}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#7487B0" />
              <YAxis stroke="#7487B0" />
              <Tooltip />
              <Bar dataKey="clicks" fill="#A6A3C2" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-soft-blue text-sm border-t border-frost-lilac/30">
        <p>© {new Date().getFullYear()} LinkMe. All rights reserved.</p>
      </footer>
    </div>
  );
}
