// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    "Free Delivery All Over India",
    "10% Christmas Offer",
    "New Arrivals",
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contactus" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white/95 backdrop-blur-md" : "bg-white"
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-fuchsia-600 via-orange-500 to-emerald-500 py-2.5 overflow-hidden">
        <style>{`
          .track {
            display: flex;
            gap: 40px;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="track text-xs md:text-sm font-medium tracking-wider text-white uppercase">
            {/* Duplicate items for smoother infinite scroll */}
            {[...items, ...items, ...items].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-indigo-900 tracking-tight">
          Zafar Suits<span className="text-pink-600">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link 
              key={l.path} 
              to={l.path} 
              className="text-xs font-bold uppercase tracking-widest text-indigo-900 hover:text-fuchsia-600 transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/ProductDetail" className="relative group">
            <FaShoppingBag className="text-indigo-900 group-hover:text-fuchsia-600 transition-colors duration-300 text-lg" />
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-indigo-900 hover:text-fuchsia-600 transition"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => (
              <Link 
                key={l.path} 
                to={l.path} 
                className="text-sm font-bold uppercase tracking-widest text-indigo-900 hover:text-fuchsia-600" 
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link 
              to="/ProductDetail" 
              className="text-sm font-bold uppercase tracking-widest text-indigo-900 hover:text-fuchsia-600" 
              onClick={() => setMenuOpen(false)}
            >
              Shop Collection
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
