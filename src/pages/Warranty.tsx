import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Clock, Award } from "@/components/SimpleIcons";

const Warranty = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 pt-20">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '12s'}} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-2xl animate-ping" style={{animationDuration: '6s'}} />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Section */}
            <div className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}>
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
                🛡️ Warranty Coverage
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="inline-block animate-pulse">Warranty &</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  Returns
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive warranty coverage that protects your investment and gives you peace of mind.
              </p>
            </div>

            {/* Warranty Highlights */}
            <div className={`grid md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: Shield, title: "90-Day Coverage", desc: "Full warranty on all repairs", color: "bg-purple-500" },
                { icon: CheckCircle, title: "Parts & Labor", desc: "Complete repair protection", color: "bg-blue-500" },
                { icon: Clock, title: "Fast Claims", desc: "Quick warranty processing", color: "bg-green-500" },
                { icon: Award, title: "Quality Guarantee", desc: "Professional workmanship", color: "bg-orange-500" }
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">90-Day Limited Warranty</h2>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-2xl p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🛡️</div>
                      <p className="text-purple-900 font-bold text-xl mb-4">Complete Protection Guaranteed</p>
                      <p className="text-purple-800 leading-relaxed text-lg">
                        All repairs include a comprehensive 90-day warranty covering parts and labor for the specific repair performed. 
                        Your satisfaction and device functionality are our top priorities.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">What's Covered</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: "📱", title: "Screen Replacements", desc: "LCD, OLED, and touch digitizer repairs" },
                      { icon: "🔋", title: "Battery Services", desc: "Installations and charging problem fixes" },
                      { icon: "📷", title: "Component Replacements", desc: "Cameras, speakers, charging ports, buttons" },
                      { icon: "💻", title: "Software Solutions", desc: "OS fixes, diagnostics, and optimizations" },
                      { icon: "🔧", title: "Hardware Repairs", desc: "Internal component and circuit board work" },
                      { icon: "🌐", title: "Connectivity Issues", desc: "WiFi, Bluetooth, and cellular problems" }
                    ].map((item, index) => (
                      <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h4 className="font-bold text-green-900 mb-2">{item.title}</h4>
                            <p className="text-green-800 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">What's Not Covered</h2>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                    <p className="text-red-800 font-semibold mb-4">
                      ⚠️ The following issues are not covered under warranty:
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: "💥", text: "Accidental damage after repair completion" },
                      { icon: "💧", text: "Liquid damage or exposure to moisture" },
                      { icon: "🔨", text: "Third-party modifications or unauthorized repairs" },
                      { icon: "⏳", text: "Normal wear and tear from regular use" },
                      { icon: "🚫", text: "Damage from misuse or negligence" },
                      { icon: "🔄", text: "Issues unrelated to the original repair performed" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-red-200 shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="text-gray-700">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">How to Make a Warranty Claim</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Contact Our Support Team</h4>
                        <p className="text-blue-800 mb-3">Reach out via phone, email, or visit our location with your device and repair receipt.</p>
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <p className="text-sm text-blue-700">
                            📞 <strong>Phone:</strong> <a href="tel:+18883159311" className="hover:underline">(888) 315-9311</a> <br />
                            📧 <strong>Email:</strong> warranty@ixsupport.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 mb-2">Device Evaluation</h4>
                        <p className="text-green-800 mb-3">Our technicians will examine your device to determine if the issue is warranty-covered.</p>
                        <div className="bg-green-100 p-3 rounded-lg">
                          <p className="text-sm text-green-700">Most evaluations completed within 2 hours</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2">Free Repair or Replacement</h4>
                        <p className="text-purple-800 mb-3">If covered under warranty, we'll repair or replace at no charge to you.</p>
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <p className="text-sm text-purple-700">Extended warranty period begins after warranty repair</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">Return Policy</h2>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h3 className="text-lg font-bold text-orange-900 mb-3">📦 Unsatisfied with Your Repair?</h3>
                    <p className="text-orange-800 mb-4">
                      If you're not completely satisfied with our repair work, we offer a full refund within 7 days of pickup, 
                      provided the device is returned in the same condition as when delivered.
                    </p>
                    <div className="bg-orange-100 p-4 rounded-lg">
                      <p className="text-sm text-orange-700">
                        <strong>Important:</strong> Device must not have additional damage beyond the original repair scope.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Need Warranty Support?</h2>
                  <p className="mb-6 text-purple-100">
                    Our warranty support team is ready to help with any coverage questions or claims.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300">
                      Contact Support
                    </a>
                    <a href="/refund-policy" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                      Refund Policy
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

export default Warranty;
