// src/components/CreateCard/FormField.jsx
import React from "react";

export default function FormField({
  label,
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 3,
  type = "text",
  helperText,
}) {
  const baseClasses =
    "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 transition-shadow";

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {multiline ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  );
}
