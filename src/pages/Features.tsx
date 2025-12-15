import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wifi, Shield, Zap, Users, Clock, Award, CheckCircle, Star, Settings, TrendingUp, Lock, Headphones } from "@/components/SimpleIcons";

const Features = () => {
  const keyFeatures = [
    {
      icon: Wifi,
      title: "Ultra-Fast Speeds",
      description: "Fiber optic technology delivering speeds up to 1 Gbps for seamless streaming, gaming, and browsing",
      benefits: ["No buffering", "4K streaming on multiple devices", "Lightning-fast downloads"]
    },
    {
      icon: Shield,
      title: "99.9% Uptime",
      description: "Industry-leading reliability with redundant systems and proactive monitoring",
      benefits: ["Minimal downtime", "Automatic failover", "Real-time monitoring"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert technical support available around the clock via phone, chat, or email",
      benefits: ["Live chat support", "Phone support", "Email ticketing"]
    },
    {
      icon: Users,
      title: "No Contracts",
      description: "Flexible month-to-month plans with no long-term commitments or cancellation fees",
      benefits: ["Cancel anytime", "No hidden fees", "Price transparency"]
    },
    {
      icon: Zap,
      title: "Free Installation",
      description: "Professional installation included at no extra cost with same-day service available",
      benefits: ["Expert technicians", "Equipment included", "Same-day setup"]
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Built-in firewall and advanced security features to protect your network",
      benefits: ["Malware protection", "Parental controls", "Secure browsing"]
    }
  ];

  const networkFeatures = [
    {
      icon: TrendingUp,
      title: "Unlimited Data",
      description: "No data caps or throttling - use as much as you need"
    },
    {
      icon: Settings,
      title: "Smart WiFi",
      description: "Intelligent network optimization for the best performance"
    },
    {
      icon: Award,
      title: "Premium Equipment",
      description: "Latest generation modems and routers included free"
    },
    {
      icon: Headphones,
      title: "Local Support",
      description: "US-based customer service team that knows your area"
    }
  ];

  const comparisons = [
    {
      feature: "Download Speed",
      us: "Up to 1 Gbps",
      others: "Up to 500 Mbps"
    },
    {
      feature: "Uptime Guarantee",
      us: "99.9%",
      others: "95-98%"
    },
    {
      feature: "Installation Cost",
      us: "FREE",
      others: "$99-$199"
    },
    {
      feature: "Contract Required",
      us: "No",
      others: "12-24 months"
    },
    {
      feature: "Data Caps",
      us: "None",
      others: "1TB limit"
    },
    {
      feature: "Support Hours",
      us: "24/7",
      others: "9AM-5PM"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Home Office User",
      comment: "Switched to IX and haven't looked back. The speed is incredible and I've never had a single outage!",
      rating: 5
    },
    {
      name: "Mike T.",
      role: "Gamer",
      comment: "Zero lag, lightning fast speeds. Perfect for online gaming and streaming at the same time.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      role: "Family of 5",
      comment: "With 5 people all online at once, we need reliable connectivity. IX delivers every time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Why Choose IX?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Experience the features that set us apart from the competition
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Premium Features</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Everything you need for the ultimate connectivity experience
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Network Advantages</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Built on cutting-edge infrastructure
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {networkFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">IX vs. Competitors</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              See how we stack up against the competition
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <th className="py-4 px-6 text-left">Feature</th>
                      <th className="py-4 px-6 text-center">Cosmo Broad</th>
                      <th className="py-4 px-6 text-center">Other Providers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                        <td className="py-4 px-6 font-semibold text-gray-900">{item.feature}</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center justify-center bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg">
                            {item.us}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-4 py-2 rounded-lg">
                            {item.others}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Real feedback from real customers
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the IX Difference</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers enjoying superior connectivity
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/pricing">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                View Plans & Pricing
              </button>
            </a>
            <a href="/contact">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
