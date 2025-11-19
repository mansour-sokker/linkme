// src/components/CreateCard/AIDesignPanel.jsx
import React from "react";

const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=800&q=80",
];

export default function AIDesignPanel({
  aiPrompt,
  onPromptChange,
  onGenerate,
}) {
  const handleGenerate = () => {
    const randomImage =
      DEMO_IMAGES[Math.floor(Math.random() * DEMO_IMAGES.length)];
    onGenerate(randomImage);
  };

  return (
    <div className="rounded-xl bg-brand-primary/5 border border-brand-primary/20 p-3 space-y-2">
      <input
        type="text"
        value={aiPrompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="e.g. Soft blue gradient with subtle glow"
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-primary/40 bg-white"
      />
      <button
        type="button"
        onClick={handleGenerate}
        className="btn-primary-clean w-full py-2 text-sm"
      >
        🔮 Preview AI background
      </button>
      <p className="text-[11px] text-gray-500">
        For now this uses demo backgrounds to simulate AI design.
      </p>
    </div>
  );
}
