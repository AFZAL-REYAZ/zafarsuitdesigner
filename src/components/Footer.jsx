import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-fuchsia-900 to-cyan-900 text-gray-200 border-t border-black/20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand + social */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white tracking-wide">Zafar Suits<span className="text-pink-500">.</span></h2>
            <p className="mt-6 text-sm leading-relaxed font-light text-gray-300">
              Timeless tailoring and contemporary silhouettes crafted with care. Elevate your style with our bespoke creations.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1B6s1iVwVA/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 inline-flex items-center justify-center rounded-none border border-white/20 hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com/@zafar-l7h?si=61fVGi9jzJ4U63ej"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-10 w-10 inline-flex items-center justify-center rounded-none border border-white/20 hover:border-rose-400 hover:text-rose-400 transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/alijafar.jafar.503?igsh=MWkwcWI1b3o4eXhyOA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 inline-flex items-center justify-center rounded-none border border-white/20 hover:border-fuchsia-400 hover:text-fuchsia-400 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 inline-flex items-center justify-center rounded-none border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h6 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Shop</h6>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-pink-400 transition-colors">Contact</Link>
              </li>
              <li>
                <span className="hover:text-rose-400 transition-colors cursor-default">Sherwani</span>
              </li>
              <li>
                <span className="hover:text-fuchsia-400 transition-colors cursor-default">Indo Western</span>
              </li>
              <li>
                <span className="hover:text-cyan-400 transition-colors cursor-default">Jodhpuri</span>
              </li>
              <li>
                <span className="hover:text-amber-400 transition-colors cursor-default">Bundi Kurta Set</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Support</h6>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/contactus" className="hover:text-pink-400 transition-colors">Customer Care</Link></li>
              <li><a href="#" className="hover:text-fuchsia-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sizing & Fit</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Contact</h6>
            <div className="space-y-6 text-sm font-light">
              <div className="flex items-start gap-4">
                <MdLocationOn className="text-rose-400 text-xl mt-0.5 shrink-0" />
                <p>
                  Chand Tara Dawakhana ke samne,<br />
                  Badwali Chowki, Indore 452001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <MdPhone className="text-fuchsia-400 text-xl shrink-0" />
                <p>+91 91025 48287</p>
              </div>
               <div className="flex items-center gap-4">
                <MdEmail className="text-cyan-400 text-xl shrink-0" />
                <p>support@zafarsuits.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Zafar Suits Designer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
