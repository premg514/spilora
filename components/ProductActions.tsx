"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import WhatsAppOrderModal from "@/components/WhatappOrderModal";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  // Calculate totals with shipping
  const subtotal = product.price * quantity;
  const shipping = 150;
  const total = subtotal + shipping;

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleWhatsAppClick = () => {
    setShowModal(true);
  };

  const sendToWhatsApp = (userDetails: UserDetails) => {
    // Product details
    const productMessage = `${product.name} (Qty: ${quantity}) - ₹${subtotal}`;

    // User details
    const customerInfo = `%0A%0A*Customer Details:*%0AName: ${encodeURIComponent(
      userDetails.name
    )}%0APhone: ${userDetails.phone}%0AAddress: ${encodeURIComponent(
      userDetails.address
    )}%0APincode: ${userDetails.pincode}`;

    // Total with shipping
    const totalMessage = `%0A%0ASubtotal: ₹${subtotal}%0AShipping: ₹${shipping}%0A*Total: ₹${total}*`;

    const phone = "919100057026"; // Your WhatsApp number

    window.open(
      `https://wa.me/${phone}?text=Hi! I would like to order:%0A%0A${productMessage}${customerInfo}${totalMessage}`,
      "_blank"
    );

    // Close modal
    setShowModal(false);
  };

  // Order Summary Component
  const orderSummary = (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-green-800 mb-2">Order Summary</h3>
      <p className="text-gray-700">
        {product.name} × {quantity}
      </p>
      <div className="border-t border-green-300 mt-3 pt-2 space-y-1 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal:</span>
          <span className="font-semibold">₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping:</span>
          <span className="font-semibold">
            {`₹${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-base font-bold text-green-700 pt-1">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );

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
          <span className="px-6 py-2 font-bold text-lg text-gray-600 hover:bg-gray-100">
            {quantity}
          </span>
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

        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl transform hover:scale-105"
        >
          <span><FaWhatsapp size={26}/></span>
          <span>Order via WhatsApp</span>
        </button>
      </div>

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        orderSummary={orderSummary}
        onSubmit={sendToWhatsApp}
      />
    </>
  );
}