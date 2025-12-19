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
// import jodharmani3 from "../assets/bestseller/jodharmani3.jpeg";
import greenjodhpuri1 from "../assets/bestseller/greenjodhpuri1.jpeg";
import greenjodhpuri2 from "../assets/bestseller/greenjodhpuri2.jpeg";
import greenjodhpuri3 from "../assets/bestseller/greenjodhpuri3.jpeg";
import blubalbed1 from "../assets/bestseller/blubalbed1.jpeg";
import blubalbed2 from "../assets/bestseller/blubalbed2.jpeg";
// import greenjodhpuri3 from "../assets/bestseller/greenjodhpuri3.jpeg";
import floralbird2 from "../assets/bestseller/floralbird2.jpeg";
import floralbird3 from "../assets/bestseller/floralbird3.jpeg";
import floralbird4 from "../assets/bestseller/floralbird4.jpeg";
import elegantlot1 from "../assets/bestseller/elegantlot1.jpeg";
import elegantlot2 from "../assets/bestseller/elegantlot2.jpeg";
import elegantlot3 from "../assets/bestseller/elegantlot3.jpeg";
import kurtapajama1 from "../assets/bestseller/kurtapajama1.jpeg";
import kurtapajama2 from "../assets/bestseller/kurtapajama2.jpeg";
import kurtapajama3 from "../assets/bestseller/kurtapajama3.jpeg";
import kurtapajama4 from "../assets/bestseller/kurtapajama4.jpeg";
import kurtapajama5 from "../assets/bestseller/kurtapajama5.jpeg";
import kurtapajama6 from "../assets/bestseller/kurtapajama6.jpeg";
import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
import kurtapajama8 from "../assets/bestseller/kurtapajama8.jpeg";
import kurtapajama9 from "../assets/bestseller/kurtapajama9.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";
// import kurtapajama7 from "../assets/bestseller/kurtapajama7.jpeg";

import kurtapajama10 from "../assets/bestseller/kurtapajama10.jpeg";
import kurtapajama11 from "../assets/bestseller/kurtapajama11.jpeg";
import kurtapajama12 from "../assets/bestseller/kurtapajama12.jpeg";
import kurtapajama13 from "../assets/bestseller/kurtapajama13.jpeg";
import kurtapajama14 from "../assets/bestseller/kurtapajama14.jpeg";
import kurtapajama15 from "../assets/bestseller/kurtapajama15.jpeg";
import kurtapajama16 from "../assets/bestseller/kurtapajama16.jpeg";
import kurtapajama17 from "../assets/bestseller/kurtapajama17.jpeg";
// import kurtapajama18 from "../assets/bestseller/kurtapajama18.jpeg";

