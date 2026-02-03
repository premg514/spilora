import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ShoppingCart,
  Star,
  Shield,
  Leaf,
  Award,
  Truck,
  Check,
} from "lucide-react";
import Link from "next/link";
import ProductActions from "@/components/ProductActions";
import ProductImage from "@/components/ProductImage";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  const features = [
    { icon: Shield, text: "100% Organic & Pure" },
    { icon: Leaf, text: "Sustainably Grown" },
    { icon: Award, text: "Lab Tested Quality" },
    { icon: Truck, text: "Fast Delivery" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href="/#products"
            className="text-emerald-600 hover:text-emerald-700"
          >
            Products
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="space-y-4">
            <ProductImage
              src={product.image}
              alt={product.name}
              name={product.name}
            />

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100"
                  >
                    <Icon className="mx-auto text-emerald-600 mb-2" size={24} />
                    <p className="text-xs text-gray-600 font-medium">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">(4.8 out of 5)</span>
              <span className="text-emerald-600 font-semibold">
                156 reviews
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description ||
                "Premium quality spirulina powder, rich in nutrients and carefully processed to maintain maximum nutritional value. Perfect for adding to smoothies, juices, or taking directly."}
            </p>

            {/* Price */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
              <div className="flex items-baseline space-x-3">
                <span className="text-4xl font-bold text-emerald-600">
                  ₹{product.price}
                </span>
                <span className="text-gray-500 line-through text-xl">
                  ₹{Math.round(product.price * 1.3)}
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save{" "}
                  {Math.round(
                    ((product.price * 1.3 - product.price) /
                      (product.price * 1.3)) *
                      100,
                  )}
                  %
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Inclusive of all taxes
              </p>
            </div>

            {/* Quantity Selector and Add to Cart Button */}
            <ProductActions product={product} />

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "70% protein content - ideal for muscle growth",
                  "Rich in iron and B-vitamins for energy",
                  "Powerful antioxidants for immunity",
                  "Supports natural detoxification",
                  "Promotes healthy skin and hair",
                  "Helps maintain healthy weight",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check
                      className="text-emerald-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* How to Use */}
            <div>
              <h3 className="font-bold text-xl text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 text-emerald-600">
                  1
                </span>
                How to Use
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Take 3-5 grams (1 teaspoon) daily</li>
                <li>• Mix with water, juice, or smoothies</li>
                <li>• Best consumed in the morning</li>
                <li>• Can be added to yogurt or food</li>
              </ul>
            </div>

            {/* Storage */}
            <div>
              <h3 className="font-bold text-xl text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 text-emerald-600">
                  2
                </span>
                Storage
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Store in a cool, dry place</li>
                <li>• Keep away from direct sunlight</li>
                <li>• Seal tightly after each use</li>
                <li>• Best before 18 months from manufacture</li>
              </ul>
            </div>

            {/* Safety */}
            <div>
              <h3 className="font-bold text-xl text-emerald-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3 text-emerald-600">
                  3
                </span>
                Safety & Quality
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 100% natural & organic</li>
                <li>• No additives or preservatives</li>
                <li>• Lab tested for purity</li>
                <li>• Safe for daily consumption</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square relative bg-emerald-50">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-emerald-600 font-bold text-lg">
                      ₹{relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
