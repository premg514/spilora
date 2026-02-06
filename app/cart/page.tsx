"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import WhatsAppOrderModal from "@/components/WhatappOrderModal";

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [showModal, setShowModal] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 150;
  const total = subtotal + shipping;

  const handleWhatsAppClick = () => {
    setShowModal(true);
  };

  const sendToWhatsApp = (userDetails: UserDetails) => {
    const message = cart
      .map(
        (item) =>
          `${item.name} (Qty: ${item.quantity}) - ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");

    // User details
    const customerInfo = `%0A%0A*Customer Details:*%0AName: ${encodeURIComponent(
      userDetails.name
    )}%0APhone: ${userDetails.phone}%0AAddress: ${encodeURIComponent(
      userDetails.address
    )}%0APincode: ${userDetails.pincode}`;

    const totalMessage = `%0A%0ASubtotal: ₹${subtotal}%0AShipping: ₹${shipping}%0A*Total: ₹${total}*`;
    const phone = "919100057026";

    window.open(
      `https://wa.me/${phone}?text=Hi! I would like to order:%0A%0A${message}${customerInfo}${totalMessage}`,
      "_blank"
    );

    // Close modal
    setShowModal(false);
  };

  // Order Summary Component for Modal
  const orderSummary = (
    <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mb-4">
      <h3 className="font-semibold text-green-800 mb-2 text-sm md:text-base">Order Summary</h3>
      <div className="space-y-1 text-xs md:text-sm text-gray-700 mb-3">
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} × {item.quantity} - ₹{item.price * item.quantity}
          </p>
        ))}
      </div>
      <div className="border-t border-green-300 mt-3 pt-2 space-y-1 text-xs md:text-sm">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal:</span>
          <span className="font-semibold">₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping:</span>
          <span className="font-semibold">₹{shipping}</span>
        </div>
        <div className="flex justify-between text-sm md:text-base font-bold text-green-700 pt-1">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 md:px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
            <ShoppingBag size={48} className="text-emerald-600 md:w-16 md:h-16" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 px-4">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </p>
          <Link
            href="/#products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
          >
            <span>Start Shopping</span>
            <ArrowRight size={18} className="md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
            Shopping Cart
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl md:rounded-2xl shadow-md p-3 md:p-4 lg:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
                  {/* Product Image */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-emerald-50 rounded-lg md:rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right side: name + price + controls */}
                  <div className="flex-grow flex flex-col gap-2 md:gap-3 min-w-0">
                    {/* Name & Price & Remove Button */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-grow">
                        <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-900 line-clamp-2 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-emerald-600 font-bold text-base md:text-lg lg:text-xl">
                          ₹{item.price}
                        </p>
                      </div>
                      {/* Remove Button */}
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="p-1.5 md:p-2 lg:p-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-300 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />
                      </button>
                    </div>

                    {/* Bottom row: Quantity + Item Total */}
                    <div className="flex items-center justify-between gap-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                        >
                          <Minus size={14} className="text-gray-600 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" />
                        </button>

                        <span className="font-bold text-sm md:text-base lg:text-lg w-5 md:w-6 text-center text-gray-600">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-lg bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors duration-300"
                        >
                          <Plus size={14} className="text-emerald-600 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" />
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="font-bold text-sm md:text-base lg:text-lg text-gray-900">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-5 lg:p-6 border-2 border-gray-200 lg:sticky lg:top-24">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex justify-between text-sm md:text-base text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">₹{shipping}</span>
                </div>
                {subtotal < 500 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2.5 md:p-3">
                    <p className="text-xs md:text-sm text-yellow-800">
                      Add ₹{500 - subtotal} more for FREE shipping!
                    </p>
                  </div>
                )}
                <div className="border-t-2 border-gray-200 pt-3 md:pt-4 flex justify-between text-base md:text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-emerald-600">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-3 flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} className="md:w-6 md:h-6" />
                <span>Order via WhatsApp</span>
              </button>

              <Link
                href="/#products"
                className="block text-center text-emerald-600 hover:text-emerald-700 font-semibold py-2.5 md:py-3 transition-colors duration-300 text-sm md:text-base"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200 space-y-2.5 md:space-y-3">
                <div className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-600">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 text-sm md:text-base">✓</span>
                  </div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-600">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 text-sm md:text-base">✓</span>
                  </div>
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-2.5 md:gap-3 text-xs md:text-sm text-gray-600">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 text-sm md:text-base">✓</span>
                  </div>
                  <span>Quality guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        orderSummary={orderSummary}
        onSubmit={sendToWhatsApp}
      />
    </div>
  );
}