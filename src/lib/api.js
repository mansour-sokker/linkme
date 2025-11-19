// // src/lib/api.js
// const BASE = "http://localhost:5000";

// export async function createProfile({ name, title, bio, avatarUrl }) {
//   const resp = await fetch(`${BASE}/api/profiles`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, title, bio, avatarUrl }),
//   });
//   return resp.json(); // { ok, slug, profileUrl } أو { error }
// }

// export async function fetchProfile(slug) {
//   const resp = await fetch(`${BASE}/api/profiles/${slug}`);
//   if (!resp.ok) throw new Error("not_found");
//   return resp.json(); // { name, title, bio, avatarUrl, slug }
// }
// src/services/api.js

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function createProfile(profileData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export async function updateProfile(profileId, profileData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cards/${profileId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export async function getProfile(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cards/${slug}`);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