// import OfferSection from "../components/OfferSection";
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
    images: [floralbird2,floralbird3, floralbird4],
    title: "Hand Painted Floral Bird Designer Jacket with Matching Pant | Premium Cream Co-Ord Set",
    oldPrice: "15,999",
    price: "12,999",
    sale: true,
  },
  {
    images: [elegantlot1,elegantlot2, elegantlot3],
    title: "Men's wear suits henting 4 pocket black colour and black batun luxury ELEGANT coat and trouser",
    oldPrice: "10,999",
    price: "8,999",
    sale: true,
  },
  {
    images: [kurtapajama1,kurtapajama2],
    title: "Men's wear kurta pajama and party wear kurta pajama ELEGANT wedding Designer",
    oldPrice: "6,999",
    price: "4,999",
    sale: true,
  },
  {
    images: [kurtapajama3,kurtapajama4, kurtapajama5,kurtapajama6],
    title: "Men's wear kurta pajama set with designer fabric ELEGANT wedding Designer party wear kurta Nice quality and size perfect",
    oldPrice: "6,999",
    price: "4,999",
    sale: true,
  },
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
    images: [kurtapajama7,kurtapajama8],
    title: "Kurta pajama nice luxury wedding anniversary kura designer fabric 1 number quality",
    oldPrice: "6,999",
    price: "5,999",
    sale: true,
  },
  {
    images: [kurtapajama9],
    title: "Men's wear kurta pajama set fabric work designer  and colour black  kurta and white. Payjama",
    oldPrice: "9,999",
    price: "6,999",
    sale: true,
  },
  {
    images: [kurtapajama10,kurtapajama11, kurtapajama12,kurtapajama13,kurtapajama14],
    title: "Men's wear kurta pajama fabric designer nice looking good quality",
    oldPrice: "5,999",
    price: "3,999",
    sale: true,
  },
  {
    images: [kurtapajama15,kurtapajama16, kurtapajama17],
    title: "Men's wear kurta pajama fabric designer nice looking good quality",
    oldPrice: "5,999",
    price: "3,999",
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
      {/* <OfferSection /> */}

      {/* Shop by Occasion */}
      <section id="occasions" className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-6 md:px-12 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-tr from-fuchsia-300 to-cyan-300 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-pink-600 font-bold tracking-widest uppercase text-sm">Curated For You</span>
            <h2 className="text-3xl md:text-4xl font-serif text-indigo-900 mt-2">Shop by Occasion</h2>
            <div className="w-28 h-1 bg-gradient-to-r from-fuchsia-500 to-amber-400 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {occasions.map((o) => (
              <button
                key={o}
                onClick={goToBest}
                className="px-8 py-3 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 text-white font-semibold tracking-wide shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase text-sm rounded"
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section id="featured" className="py-20 px-6 md:px-12 bg-gradient-to-br from-amber-50 via-sky-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Sherwani Spotlight */}
            <div className="group relative aspect-[16/9] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded">
              <img src={sherwaniImg} alt="Sherwani" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-fuchsia-500/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Sherwani Spotlight</h3>
                <p className="text-gray-200 mb-6 max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">Tailored elegance for weddings and grand celebrations. Experience the royal comfort.</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <button
                    onClick={() => showProductDetail(products[3])}
                    className="bg-gradient-to-r from-amber-400 to-pink-500 text-white px-6 py-2 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Indo-Western Spotlight */}
            <div className="group relative aspect-[16/9] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 rounded">
              <img src={indoWesternImg} alt="Indo Western" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-indigo-500/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Indo-Western Fusion</h3>
                <p className="text-gray-200 mb-6 max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">A perfect blend of tradition and modern style. Crafted for the contemporary man.</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <button
                    onClick={() => showProductDetail(products[2])}
                    className="bg-gradient-to-r from-sky-500 to-emerald-400 text-white px-6 py-2 font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-fuchsia-600 font-bold tracking-widest uppercase text-sm">Collections</span>
            <h2 className="text-3xl md:text-5xl font-serif text-indigo-900 mt-2">Explore Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 rounded"
                onClick={goToBest}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-700/40 via-purple-600/30 to-cyan-600/30 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4 border border-white/30 bg-white/10 backdrop-blur-sm w-4/5 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-fuchsia-400">
                    <h3 className="text-white font-serif text-xl tracking-wide group-hover:text-amber-200 transition-colors">{cat.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="best" className="py-20 px-6 md:px-12 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Favorites</span>
            <h2 className="text-3xl md:text-5xl font-serif text-indigo-900 mt-2">Best Sellers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-none shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-transparent hover:border-pink-200"
                onClick={() => showProductDetail(product)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.sale && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">Sale</span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <button className="bg-gradient-to-r from-sky-500 to-emerald-400 text-white px-6 py-3 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                       Quick View
                     </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-medium text-indigo-900 line-clamp-2 min-h-[3.5rem] group-hover:text-pink-600 transition-colors">{product.title}</h3>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <span className="text-sm text-gray-400 line-through decoration-gray-400">Rs. {product.oldPrice}</span>
                    <span className="text-xl font-bold text-indigo-900">Rs. {product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitsSection />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919102548287"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M16.862 14.153c-.275-.138-1.63-.805-1.883-.897-.253-.092-.437-.138-.62.138-.184.275-.713.897-.873 1.082-.161.184-.322.207-.597.069-.275-.138-1.161-.427-2.213-1.362-.818-.728-1.37-1.627-1.531-1.902-.161-.275-.017-.424.121-.561.124-.123.275-.322.413-.482.138-.161.184-.276.276-.459.047-.092.023-.172-.011-.248-.034-.075-.62-1.493-.85-2.046-.224-.538-.452-.465-.62-.473-.161-.007-.345-.009-.529-.009-.184 0-.482.069-.737.345-.253.275-.966.944-.966 2.303 0 1.359 1 2.674 1.14 2.861.138.184 1.965 3.003 4.762 4.086.666.255 1.184.407 1.59.522.667.172 1.276.148 1.758.09.536-.064 1.63-.665 1.86-1.308.23-.643.23-1.193.161-1.308-.069-.115-.253-.184-.529-.322z"/>
        </svg>
      </a>
    </div>
  );
}
