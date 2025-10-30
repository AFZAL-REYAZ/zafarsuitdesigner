import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  {
    image: "/src/assets/Sherwani.jpg",
    title: "Sherwani Collection",
    description: "Elegant traditional attire for special occasions",
    link: "/"
  },
  {
    image: "/src/assets/IndoWestern.jpg",
    title: "Indo Western Collection",
    description: "Perfect fusion of traditional and modern styles",
    link: "/"
  },
  {
    image: "/src/assets/jodhpuri.jpg",
    title: "Jodhpuri Collection",
    description: "Sophisticated suits for the modern gentleman",
    link: "/"
  },
  {
    image: "/src/assets/BundiKurta.jpg",
    title: "Bundi Kurta Set",
    description: "Classic ethnic wear for every celebration",
    link: "/"
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Main Hero Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-amber-100 pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
          >
            <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 rounded-full text-amber-800 font-medium text-sm mb-6">
              Premium Quality Craftsmanship
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight mb-6">
              Elevate Your Style with <span className="text-amber-700 italic">Premium Suits</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Discover our exquisite collection of handcrafted designer suits, tailored to perfection for the modern gentleman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/" className="px-8 py-3 bg-amber-800 text-white font-medium rounded-md hover:bg-amber-900 transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-amber-200">
                Shop Collection <FaArrowRight size={14} />
              </Link>
              <Link to="/contactus" className="px-8 py-3 border-2 border-amber-800 text-amber-800 font-medium rounded-md hover:bg-amber-800 hover:text-white transition-colors duration-300">
                Custom Design
              </Link>
            </div>
            
            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 bg-white p-4 rounded-lg shadow-md max-w-md flex items-start gap-3"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div>
                <p className="text-gray-700 italic text-sm">"The quality and fit of my custom suit exceeded all expectations. Truly exceptional craftsmanship."</p>
                <p className="text-amber-800 font-medium text-sm mt-2">— Rahul Sharma</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/Sherwani.jpg" 
                alt="Premium Suit Collection" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block px-3 py-1 bg-amber-700 rounded-full text-xs font-medium mb-2">FEATURED</div>
                <h3 className="text-2xl font-bold">Signature Collection 2023</h3>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-200 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-300 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-10"
          >
            <div>
              <p className="text-amber-700 font-medium mb-2">EXCLUSIVE COLLECTIONS</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shop Our Top Categories
              </h2>
            </div>
            <Link to="/" className="hidden md:flex items-center text-amber-700 hover:text-amber-900 font-medium">
              View All <FaArrowRight className="ml-2" size={14} />
            </Link>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
              >
                <Link 
                  to={cat.link}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 block h-full"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                {/* Title */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-amber-700 font-medium text-sm">View Collection</span>
                    <FaArrowRight size={12} className="text-amber-700" />
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-amber-800 to-amber-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Your Custom Suit Today</h2>
            <p className="text-lg text-amber-100 max-w-2xl mx-auto mb-8">
              Experience the luxury of a perfectly tailored suit designed to your exact specifications and preferences.
            </p>
            <Link to="/contactus" className="inline-block px-8 py-4 bg-white text-amber-900 font-medium rounded-md hover:bg-amber-100 transition-colors duration-300 shadow-lg">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
