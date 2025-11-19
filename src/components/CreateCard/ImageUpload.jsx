// src/components/CreateCard/ImageUpload.jsx
import React from "react";

export default function ImageUpload({ label, onChange, helperText }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-primary/5 file:text-brand-primary hover:file:bg-brand-primary/10 file:cursor-pointer transition-colors"
      />
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  );
}
