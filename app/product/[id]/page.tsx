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
  const product = products.find((p: { id: string; }) => p.id === id);

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
                    className={
                      i < Math.floor(product.rating || 4.8)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product.rating || 4.8} out of 5)
              </span>
              <span className="text-emerald-600 font-semibold">
                {product.reviewCount || 156} reviews
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
                  ₹{product.price}/KG
                </span>
                <span className="text-gray-500 line-through text-xl">
                  ₹{product.marketprice}/KG
                </span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save{" "}
                  {Math.round(
                    ((product.marketprice - product.price) /
                      product.marketprice) *
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

        {/* Product Grade Information */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
          {product.name.toLowerCase().includes("animal") ? (
            // Animal Grade Products
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">
                    Animal Grade Spirulina
                  </h3>
                  <p className="text-gray-600">
                    Premium quality for livestock and aquaculture
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-emerald-900">
                    Ideal For:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Poultry feed supplementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Aquaculture and fish farming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Livestock nutrition enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Pet food fortification</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-emerald-900">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>High protein content for animal growth</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Enhances egg production and quality</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Boosts immune system in livestock</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Natural pigmentation for fish and poultry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            // Human Grade Products
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-900">
                    Human Grade Spirulina
                  </h3>
                  <p className="text-gray-600">
                    Premium quality for human consumption
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-emerald-900">
                    Health Benefits:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Complete plant-based protein source</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Supports immune system function</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Rich in vitamins and minerals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Natural energy booster</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg text-emerald-900">
                    Usage Guidelines:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Recommended: 3-5 grams daily</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Mix with water, smoothies, or juice</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Best consumed in the morning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Store in cool, dry place</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p: { id: any; }) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct:any) => (
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
                      ₹{relatedProduct.price}/KG
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