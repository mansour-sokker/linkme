// src/components/CreateCard/ColorPicker.jsx
import React from "react";

export default function ColorPicker({ color, onChange }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-8 rounded-md border border-gray-300 cursor-pointer"
        />
        <span className="text-xs text-gray-600">Main accent color</span>
      </div>
      <span className="text-[11px] text-gray-500">
        Use your brand color or keep LinkMe blue.
      </span>
    </div>
  );
}
