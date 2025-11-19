import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";

import Profile from "../components/dashboard/Profile";
import Analytics from "../components/dashboard/Analytics";
import EditProfile from "../components/dashboard/EditProfile";
import ShareCard from "../components/dashboard/ShareCard";
import Settings from "../components/dashboard/Settings";

export default function Dashboard() {
  const [active, setActive] = useState("profile");

  const renderContent = () => {
    switch (active) {
      case "profile":
        return <Profile />;
      case "analytics":
        return <Analytics />;
      case "edit":
        return <EditProfile />;
      case "share":
        return <ShareCard />;
      case "settings":
        return <Settings />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
}
