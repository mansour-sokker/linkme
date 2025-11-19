export default function Profile() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <div className="flex items-center gap-6">
        <div>
          <img
            src="/default-avatar.png"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <div>
          <p className="text-lg font-semibold">User Name</p>
          <p className="text-gray-600">Job Title</p>
        </div>
      </div>
    </div>
  );
}
