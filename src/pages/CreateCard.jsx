// src/pages/CreateCard.jsx (or wherever it lives)
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import Navbar from "../components/Navbar";

async function createProfile(profileData) {
  const response = await fetch("http://localhost:5000/api/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });
  return response;
}

export default function CreateCard() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // ---------------- PROFILE TYPE ----------------
  const [profileType, setProfileType] = useState("personal"); // personal | business

  // ---------------- PERSONAL ----------------
  const [personalName, setPersonalName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalBio, setPersonalBio] = useState("");
  const [personalColor, setPersonalColor] = useState("#0066FF");
  const [personalImage, setPersonalImage] = useState(null);
  const [personalDesignMode, setPersonalDesignMode] = useState("manual");
  const [personalAiPrompt, setPersonalAiPrompt] = useState("");
  const [personalAiBackground, setPersonalAiBackground] = useState(null);

  // ---------------- BUSINESS ----------------
  const [businessName, setBusinessName] = useState("");
  const [businessTitle, setBusinessTitle] = useState("");
  const [businessBio, setBusinessBio] = useState("");
  const [businessColor, setBusinessColor] = useState("#16213E");
  const [businessLogo, setBusinessLogo] = useState(null);
  const [businessDesignMode, setBusinessDesignMode] = useState("manual");
  const [businessAiPrompt, setBusinessAiPrompt] = useState("");
  const [businessAiBackground, setBusinessAiBackground] = useState(null);

  // ---------------- SOCIAL LINKS (SHARED) ----------------
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    linkedin: "",
    instagram: "",
    twitter: "",
    github: "",
    whatsapp: "",
    email: "",
    phone: "",
  });

  // ---------------- TEMPLATE ----------------
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const templates = [
    { id: "modern", name: "Modern", preview: "Clean & professional" },
    { id: "gradient", name: "Gradient", preview: "Soft blue gradient" },
    { id: "glass", name: "Glassmorphism", preview: "Frosted card" },
    { id: "dark", name: "Dark Mode", preview: "Night style" },
  ];

  // ---------------- HANDLERS ----------------
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (profileType === "personal") {
      setPersonalImage(url);
    } else {
      setBusinessLogo(url);
    }
  };

  const handleGenerateAI = () => {
    // demo backgrounds (placeholders for now)
    const demoImages = [
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80",
    ];

    const chosen = demoImages[Math.floor(Math.random() * demoImages.length)];

    if (profileType === "personal") {
      setPersonalAiBackground(chosen);
    } else {
      setBusinessAiBackground(chosen);
    }
  };

  async function handleCreateProfile(e) {
    e.preventDefault();

    const currentData =
      profileType === "personal"
        ? {
            name: personalName,
            title: personalTitle,
            bio: personalBio,
            avatarUrl: personalImage,
            color: personalColor,
            designMode: personalDesignMode,
            aiBackground: personalAiBackground,
          }
        : {
            name: businessName,
            title: businessTitle,
            bio: businessBio,
            avatarUrl: businessLogo,
            color: businessColor,
            designMode: businessDesignMode,
            aiBackground: businessAiBackground,
          };

    if (!currentData.name || !currentData.name.trim()) {
      alert("Name is required");
      return;
    }

    try {
      const res = await createProfile({
        ...currentData,
        profileType,
        socialLinks,
        template: selectedTemplate,
      });

      if (!res.ok) {
        alert("Error creating profile. Please try again.");
        return;
      }

      const data = await res.json();
      alert(
        `${
          profileType === "personal" ? "Personal" : "Business"
        } profile created successfully! 🎉\nYour link: ${data.profileUrl}`
      );
      navigate(`/u/${data.slug}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  }

  // ---------------- CURRENT PROFILE (FOR FORM + PREVIEW) ----------------
  const currentProfile =
    profileType === "personal"
      ? {
          name: personalName,
          title: personalTitle,
          bio: personalBio,
          color: personalColor,
          image: personalImage,
          designMode: personalDesignMode,
          aiPrompt: personalAiPrompt,
          aiBackground: personalAiBackground,
          setName: setPersonalName,
          setTitle: setPersonalTitle,
          setBio: setPersonalBio,
          setColor: setPersonalColor,
          setDesignMode: setPersonalDesignMode,
          setAiPrompt: setPersonalAiPrompt,
        }
      : {
          name: businessName,
          title: businessTitle,
          bio: businessBio,
          color: businessColor,
          image: businessLogo,
          designMode: businessDesignMode,
          aiPrompt: businessAiPrompt,
          aiBackground: businessAiBackground,
          setName: setBusinessName,
          setTitle: setBusinessTitle,
          setBio: setBusinessBio,
          setColor: setBusinessColor,
          setDesignMode: setBusinessDesignMode,
          setAiPrompt: setBusinessAiPrompt,
        };

  const profileUrl =
    currentProfile.name && currentProfile.name.trim().length > 0
      ? `https://linkme.io/${currentProfile.name
          .replace(/\s+/g, "")
          .toLowerCase()}`
      : "https://linkme.io/your-smart-identity";

  // ======================================================================
  //                                 UI
  // ======================================================================
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Top Hero / Intro */}
      <Navbar />
      <section className="section-shell pt-28 pb-10">
        <div
          className="grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center"
          data-aos="fade-up"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium text-brand-primary uppercase tracking-wide">
              Create Card
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark leading-tight">
              Build Your{" "}
              <span className="text-brand-primary">Smart Identity</span> in
              seconds.
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-xl">
              Design a personal or business NFC card, add your links, and get
              your unique smart link & QR code instantly. Perfect for events,
              networking, and everyday sharing.
            </p>

            {/* Steps */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="card-glass px-4 py-3 flex items-center gap-3">
                <div className="floating-icon text-brand-primary bg-brand-primary/5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">
                    Choose profile type
                  </p>
                  <p className="text-xs text-gray-500">
                    Personal or business – or both.
                  </p>
                </div>
              </div>
              <div className="card-glass px-4 py-3 flex items-center gap-3">
                <div className="floating-icon text-brand-primary bg-brand-primary/5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">
                    Add your details
                  </p>
                  <p className="text-xs text-gray-500">
                    Name, title, links & branding.
                  </p>
                </div>
              </div>
              <div className="card-glass px-4 py-3 flex items-center gap-3">
                <div className="floating-icon text-brand-primary bg-brand-primary/5">
                  3
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">
                    Generate card & QR
                  </p>
                  <p className="text-xs text-gray-500">
                    Share it, or print on NFC card.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Small summary card on the right */}
          <div
            className="card-glass p-6 md:p-7 lg:p-8"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-lg font-semibold text-brand-dark mb-2">
              One link. One tap. One identity.
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your card will generate:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Unique smart link (for your NFC & QR)</li>
              <li>• Digital profile page that matches LinkMe brand</li>
              <li>• QR code ready for printing or sharing</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              You can edit your information later from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Main Create Card Section */}
      <section className="section-shell pb-20">
        {/* Type Switch */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-10"
          data-aos="fade-up"
        >
          <button
            type="button"
            onClick={() => setProfileType("personal")}
            className={`btn-ghost-clean px-8 py-3 rounded-2xl text-sm md:text-base ${
              profileType === "personal"
                ? "bg-brand-primary text-white border-brand-primary shadow-md"
                : ""
            }`}
          >
            👤 Personal Profile
          </button>
          <button
            type="button"
            onClick={() => setProfileType("business")}
            className={`btn-ghost-clean px-8 py-3 rounded-2xl text-sm md:text-base ${
              profileType === "business"
                ? "bg-brand-primary text-white border-brand-primary shadow-md"
                : ""
            }`}
          >
            💼 Business Profile
          </button>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)] items-start">
          {/* LEFT – FORM */}
          <form
            onSubmit={handleCreateProfile}
            className="card-glass p-6 md:p-8 space-y-6"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-brand-dark">
                {profileType === "personal"
                  ? "Personal Information"
                  : "Business Information"}
              </h2>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-primary/5 text-brand-primary">
                Live preview on the right →
              </span>
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {profileType === "personal" ? "Full Name" : "Company Name"}
              </label>
              <input
                type="text"
                value={currentProfile.name}
                onChange={(e) => currentProfile.setName(e.target.value)}
                placeholder={
                  profileType === "personal"
                    ? "Hala Al-Issawi"
                    : "Dot LinkMe Solutions"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {profileType === "personal"
                  ? "Title / Role"
                  : "Industry / Category"}
              </label>
              <input
                type="text"
                value={currentProfile.title}
                onChange={(e) => currentProfile.setTitle(e.target.value)}
                placeholder={
                  profileType === "personal"
                    ? "QA Engineer – NFC Systems"
                    : "Smart NFC & Digital Identity"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {profileType === "personal" ? "Short Bio" : "Description"}
              </label>
              <textarea
                rows={3}
                value={currentProfile.bio}
                onChange={(e) => currentProfile.setBio(e.target.value)}
                placeholder={
                  profileType === "personal"
                    ? "Passionate about building clean, smart, and user-friendly systems."
                    : "We help you turn your physical card into a smart NFC-powered identity."
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
              />
            </div>

            {/* Image / Logo */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                {profileType === "personal" ? "Profile Image" : "Company Logo"}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full text-sm"
              />
              <p className="text-xs text-gray-500">
                Recommended: square image (1:1) for best preview.
              </p>
            </div>

            {/* Templates */}
            <div className="space-y-2 pt-2">
              <label className="text-sm font-medium text-gray-700">
                Card Template
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`border rounded-xl px-3 py-2 text-left text-xs hover:border-brand-primary/60 transition ${
                      selectedTemplate === t.id
                        ? "border-brand-primary bg-brand-primary/5"
                        : "border-gray-200"
                    }`}
                  >
                    <p className="font-semibold text-[13px] text-brand-dark">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-gray-500">{t.preview}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Design mode */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-medium text-gray-700">
                Design Mode
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => currentProfile.setDesignMode("manual")}
                  className={`btn-ghost-clean flex-1 min-w-[130px] ${
                    currentProfile.designMode === "manual"
                      ? "bg-brand-primary text-white border-brand-primary"
                      : ""
                  }`}
                >
                  🎨 Manual
                </button>
                <button
                  type="button"
                  onClick={() => currentProfile.setDesignMode("ai")}
                  className={`btn-ghost-clean flex-1 min-w-[130px] ${
                    currentProfile.designMode === "ai"
                      ? "bg-brand-primary text-white border-brand-primary"
                      : ""
                  }`}
                >
                  ✨ AI-Assisted
                </button>
              </div>

              {currentProfile.designMode === "manual" && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={currentProfile.color}
                      onChange={(e) => currentProfile.setColor(e.target.value)}
                      className="w-12 h-8 rounded-md border border-gray-300 cursor-pointer"
                    />
                    <span className="text-xs text-gray-600">
                      Main accent color
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500">
                    Use your brand color or keep LinkMe blue.
                  </span>
                </div>
              )}

              {currentProfile.designMode === "ai" && (
                <div className="rounded-xl bg-brand-primary/5 border border-brand-primary/20 p-3 space-y-2">
                  <input
                    type="text"
                    value={currentProfile.aiPrompt}
                    onChange={(e) => currentProfile.setAiPrompt(e.target.value)}
                    placeholder="e.g. Soft blue gradient with subtle glow"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/40 bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleGenerateAI}
                    className="btn-primary-clean w-full py-2 text-sm"
                  >
                    🔮 Preview AI background
                  </button>
                  <p className="text-[11px] text-gray-500">
                    For now this uses demo backgrounds to simulate AI design.
                  </p>
                </div>
              )}
            </div>

            {/* Social & Contact */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-brand-dark">
                  Social Links & Contact
                </h3>
                <span className="text-[11px] text-gray-500">
                  Optional, but recommended for better networking.
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(socialLinks).map(([platform, value]) => (
                  <div key={platform} className="space-y-1">
                    <label className="text-[11px] font-medium text-gray-600 capitalize">
                      {platform === "whatsapp" ? "WhatsApp" : platform}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleSocialLinkChange(platform, e.target.value)
                      }
                      placeholder={
                        platform === "email"
                          ? "hello@example.com"
                          : platform === "phone"
                          ? "+962 7X XXX XXXX"
                          : `Your ${platform} link`
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                className="btn-primary-clean w-full py-3 text-base"
              >
                🚀 Generate my{" "}
                {profileType === "personal" ? "Personal" : "Business"} Card
              </button>
              <button
                type="button"
                onClick={() =>
                  setProfileType(
                    profileType === "personal" ? "business" : "personal"
                  )
                }
                className="btn-ghost-clean w-full py-3 text-base"
              >
                ➕ Also create{" "}
                {profileType === "personal" ? "Business" : "Personal"} profile
              </button>
            </div>
          </form>

          {/* RIGHT – LIVE PREVIEW */}
          <div className="space-y-6 lg:sticky lg:top-28" data-aos="fade-left">
            <div className="card-glass p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                    Live Preview
                  </p>
                  <p className="text-sm text-gray-500">
                    This is how your Dot LinkMe card will look.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-primary/5 text-[11px] font-medium text-brand-primary">
                  {profileType === "personal" ? "Personal" : "Business"} Card
                </span>
              </div>

              <div className="flex justify-center">
                <div
                  className={`relative w-80 h-48 md:w-[360px] md:h-[210px] rounded-[24px] shadow-card border border-gray-200 overflow-hidden transition-all`}
                  style={{
                    background: currentProfile.aiBackground
                      ? `url(${currentProfile.aiBackground}) center/cover`
                      : currentProfile.designMode === "manual" &&
                        selectedTemplate !== "glass" &&
                        selectedTemplate !== "dark"
                      ? currentProfile.color
                      : undefined,
                  }}
                >
                  {/* Background for specific templates */}
                  {!currentProfile.aiBackground && (
                    <div
                      className={`absolute inset-0 ${
                        selectedTemplate === "gradient"
                          ? "bg-gradient-to-br from-brand-primary/90 via-[#0B0F19] to-[#16203A]"
                          : selectedTemplate === "glass"
                          ? "bg-white/80"
                          : selectedTemplate === "dark"
                          ? "bg-brand-dark"
                          : "bg-brand-primary"
                      }`}
                    />
                  )}

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/5" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between px-5 py-4 text-white">
                    <div className="flex items-center gap-3">
                      {currentProfile.image ? (
                        <img
                          src={currentProfile.image}
                          alt="avatar"
                          className={`w-12 h-12 ${
                            profileType === "business"
                              ? "rounded-lg"
                              : "rounded-full"
                          } border-2 border-white/80 object-cover`}
                        />
                      ) : (
                        <div
                          className={`w-12 h-12 flex items-center justify-center text-xl bg-white/20 border border-white/40 ${
                            profileType === "business"
                              ? "rounded-lg"
                              : "rounded-full"
                          }`}
                        >
                          {profileType === "business" ? "🏢" : "👤"}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-semibold opacity-90">
                          Dot LinkMe
                        </p>
                        <p className="text-xs opacity-70">
                          Smart NFC Digital Identity
                        </p>
                      </div>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-lg font-bold tracking-tight">
                        {currentProfile.name ||
                          (profileType === "personal"
                            ? "Your Name"
                            : "Company Name")}
                      </h3>
                      <p className="text-xs opacity-85">
                        {currentProfile.title ||
                          (profileType === "personal"
                            ? "Your role or title"
                            : "Your industry")}
                      </p>
                      <p className="text-[11px] opacity-75 mt-1 line-clamp-2">
                        {currentProfile.bio ||
                          "This is a preview of your smart identity card. Add a short bio or description here."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-[10px] opacity-80">
                        <span className="px-2 py-1 rounded-full bg-black/15">
                          {profileType === "personal" ? "Personal" : "Business"}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-black/15">
                          NFC • QR • Smart Link
                        </span>
                      </div>

                      <div className="bg-white rounded-md p-1 shadow-sm">
                        <QRCodeCanvas value={profileUrl} size={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* URL Preview */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-xs font-medium text-gray-600">
                    Your smart link (preview)
                  </p>
                  <p className="text-xs text-gray-800 truncate max-w-[220px]">
                    {profileUrl}
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-ghost-clean text-xs px-3 py-1.5"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Info box */}
            <div className="card-glass p-4 text-xs text-gray-600 space-y-1">
              <p className="font-semibold text-brand-dark">Pro Tip</p>
              <p>
                Create both profiles to separate your personal and professional
                life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
