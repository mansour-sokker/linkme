// src/utils/templateUtils.js

export function getTemplateBackground(selectedTemplate, currentProfile) {
  // If AI background exists, use it
  if (currentProfile.aiBackground) {
    return {
      background: `url(${currentProfile.aiBackground}) center/cover`,
    };
  }

  // Manual mode with specific templates
  if (
    currentProfile.designMode === "manual" &&
    selectedTemplate !== "glass" &&
    selectedTemplate !== "dark"
  ) {
    return {
      background: currentProfile.color,
    };
  }

  // Return empty object for gradient/glass/dark templates to use CSS classes
  return {};
}

export function getTemplateClassName(selectedTemplate, hasAiBackground) {
  if (hasAiBackground) {
    return "";
  }

  const templates = {
    gradient:
      "bg-gradient-to-br from-brand-primary/90 via-[#0B0F19] to-[#16203A]",
    glass: "bg-white/80",
    dark: "bg-brand-dark",
    modern: "bg-brand-primary",
  };

  return templates[selectedTemplate] || templates.modern;
}
