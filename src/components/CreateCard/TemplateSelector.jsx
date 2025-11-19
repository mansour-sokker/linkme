// src/components/CreateCard/FormSections/TemplateSelector.jsx
import React from "react";

export default function TemplateSelector({
  templates,
  selectedTemplate,
  onTemplateChange,
}) {
  return (
    <div className="space-y-2 pt-2">
      <label className="text-sm font-medium text-gray-700">Card Template</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onTemplateChange(template.id)}
            className={`border rounded-xl px-3 py-2 text-left text-xs hover:border-brand-primary/60 transition-all ${
              selectedTemplate === template.id
                ? "border-brand-primary bg-brand-primary/5 shadow-sm"
                : "border-gray-200 hover:shadow-sm"
            }`}
          >
            <p className="font-semibold text-[13px] text-brand-dark">
              {template.name}
            </p>
            <p className="text-[11px] text-gray-500">{template.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
