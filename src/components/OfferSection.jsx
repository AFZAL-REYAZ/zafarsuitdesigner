// src/components/OfferSection.jsx
import React from "react";
// import offerImage from "../assets/jodhpuri.jpg"; 

export default function OfferSection() {
  return (
    <section className="relative bg-royal-900 py-20 flex flex-col items-center text-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold-400/30 -translate-x-4 -translate-y-4"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold-400/30 translate-x-4 translate-y-4"></div>
      
      {/* Text Content */}
      <div className="relative max-w-3xl px-6 z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide">
          Limited Time <span className="text-gold-400 italic">Offer</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Don&apos;t miss out on our latest collection. Enjoy a special discount on
          selected items crafted for perfection.
        </p>
        <button className="bg-gold-400 text-royal-900 px-10 py-4 rounded-none text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-royal-900 transition-all duration-300 shadow-lg shadow-gold-400/20">
          Get 10% Off Today
        </button>
      </div>
    </section>
  );
}
