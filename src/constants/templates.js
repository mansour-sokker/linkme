// src/constants/templates.js

export const TEMPLATES = [
  {
    id: "modern",
    name: "Modern",
    preview: "Clean & professional",
    description: "A clean, professional design perfect for business cards",
  },
  {
    id: "gradient",
    name: "Gradient",
    preview: "Soft blue gradient",
    description: "Smooth gradient background with modern aesthetics",
  },
  {
    id: "glass",
    name: "Glassmorphism",
    preview: "Frosted card",
    description: "Trendy frosted glass effect with transparency",
  },
  {
    id: "dark",
    name: "Dark Mode",
    preview: "Night style",
    description: "Sleek dark theme for a bold statement",
  },
];

export const TEMPLATE_STYLES = {
  modern: {
    background: "bg-brand-primary",
    overlay: "bg-black/5",
  },
  gradient: {
    background:
      "bg-gradient-to-br from-brand-primary/90 via-[#0B0F19] to-[#16203A]",
    overlay: "bg-transparent",
  },
  glass: {
    background: "bg-white/80",
    overlay: "bg-black/5",
    backdropFilter: "blur(10px)",
  },
  dark: {
    background: "bg-brand-dark",
    overlay: "bg-black/10",
  },
};
