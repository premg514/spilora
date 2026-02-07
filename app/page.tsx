import Banner from "@/components/Banner";
import AboutSpirulina from "@/components/AboutSpirulina";
import Uses from "@/components/Uses";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Banner />

      {/* About Spirulina Section */}
      <AboutSpirulina />

      {/* Benefits Section */}
      <Uses />

      {/* Products Section */}
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                Premium Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Spirulina Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium, organic spirulina products.
              Each one is carefully processed to preserve maximum nutritional
              value.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Quality Assurance Banner */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
            <div className="flex justify-center mb-4">
              <Sparkles size={48} className="text-emerald-200" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              100% Quality Guaranteed
            </h3>
            <p className="text-emerald-100 mb-6 max-w-3xl mx-auto text-lg">
              All our products are certified organic, lab-tested for purity, and
              free from contaminants. We believe in transparency and quality
              you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
                <span className="font-semibold">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
                <span className="font-semibold">Lab Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
                <span className="font-semibold">WHO Recognized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
                <span className="font-semibold">Sustainably Grown</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                text: "I've been using Spilora spirulina for 3 months and my energy levels have never been better! Highly recommended.",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                text: "Great quality product. I can feel the difference in my immunity. No more frequent colds!",
                rating: 5,
              },
              {
                name: "Anita Reddy",
                text: "Perfect for my vegetarian diet. The protein content is amazing and it's so pure!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-emerald-600">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Location Section */}
<section className="py-16 sm:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Visit Our Farm
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
    </div>
    
 
      
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122403.00674165253!2d81.4787292!3d16.5213534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3276d22c1e1%3A0x7f6b7b90605fabd!2sOmega%20formulations%20head%20office!5e0!3m2!1sen!2sin!4v1770447613164!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  </div>
</section>
    </main>
  );
}