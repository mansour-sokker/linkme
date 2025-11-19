export default function EditProfile() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

      <div className="space-y-4">
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Full Name"
        />
        <input
          className="w-full p-3 border rounded-lg"
          placeholder="Job Title"
        />
        <input className="w-full p-3 border rounded-lg" placeholder="Bio" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}
