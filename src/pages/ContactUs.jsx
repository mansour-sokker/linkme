import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-[#2f3e5c] dark:text-white transition-all">

      {/* 🔹 HERO SECTION */}
      <section
        data-aos="fade-down"
        className="
          text-center py-20 
          bg-gradient-to-r 
          from-[#eef0fa] via-[#f5f5fd] to-[#e8eafc] 
          dark:from-[#1a2234] dark:via-[#1e293b] dark:to-[#0f172a]
          shadow-sm rounded-b-[3rem]
        "
      >
        <h1 className="text-5xl font-extrabold text-[#384f7d] dark:text-white mb-4">
          Contact <span className="text-[#7a86b6]">LinkMe</span>
        </h1>
        <p className="text-[#4b5b84]/80 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          We’re here to connect. Whether you’re a customer, a partner, or just curious — we’d love to hear from you.
        </p>
      </section>

      {/* 🔹 MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-20 py-20 items-center">
        
        {/* FORM */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-[#384f7d] dark:text-white mb-6">
            Send Us a Message
          </h2>

          <form className="flex flex-col gap-5 bg-white dark:bg-slate-800 shadow-lg rounded-3xl p-8 border border-[#a79cc7]/30">

            <div>
              <label className="block text-sm mb-1 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="
                  w-full px-4 py-3 rounded-xl border border-[#a79cc7]/30 
                  dark:bg-slate-700 dark:text-white 
                  focus:ring-2 focus:ring-[#a79cc7]/40 outline-none
                "
              />
            </div>

            <div>
              <label className="block text-sm mb-1 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="
                  w-full px-4 py-3 rounded-xl border border-[#a79cc7]/30 
                  dark:bg-slate-700 dark:text-white 
                  focus:ring-2 focus:ring-[#a79cc7]/40 outline-none
                "
              />
            </div>

            <div>
              <label className="block text-sm mb-1 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="
                  w-full px-4 py-3 rounded-xl border border-[#a79cc7]/30 
                  dark:bg-slate-700 dark:text-white 
                  focus:ring-2 focus:ring-[#a79cc7]/40 outline-none
                "
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                bg-gradient-to-r from-[#7a86b6] to-[#a79cc7] 
                dark:from-[#4f5d88] dark:to-[#6c75a3]
                text-white font-semibold py-3 rounded-xl 
                hover:scale-105 transition-transform shadow-md
              "
            >
              Send Message
            </button>
          </form>
        </div>

        {/* MAP */}
        <div
          data-aos="fade-left"
          className="
            rounded-3xl overflow-hidden shadow-xl 
            border border-[#a79cc7]/30 dark:border-slate-700
          "
        >
          <iframe
            title="LinkMe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7757757831946!2d35.9391333151286!3d31.963158981235925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0eeb1a0f32f%3A0x729ec55e47de1c2!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sjo!4v1699375333001!5m2!1sen!2sjo"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* 🔹 INFO BOXES */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 md:px-20 py-20">

        {[
          {
            title: "Customer Support",
            text: "Need help with your card or profile? Our team is available 24/7 to assist you with technical or account issues.",
            icon: "💬",
          },
          {
            title: "Partnerships",
            text: "Interested in partnering with LinkMe? We welcome collaborations that make smart connectivity accessible for everyone.",
            icon: "🤝",
          },
          {
            title: "Media Inquiries",
            text: "Press or media? Get in touch with our communications team for official statements, branding, and interviews.",
            icon: "📰",
          },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="
              p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-md 
              border border-[#a79cc7]/30 dark:border-slate-700
              hover:shadow-lg hover:scale-[1.02] transition-transform
            "
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-[#384f7d] dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-[#4b5b84]/80 dark:text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

      </section>

      {/* 🔹 SOCIAL MEDIA */}
      <section
        data-aos="fade-up"
        className="
          py-20 text-center 
          bg-gradient-to-b from-[#f8f8ff] to-white 
          dark:from-slate-900 dark:to-slate-800
        "
      >
        <h2 className="text-4xl font-bold text-[#384f7d] dark:text-white mb-8">
          Connect With Us
        </h2>

        <p className="text-[#4b5b84]/80 dark:text-gray-300 mb-10 max-w-xl mx-auto text-lg">
          Stay in touch with LinkMe and follow our latest updates, news, and releases.
        </p>

        <div className="flex justify-center flex-wrap gap-10">

          {[
            { icon: "💼", title: "LinkedIn", color: "from-[#7a86b6] to-[#a79cc7]" },
            { icon: "📸", title: "Instagram", color: "from-[#a79cc7] to-[#7a86b6]" },
            { icon: "🐦", title: "Twitter", color: "from-[#7a86b6] to-[#a79cc7]" },
            { icon: "🌐", title: "Website", color: "from-[#a79cc7] to-[#7a86b6]" },
          ].map((item, i) => (
            <button
              key={i}
              title={item.title}
              className="
                relative group w-28 h-28 rounded-full flex items-center justify-center 
                shadow-lg border border-[#a79cc7]/40 
                bg-white dark:bg-slate-800 
                hover:scale-110 transition-transform duration-300 overflow-hidden
              "
            >
              <div
                className={`
                  absolute inset-0 bg-gradient-to-br ${item.color} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                `}
              ></div>

              <span className="relative text-4xl group-hover:rotate-[15deg] transition-transform duration-500">
                {item.icon}
              </span>
            </button>
          ))}
        </div>
      </section>

    </div>
  );
}
