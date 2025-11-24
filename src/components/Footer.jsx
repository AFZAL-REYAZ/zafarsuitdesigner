import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f0d0d] via-[#121212] to-[#1a1414] text-gray-300 mt-auto border-t border-amber-400/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + social */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-amber-300 tracking-wide">Zafar Suits Designer</h2>
            <p className="mt-3 text-sm text-gray-400">
              Timeless tailoring and contemporary silhouettes crafted with care.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1B6s1iVwVA/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com/@zafar-l7h?si=61fVGi9jzJ4U63ej"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/alijafar.jafar.503?igsh=MWkwcWI1b3o4eXhyOA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h6 className="text-lg font-serif font-semibold text-amber-300 mb-3 uppercase tracking-wider">Shop</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-300 transition">Home</Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-amber-300 transition">Contact</Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-amber-300 transition cursor-default">Sherwani</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-amber-300 transition cursor-default">Indo Western</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-amber-300 transition cursor-default">Jodhpuri</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-amber-300 transition cursor-default">Bundi Kurta Set</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-lg font-serif font-semibold text-amber-300 mb-3 uppercase tracking-wider">Support</h6>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contactus" className="hover:text-amber-300 transition">Customer Care</Link></li>
              <li><a href="#" className="hover:text-amber-300 transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">Sizing & Fit</a></li>
              <li><a href="#" className="hover:text-amber-300 transition">Care Instructions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-serif font-semibold text-amber-300 mb-3 uppercase tracking-wider">Contact</h6>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-amber-400 mt-0.5" />
                <p className="text-gray-400">
                  Chand Tara Dawakhana ke samne,<br />
                  Badwali Chowki, Indore 452001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-amber-400" />
                <div className="text-gray-400">+91 7351227054 · +91 8878802784</div>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-amber-400" />
                <p className="text-gray-400">zafardesigner339@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-amber-400/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Newsletter */}
            <div className="w-full md:w-auto md:flex-1">
              <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Subscribe with email"
                  className="flex-1 md:w-96 px-4 py-2 rounded-full bg-[#161616] text-gray-100 placeholder:text-gray-500 border border-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                />
                <Link
                  to="/contactus"
                  className="px-5 py-2 rounded-full bg-amber-400 text-black font-medium hover:bg-amber-300 transition"
                >
                  Subscribe
                </Link>
              </form>
            </div>

            {/* Legal */}
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} <span className="font-serif text-amber-300">Zafar Suits Designer</span>. All rights reserved.
              <span className="mx-2">•</span>
              <Link to="/terms" className="hover:text-amber-300 transition">Terms</Link>
              <span className="mx-2">•</span>
              <Link to="/privacy" className="hover:text-amber-300 transition">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
