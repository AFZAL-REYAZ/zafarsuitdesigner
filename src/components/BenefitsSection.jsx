// src/components/BenefitsSection.jsx
import React from "react";

const benefits = [
  {
    id: "01",
    title: "Quality",
    description:
      "We offer a diverse selection of high-quality hats sourced from top designers and independent artists, ensuring unique and premium styles.",
  },
  {
    id: "02",
    title: "Variety",
    description:
      "From wide-brimmed statement hats to trendy beanies, we provide an extensive range of hat styles to suit all preferences and occasions.",
  },
  {
    id: "03",
    title: "Expertise",
    description:
      "Our knowledgeable staff is dedicated to offering personalized style advice, helping you find the perfect hat that complements your unique look.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 text-center border-t border-gray-100">
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-900 mb-6">
          The Zafar Difference
        </h2>
        <p className="text-lg text-gray-500 font-light">
          Choose us for unbeatable style, quality, and comfort in every piece.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="text-left p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gold-200">
            <span className="block text-5xl font-serif text-gold-300 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
              {benefit.id}
            </span>
            <h3 className="text-xl font-bold text-royal-900 mb-4 uppercase tracking-wider">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
