import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

async function createProfile(profileData) {
  const response = await fetch("http://localhost:5000/api/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileData),
  });
  return response;
}

export default function CreateCard() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const navigate = useNavigate();

  // Profile Type
  const [profileType, setProfileType] = useState("personal"); // personal or business

  // Personal Profile Fields
  const [personalName, setPersonalName] = useState("");
  const [personalTitle, setPersonalTitle] = useState("");
  const [personalBio, setPersonalBio] = useState("");
  const [personalColor, setPersonalColor] = useState("#7a86b6");
  const [personalImage, setPersonalImage] = useState(null);
  const [personalDesignMode, setPersonalDesignMode] = useState("manual");
  const [personalAiPrompt, setPersonalAiPrompt] = useState("");
  const [personalAiBackground, setPersonalAiBackground] = useState(null);

  // Business Profile Fields
  const [businessName, setBusinessName] = useState("");
  const [businessTitle, setBusinessTitle] = useState("");
  const [businessBio, setBusinessBio] = useState("");
  const [businessColor, setBusinessColor] = useState("#384f7d");
  const [businessLogo, setBusinessLogo] = useState(null);
  const [businessDesignMode, setBusinessDesignMode] = useState("manual");
  const [businessAiPrompt, setBusinessAiPrompt] = useState("");
  const [businessAiBackground, setBusinessAiBackground] = useState(null);

  // Social Links (shared or separate)
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

  // Template Selection
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const templates = [
    { id: "modern", name: "Modern", preview: "Minimal & Clean" },
    { id: "gradient", name: "Gradient", preview: "Vibrant Colors" },
    { id: "glass", name: "Glassmorphism", preview: "Frosted Glass" },
    { id: "dark", name: "Dark Mode", preview: "Professional Dark" },
  ];

  async function handleCreateProfile(e) {
    e.preventDefault();

    try {
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

      if (!currentData.name.trim()) {
        alert("Name is required");
        return;
      }

      const res = await createProfile({
        ...currentData,
        profileType,
        socialLinks,
        template: selectedTemplate,
      });

      if (res.ok) {
        const data = await res.json();
        alert(
          `${
            profileType === "personal" ? "Personal" : "Business"
          } profile created successfully! 🌟\nYour link: ${data.profileUrl}`
        );
        navigate(`/u/${data.slug}`);
      } else {
        alert("Error creating profile. Try again!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  }

  const handleGenerateAI = () => {
    const demoImages = [
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80",
    ];

    if (profileType === "personal") {
      setPersonalAiBackground(
        demoImages[Math.floor(Math.random() * demoImages.length)]
      );
    } else {
      setBusinessAiBackground(
        demoImages[Math.floor(Math.random() * demoImages.length)]
      );
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      if (profileType === "personal") {
        setPersonalImage(url);
      } else {
        setBusinessLogo(url);
      }
    }
  };

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  // Current profile data based on type
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

  const profileUrl = `https://linkme.io/${currentProfile.name
    .replace(/\s+/g, "")
    .toLowerCase()}`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14] dark:text-white">
      <div className="min-h-screen bg-gradient-to-br text-[#384f7d] px-6 md:px-20 py-16 dark:bg-transparent">
      {/* Header */}
      <h1
        data-aos="fade-up"
        className="text-4xl font-extrabold text-center mb-4 text-[#384f7d] dark:text-white"
      >
        Create Your <span className="text-[#7a86b6] dark:text-[#b4bfff]">Smart NFC Card</span>
      </h1>
      <p className="text-center text-[#384f7d]/70 mb-12 dark:text-gray-300">
        Build both personal and business profiles with AI-powered design
      </p>

      {/* Profile Type Selector */}
      <div data-aos="fade-up" className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setProfileType("personal")}
          className={`px-8 py-3 rounded-2xl font-semibold border-2 transition-all duration-300 ${
            profileType === "personal"
              ? "bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] text-white border-transparent shadow-lg scale-105"
              : "bg-white text-[#384f7d] border-[#a79cc7]/40 hover:border-[#a79cc7] dark:bg-[#1a1a1f] dark:text-white"
          }`}
        >
          👤 Personal Profile
        </button>
        <button
          onClick={() => setProfileType("business")}
          className={`px-8 py-3 rounded-2xl font-semibold border-2 transition-all duration-300 ${
            profileType === "business"
              ? "bg-gradient-to-r from-[#384f7d] to-[#6d7aa3] text-white border-transparent shadow-lg scale-105"
              : "bg-white text-[#384f7d] border-[#a79cc7]/40 hover:border-[#a79cc7] dark:bg-[#1a1a1f] dark:text-white"
          }`}
        >
          💼 Business Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side – Form */}
        <div
          data-aos="fade-right"
          className="bg-white/90 rounded-3xl shadow-xl p-8 backdrop-blur-xl border border-[#a79cc7]/30 dark:bg-[#1a1a1f] dark:border-[#2a2a33]"
        >
          <h2 className="text-2xl font-bold mb-6">
            {profileType === "personal" ? "Personal" : "Business"} Information
          </h2>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm mb-1 font-medium">
                {profileType === "personal" ? "Full Name" : "Company Name"}
              </label>
              <input
                value={currentProfile.name}
                onChange={(e) => currentProfile.setName(e.target.value)}
                type="text"
                placeholder={
                  profileType === "personal"
                    ? "Hala Al-Issawi"
                    : "TechCorp Solutions"
                }
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 focus:ring-2 focus:ring-[#a79cc7]/40 focus:outline-none dark:bg-[#1a1a1f] dark:border-[#a79cc7]/30 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                {profileType === "personal"
                  ? "Title / Job"
                  : "Industry / Category"}
              </label>
              <input
                value={currentProfile.title}
                onChange={(e) => currentProfile.setTitle(e.target.value)}
                type="text"
                placeholder={
                  profileType === "personal"
                    ? "QA Engineer"
                    : "Software Development"
                }
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 focus:ring-2 focus:ring-[#a79cc7]/40 focus:outline-none dark:bg-[#1a1a1f] dark:border-[#a79cc7]/30 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium">
                {profileType === "personal"
                  ? "Short Bio"
                  : "Company Description"}
              </label>
              <textarea
                value={currentProfile.bio}
                onChange={(e) => currentProfile.setBio(e.target.value)}
                rows="3"
                placeholder={
                  profileType === "personal"
                    ? "Passionate about quality and building clean systems."
                    : "Leading provider of innovative tech solutions."
                }
                className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 focus:ring-2 focus:ring-[#a79cc7]/40 focus:outline-none dark:bg-[#1a1a1f] dark:border-[#a79cc7]/30 dark:text-white"
              />
            </div>

            {/* Upload image */}
            <div>
              <label className="block text-sm mb-1 font-medium">
                {profileType === "personal" ? "Profile Image" : "Company Logo"}
              </label>
              <input
                onChange={handleImageUpload}
                type="file"
                accept="image/*"
                className="w-full text-sm text-[#384f7d]/70 dark:text-white"
              />
            </div>

            {/* Template Selection */}
            <div>
              <label className="block text-sm mb-3 font-medium">Card Template</label>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      selectedTemplate === template.id
                        ? "border-[#7a86b6] bg-[#7a86b6]/10"
                        : "border-[#a79cc7]/30 hover:border-[#a79cc7]/60"
                    }`}
                  >
                    <div className="font-semibold text-sm">{template.name}</div>
                    <div className="text-xs text-[#384f7d]/70">{template.preview}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Mode Switch */}
            <div className="mt-4">
              <label className="block text-sm mb-3 font-medium">Design Mode</label>
              <div className="flex gap-4">
                <button
                  onClick={() => currentProfile.setDesignMode("manual")}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold border-2 transition ${
                    currentProfile.designMode === "manual"
                      ? "bg-[#7a86b6] text-white border-transparent"
                      : "bg-white text-[#384f7d] border-[#a79cc7]/40 dark:bg-[#2a2a33] dark:text-white"
                  }`}
                >
                  🎨 Manual Design
                </button>
                <button
                  onClick={() => currentProfile.setDesignMode("ai")}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold border-2 transition ${
                    currentProfile.designMode === "ai"
                      ? "bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] text-white border-transparent"
                      : "bg-white text-[#384f7d] border-[#a79cc7]/40 dark:bg-[#2a2a33] dark:text-white"
                  }`}
                >
                  ✨ AI Design
                </button>
              </div>
            </div>

            {/* Manual Design Mode */}
            {currentProfile.designMode === "manual" && (
              <div className="mt-2">
                <label className="block text-sm mb-2 font-medium">Card Theme Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={currentProfile.color}
                    onChange={(e) => currentProfile.setColor(e.target.value)}
                    className="w-16 h-12 cursor-pointer border border-[#a79cc7]/40 rounded-lg"
                  />
                  <span className="text-sm text-[#384f7d]/70 dark:text-white">{currentProfile.color}</span>
                </div>
              </div>
            )}

            {/* AI Design Mode */}
            {currentProfile.designMode === "ai" && (
              <div className="mt-2 p-4 bg-gradient-to-br from-[#7a86b6]/10 to-[#a79cc7]/10 rounded-xl">
                <label className="block text-sm mb-2 font-medium">AI Design Prompt</label>
                <input
                  value={currentProfile.aiPrompt}
                  onChange={(e) => currentProfile.setAiPrompt(e.target.value)}
                  type="text"
                  placeholder="Futuristic purple card with glowing border and stars"
                  className="w-full px-4 py-3 rounded-xl border border-[#a79cc7]/40 focus:ring-2 focus:ring-[#a79cc7]/40 focus:outline-none mb-3 dark:bg-[#1a1a1f] dark:text-white"
                />
                <button
                  onClick={handleGenerateAI}
                  type="button"
                  className="bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] text-white font-semibold py-3 rounded-xl w-full hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  ✨ Generate with AI Magic
                </button>
              </div>
            )}

            {/* Social Links Section */}
            <div className="mt-6 pt-6 border-t border-[#a79cc7]/30">
              <h3 className="text-lg font-bold mb-4">Social Links & Contact</h3>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(socialLinks).map(([platform, value]) => (
                  <div key={platform}>
                    <label className="block text-xs mb-1 font-medium capitalize">
                      {platform === "whatsapp" ? "WhatsApp" : platform}
                    </label>
                    <input
                      value={value}
                      onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                      type="text"
                      placeholder={
                        platform === "email"
                          ? "hello@example.com"
                          : platform === "phone"
                          ? "+962 7X XXX XXXX"
                          : `Your ${platform} link`
                      }
                      className="w-full px-3 py-2 rounded-lg border border-[#a79cc7]/40 focus:ring-2 focus:ring-[#a79cc7]/40 focus:outline-none text-sm dark:bg-[#2a2a33] dark:text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right side – Card Preview - Sticky */}
        <div data-aos="fade-left" className="flex flex-col items-center">
          {/* Sticky Container */}
          <div className="sticky top-8 w-full flex flex-col items-center">
            <div className="mb-6 text-center">
              <h3 className="text-lg font-semibold text-[#384f7d] mb-2 dark:text-white">
                Live Preview
              </h3>
              <p className="text-sm text-[#384f7d]/70 dark:text-gray-300">
                {profileType === "personal" ? "Personal Card" : "Business Card"}
              </p>
            </div>

            <div
              className={`relative w-80 h-48 md:w-[400px] md:h-[220px] rounded-3xl shadow-2xl border-2 overflow-hidden transition-all duration-500 ${
                selectedTemplate === "glass"
                  ? "backdrop-blur-xl bg-white/20 border-white/40"
                  : selectedTemplate === "dark"
                  ? "bg-[#1a1a2e] border-[#16213e]"
                  : ""
              }`}
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
              {/* Overlay based on template */}
              <div
                className={`absolute inset-0 rounded-3xl ${
                  selectedTemplate === "gradient"
                    ? "bg-gradient-to-br from-black/20 to-transparent"
                    : selectedTemplate === "glass"
                    ? "backdrop-blur-sm"
                    : selectedTemplate === "dark"
                    ? ""
                    : "bg-black/10 backdrop-blur-[1px]"
                }`}
              ></div>

              {/* Profile Info */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                {currentProfile.image ? (
                  <img
                    src={currentProfile.image}
                    alt="avatar"
                    className={`w-16 h-16 ${
                      profileType === "business" ? "rounded-lg" : "rounded-full"
                    } border-2 border-white shadow-md mb-2`}
                  />
                ) : (
                  <div
                    className={`w-16 h-16 ${
                      profileType === "business" ? "rounded-lg" : "rounded-full"
                    } bg-white/30 mb-2 flex items-center justify-center text-2xl`}
                  >
                    {profileType === "business" ? "🏢" : "👤"}
                  </div>
                )}
                <h3 className="font-bold text-lg drop-shadow-md">
                  {currentProfile.name ||
                    (profileType === "personal" ? "Your Name" : "Company Name")}
                </h3>
                <p className="text-sm opacity-90 drop-shadow-md">
                  {currentProfile.title ||
                    (profileType === "personal" ? "Your Title" : "Industry")}
                </p>
              </div>

              {/* QR Code */}
              <div className="absolute bottom-3 right-3 bg-white p-1.5 rounded-lg shadow-md">
                <QRCodeCanvas value={profileUrl} size={45} />
              </div>

              {/* Profile Type Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#384f7d]">
                {profileType === "personal" ? "👤 Personal" : "💼 Business"}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 mt-10 w-full max-w-md">
              <button
                onClick={handleCreateProfile}
                className="bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] text-white font-semibold py-4 px-10 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                🚀 Generate My{" "}
                {profileType === "personal" ? "Personal" : "Business"} Card
              </button>

              <button
                onClick={() => {
                  // Switch to other profile type
                  setProfileType(
                    profileType === "personal" ? "business" : "personal"
                  );
                }}
                className="bg-white text-[#384f7d] border-2 border-[#a79cc7]/40 font-semibold py-3 px-8 rounded-xl hover:border-[#a79cc7] transition-all duration-300"
              >
                ➕ Create {profileType === "personal" ? "Business" : "Personal"}{" "}
                Profile Too
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-8 bg-gradient-to-r from-[#7a86b6]/10 to-[#a79cc7]/10 rounded-2xl p-6 border border-[#a79cc7]/30">
              <h4 className="font-bold text-[#384f7d] mb-2 dark:text-white">💡 Pro Tip</h4>
              <p className="text-sm text-[#384f7d]/70 dark:text-gray-300">
                Create both profiles to separate your personal and professional life.
                Perfect for networking at different events!
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}
