// src/pages/CreateCard.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import CreateCardHero from "../components/CreateCard/CreateCardHero";
import ProfileTypeSwitch from "../components/CreateCard/ProfileTypeSwitch";
import ProfileForm from "../components/CreateCard/ProfileForm";
import LiveCardPreview from "../components/CreateCard/LiveCardPreview";
import { useProfileData } from "../hooks/useProfileData";
import { TEMPLATES } from "../constants/templates";

// API function
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

  const [profileType, setProfileType] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  const {
    personalData,
    businessData,
    socialLinks,
    updatePersonalData,
    updateBusinessData,
    updateSocialLinks,
    getCurrentProfile,
  } = useProfileData();

  const currentProfile = getCurrentProfile(profileType);

  const handleCreateProfile = async (e) => {
    e.preventDefault();

    const currentData =
      profileType === "personal"
        ? {
            name: personalData.name,
            title: personalData.title,
            bio: personalData.bio,
            avatarUrl: personalData.image,
            color: personalData.color,
            designMode: personalData.designMode,
            aiBackground: personalData.aiBackground,
          }
        : {
            name: businessData.name,
            title: businessData.title,
            bio: businessData.bio,
            avatarUrl: businessData.logo,
            color: businessData.color,
            designMode: businessData.designMode,
            aiBackground: businessData.aiBackground,
          };

    if (!currentData.name?.trim()) {
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
  };

  const handleSwitchProfile = () => {
    setProfileType((prev) => (prev === "personal" ? "business" : "personal"));
  };

  return (
    <div className="min-h-screen bg-brand-light">
      <CreateCardHero />

      <section className="section-shell pb-20">
        <ProfileTypeSwitch
          profileType={profileType}
          onSwitch={setProfileType}
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)] items-start">
          <ProfileForm
            profileType={profileType}
            currentProfile={currentProfile}
            updateProfile={
              profileType === "personal"
                ? updatePersonalData
                : updateBusinessData
            }
            socialLinks={socialLinks}
            onSocialLinksChange={updateSocialLinks}
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            templates={TEMPLATES}
            onSubmit={handleCreateProfile}
            onSwitchProfile={handleSwitchProfile}
          />

          <LiveCardPreview
            profileType={profileType}
            currentProfile={currentProfile}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </section>
    </div>
  );
}
