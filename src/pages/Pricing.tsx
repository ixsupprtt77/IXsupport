import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Wifi, Tv, Phone, Star, Zap } from "@/components/SimpleIcons";
import CallNowButton from "@/components/CallNowButton";

const Pricing = () => {
  const connectivityPlans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: 39.99,
      features: [
        "Perfect for browsing & email",
        "2-3 connected devices",
        "Unlimited data",
        "Free modem rental",
        "24/7 support"
      ],
      popular: false
    },
    {
      name: "Standard",
      speed: "300 Mbps",
      price: 59.99,
      features: [
        "Great for streaming & gaming",
        "5-7 connected devices",
        "Unlimited data",
        "Free modem & router",
        "24/7 priority support"
      ],
      popular: true
    },
    {
      name: "Premium",
      speed: "500 Mbps",
      price: 79.99,
      features: [
        "HD/4K streaming on multiple TVs",
        "8-10 connected devices",
        "Unlimited data",
        "Premium equipment",
        "VIP support"
      ],
      popular: false
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: 99.99,
      features: [
        "Maximum speed for power users",
        "15+ connected devices",
        "Unlimited data",
        "Latest WiFi 6 router",
        "White glove service"
      ],
      popular: false
    }
  ];

  const entertainmentPackages = [
    {
      name: "Entertainment",
      channels: "125+",
      price: 49.99,
      features: [
        "Popular network channels",
        "Local broadcast stations",
        "Basic DVR included",
        "On-demand content",
        "Parental controls"
      ]
    },
    {
      name: "Sports & Movies",
      channels: "200+",
      price: 79.99,
      features: [
        "All Entertainment channels",
        "ESPN, NFL Network, MLB",
        "HBO, Showtime, Starz",
        "Premium DVR (500GB)",
        "Multiple TV support"
      ]
    },
    {
      name: "Ultimate",
      channels: "275+",
      price: 109.99,
      features: [
        "Every channel we offer",
        "All sports packages",
        "All premium movie channels",
        "Unlimited DVR storage",
        "Up to 6 TVs"
      ]
    }
  ];

  const bundles = [
    {
      name: "Connectivity + Entertainment",
      description: "High-Speed Access + Entertainment Package",
      originalPrice: 129.98,
      bundlePrice: 84.99,
      savings: 44.99,
      features: [
        "300 Mbps access",
        "125+ channels",
        "Free installation",
        "No contract required"
      ]
    },
    {
      name: "Complete Bundle",
      description: "Connectivity + Entertainment + Phone",
      originalPrice: 159.97,
      bundlePrice: 109.99,
      savings: 49.98,
      features: [
        "300 Mbps access",
        "200+ channels",
        "Unlimited phone service",
        "Premium equipment included"
      ],
      popular: true
    },
    {
      name: "Connectivity + Phone",
      description: "High-Speed Access + Digital Phone",
      originalPrice: 79.98,
      bundlePrice: 64.99,
      savings: 14.99,
      features: [
        "300 Mbps access",
        "Unlimited calling",
        "Free modem/router",
        "Keep your number"
      ]
    }
  ];

  const addOns = [
    { name: "Premium WiFi Router", price: 10 },
    { name: "Network Security Suite", price: 7.99 },
    { name: "Extended DVR Storage", price: 15 },
    { name: "Additional TV Box", price: 9.99 },
    { name: "International Calling Plan", price: 12.99 },
    { name: "Premium Support Package", price: 14.99 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center mt-6">
        <CallNowButton />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Compare Provider Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              We help you compare typical provider pricing in your area - actual rates may vary by location
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 inline-block">
              <p className="text-lg font-semibold mb-2">💡 Helpful Tip</p>
              <p className="text-2xl font-bold">Prices shown are estimates - Enter your ZIP for exact pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚠️</div>
                <p className="text-yellow-900 font-bold text-xl mb-4">IMPORTANT PRICING DISCLOSURE</p>
                <div className="text-yellow-800 leading-relaxed space-y-3">
                  <p>
                    <strong>Cosmo Broad is an independent third-party service provider.</strong> We do not sell internet, TV, or phone plans directly. 
                    We assist customers by providing guidance and support in finding services from actual providers.
                  </p>
                  <p>
                    <strong>Service fees are separate from provider billing.</strong> Our assistance fees are independent charges 
                    and not included in any provider's billing or subscription costs.
                  </p>
                  <p className="text-sm">
                    All provider names, trademarks®, and service marks™ are property of their respective owners and used for descriptive reference only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                <Wifi size={20} />
                <span className="font-semibold">High-Speed Connectivity</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Connectivity Plans</h2>
              <p className="text-gray-600 text-lg">Choose the perfect speed for your needs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {connectivityPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 ${
                    plan.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-1">{plan.speed}</div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${plan.price}
                      <span className="text-lg font-normal text-gray-500">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Order Now
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TV Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                <Tv size={20} />
                <span className="font-semibold">Premium Entertainment</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Entertainment Packages</h2>
              <p className="text-gray-600 text-lg">Endless entertainment options</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {entertainmentPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{pkg.channels}</div>
                    <div className="text-gray-500 text-sm mb-3">Channels</div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${pkg.price}
                      <span className="text-lg font-normal text-gray-500">/mo</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact">
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                      Select Package
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
                <Star size={20} />
                <span className="font-semibold">Best Value</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Bundle & Save</h2>
              <p className="text-gray-600 text-lg">Combine services for maximum savings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 ${
                    bundle.popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
                  }`}
                >
                  {bundle.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Best Deal
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{bundle.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{bundle.description}</p>
                    <div className="mb-2">
                      <span className="text-lg text-gray-400 line-through">${bundle.originalPrice}/mo</span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      ${bundle.bundlePrice}
                      <span className="text-lg font-normal text-gray-500">/mo</span>
                    </div>
                    <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                      Save ${bundle.savings}/mo
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact">
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      bundle.popular 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}>
                      Get This Bundle
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Optional Add-Ons</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Enhance your service with premium features
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                    <span className="font-semibold text-gray-900">{addon.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${addon.price}</div>
                    <div className="text-sm text-gray-500">/month</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Notes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Important Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>All prices shown are promotional rates for new customers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>No contracts required - cancel anytime without fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Free professional installation on all new orders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>Equipment rental included at no additional cost</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span>30-day money-back guarantee on all services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now or fill out our contact form to order your service today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18889296191">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                📞 Call (888) 929-6191
              </button>
            </a>
            <a href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Contact Us Online
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
