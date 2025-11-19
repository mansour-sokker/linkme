// src/components/CreateCard/ProfileForm.jsx
import React from "react";
import BasicInfoSection from "./BasicInfoSection";
import TemplateSelector from "./TemplateSelector";
import DesignModeSection from "./DesignModeSection";
import SocialLinksSection from "./SocialLinksSection";

export default function ProfileForm({
  profileType,
  currentProfile,
  updateProfile,
  socialLinks,
  onSocialLinksChange,
  selectedTemplate,
  onTemplateChange,
  templates,
  onSubmit,
  onSwitchProfile,
}) {
  return (
    <form
      onSubmit={onSubmit}
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

      <BasicInfoSection
        profileType={profileType}
        currentProfile={currentProfile}
        updateProfile={updateProfile}
      />

      <TemplateSelector
        templates={templates}
        selectedTemplate={selectedTemplate}
        onTemplateChange={onTemplateChange}
      />

      <DesignModeSection
        currentProfile={currentProfile}
        updateProfile={updateProfile}
      />

      <SocialLinksSection
        socialLinks={socialLinks}
        onSocialLinksChange={onSocialLinksChange}
      />

      <div className="pt-4 space-y-3">
        <button
          type="submit"
          className="btn-primary-clean w-full py-3 text-base"
        >
          🚀 Generate my {profileType === "personal" ? "Personal" : "Business"}{" "}
          Card
        </button>
        <button
          type="button"
          onClick={onSwitchProfile}
          className="btn-ghost-clean w-full py-3 text-base"
        >
          ➕ Also create {profileType === "personal" ? "Business" : "Personal"}{" "}
          profile
        </button>
      </div>
    </form>
  );
}
