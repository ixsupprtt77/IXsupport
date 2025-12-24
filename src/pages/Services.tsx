
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wifi, Tv, Phone, Shield, Zap, Users, Settings, Award } from "@/components/SimpleIcons";
import CallNowButton from "@/components/CallNowButton";

const Services = () => {
  const mainServices = [
    {
      icon: Wifi,
      title: "Internet Service Guidance",
      description: "We provide assistance comparing internet provider options in your area. Learn about speed tiers from various providers and understand which plans might suit your usage needs.",
      features: [
        "Guidance on speed comparisons",
        "Information about data plans",
        "Equipment option explanations",
        "Provider availability in your area",
        "Help understanding service terms"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Tv,
      title: "TV & Entertainment Assistance",
      description: "We help explain cable, satellite, and streaming options available from different providers. Our team provides information about channel packages and pricing structures.",
      features: [
        "Channel lineup comparisons",
        "Premium package information",
        "Sports package guidance",
        "DVR option explanations",
        "Streaming service alternatives"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Phone,
      title: "Phone Service Information",
      description: "Get guidance about digital phone options from various providers. We help explain VoIP and landline service features available in your area.",
      features: [
        "Calling plan comparisons",
        "Feature explanations",
        "Voicemail option guidance",
        "International plan information",
        "Number portability help"
      ],
      gradient: "from-green-500 to-green-700"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Security Information",
      description: "Guidance about security features offered by various providers including antivirus and parental controls"
    },
    {
      icon: Zap,
      title: "Installation Guidance",
      description: "Information about installation options and typical setup processes with different providers"
    },
    {
      icon: Users,
      title: "Business Plan Guidance",
      description: "Assistance understanding business-focused connectivity options from various providers"
    },
    {
      icon: Settings,
      title: "Equipment Information",
      description: "Help understanding modem, router, and equipment options from different providers"
    }
  ];

  const bundles = [
    {
      name: "Dual Service Guidance",
      services: "Internet + TV Assistance",
      savings: "Learn about bundle discounts",
      popular: false
    },
    {
      name: "Complete Package Help",
      services: "Internet + TV + Phone Guidance",
      savings: "Understand triple-play savings",
      popular: true
    },
    {
      name: "Internet + Phone Help",
      services: "Connectivity + Phone Guidance",
      savings: "Compare dual-service options",
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
              Our Assistance Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Third-party guidance to help you navigate telecommunications service options
            </p>
            <div className="flex justify-center mt-8">
              <CallNowButton />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Core Assistance Services</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              We help guide you through understanding your connectivity options
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
                          Request Assistance
                        </button>
                      </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                      <h4 className="text-xl font-bold text-white mb-4">How We Assist:</h4>
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
              <div className="flex justify-center mt-6">
                <CallNowButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Bundle Package Guidance</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              We help explain how bundling services with providers may offer savings
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
                        Get Guidance
                      </button>
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-6">
                <CallNowButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Additional Guidance Areas</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Extra assistance topics to help you understand all your options
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
              <div className="flex justify-center mt-6">
                <CallNowButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Assistance?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get guidance understanding service options in your area today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CallNowButton />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
