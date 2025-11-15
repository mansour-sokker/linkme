import React, { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      text: "I didn't expect it to be that smooth! Now I share my contact with one tap, and people love the design.",
      name: "Sarah A.",
      role: "Graphic Designer",
      avatar: "https://i.pravatar.cc/100?img=3",
      borderColor: "border-[#a79cc7]",
    },
    {
      text: "The NFC card looks so professional. I use it at every event — no more paper cards for me!",
      name: "Omar K.",
      role: "Startup Founder",
      avatar: "https://i.pravatar.cc/100?img=12",
      borderColor: "border-[#7a86b6]",
    },
    {
      text: "It's stylish, fast, and eco-friendly. I literally show my LinkMe card and get instant attention!",
      name: "Layla N.",
      role: "Marketing Specialist",
      avatar: "https://i.pravatar.cc/100?img=30",
      borderColor: "border-[#c1b0d9]",
    },
    {
      text: "LinkMe made networking fun again — people are always impressed when I show them my digital card!",
      name: "Yousef M.",
      role: "Photographer",
      avatar: "https://i.pravatar.cc/100?img=45",
      borderColor: "border-[#a79cc7]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-aos="zoom-in"
      className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-white via-[#f5f4fb]/60 to-white overflow-hidden"
    >
      {/* decorative blur circles */}
      <div className="absolute top-10 -left-20 w-64 h-64 bg-[#a79cc7]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7a86b6]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#384f7d] mb-6">
          What People Say About <span className="text-[#a79cc7]">LinkMe</span>
        </h2>
        <p className="text-[#384f7d]/70 text-lg md:text-xl max-w-2xl mx-auto mb-20">
          Real experiences from professionals, creators, and dreamers who turned
          networking into one tap.
        </p>

        {/* Indicator dots */}
        <div className="flex justify-center mb-10 gap-2 md:gap-3">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeDot ? "active" : ""}`}
            ></span>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-slide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card min-w-[300px] md:min-w-[360px] flex-shrink-0"
              >
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-user">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full border-2 ${testimonial.borderColor}`}
                  />
                  <div>
                    <h4 className="font-semibold text-[#384f7d]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#384f7d]/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
