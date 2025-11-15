// src/lib/api.js
const BASE = "http://localhost:5000";

export async function createProfile({ name, title, bio, avatarUrl }) {
  const resp = await fetch(`${BASE}/api/profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, title, bio, avatarUrl }),
  });
  return resp.json(); // { ok, slug, profileUrl } أو { error }
}

export async function fetchProfile(slug) {
  const resp = await fetch(`${BASE}/api/profiles/${slug}`);
  if (!resp.ok) throw new Error("not_found");
  return resp.json(); // { name, title, bio, avatarUrl, slug }
}
