import React from "react";

const categories = [
  {
    image: "/images/sherwani.jpg",
    title: "Sherwani Collection",
  },
  {
    image: "/images/indo-western.jpg",
    title: "Indo Western Collection",
  },
  {
    image: "/images/jodhpuri.jpg",
    title: "Jodhpuri Collection",
  },
  {
    image: "/images/bundi-kurta.jpg",
    title: "Bundi Kurta Set Collection",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#f5e1ce] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Shop our top categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {cat.title}
                </h3>
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
