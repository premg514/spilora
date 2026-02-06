"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (sum: any, item: { quantity: any }) => sum + (item.quantity || 1),
    0,
  );

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 text-white shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img src="/SPILORALOGO1.jpeg" style={{width:"130px"}}/>
            </div>  
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/#products"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="/#benefits"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium"
            >
              Benefits
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-emerald-200 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingCart size={20} />
              <span className="font-semibold">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Cart Icon */}
          <Link
            href="/cart"
            className="md:hidden relative p-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fadeIn">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 hover:bg-emerald-700 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/#products"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 hover:bg-emerald-700 rounded-lg transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              href="/#benefits"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 hover:bg-emerald-700 rounded-lg transition-colors duration-300"
            >
              Benefits
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 hover:bg-emerald-700 rounded-lg transition-colors duration-300"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
