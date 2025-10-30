import React from "react";
import Carousel from "../components/Carousel";
import sherwaniImg from "../assets/Sherwani.jpg";
import indoWesternImg from "../assets/IndoWestern.jpg";
import jodhpuriImg from "../assets/jodhpuri.jpg";
import bundiKurtaImg from "../assets/BundiKurta.jpg";

import PrintedCottonGreen1 from "../assets/bestseller/Printed-Cotton-Kurta-Green.jpeg";
import ChikanKariKurtaYellow1 from "../assets/bestseller/ChikanKariKurta-Yellow.avif";
import BundiKurta1 from "../assets/bestseller/bundiKurta.avif";
import Sherwani1 from "../assets/bestseller/sherwani.jpg";
import OfferSection from "../components/OfferSection";
import BenefitsSection from "../components/BenefitsSection";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    image: sherwaniImg,
    title: "Sherwani Collection",
  },
  {
    image: indoWesternImg,
    title: "Indo Western Collection",
  },
  {
    image: jodhpuriImg,
    title: "Jodhpuri Collection",
  },
  {
    image: bundiKurtaImg,
    title: "Bundi Kurta Set Collection",
  },
];

const products = [
  {
    images: [PrintedCottonGreen1, ChikanKariKurtaYellow1, BundiKurta1],
    title: "Printed Cotton Kurta - Green",
    oldPrice: "3,599.00",
    price: "2,599.00",
    sale: true,
  },
  {
    images: [ChikanKariKurtaYellow1, ChikanKariKurtaYellow1, ChikanKariKurtaYellow1],
    title: "Chikan Kari Kurta - Yellow",
    oldPrice: "3,399.00",
    price: "2,399.00",
    sale: true,
  },
  {
    images: [BundiKurta1, BundiKurta1, BundiKurta1],
    title: "Bundi Kurta",
    oldPrice: "3,399.00",
    price: "2,399.00",
    sale: true,
  },
  {
    images: [Sherwani1, Sherwani1, Sherwani1],
    title: "Sherwani",
    oldPrice: "3,399.00",
    price: "2,399.00",
    sale: true,
  },
];




export default function Landing() {

  const navigate = useNavigate();

  const showProductDetail = (product) => {
    navigate("/ProductDetail", { state: { product } });
  };
  return (
    <div className="font-sans mt-24">
      {/* ✅ Carousel */}
      <Carousel />
      <OfferSection />
      {/* ✅ Hero Categories */}
      <section className="bg-[#F1ECE7] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Shop our top categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
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



      {/* ✅ Product Grid */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                onClick={() => showProductDetail(product)}
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={product.images[0]} // ✅ show the first image
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  {product.sale && (
                    <span className="absolute top-3 right-3 bg-white text-gray-900 text-sm px-2 py-1 rounded">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 line-through text-sm">
                    Rs. {product.oldPrice}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    From Rs. {product.price}
                  </p>
                  <button className="mt-4 px-6 py-2 border rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition">
                    Choose options
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BenefitsSection />
      
      {/* ✅ WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/919102548287" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M16.862 14.153c-.275-.138-1.63-.805-1.883-.897-.253-.092-.437-.138-.62.138-.184.275-.713.897-.873 1.082-.161.184-.322.207-.597.069-.275-.138-1.161-.427-2.213-1.362-.818-.728-1.37-1.627-1.531-1.902-.161-.275-.017-.424.121-.561.124-.123.275-.322.413-.482.138-.161.184-.276.276-.459.092-.184.046-.345-.023-.483-.069-.138-.62-1.496-.849-2.048-.224-.537-.453-.465-.62-.474l-.53-.009c-.184 0-.482.069-.735.345s-.966.943-.966 2.297 1.034 2.667 1.178 2.852c.138.184 2.036 3.11 4.937 4.363.69.298 1.229.476 1.65.61.693.22 1.323.189 1.821.115.555-.083 1.63-.667 1.861-1.311.23-.644.23-1.195.161-1.311-.068-.115-.252-.184-.528-.322m-4.817 6.743h-.004a9.867 9.867 0 01-5.032-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.514-5.232c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.825 9.825 0 012.896 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.041 0C5.495 0 .16 5.335.157 11.881c0 2.096.547 4.142 1.588 5.947L.057 24l6.305-1.654a11.868 11.868 0 005.68 1.449h.005c6.546 0 11.881-5.335 11.884-11.881 0-3.176-1.237-6.162-3.474-8.399" />
        </svg>
      </a>

    </div>
  );
}
