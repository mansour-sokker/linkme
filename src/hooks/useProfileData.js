// src/hooks/useProfileData.js
import { useState } from "react";

const initialPersonalData = {
  name: "",
  title: "",
  bio: "",
  color: "#0066FF",
  image: null,
  designMode: "manual",
  aiPrompt: "",
  aiBackground: null,
};

const initialBusinessData = {
  name: "",
  title: "",
  bio: "",
  color: "#16213E",
  logo: null,
  designMode: "manual",
  aiPrompt: "",
  aiBackground: null,
};

const initialSocialLinks = {
  website: "",
  linkedin: "",
  instagram: "",
  twitter: "",
  github: "",
  whatsapp: "",
  email: "",
  phone: "",
};

export function useProfileData() {
  const [personalData, setPersonalData] = useState(initialPersonalData);
  const [businessData, setBusinessData] = useState(initialBusinessData);
  const [socialLinks, setSocialLinks] = useState(initialSocialLinks);

  const updatePersonalData = (updates) => {
    setPersonalData((prev) => ({ ...prev, ...updates }));
  };

  const updateBusinessData = (updates) => {
    setBusinessData((prev) => ({ ...prev, ...updates }));
  };

  const updateSocialLinks = (platform, value) => {
    setSocialLinks((prev) => ({ ...prev, [platform]: value }));
  };

  const getCurrentProfile = (profileType) => {
    const data = profileType === "personal" ? personalData : businessData;

    return {
      name: data.name,
      title: data.title,
      bio: data.bio,
      color: data.color,
      image: profileType === "personal" ? data.image : data.logo,
      designMode: data.designMode,
      aiPrompt: data.aiPrompt,
      aiBackground: data.aiBackground,
    };
  };

  return {
    personalData,
    businessData,
    socialLinks,
    updatePersonalData,
    updateBusinessData,
    updateSocialLinks,
    getCurrentProfile,
  };
}
