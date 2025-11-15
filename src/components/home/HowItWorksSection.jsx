import React from "react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: "1️⃣",
      title: "Choose Your Design",
      description:
        "Pick from elegant templates or upload your own artwork — make your card uniquely you.",
      lightGradient: "from-[#7a86b6]/25 to-[#c1b0d9]/25",
      darkGradient: "dark:from-[#1c223a]/70 dark:to-[#2a2f47]/70",
      lightBorder: "border-[#a79cc7]/30",
    },
    {
      icon: "2️⃣",
      title: "Add Your Details",
      description:
        "Enter your name, social links, and contact info to complete your digital identity.",
      lightGradient: "from-[#6d7aa3]/25 to-[#a79cc7]/25",
      darkGradient: "dark:from-[#1b2037]/70 dark:to-[#2a2f47]/70",
      lightBorder: "border-[#6d7aa3]/30",
    },
    {
      icon: "3️⃣",
      title: "Activate Your Card",
      description:
        "Receive your NFC card, tap it to activate, and sync your profile instantly.",
      lightGradient: "from-[#8a94c7]/25 to-[#c1b0d9]/25",
      darkGradient: "dark:from-[#1b223a]/70 dark:to-[#333a5a]/70",
      lightBorder: "border-[#8a94c7]/30",
    },
    {
      icon: "4️⃣",
      title: "Share With a Tap",
      description:
        "Share your profile, portfolio, or contact with one tap or QR scan — anywhere, anytime.",
      lightGradient: "from-[#a79cc7]/25 to-[#cbb6df]/25",
      darkGradient: "dark:from-[#262c47]/70 dark:to-[#3a3f63]/70",
      lightBorder: "border-[#a79cc7]/30",
    },
  ];

  return (
    <section
      id="how-it-works"
      data-aos="fade-up"
      className="
        relative py-28 px-6 md:px-16 
        bg-white 
        dark:bg-[#0f172a] 
        transition-all
      "
    >
      {/* Background glow effects */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-[#7a86b6]/10 dark:bg-[#a79cc7]/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c1b0d9]/15 dark:bg-[#7a86b6]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#384f7d] dark:text-white mb-6">
          How <span className="text-[#a79cc7] dark:text-[#cbb6df]">LinkMe</span> Works
        </h2>

        <p className="text-[#384f7d]/70 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-20">
          From design to sharing — in just a few effortless steps.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

          {/* Connecting line */}
          <div className="
            hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] 
            bg-gradient-to-r 
            from-[#6d7aa3]/30 via-[#a79cc7]/30 to-[#c1b0d9]/30 
            dark:from-white/10 dark:via-white/5 dark:to-white/10
            transform -translate-y-1/2 z-0
          "></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                relative z-10 
                bg-gradient-to-br
                ${step.lightGradient}
                ${step.darkGradient}
                border 
                ${step.lightBorder}
                dark:border-white/10
                rounded-3xl p-10 shadow-lg 
                transition-all
              `}
            >
              <div
                className={`
                  bg-white/50 dark:bg-white/10 
                  text-[#384f7d] dark:text-white
                  border ${step.lightBorder} dark:border-white/10
                  rounded-full h-14 w-14 flex items-center justify-center
                  mx-auto mb-6 text-xl shadow-md
                `}
              >
                {step.icon}
              </div>

              <h3 className="text-[#384f7d] dark:text-white text-xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-[#384f7d]/70 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
