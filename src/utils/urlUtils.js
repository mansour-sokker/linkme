// src/utils/urlUtils.js

export function generateProfileUrl(name) {
  if (!name || !name.trim()) {
    return "https://linkme.io/your-smart-identity";
  }

  const slug = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return `https://linkme.io/${slug}`;
}

export function generateSlug(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function formatPhoneNumber(phone) {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");

  // Format based on length
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  return phone;
}
