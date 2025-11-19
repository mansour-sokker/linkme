import React from "react";
import { User, LineChart, Edit, Share2, Settings } from "lucide-react";

export default function Sidebar({ active, setActive }) {
  const items = [
    { id: "profile", label: "My Profile", icon: <User size={18} /> },
    { id: "analytics", label: "Analytics", icon: <LineChart size={18} /> },
    { id: "edit", label: "Edit Profile", icon: <Edit size={18} /> },
    { id: "share", label: "Share my Card", icon: <Share2 size={18} /> },
    { id: "settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-xl border-r p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-10">
        LinkMe Dashboard
      </h1>

      <nav className="space-y-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition
              ${
                active === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }
            `}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
