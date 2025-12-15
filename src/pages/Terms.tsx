import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Shield, Users, Award } from "@/components/SimpleIcons";

const Terms = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/20 pt-20">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s'}} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/30 rounded-full blur-2xl animate-ping" style={{animationDuration: '6s'}} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <div className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
                📋 Service Agreement
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="inline-block animate-pulse">Terms of</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Clear terms and conditions that govern our services and protect both parties.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Quick Overview */}
            <div className={`grid md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: CheckCircle, title: "Fair Terms", desc: "Reasonable and transparent conditions", color: "bg-green-500" },
                { icon: Shield, title: "Your Protection", desc: "Warranty and liability coverage", color: "bg-blue-500" },
                { icon: Users, title: "Clear Responsibilities", desc: "What we expect from each other", color: "bg-purple-500" },
                { icon: Award, title: "Quality Assurance", desc: "Professional service standards", color: "bg-orange-500" }
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">1. Service Scope</h2>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="text-green-800 leading-relaxed">
                      🔧 Cosmo Broad provides independent third-party assistance, guidance, and support for telecommunications services. 
                      We assist customers by helping them find, understand, and manage internet, TV, and phone services. We are not 
                      affiliated with any telecommunications provider and do not directly provide internet, TV, or phone services.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">2. Quotes & Pricing</h2>
                  <div className="space-y-3">
                    {[
                      "All quotes are estimates based on initial diagnostics and may change upon full inspection",
                      "We will notify you of any price changes before proceeding with repairs",
                      "Prices are subject to change without notice for future services",
                      "Diagnostic fees may apply and will be disclosed upfront"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">$</span>
                        </div>
                        <p className="text-blue-800">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">3. Customer Responsibilities</h2>
                  <p className="text-gray-700 mb-4">When using our assistance services, you agree to:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "📝", text: "Provide accurate information about your service needs and preferences" },
                      { icon: "📞", text: "Respond to provider contacts in a timely manner" },
                      { icon: "💳", text: "Pay our service assistance fees as agreed before facilitation" },
                      { icon: "🔍", text: "Review and verify provider details independently before committing" },
                      { icon: "✅", text: "Understand that final service terms are between you and the provider" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="text-purple-800 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">4. Service Guarantees & Limitations</h2>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-6">
                    <p className="text-orange-800 font-semibold mb-4">
                      ℹ️ Our assistance services help guide you to appropriate telecommunications providers. We make reasonable 
                      efforts to provide accurate information but cannot guarantee specific outcomes.
                    </p>
                    <p className="text-orange-700">Our services do not include guarantees for:</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Provider approval of your service application",
                      "Specific pricing, speeds, or availability at your location",
                      "Installation quality or technical performance of provider services",
                      "Customer service quality provided by telecommunications companies",
                      "Changes to provider plans, pricing, or terms after initial setup"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <p className="text-red-800 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">5. Liability Limitations</h2>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-4">
                    <p className="text-red-800 font-semibold mb-4">
                      ⚠️ To the maximum extent permitted by law, IX Support is not liable for:
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "💾", text: "Data loss or corruption (always backup your data)" },
                      { icon: "💼", text: "Lost profits, business interruption, or consequential damages" },
                      { icon: "💰", text: "Damages exceeding the amount paid for the service" },
                      { icon: "⏰", text: "Delays caused by parts availability or unforeseen complications" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-red-200 shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="text-gray-700 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">6. Independence Notice</h2>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 rounded-2xl p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚠️</div>
                      <p className="text-yellow-900 font-bold text-lg mb-4">IMPORTANT INDEPENDENCE NOTICE</p>
                      <p className="text-yellow-800 leading-relaxed">
                        Cosmo Broad is an independent third-party service provider. 
                        We are <strong>NOT affiliated with, endorsed by, or sponsored by</strong> any cable, internet, 
                        television, or streaming service provider. We assist, help, guide, and facilitate customers in 
                        finding and managing their telecommunications services. Use of provider names is for descriptive 
                        purposes only. All trademarks® and service marks™ are property of their respective owners.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-500">7. Cancellation & Refunds</h2>
                  <div className="space-y-4">
                    {[
                      { status: "✅", text: "You may cancel before work begins for a full refund minus diagnostic fees", color: "bg-green-50 border-green-200 text-green-800" },
                      { status: "⚠️", text: "Once parts are ordered or work has started, cancellation may incur restocking fees", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
                      { status: "📋", text: "Refunds for completed repairs are evaluated on a case-by-case basis", color: "bg-blue-50 border-blue-200 text-blue-800" },
                      { status: "❌", text: "Remote support sessions are non-refundable once started", color: "bg-red-50 border-red-200 text-red-800" }
                    ].map((item, index) => (
                      <div key={index} className={`flex items-start gap-3 p-4 rounded-xl border ${item.color}`}>
                        <span className="text-xl">{item.status}</span>
                        <p className="text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-pink-500">8. Dispute Resolution</h2>
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                    <p className="text-pink-800 leading-relaxed">
                      ⚖️ Any disputes arising from these terms will be resolved through binding arbitration 
                      in accordance with local laws. You waive the right to a jury trial or class action.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-500">9. Changes to Terms</h2>
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                    <p className="text-teal-800 leading-relaxed">
                      📝 We reserve the right to modify these terms at any time. Continued use of our services 
                      constitutes acceptance of updated terms.
                    </p>
                  </div>
                </section>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                  <p className="mb-6 text-green-100">
                    We're here to clarify any questions you have about our terms of service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                      <p className="text-sm"><strong>Email:</strong> legal@ixsupport.com</p>
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

export default Terms;
