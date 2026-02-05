"use client";

import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FaWhatsapp } from "react-icons/fa";
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
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const { addToCart } = useCart();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendToWhatsApp = () => {
    // Validate required fields
    if (!userDetails.name || !userDetails.phone || !userDetails.address || !userDetails.pincode) {
      alert("Please fill in all fields");
      return;
    }

    // Product details
    const productMessage = `${product.name} (Qty: ${quantity}) - ₹${
      product.price * quantity
    }`;

    // User details
    const customerInfo = `%0A%0A*Customer Details:*%0AName: ${encodeURIComponent(userDetails.name)}%0APhone: ${userDetails.phone}%0AAddress: ${encodeURIComponent(userDetails.address)}%0APincode: ${userDetails.pincode}`;

    // Total
    const totalMessage = `%0A%0A*Total: ₹${product.price * quantity}*`;

    const phone = "916302903019"; // Your WhatsApp number

    window.open(
      `https://wa.me/${phone}?text=Hi! I would like to order:%0A%0A${productMessage}${customerInfo}${totalMessage}`,
      "_blank"
    );

    // Reset and close modal
    setShowModal(false);
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      pincode: "",
    });
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

      {/* Modal for User Details */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">
                Enter Your Details
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Order Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-green-800 mb-2">Order Summary</h3>
                <p className="text-gray-700">
                  {product.name} × {quantity}
                </p>
                <p className="text-xl font-bold text-green-600 mt-2">
                  Total: ₹{product.price * quantity}
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Address Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Pincode Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={userDetails.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter pincode"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 rounded-b-2xl space-y-3">
              <button
                onClick={sendToWhatsApp}
                className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <span>📱</span>
                <span>Send Order to WhatsApp</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}