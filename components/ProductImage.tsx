"use client";

import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  name: string;
}

export default function ProductImage({ src, alt, name }: ProductImageProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 shadow-2xl">
      <img
        src={src}
        alt={alt}
        className="object-cover"
        
      />
      <div className="absolute top-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
        100% Organic
      </div>
    </div>
  );
}
