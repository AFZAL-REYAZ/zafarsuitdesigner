// src/components/OfferSection.jsx
import React from "react";
// import offerImage from "../assets/jodhpuri.jpg"; 

export default function OfferSection() {
  return (
    <section className="relative bg-white py-16 flex flex-col items-center text-center">
      {/* Background Image */}
      {/* <img
        src={offerImage}
        alt="Offer Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
      /> */}

      {/* Text Content */}
      <div className="max-w-2xl px-4">
        <h2 className="text-4xl text-gray-700 md:text-5xl font-serif mb-4">
          Limited Time Offer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Don&apos;t miss out on our latest collection. Enjoy a special discount on
          selected items.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition">
          Get 10% Off Today
        </button>
      </div>
    </section>
  );
}
