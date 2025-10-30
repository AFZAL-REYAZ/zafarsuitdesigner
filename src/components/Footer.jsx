import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div>
              <h2 className="text-2xl font-bold">
                <span className="  ml-1 text-white">Zafar Suits Designer</span>
              </h2>
              <p className="text-sm mt-6 text-gray-400">
                Zafar suits designer, All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
  <a
    href="https://www.facebook.com/share/1B6s1iVwVA/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-600 text-2xl"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://youtube.com/@zafar-l7h?si=61fVGi9jzJ4U63ej"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:text-red-600 text-2xl"
  >
    <FaYoutube />
  </a>
  <a
    href="https://www.instagram.com/alijafar.jafar.503?igsh=MWkwcWI1b3o4eXhyOA=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-700 text-2xl"
  >
    <FaInstagram />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-2 font-serif">Quick Links</h6>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
              <Link to="/fleet" className="text-gray-400 hover:text-white">
                Fleet
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-2 font-serif">Services</h6>
            <div className="flex flex-col space-y-2">
              <Link to="/jpg-to-pdf" className="text-gray-400 hover:text-white">
                Sherwani Collection
              </Link>
              <Link to="/pdf-to-jpg" className="text-gray-400 hover:text-white">
                Indo Western Collection
              </Link>
              <Link to="/comp-pdf-img" className="text-gray-400 hover:text-white">
                Jodhpuri Collection
              </Link>
              <Link to="/photgraphy-report" className="text-gray-400 hover:text-white">
                Bundi Kurta Set Collection
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-semibold mb-2 font-serif">Contact Us</h6>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-gray-400" />
                <p className="text-gray-400 text-sm">
                  Chand Tara dawakhana ke samne,
                  Badwali chowki indore 452001
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="text-gray-400" />
                <p className="text-gray-400 text-sm">+91 7351227054</p>
                <p className="text-gray-400 text-sm">+91 8878802784</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="text-gray-400" />
                <p className="text-gray-400 text-sm">zafardesigner339@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zafar suits designer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
