// src/components/CreateCard/LiveCardPreview.jsx
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import CardPreview from "./CardPreview";
import { generateProfileUrl } from "../../utils/urlUtils";

export default function LiveCardPreview({
  profileType,
  currentProfile,
  selectedTemplate,
}) {
  const profileUrl = generateProfileUrl(currentProfile.name);

  return (
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
          <CardPreview
            profileType={profileType}
            currentProfile={currentProfile}
            selectedTemplate={selectedTemplate}
            profileUrl={profileUrl}
          />
        </div>

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
            onClick={() => navigator.clipboard.writeText(profileUrl)}
            className="btn-ghost-clean text-xs px-3 py-1.5"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="card-glass p-4 text-xs text-gray-600 space-y-1">
        <p className="font-semibold text-brand-dark">Pro Tip</p>
        <p>
          Create both profiles to separate your personal and professional life.
        </p>
      </div>
    </div>
  );
}
