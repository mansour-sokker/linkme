import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // TEAM DATA (6 أعضاء)
  const team = [
    { name: "Member 1", role: "Role 1", image: "https://via.placeholder.com/120" },
    { name: "Member 2", role: "Role 2", image: "https://via.placeholder.com/120" },
    { name: "Member 3", role: "Role 3", image: "https://via.placeholder.com/120" },
    { name: "Member 4", role: "Role 4", image: "https://via.placeholder.com/120" },
    { name: "Member 5", role: "Role 5", image: "https://via.placeholder.com/120" },
    { name: "Member 6", role: "Role 6", image: "https://via.placeholder.com/120" },
  ];

  // CARD 3D REFS
  const refs = useRef([]);

  const handleMove = (e, index) => {
    const card = refs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleLeave = (index) => {
    const card = refs.current[index];
    if (!card) return;

    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#5b5ba8] text-[#2f3e5c] dark:text-gray-200">

      {/* Header */}
      <section className="py-20 text-center px-6 md:px-20">
        <h1 data-aos="fade-up" className="text-5xl font-extrabold text-[#384f7d] dark:text-white mb-4">
          About <span className="text-[#7a86b6] dark:text-[#b4a8e0]">LinkMe</span>
        </h1>
        <p data-aos="fade-up" className="max-w-2xl mx-auto text-[#4b5b84]/80 dark:text-gray-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-[#eef0fa] via-[#f5f5fd] to-[#e8eafc] dark:from-[#3d3dbb] dark:via-[#17171f] dark:to-[#13131a] rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 text-[#384f7d] dark:text-white">Our Mission</h2>
            <p className="text-[#4b5b84]/80 dark:text-gray-400 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet...
            </p>

            <button className="px-6 py-3 rounded-xl bg-[#8695cf] dark:bg-[#381cc6] text-white shadow-lg hover:scale-105 transition-all">
              Learn More
            </button>
          </div>

          <div data-aos="fade-left" className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-3xl shadow-2xl w-full max-w-md"
              alt="team"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" className="order-2 md:order-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              className="rounded-3xl shadow-2xl w-full max-w-md"
              alt="vision"
            />
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-[#384f7d] dark:text-white">Our Vision</h2>
            <p className="text-[#4b5b84]/80 dark:text-gray-400 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet...
            </p>

            <button className="px-6 py-3 bg-gradient-to-r from-[#7386d0] to-[#a79cc7] dark:from-[#8e7bd9] dark:to-[#b9a6f4] text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
              Read Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#f5f5fd] to-white dark:from-[#41417c] dark:to-[#0f0f14]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-[#384f7d] dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-[#4b5b84]/80 dark:text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet...
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {["Innovation", "Transparency", "Teamwork", "Customer Focus"].map((v, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-8 rounded-2xl shadow-lg bg-white dark:bg-[#474771] border border-[#a79cc7]/30 dark:border-gray-700 hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold text-[#7a86b6] dark:text-[#b9a6f4] mb-3">{v}</h3>
              <p className="text-[#4b5b84]/80 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM 3D SECTION */}
      <section className="py-20 px-6 md:px-20">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-3">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              onMouseMove={(e) => handleMove(e, index)}
              onMouseLeave={() => handleLeave(index)}
              className="group bg-white/10 dark:bg-white/5 backdrop-blur-lg border 
              border-white/10 rounded-3xl p-8 shadow-xl transition-all duration-300 
              hover:shadow-2xl hover:bg-white/20 dark:hover:bg-white/10 
              animate-card opacity-0 relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.15}s`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-300"></div>

              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 
                  ring-white/20 group-hover:ring-purple-400 transition-all duration-300"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animations */}
        <style>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }

          @keyframes cardAnim {
            0% { opacity: 0; transform: translateY(30px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-card { animation: cardAnim 0.7s ease forwards; }
        `}</style>
      </section>

    </div>
  );
}
