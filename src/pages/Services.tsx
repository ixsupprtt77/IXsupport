import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wifi, Tv, Phone, Shield, Zap, Users, Settings, Award } from "@/components/SimpleIcons";

const Services = () => {
  const mainServices = [
    {
      icon: Wifi,
      title: "Internet Service Comparison",
      description: "We help you compare internet providers offering speeds from 100 Mbps to 1 Gbps fiber. Find plans perfect for streaming, gaming, and remote work in your area.",
      features: [
        "Compare speeds from multiple providers",
        "Find unlimited data plans",
        "Check for equipment deals",
        "Compare reliability ratings",
        "View real customer reviews"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Tv,
      title: "TV & Streaming Options",
      description: "Compare traditional cable, satellite, and streaming TV packages from various providers. We show you all available options with channel lineups and pricing.",
      features: [
        "Compare 100+ to 300+ channel packages",
        "Find premium channel add-ons",
        "Check sports package availability",
        "Compare DVR options",
        "Discover streaming alternatives"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Phone,
      title: "Phone Service Solutions",
      description: "Explore digital phone options from providers offering VoIP and traditional landline services with unlimited calling features.",
      features: [
        "Compare unlimited calling plans",
        "Check included features",
        "Find voicemail options",
        "International plan comparisons",
        "Number portability information"
      ],
      gradient: "from-green-500 to-green-700"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Security & Protection",
      description: "Comprehensive security suite with antivirus, firewall, and parental controls"
    },
    {
      icon: Zap,
      title: "Installation & Setup",
      description: "Professional installation with same-day or next-day service available"
    },
    {
      icon: Users,
      title: "Business Solutions",
      description: "Dedicated business connectivity and phone services with SLA guarantees"
    },
    {
      icon: Settings,
      title: "Equipment Rental",
      description: "Latest modems, routers, and set-top boxes with free upgrades"
    }
  ];

  const bundles = [
    {
      name: "Dual Service",
      services: "Connectivity + Entertainment",
      savings: "Save up to $20/month",
      popular: false
    },
    {
      name: "Complete Bundle",
      services: "Connectivity + Entertainment + Phone",
      savings: "Save up to $35/month",
      popular: true
    },
    {
      name: "Connectivity + Phone",
      services: "High-Speed Access + Digital Phone",
      savings: "Save up to $15/month",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive connectivity solutions for homes and businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Core Services</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Everything you need to stay connected and entertained
            </p>
            <div className="space-y-12">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${service.gradient} rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                    <div className="text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6">
                        <service.icon size={40} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-lg text-white/90 mb-6">{service.description}</p>
                      <a href="/pricing">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                          View Plans
                        </button>
                      </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4">Features Include:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-white">
                            <span className="text-yellow-300 mr-3 text-xl">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Bundle & Save</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Combine services for maximum savings
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                    bundle.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
                  }`}
                >
                  {bundle.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Award className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{bundle.name}</h3>
                    <p className="text-gray-600 mb-4">{bundle.services}</p>
                    <div className="text-3xl font-bold text-green-600 mb-6">{bundle.savings}</div>
                    <a href="/pricing">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        See Plans
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Additional Services</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Enhance your experience with premium add-ons
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose the perfect plan for your home or business today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/pricing">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                View Pricing
              </button>
            </a>
            <a href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Contact Sales
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
