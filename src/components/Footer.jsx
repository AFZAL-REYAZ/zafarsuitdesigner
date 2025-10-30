import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };
  
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white pt-16 pb-8 mt-auto relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-amber-900/20 to-amber-700/20 p-8 rounded-lg mb-12 backdrop-blur-sm border border-amber-800/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-300">Stay updated with our latest collections and exclusive offers</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:border-amber-500 text-white"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-amber-700 hover:bg-amber-600 transition-colors rounded-md font-medium flex items-center justify-center"
              >
                Subscribe <FaArrowRight className="ml-2" size={14} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                <span className="font-serif text-amber-500">Zafar</span> <span className="font-light">Suits Designer</span>
              </h2>
              <p className="text-sm mt-4 text-gray-400 leading-relaxed">
                Crafting premium suits with exceptional quality and tailoring since 2005. Your style is our passion.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/1B6s1iVwVA/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://youtube.com/@zafar-l7h?si=61fVGi9jzJ4U63ej"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/alijafar.jafar.503?igsh=MWkwcWI1b3o4eXhyOA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-amber-500 uppercase tracking-wider">Quick Links</h6>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Services
              </Link>
              <Link to="/contactus" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Contact Us
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-amber-500 uppercase tracking-wider">Collections</h6>
            <div className="flex flex-col space-y-3">
              <Link to="/collection/sherwani" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Sherwani Collection
              </Link>
              <Link to="/collection/indo-western" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Indo Western Collection
              </Link>
              <Link to="/collection/jodhpuri" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Jodhpuri Collection
              </Link>
              <Link to="/collection/bundi-kurta" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                <span className="mr-2 text-xs">►</span> Bundi Kurta Set Collection
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-amber-500 uppercase tracking-wider">Contact Us</h6>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Chand Tara dawakhana ke samne,
                  <br />Badwali chowki indore 452001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="text-amber-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+91 7351227054</p>
                  <p className="text-gray-300 text-sm">+91 8878802784</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-amber-500 flex-shrink-0" />
                <p className="text-gray-300 text-sm">zafardesigner339@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zafar Suits Designer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-500 text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-400 hover:text-amber-500 text-sm">Terms & Conditions</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-amber-500 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
