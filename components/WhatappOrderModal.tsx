"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  pincode: string;
}

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: React.ReactNode;
  onSubmit: (userDetails: UserDetails) => void;
}

export default function WhatsAppOrderModal({
  isOpen,
  onClose,
  orderSummary,
  onSubmit,
}: WhatsAppOrderModalProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !userDetails.name ||
      !userDetails.phone ||
      !userDetails.address ||
      !userDetails.pincode
    ) {
      alert("Please fill in all fields");
      return;
    }

    onSubmit(userDetails);

    // Reset form
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      pincode: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            Enter Your Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Order Summary */}
          {orderSummary}

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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none text-gray-900 placeholder-gray-400"
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
              required
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl space-y-3">
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <span>📱</span>
            <span>Send Order to WhatsApp</span>
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}