import { Award, Globe, Leaf, Shield } from "lucide-react";

export default function AboutSpirulina() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900 mb-4">
            What is Spirulina?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why this ancient superfood is recognized by the World
            Health Organization as one of the most nutritious foods on Earth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p
                className="text-gray-700  text-lg"
                style={{ fontFamily: "Noto Sans Telugu" }}
              >
                స్పిరులినా అనేది నీలి-ఆకుపచ్చ సూక్ష్మ ఆల్గే, దీనిని దాని
                అసాధారణమైన పోషక విలువల కారణంగా శతాబ్దాలుగా వినియోగిస్తున్నారు. ఈ
                పురాతన సూపర్‌ఫుడ్ భూమిపై అత్యంత పురాతన జీవ రూపాలలో ఒకటి మరియు
                చరిత్ర అంతటా వివిధ నాగరికతలకు ముఖ్యమైన ఆహార వనరుగా ఉంది.
              </p>
              <p
                className="text-gray-700 text-lg "
                style={{ fontFamily: "Noto Sans Telugu" }}
              >
                ప్రోటీన్లు, విటమిన్లు, ఖనిజాలు మరియు యాంటీఆక్సిడెంట్లతో
                సమృద్ధిగా ఉన్న స్పిరులినా బరువు ప్రకారం 70% వరకు ప్రోటీన్‌ను
                కలిగి ఉంటుంది, ఇది అందుబాటులో ఉన్న అత్యధిక ప్రోటీన్-సాంద్రత
                కలిగిన ఆహారాలలో ఒకటిగా చేస్తుంది. ఇది B-విటమిన్లు,
                బీటా-కెరోటిన్, ఇనుము మరియు అవసరమైన కొవ్వు ఆమ్లాలతో కూడా నిండి
                ఉంటుంది.
              </p>
            </div>

            {/* Nutritional Highlights */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">
                Nutritional Powerhouse
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-emerald-600">70%</p>
                  <p className="text-sm text-gray-600">Protein Content</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">18</p>
                  <p className="text-sm text-gray-600">Amino Acids</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">100+</p>
                  <p className="text-sm text-gray-600">Nutrients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-600">40x</p>
                  <p className="text-sm text-gray-600">
                    More Iron than Spinach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WHO Recognition Card */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    WHO Recognition
                  </h3>
                  <p className="text-blue-700 text-sm">
                    World Health Organization
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className="text-gray-700 leading-relaxed text-lg"
                  style={{ fontFamily: "Noto Sans Telugu" }}
                >
                  ప్రపంచ ఆరోగ్య సంస్థ స్పిరులినాను విలువైన ఆహార వనరుగా
                  గుర్తించింది మరియు ముఖ్యంగా అభివృద్ధి చెందుతున్న దేశాలలో
                  పోషకాహార లోపంతో పోరాడడంలో దాని ఉపయోగాన్ని ప్రోత్సహించింది.
                </p>

                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-sm text-gray-600 italic">
                    "Spirulina represents an interesting food for multiple
                    reasons: rich in iron and protein, and is able to be
                    administered to children without any risk."
                  </p>
                  <p className="text-xs text-blue-600 mt-2 font-semibold">
                    — WHO Statement
                  </p>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-sm text-gray-700">
                      Endorsed for combating malnutrition globally
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-sm text-gray-700">
                      Recognized as safe and highly nutritious
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-sm text-gray-700">
                      Recommended for sustainable food programs
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Recognition */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                <Globe className="mx-auto text-emerald-600 mb-2" size={32} />
                <p className="font-semibold text-emerald-900 text-sm">
                  UN Endorsed
                </p>
                <p className="text-xs text-gray-600 mt-1">Food Security</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                <Shield className="mx-auto text-emerald-600 mb-2" size={32} />
                <p className="font-semibold text-emerald-900 text-sm">
                  NASA Approved
                </p>
                <p className="text-xs text-gray-600 mt-1">Space Food</p>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}
