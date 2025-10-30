// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingBag, FaSearch, FaUser, FaRegHeart } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const items = [
    "Free Delivery All Over India",
    "|",
    "10% Diwali Offer",
    "|",
    "New Arrivals",
    "|",
    "Premium Quality Fabrics",
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Contact us", path: "/contactus" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-950 text-white py-2 overflow-hidden">
        <style>{`
          .track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-30%); }
          }
        `}</style>

        <div className="flex justify-center">
          <div className="track text-sm font-medium whitespace-nowrap">
            {/* First set of announcements */}
            {items.map((item, i) => (
              <span key={i} className="mx-2">{item}</span>
            ))}

            {/* Duplicate set for seamless loop */}
            {items.map((item, i) => (
              <span key={i + "dup"} className="mx-2">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 lg:px-16 py-4 bg-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider text-amber-900"
        >
          <span className="font-serif">Zafar</span> <span className="text-amber-700 font-light">Suits Designer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-8 text-gray-800 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-amber-700 transition-colors duration-300 relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          {/* Action Icons */}
          {/* <div className="flex items-center ml-8 space-x-5">
            <button 
              className="text-gray-700 hover:text-amber-700 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FaSearch size={18} />
            </button>
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition-colors">
              <FaRegHeart size={18} />
            </Link>
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition-colors">
              <FaUser size={18} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-amber-700 transition-colors relative">
              <FaShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </Link>
          </div> */}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-amber-700 transition-colors relative">
            <FaShoppingBag size={18} />
            <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Link>
          <button
            className="text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 animate-fadeIn">
          <div className="max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              autoFocus
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-amber-700"
              onClick={() => setSearchOpen(false)}
            >
              <FaTimes size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-5 absolute w-full">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 font-medium hover:text-amber-700 border-b border-gray-100 pb-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-800 font-medium hover:text-amber-700">
              <FaUser /> Account
            </Link>
            <Link to="/" className="flex items-center gap-2 text-gray-800 font-medium hover:text-amber-700">
              <FaRegHeart /> Wishlist
            </Link>
            <button 
              className="text-gray-800 hover:text-amber-700"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
            >
              <FaSearch size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
