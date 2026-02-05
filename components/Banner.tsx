"use client";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              <span>100% Pure & Organic</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
              Unlock Nature's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Superfood Power
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Experience the transformative power of premium spirulina. Boost
              your immunity, increase energy, and detoxify naturally with every
              serving.
            </p>

            <ul className="space-y-3">
              {[
                "Rich in protein & essential nutrients",
                "Supports natural detoxification",
                "Boosts energy & immunity",
                "Sustainably grown & harvested",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/#products"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Shop Products</span>
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/#about"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            {/* Floating animated particles around video */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-400 rounded-full blur-xl opacity-40 animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-teal-400 rounded-full blur-xl opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-400 rounded-full blur-lg opacity-30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl transform rotate-3 opacity-20 animate-pulse"></div>
              
              {/* Video container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 sm:p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-emerald-200">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-emerald-500 rounded-br-3xl opacity-50"></div>
                
                {/* Video embed */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LqtIAP3_k98?si=6v1MKuITCokeHuiL"
                    title="Spirulina Benefits Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Animated bottom accent */}
                <div className="mt-3 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
                
                {/* WHO Approved badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  WHO Approved
                </div>
                
                {/* Optional: Watch now indicator */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1 animate-bounce">
                  <Play size={14} fill="white" />
                  <span>Watch Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}