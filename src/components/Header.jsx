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
    "10% Diwali Offer",
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
        scrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : "bg-white"
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 py-2 border-b border-amber-200/50 shadow-sm overflow-hidden">
        <style>{`
          .track {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: marquee 12s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-35%); }
          }
        `}</style>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="track text-sm font-semibold whitespace-nowrap text-amber-900">
            {items.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-serif font-semibold text-gray-900">
          Zafar Suits Designer
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} className="text-gray-700 hover:text-gray-900 transition">
              {l.label}
            </Link>
          ))}
          <Link to="/ProductDetail" className="relative">
            <FaShoppingBag className="text-gray-700 hover:text-gray-900" />
          </Link>
        </nav>
        <button
          className="md:hidden p-2 rounded-md border border-gray-200"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className="text-gray-700" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/ProductDetail" className="text-gray-700" onClick={() => setMenuOpen(false)}>
              Shop
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
