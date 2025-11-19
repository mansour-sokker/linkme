// src/components/CreateCard/FormSections/SocialLinksSection.jsx
import React from "react";
import FormField from "./FormField";

const SOCIAL_PLATFORMS = [
  { key: "website", label: "Website", placeholder: "https://yoursite.com" },
  { key: "linkedin", label: "LinkedIn", placeholder: "Your LinkedIn URL" },
  { key: "instagram", label: "Instagram", placeholder: "Your Instagram link" },
  { key: "twitter", label: "Twitter", placeholder: "Your Twitter link" },
  { key: "github", label: "GitHub", placeholder: "Your GitHub link" },
  { key: "whatsapp", label: "WhatsApp", placeholder: "Your WhatsApp link" },
  { key: "email", label: "Email", placeholder: "hello@example.com" },
  { key: "phone", label: "Phone", placeholder: "+962 7X XXX XXXX" },
];

export default function SocialLinksSection({
  socialLinks,
  onSocialLinksChange,
}) {
  return (
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
        {SOCIAL_PLATFORMS.map((platform) => (
          <div key={platform.key} className="space-y-1">
            <label className="text-[11px] font-medium text-gray-600 capitalize">
              {platform.label}
            </label>
            <input
              type="text"
              value={socialLinks[platform.key]}
              onChange={(e) =>
                onSocialLinksChange(platform.key, e.target.value)
              }
              placeholder={platform.placeholder}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
