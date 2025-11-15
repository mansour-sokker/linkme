import React from "react";

export default function CallToActionSection() {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-white overflow-hidden text-center">
      {/* soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f4fb]/60 to-[#e9e6f8]/70 -z-10"></div>

      {/* floating glow shapes */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-[#a79cc7]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#7a86b6]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* Text */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#384f7d] mb-6">
        Ready to <span className="text-[#a79cc7]">Connect Smarter</span>?
      </h2>
      <p className="text-[#384f7d]/70 text-lg md:text-xl max-w-2xl mx-auto mb-14">
        Build your custom NFC card today and share your world in one tap.
      </p>

      <div className="mt-16">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Create Your NFC Card
        </a>
      </div>

      {/* subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f3f2fb] to-transparent -z-10"></div>
    </section>
  );
}
