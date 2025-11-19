export default function ShareCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Share My Card</h2>
      <p>Your public profile link:</p>

      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
        https://linkme.app/user/username
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Copy Link
      </button>
    </div>
  );
}
