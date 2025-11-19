// src/components/CreateCard/FormSections/BasicInfoSection.jsx
import React from "react";
import FormField from "./FormField";
import ImageUpload from "./ImageUpload";

export default function BasicInfoSection({
  profileType,
  currentProfile,
  updateProfile,
}) {
  const isPersonal = profileType === "personal";

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    updateProfile({ image: url });
  };

  return (
    <>
      <FormField
        label={isPersonal ? "Full Name" : "Company Name"}
        value={currentProfile.name}
        onChange={(value) => updateProfile({ name: value })}
        placeholder={isPersonal ? "Hala Al-Issawi" : "Dot LinkMe Solutions"}
      />

      <FormField
        label={isPersonal ? "Title / Role" : "Industry / Category"}
        value={currentProfile.title}
        onChange={(value) => updateProfile({ title: value })}
        placeholder={
          isPersonal
            ? "QA Engineer – NFC Systems"
            : "Smart NFC & Digital Identity"
        }
      />

      <FormField
        label={isPersonal ? "Short Bio" : "Description"}
        value={currentProfile.bio}
        onChange={(value) => updateProfile({ bio: value })}
        placeholder={
          isPersonal
            ? "Passionate about building clean, smart, and user-friendly systems."
            : "We help you turn your physical card into a smart NFC-powered identity."
        }
        multiline
        rows={3}
      />

      <ImageUpload
        label={isPersonal ? "Profile Image" : "Company Logo"}
        onChange={handleImageUpload}
        helperText="Recommended: square image (1:1) for best preview."
      />
    </>
  );
}
