import {
  Heart,
  Zap,
  Shield,
  Sparkles,
  Brain,
  Dumbbell,
  Sun,
  Droplet,
} from "lucide-react";

export default function Uses() {
  const benefits = [
    {
      icon: Shield,
      title: "Boosts Immunity",
      description:
        "Strengthens your immune system with powerful antioxidants and phycocyanin to fight off infections naturally.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Dumbbell,
      title: "High Protein Content",
      description:
        "Contains 60-70% protein by weight, providing all essential amino acids for muscle growth and repair.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Zap,
      title: "Increases Energy",
      description:
        "Natural B-vitamins and iron boost energy levels and reduce fatigue throughout your day.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Droplet,
      title: "Natural Detoxification",
      description:
        "Helps eliminate toxins and heavy metals from your body, supporting liver and kidney health.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: Heart,
      title: "Supports Heart Health",
      description:
        "Reduces cholesterol levels and blood pressure, promoting cardiovascular wellness.",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Brain,
      title: "Cognitive Function",
      description:
        "Enhances brain health and mental clarity with essential omega-3 fatty acids and antioxidants.",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Sparkles,
      title: "Radiant Skin & Hair",
      description:
        "Rich in vitamins A, E, and beta-carotene for healthy, glowing skin and strong hair.",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Sun,
      title: "Weight Management",
      description:
        "High protein content promotes satiety and supports healthy metabolism for weight control.",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
              Health Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Spirulina?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the transformative power of nature's most complete
            superfood. Here's how spirulina can enhance your health and
            well-being.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Health?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made spirulina a part
            of their daily wellness routine.
          </p>
          <a
            href="/#products"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
}