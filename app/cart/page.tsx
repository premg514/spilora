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
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <h3 className="font-semibold text-green-800 mb-2">Order Summary</h3>
      <div className="space-y-1 text-sm text-gray-700 mb-3">
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} × {item.quantity} - ₹{item.price * item.quantity}
          </p>
        ))}
      </div>
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

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={64} className="text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet. Start
            shopping to fill it up!
          </p>
          <Link
            href="/#products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Start Shopping</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Mobile: image + name row, then controls row */}
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Product Image */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 bg-emerald-50 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right side: name + price + controls */}
                  <div className="flex-grow flex flex-col gap-3 min-w-0">
                    {/* Name & Price */}
                    <div className="flex items-start justify-between">
                      <div className="min-w-0 pr-2">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-emerald-600 font-bold text-lg sm:text-xl">
                          ₹{item.price}
                        </p>
                      </div>
                      {/* Remove Button — top-right on mobile */}
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="p-2 sm:p-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-300 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} className="sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    {/* Bottom row: Quantity + Item Total */}
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300"
                        >
                          <Minus size={16} className="text-gray-600 sm:w-[18px] sm:h-[18px]" />
                        </button>

                        <span className="font-bold text-lg w-6 text-center text-gray-600">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors duration-300"
                        >
                          <Plus size={16} className="text-emerald-600 sm:w-[18px] sm:h-[18px]" />
                        </button>
                      </div>

                      {/* Line total */}
                      <span className="font-bold text-gray-900">
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
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 border-2 border-gray-200 lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {(
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {subtotal < 500 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-xs text-yellow-800">
                      Add ₹{500 - subtotal} more for FREE shipping!
                    </p>
                  </div>
                )}
                <div className="border-t-2 border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-emerald-600">₹{total}</span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-3 flex items-center justify-center space-x-2"
              >
                <span><FaWhatsapp size={26}/></span>
                <span>Order via WhatsApp</span>
              </button>

              <Link
                href="/#products"
                className="block text-center text-emerald-600 hover:text-emerald-700 font-semibold py-3 transition-colors duration-300"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600">✓</span>
                  </div>
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600">✓</span>
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