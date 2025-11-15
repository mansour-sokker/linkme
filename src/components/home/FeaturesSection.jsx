import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎨",
      title: "Custom Designs",
      description:
        "Personalize your NFC card with your own style and brand identity — make it truly yours.",
      lightGradient: "from-soft-blue/20 via-soft-blue/30 to-frost-lilac/30",
      darkGradient: "from-[#1a1a2a]/40 via-[#24243a]/50 to-[#2e304f]/40",
      iconColor: "text-soft-blue",
    },
    {
      icon: "📱",
      title: "NFC + QR Sharing",
      description:
        "Share your profile instantly with one tap or QR scan. No apps, no effort.",
      lightGradient: "from-frost-lilac/20 via-soft-blue/25 to-cloudy-lilac/30",
      darkGradient: "from-[#1a1a2a]/40 via-[#2b2d46]/40 to-[#3a3d5e]/40",
      iconColor: "text-cloudy-lilac",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description:
        "Track link views and interactions with real-time analytics and smart insights.",
      lightGradient: "from-soft-blue/15 via-frost-lilac/25 to-sky-navy/20",
      darkGradient: "from-[#1a1a2a]/50 via-[#23263d]/50 to-[#303354]/40",
      iconColor: "text-sky-navy",
    },
    {
      icon: "⚙️",
      title: "Full Control",
      description:
        "Manage your links, update profiles, and control everything from your dashboard.",
      lightGradient: "from-frost-lilac/30 via-soft-blue/30 to-sky-navy/10",
      darkGradient: "from-[#1a1a2a]/50 via-[#30324f]/50 to-[#3c3f63]/40",
      iconColor: "text-frost-lilac",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative py-24 px-6 md:px-16 
      bg-white dark:bg-[#0b0e18] 
      transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold 
          text-sky-navy dark:text-white mb-4">
          Why Choose <span className="text-soft-blue dark:text-cloudy-lilac">LinkMe</span>?
        </h2>

        <p className="text-sky-navy/70 dark:text-gray-300 
          text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Every card connects you to the world in one tap — secure, smart, and designed just for you.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                p-8 rounded-2xl shadow-lg backdrop-blur-md 
                bg-gradient-to-br ${feature.lightGradient}
                dark:bg-gradient-to-br dark:${feature.darkGradient}
                transition-all duration-300
              `}
            >
              {/* icon */}
              <div
                className={`
                  w-16 h-16 mx-auto flex items-center justify-center 
                  text-4xl rounded-2xl mb-6 shadow-sm
                  bg-white/40 dark:bg-white/10
                  ${feature.iconColor} dark:text-cloudy-lilac
                  transition-colors duration-300
                `}
              >
                {feature.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-bold text-sky-navy dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* desc */}
              <p className="text-sky-navy/80 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
