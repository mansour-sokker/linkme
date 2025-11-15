import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { Pencil, Link as LinkIcon } from "lucide-react";

export default function Profile() {
  const { slug } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    avatarUrl: "",
  });

  // جلب بيانات البروفايل
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`http://localhost:5000/api/profiles/${slug}`);
        const data = await res.json();
        if (res.ok) {
          setProfile(data);
          setFormData({
            name: data.name,
            title: data.title,
            bio: data.bio,
            avatarUrl: data.avatarUrl,
          });
        } else {
          console.error("Profile not found");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    }
    fetchProfile();
  }, [slug]);

  // تعديل الحقول
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // حفظ التعديلات (محليًا مؤقتًا)
  function handleSave() {
    setProfile(formData);
    setIsEditing(false);
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-calm-gradient text-sky-navy">
        <h2 className="text-xl font-semibold animate-pulse">
          Loading profile...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-calm-gradient text-sky-navy font-sans flex flex-col items-center py-16 px-4">
      {/* Card Container */}
      <div className="bg-white/80 backdrop-blur-md border border-frost-lilac/40 rounded-3xl shadow-xl p-8 w-full max-w-2xl relative text-center">
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img
            src={profile.avatarUrl || "https://via.placeholder.com/150"}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-soft-blue shadow-lg object-cover"
          />
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute bottom-0 right-0 bg-soft-blue text-white p-2 rounded-full shadow hover:scale-105 transition"
          >
            <Pencil size={16} />
          </button>
        </div>

        {/* Name */}
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-3xl font-bold text-center bg-transparent border-b border-frost-lilac focus:outline-none mb-2"
          />
        ) : (
          <h2 className="text-3xl font-bold mb-1">{profile.name}</h2>
        )}

        {/* Title */}
        {isEditing ? (
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="text-lg text-soft-blue bg-transparent border-b border-frost-lilac focus:outline-none mb-3"
          />
        ) : (
          <p className="text-soft-blue mb-3">{profile.title}</p>
        )}

        {/* Bio */}
        {isEditing ? (
          <textarea
            name="bio"
            rows="3"
            value={formData.bio}
            onChange={handleChange}
            className="w-full bg-transparent border border-frost-lilac rounded-xl p-3 text-sm focus:outline-none"
          />
        ) : (
          <p className="text-sky-navy/80 max-w-md mx-auto mb-6">
            {profile.bio || "No bio added yet."}
          </p>
        )}

        {/* QR Code */}
        <div className="mt-6 flex flex-col items-center">
          <QRCodeCanvas
            value={`https://linkme.io/u/${slug}`}
            size={120}
            className="shadow-md border border-frost-lilac rounded-lg bg-white p-2"
          />
          <a
            href={`https://linkme.io/u/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-soft-blue mt-3 hover:underline"
          >
            <LinkIcon size={16} /> linkme.io/u/{slug}
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-sky-navy text-white px-6 py-2 rounded-xl font-semibold hover:bg-soft-blue transition"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-soft-blue text-white px-6 py-2 rounded-xl font-semibold hover:bg-sky-navy transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
