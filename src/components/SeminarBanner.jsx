import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/home.png",
    heading: "Learn. Trade. Earn.",
    subText: "Join RightTrade Capital Academy's Upcoming Seminar",
    details: [
      "When: 10am, 18th January 2025",
      "Where: 5 Allen Avenue, Ikeja, Lagos",
    ],
    buttonText: "Learn to Trade",
    note: "Seats are limited – act fast to avoid disappointment",
  },
  {
    image: "/home1.png",
    heading: "Trade Futures CFDs with RightTrade Capital",
    subText:
      "Diversify your trades and hedge against market volatility with CFD futures trading.",
    buttonText: "Trade now",
    note: "Trading is risky",
  },
  {
    image: "/home2.png",
    heading: "Release your inner trader",
    subText:
      "Learn to trade at your own pace with our free educational resources.",
    buttonText: "Learn more",
    note: "Trading is risky",
  },
];

const SeminarBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative w-full h-screen flex items-center justify-start bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url('${slide.image}')`,
        fontFamily: '"Source Sans Pro", sans-serif',
      }}
    >
      {/* Orange Polygon Overlay */}
      <div
        className="absolute inset-0 bg-[#f7421e] opacity-95"
        style={{
          clipPath: "polygon(0 0, 35% 0, 50% 50%, 0 200%)",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-4 sm:px-10 max-w-xl">
        <h2
          className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4"
          style={{
            fontSize: "30px",
          }}
        >
          {slide.heading}
        </h2>
        <p
          className="mb-2 text-sm sm:text-lg"
          style={{
            fontSize: "16px",
          }}
        >
          {slide.subText}
        </p>
        {slide.details?.map((line, i) => (
          <p
            key={i}
            className="mb-2 font-semibold text-sm sm:text-lg"
            style={{
              fontSize: "16px",
            }}
          >
            {line}
          </p>
        ))}
        <p className="mb-4 text-sm sm:text-lg" style={{ fontSize: "16px" }}>
          {!slide.details ? null : ""}
        </p>
        <button className="bg-lime-500 text-black font-semibold px-4 py-2 rounded-full hover:bg-lime-600 transition text-sm sm:text-base">
          {slide.buttonText}
        </button>
        <p className="text-xs italic mt-2">{slide.note}</p>
      </div>
    </div>
  );
};

export default SeminarBanner;
