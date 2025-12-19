import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Banners11_Desktop from "../assets/carousel/Banners11.jpg";
import Banners12_Desktop from "../assets/carousel/Banners12.jpg";
import Banners13_Desktop from "../assets/carousel/Banners13.webp";

const images = [Banners11_Desktop, Banners12_Desktop, Banners13_Desktop];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-2xl">
      {/* Slide track */}
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full flex-shrink-0">
            <img src={img} alt={`carousel-${idx}`} className="w-full h-[60vh] md:h-[85vh] object-cover object-top" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-fuchsia-600/30 to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-12 md:bottom-24 left-6 md:left-20 text-white max-w-2xl animate-fade-in-up">
              <p className="text-sm md:text-base tracking-[0.2em] uppercase text-rose-300 font-medium mb-4">Zafar Suits Designer</p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-8">
                Crafted couture for <br/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-300">your moments</span>
              </h2>
              <div className="flex items-center gap-4">
                <a href="#categories" className="px-8 py-3 rounded-none bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-300">
                  Explore Collection
                </a>
                <a href="/contactus" className="px-8 py-3 rounded-none bg-gradient-to-r from-cyan-500 to-emerald-400 text-white text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-300">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 md:p-4 rounded-full hover:bg-fuchsia-400 hover:text-white hover:border-fuchsia-400 transition-all duration-300 group"
        aria-label="Previous"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 md:p-4 rounded-full hover:bg-fuchsia-400 hover:text-white hover:border-fuchsia-400 transition-all duration-300 group"
        aria-label="Next"
      >
        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              current === idx ? "w-8 h-2 bg-fuchsia-400" : "w-2 h-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
