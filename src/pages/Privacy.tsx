import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Search, CheckCircle, Users } from "@/components/SimpleIcons";

const Privacy = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 pt-20">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s'}} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200/30 rounded-full blur-2xl animate-ping" style={{animationDuration: '6s'}} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <div className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
                🔒 Your Privacy Matters
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="inline-block animate-pulse">Privacy</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to protecting your privacy and being transparent about how we handle your data.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Quick Overview */}
            <div className={`grid md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: Shield, title: "Data Protection", desc: "Industry-standard security measures", color: "bg-blue-500" },
                { icon: Search, title: "Transparency", desc: "Clear information on data usage", color: "bg-green-500" },
                { icon: CheckCircle, title: "Your Control", desc: "Full control over your information", color: "bg-purple-500" },
                { icon: Users, title: "No Selling", desc: "We never sell your personal data", color: "bg-red-500" }
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>

              <div className="prose prose-lg max-w-none">
                
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">1. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information necessary to assist you in finding and managing telecommunications services, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">📞 Contact Information</h4>
                      <p className="text-blue-800 text-sm">Name, email, phone number, and service address for assistance purposes</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <h4 className="font-bold text-green-900 mb-2">🌐 Service Preferences</h4>
                      <p className="text-green-800 text-sm">Your preferences for internet speed, TV packages, and phone services</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                      <h4 className="font-bold text-purple-900 mb-2">📍 Location Information</h4>
                      <p className="text-purple-800 text-sm">ZIP code and service area to help identify available providers</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                      <h4 className="font-bold text-orange-900 mb-2">💳 Assistance Fee Information</h4>
                      <p className="text-orange-800 text-sm">Payment info for our service fees, processed securely through third-party processors</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-yellow-50 border-2 border-yellow-400 p-4 rounded-xl">
                    <p className="text-yellow-900 font-semibold text-sm">
                      🔒 <strong>We NEVER request provider passwords or account credentials.</strong> We only collect information 
                      necessary to assist you with finding and understanding service options.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">2. How We Use Your Information</h2>
                  <div className="space-y-3">
                    {[
                      "To assist and guide you in finding suitable telecommunications services",
                      "To facilitate communication between you and service providers", 
                      "To process our service assistance fees securely",
                      "To provide customer support and answer your questions",
                      "To send service updates and relevant information (with your consent)",
                      "To improve our assistance services and website experience"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Data Usage:</strong> Your information is used solely to help facilitate your service search and 
                      provide you with guidance. We do not use your data to make unauthorized account changes or access provider systems.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">3. Data Sharing & Disclosure</h2>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-6">
                    <p className="text-purple-800 font-semibold mb-4">
                      🚫 We do not sell your personal information. We may share data with:
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">🤝 Service Providers</h4>
                      <p className="text-gray-700 text-sm">Payment processors, shipping carriers, and cloud infrastructure providers</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">⚖️ Legal Requirements</h4>
                      <p className="text-gray-700 text-sm">When required by law, court order, or government request</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">🏢 Business Transfers</h4>
                      <p className="text-gray-700 text-sm">In the event of a merger, acquisition, or sale of assets</p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">4. Data Security</h2>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <p className="text-red-800 leading-relaxed">
                      🔒 We implement industry-standard security measures including encryption, secure facilities, 
                      access controls, and regular security audits. However, no method of transmission over the 
                      network connection is 100% secure.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-500">5. Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "📋", text: "Access, correct, or delete your personal information" },
                      { icon: "📧", text: "Opt-out of marketing communications" },
                      { icon: "💾", text: "Request a copy of your data in a portable format" },
                      { icon: "✋", text: "Withdraw consent for data processing (where applicable)" },
                      { icon: "📞", text: "Lodge a complaint with a supervisory authority" }
                    ].map((right, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                        <span className="text-2xl">{right.icon}</span>
                        <p className="text-indigo-800 text-sm">{right.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">6. Data Retention</h2>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <p className="text-orange-800 leading-relaxed">
                      📅 We retain personal information for as long as necessary to fulfill the purposes outlined 
                      in this policy, comply with legal obligations, resolve disputes, and enforce agreements. 
                      Service records are typically retained for 7 years for warranty and legal compliance purposes.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-500">7. Children's Privacy</h2>
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                    <p className="text-pink-800 leading-relaxed">
                      👶 Our services are not directed to individuals under 18. We do not knowingly collect 
                      personal information from children.
                    </p>
                  </div>
                </section>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
                  <p className="mb-6 text-blue-100">
                    For privacy-related questions or to exercise your rights, we're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                      <p className="text-sm"><strong>Email:</strong> privacy@ixsupport.com</p>
                    </div>
                    <a href="tel:+18889296191" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-colors">
                      <p className="text-sm"><strong>Phone:</strong> (888) 929-6191</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
