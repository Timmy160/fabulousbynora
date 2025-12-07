import React from "react";

const CategoryBanner = ({ title, image }) => {
  return (
    <div className="relative w-full h-[55vh] min-h-[360px] max-h-[700px] overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center 
                   transition-transform duration-1000 ease-out 
                   group-hover:scale-105 
                   group-active:scale-105"
      />

      {/* Gradient Overlay – stronger on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent 
                      md:from-black/70 md:via-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 px-4 
                      sm:px-6 md:pb-12 md:px-8 lg:pb-16 lg:px-12 xl:px-20">
        
        {/* Title */}
        <h3 className="
          text-3xl xs:text-4xl 
          sm:text-5xl 
          md:text-5xl lg:text-6xl xl:text-7xl 
          font-bold tracking-tight leading-tight 
          font-playfair text-white drop-shadow-2xl 
          max-w-4xl
        ">
          {title}
        </h3>

        {/* Button – no underline, just arrow */}
        <button
          className="
            mt-6 md:mt-8 
            inline-flex items-center gap-3 
            text-white 
            font-nunito font-medium 
            text-lg xs:text-xl md:text-2xl 
            tracking-widest 
            transition-all duration-300 
            hover:text-[#BD007C] 
            active:text-[#BD007C]
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-500/50
          "
          style={{ fontFamily: "Nunito, sans-serif" }}
          aria-label={`View all ${title}`}
        >
          View All
          <span
            aria-hidden="true"
            className="text-xl transition-transform duration-300 group-hover:translate-x-3 
                       group-active:translate-x-3"
          >
            →
          </span>
        </button>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default CategoryBanner;