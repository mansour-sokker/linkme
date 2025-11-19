// src/components/CreateCard/CardPreview.jsx
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { getTemplateBackground } from "../../utils/templateUtils";

export default function CardPreview({
  profileType,
  currentProfile,
  selectedTemplate,
  profileUrl,
}) {
  const isPersonal = profileType === "personal";
  const backgroundStyle = getTemplateBackground(
    selectedTemplate,
    currentProfile
  );

  return (
    <div
      className="relative w-80 h-48 md:w-[360px] md:h-[210px] rounded-[24px] shadow-card border border-gray-200 overflow-hidden transition-all"
      style={backgroundStyle}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between px-5 py-4 text-white">
        {/* Header with logo/avatar */}
        <div className="flex items-center gap-3">
          {currentProfile.image ? (
            <img
              src={currentProfile.image}
              alt="avatar"
              className={`w-12 h-12 ${
                isPersonal ? "rounded-full" : "rounded-lg"
              } border-2 border-white/80 object-cover`}
            />
          ) : (
            <div
              className={`w-12 h-12 flex items-center justify-center text-xl bg-white/20 border border-white/40 ${
                isPersonal ? "rounded-full" : "rounded-lg"
              }`}
            >
              {isPersonal ? "👤" : "🏢"}
            </div>
          )}

          <div>
            <p className="text-sm font-semibold opacity-90">Dot LinkMe</p>
            <p className="text-xs opacity-70">Smart NFC Digital Identity</p>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-0.5">
          <h3 className="text-lg font-bold tracking-tight">
            {currentProfile.name || (isPersonal ? "Your Name" : "Company Name")}
          </h3>
          <p className="text-xs opacity-85">
            {currentProfile.title ||
              (isPersonal ? "Your role or title" : "Your industry")}
          </p>
          <p className="text-[11px] opacity-75 mt-1 line-clamp-2">
            {currentProfile.bio ||
              "This is a preview of your smart identity card. Add a short bio or description here."}
          </p>
        </div>

        {/* Footer with tags and QR */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-[10px] opacity-80">
            <span className="px-2 py-1 rounded-full bg-black/15">
              {isPersonal ? "Personal" : "Business"}
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
  );
}
