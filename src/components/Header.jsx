// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const items = [
    "Free Delivery All Over India",
    "|",
    "10% Diwali Offer",
    "|",
    "New Arrivals",
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Contact us", path: "/contactus" },
    { label: "Log In", path: "/" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 w-full shadow-sm z-50">
      {/* Top bar (seamless infinite loop) */}


<div className="bg-[#F1ECE7] py-2 overflow-hidden">
      <style>{`
        .track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-30%); }
        }
      `}</style>

      <div className="flex">
        <div className="track text-sm font-medium text-gray-900 whitespace-nowrap">
          {/* First set of coaches */}
          {items.map((item, i) => (
            <span key={i}>{item}</span>
          ))}

          {/* Duplicate set so loop is seamless */}
          {items.map((item, i) => (
            <span key={i + "dup"}>{item}</span>
          ))}
          {/* Duplicate set so loop is seamless */}
          {items.map((item, i) => (
            <span key={i + "dup"}>{item}</span>
          ))}
        </div>
      </div>
    </div>




      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 bg-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-gray-800"
        >
          Zafar Suits Designer
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
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
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 font-medium hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-800 font-medium hover:text-red-600"
          >
            <FaShoppingBag /> Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
