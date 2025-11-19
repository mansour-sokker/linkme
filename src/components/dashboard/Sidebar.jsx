import React from "react";
import { User, LineChart, Edit, Share2, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
export default function Sidebar({ active, setActive }) {
  const items = [
    { id: "profile", label: "My Profile", icon: <User size={18} /> },
    { id: "analytics", label: "Analytics", icon: <LineChart size={18} /> },
    { id: "edit", label: "Edit Profile", icon: <Edit size={18} /> },
    { id: "share", label: "Share my Card", icon: <Share2 size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-xl border-r p-6 flex flex-col justify-between min-h-screen">
      {/* TOP SECTION */}
      <div>
        {/* Logo / App Name */}
        {/* LOGO */}
        <Link
          to="/"
          className="text-[22px] font-extrabold tracking-tight flex items-center gap-1"
        >
          <span className="text-gray-900">Dot</span>
          <span className="text-brand-primary">LinkMe</span>
        </Link>

        {/* Menu */}
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3  rounded-lg 
                transition font-medium
                ${
                  active === item.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="border-t pt-4">
        <button
          onClick={() => console.log("logout")}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition font-medium w-full"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
