import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src="/SPILORALOGO1.jpeg" style={{ width: "130px" }} />

            <p className="text-sm text-emerald-200 leading-relaxed">
              Your trusted source for 100% pure, organic spirulina. Cultivated
              with care in pristine waters to bring you nature's most powerful
              superfood.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/spirulina_bhimavaram/"
                className="w-10 h-10 rounded-full bg-emerald-700 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <span className="text-lg">
                  <FaInstagram />
                </span>
              </a>

              <a
                href="https://wa.me/919100057026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-700 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">
                    →
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">
                    →
                  </span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#benefits"
                  className="text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">
                    →
                  </span>
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-emerald-200 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:mr-3 transition-all duration-300">
                    →
                  </span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-emerald-200">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Bhimavaram, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-start space-x-3 text-emerald-200">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a
                  href="tel:+919100057026"
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +91 9100057026
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">
              Order on WhatsApp
            </h3>
            <p className="text-sm text-emerald-200 mb-4">
              Get instant support and place your orders directly via WhatsApp.
            </p>
            <a
              href="https://wa.me/919100057026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-emerald-300">
              © {new Date().getFullYear()} Spilora. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-emerald-300">
              <span>Privacy Policy</span>

              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
