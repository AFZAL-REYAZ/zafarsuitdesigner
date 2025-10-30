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
    <section className="bg-[#FAFAF5] py-16 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
        Our Benefits
      </h2>
      <p className="text-lg text-gray-700 mb-12">
        Choose us for unbeatable style, quality, and comfort in every hat
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="text-left">
            <h3 className="text-xl font-semibold text-green-900 mb-2">
              {benefit.id} {benefit.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
