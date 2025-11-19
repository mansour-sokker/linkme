// src/components/CreateCard/FormSections/DesignModeSection.jsx
import React from "react";
import ColorPicker from "./ColorPicker";
import AIDesignPanel from "./AIDesignPanel";

export default function DesignModeSection({ currentProfile, updateProfile }) {
  return (
    <div className="space-y-3 pt-2">
      <label className="text-sm font-medium text-gray-700">Design Mode</label>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => updateProfile({ designMode: "manual" })}
          className={`btn-ghost-clean flex-1 min-w-[130px] transition-all ${
            currentProfile.designMode === "manual"
              ? "bg-brand-primary text-white border-brand-primary"
              : ""
          }`}
        >
          🎨 Manual
        </button>
        <button
          type="button"
          onClick={() => updateProfile({ designMode: "ai" })}
          className={`btn-ghost-clean flex-1 min-w-[130px] transition-all ${
            currentProfile.designMode === "ai"
              ? "bg-brand-primary text-white border-brand-primary"
              : ""
          }`}
        >
          ✨ AI-Assisted
        </button>
      </div>

      {currentProfile.designMode === "manual" && (
        <ColorPicker
          color={currentProfile.color}
          onChange={(color) => updateProfile({ color })}
        />
      )}

      {currentProfile.designMode === "ai" && (
        <AIDesignPanel
          aiPrompt={currentProfile.aiPrompt}
          onPromptChange={(aiPrompt) => updateProfile({ aiPrompt })}
          onGenerate={(aiBackground) => updateProfile({ aiBackground })}
        />
      )}
    </div>
  );
}
