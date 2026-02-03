"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <>
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-gray-700 font-semibold">Quantity:</label>
        <div className="flex items-center border-2 border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-6 py-2 font-bold text-lg text-gray-600 hover:bg-gray-100">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl ${
            isAdding
              ? "bg-green-500 text-white"
              : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white transform hover:scale-105"
          }`}
        >
          <ShoppingCart size={24} />
          <span>{isAdding ? "Added to Cart!" : "Add to Cart"}</span>
        </button>

        <a
          href="https://wa.me/916302903019"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl transform hover:scale-105"
        >
          <span>📱</span>
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </>
  );
}
