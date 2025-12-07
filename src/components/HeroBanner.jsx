import React from "react";

const HeroBanner = ({ title, image }) => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden ">
      {/* Full background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content — centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Title */}
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "clamp(2.5rem, 8vw, 60px)",   // ← Responsive but never bigger than your original 60px
            lineHeight: "100%",
            letterSpacing: "0",
            textAlign: "center",
          }}
          className="text-white tracking-tight mb-6 max-w-full"
        >
          {title}
        </h2>

        {/* Button with hover color change */}
        <button
          style={{
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0",
          }}
          className="text-white text-base md:text-lg tracking-widest border-b-2 border-white pb-1 inline-flex items-center gap-2
                     transition-all duration-300 cursor-pointer
                     hover:text-[#BD007C] hover:border-[#BD007C]"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;