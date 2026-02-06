"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const rating = product.rating || 4.5;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 aspect-square">
         <Link
            href={`/product/${product.id}`}
          >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%2310b981' width='300' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dy='.3em'%3ESpirulina%3C/text%3E%3C/svg%3E";
          }}
        />
        </Link>
       

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Pure & Organic
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-900 mb-2 hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price and Actions */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              ₹{product.price}
            </span>
            <span className="text-sm text-gray-500 ml-1">/KG</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
              isAdding
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            <ShoppingCart size={18} />
            <span>{isAdding ? "Added!" : "Add to Cart"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}