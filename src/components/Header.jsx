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
    { label: "Log In", path: "/contactus" },
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
              <span
                key={i}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-amber-200 shadow-sm mr-2"
              >
                <span className="mr-2">🔔</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-rose-600">
                  {item}
                </span>
              </span>
            ))}
            {items.map((item, i) => (
              <span
                key={`dup-${i}`}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-amber-200 shadow-sm mr-2"
              >
                <span className="mr-2">🔔</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-rose-600">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-between items-center px-6 lg:px-16 py-4 bg-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-amber-900">
          Zafar Suits Designer
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="hover:text-red-600 transition"
            >
              {link.label}
            </Link>
          ))}
          {/* Cart Icon */}
          {/* <Link to="/cart" className="ml-4">
            <FaShoppingBag className="text-gray-800" size={20} />
          </Link> */}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <Link to="/cart" className="text-gray-700 hover:text-amber-700 transition-colors relative">
            <FaShoppingBag />
          </Link> */}
          <button
            className="text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-amber-700"
            >
              Home
            </Link>
            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-800 font-medium hover:text-red-600"
            >
              <FaShoppingBag /> Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
