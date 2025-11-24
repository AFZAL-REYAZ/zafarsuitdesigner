import React from "react";
import Carousel from "../components/Carousel";
import sherwaniImg from "../assets/Sherwani.jpg";
import indoWesternImg from "../assets/IndoWestern.jpg";
import jodhpuriImg from "../assets/jodhpuri.jpg";
import bundiKurtaImg from "../assets/BundiKurta.jpg";

import jodhpuri1 from "../assets/bestseller/jodhpuri1.jpeg";
import jodhpuri2 from "../assets/bestseller/jodhpuri2.jpeg";
import jodhpuri3 from "../assets/bestseller/jodhpuri3.jpeg";
import jodharmani1 from "../assets/bestseller/jodharmani1.jpeg";
import jodharmani2 from "../assets/bestseller/jodharmani2.jpeg";
import jodharmani3 from "../assets/bestseller/jodharmani3.jpeg";
import greenjodhpuri1 from "../assets/bestseller/greenjodhpuri1.jpeg";
import greenjodhpuri2 from "../assets/bestseller/greenjodhpuri2.jpeg";
import greenjodhpuri3 from "../assets/bestseller/greenjodhpuri3.jpeg";
import blubalbed1 from "../assets/bestseller/blubalbed1.jpeg";
import blubalbed2 from "../assets/bestseller/blubalbed2.jpeg";
// import greenjodhpuri3 from "../assets/bestseller/greenjodhpuri3.jpeg";

import OfferSection from "../components/OfferSection";
import BenefitsSection from "../components/BenefitsSection";
import { useNavigate } from "react-router-dom";

const categories = [
  { image: sherwaniImg, title: "Sherwani Collection" },
  { image: indoWesternImg, title: "Indo Western Collection" },
  { image: jodhpuriImg, title: "Jodhpuri Collection" },
  { image: bundiKurtaImg, title: "Bundi Kurta Set Collection" },
];

const products = [
  {
    images: [jodhpuri2,jodhpuri3, jodhpuri1],
    title: "Handcrafted Designer Black Jodh Puri Suit",
    oldPrice: "19,999",
    price: "15,999",
    sale: true,
  },
  {
    images: [jodharmani1, jodharmani2],
    title: "Handcrafted Jodhpur black Armani fabric",
    oldPrice: "19,999",
    price: "15,999",
    sale: true,
  },
  {
    images: [greenjodhpuri1, greenjodhpuri2, greenjodhpuri3],
    title: "Handcrafted Jodhpur black Armani fabric",
    oldPrice: "19,999",
    price: "15,999",
    sale: true,
  },
  {
    images: [blubalbed1, blubalbed2],
    title: "Blu balbed jacket golden colour",
    oldPrice: "16,999.00",
    price: "11,999",
    sale: true,
  },
];

const occasions = ["Wedding", "Sangeet", "Reception", "Festive", "Casual"];

export default function Landing() {
  const navigate = useNavigate();

  const showProductDetail = (product) => {
    navigate("/ProductDetail", { state: { product } });
  };

  const goToBest = () => {
    const el = document.getElementById("best");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans mt-24">
      {/* Hero Carousel */}
      <Carousel />

      {/* Offer strip */}
      <OfferSection />

      {/* Shop by Occasion */}
      <section id="occasions" className="bg-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Shop by occasion</h2>
            <a href="#categories" className="hidden md:inline text-sm text-gray-700 hover:text-gray-900">Browse categories →</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {occasions.map((o) => (
              <button
                key={o}
                onClick={goToBest}
                className="px-4 py-2 rounded-full border border-gray-300 bg-gradient-to-br from-[#F6F3EE] to-white text-gray-900 hover:bg-gray-900 hover:text-white transition shadow-sm"
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section id="featured" className="py-8 md:py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sherwani Spotlight */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <img src={sherwaniImg} alt="Sherwani" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="relative z-10 p-6 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold">Sherwani Spotlight</h3>
                <p className="mt-2 text-sm md:text-base opacity-90">Tailored elegance for weddings and grand celebrations.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => showProductDetail(products[3])}
                    className="px-5 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
                  >
                    Explore Sherwani
                  </button>
                  <a href="#categories" className="px-5 py-2 rounded-full border border-white/60 hover:bg-white/10 transition">
                    Browse categories
                  </a>
                </div>
              </div>
            </div>

            {/* Indo Western Spotlight */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <img src={indoWesternImg} alt="Indo Western" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="relative z-10 p-6 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold">Indo Western Edit</h3>
                <p className="mt-2 text-sm md:text-base opacity-90">Contemporary silhouettes with classic craftsmanship.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => showProductDetail(products[1])}
                    className="px-5 py-2 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition shadow"
                  >
                    Explore Indo Western
                  </button>
                  <a href="#best" className="px-5 py-2 rounded-full border border-white/60 hover:bg-white/10 transition">
                    View best sellers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-[#F1ECE7] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Shop our top categories</h2>
            <a href="#best" className="hidden md:inline text-sm text-gray-700 hover:text-gray-900">View best sellers →</a>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden bg-gradient-to-br from-[#F6F3EE] to-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{cat.title}</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="best" className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Best Sellers</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden ring-1 ring-gray-200 bg-gradient-to-br from-[#F6F3EE] to-white shadow-sm hover:shadow-lg transition"
                onClick={() => showProductDetail(product)}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.sale && (
                    <span className="absolute top-3 right-3 bg-white/90 text-gray-900 text-xs px-2 py-1 rounded-full shadow">Sale</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-sm text-gray-500 line-through">Rs. {product.oldPrice}</span>
                    <span className="text-lg font-semibold text-gray-900">Rs. {product.price}</span>
                  </div>
                  <button className="mt-4 w-full px-6 py-2 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white transition">
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitsSection />

      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/919102548287"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg ring-1 ring-green-400/40 hover:bg-green-600 transition"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M16.862 14.153c-.275-.138-1.63-.805-1.883-.897-.253-.092-.437-.138-.62.138-.184.275-.713.897-.873 1.082-.161.184-.322.207-.597.069-.275-.138-1.161-.427-2.213-1.362-.818-.728-1.37-1.627-1.531-1.902-.161-.275-.017-.424.121-.561.124-.123.275-.322.413-.482.138-.161.184-.276.276-.459.047-.092.023-.172-.011-.248-.034-.075-.62-1.493-.85-2.046-.224-.538-.452-.465-.62-.473-.161-.007-.345-.009-.529-.009-.184 0-.482.069-.737.345-.253.275-.966.944-.966 2.303 0 1.359 1 2.674 1.14 2.861.138.184 1.965 3.003 4.762 4.086.666.255 1.184.407 1.59.522.667.172 1.276.148 1.758.09.536-.064 1.63-.665 1.86-1.308.23-.643.23-1.193.161-1.308-.069-.115-.253-.184-.529-.322z"/>
        </svg>
      </a>
    </div>
  );
}
