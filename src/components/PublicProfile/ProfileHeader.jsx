export default function ProfileHeader() {
  return (
    <div className="w-full text-center pb-6">
      {/* Cover Image */}
      <div className="h-36 bg-gradient-to-r from-purple-500 to-indigo-500 relative rounded-b-3xl">
        {/* Profile Image */}
        <img
          src="/images/default-avatar.png" // بدليها لاحقاً بالداتا الحقيقية
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -bottom-12 transform -translate-x-1/2 shadow-md"
        />
      </div>

      {/* Name + Title */}
      <div className="mt-16">
        <h1 className="text-2xl font-bold text-gray-900">Hala Al-Issawi</h1>
        <p className="text-gray-500 text-sm">Frontend Developer</p>
      </div>
    </div>
  );
}
