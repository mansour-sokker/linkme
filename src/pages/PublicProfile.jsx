// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { QRCodeCanvas } from "qrcode.react";

// export default function PublicProfile() {
//   const { slug } = useParams();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/profiles/${slug}`)
//       .then((res) => res.json())
//       .then((data) => setProfile(data))
//       .catch((err) => console.error("Error fetching profile:", err));
//   }, [slug]);

//   if (!profile) {
//     return <p className="text-center mt-10 text-gray-600">Loading...</p>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f4fb] text-[#384f7d] px-6 py-16">
//       <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center">
//         {profile.avatarUrl && (
//           <img
//             src={profile.avatarUrl}
//             alt="avatar"
//             className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#a79cc7]"
//           />
//         )}
//         <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
//         <h2 className="text-lg text-[#7a86b6] mb-4">{profile.title}</h2>
//         <p className="text-gray-600 mb-6">{profile.bio}</p>

//         <QRCodeCanvas
//           value={`${window.location.origin}/u/${slug}`}
//           size={100}
//         />
//         <p className="mt-4 text-sm text-gray-500">Scan to view this profile!</p>
//       </div>
//     </div>
//   );
// }
