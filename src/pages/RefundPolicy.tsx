import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Clock, CheckCircle, Award } from "../components/SimpleIcons";

const RefundPolicy = () => {
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
                💰 Money Back Guarantee
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="inline-block animate-pulse">Refund</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your satisfaction is our priority. Learn about our fair and transparent refund policy.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: October 24, 2025</p>
            </div>

            {/* Main Content */}
            <div className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              
              {/* Quick Overview */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Shield, title: "100% Guarantee", desc: "Your satisfaction is guaranteed", color: "bg-green-500" },
                  { icon: Clock, title: "30-Day Window", desc: "Plenty of time to evaluate", color: "bg-blue-500" },
                  { icon: CheckCircle, title: "Simple Process", desc: "Easy refund request process", color: "bg-purple-500" },
                  { icon: Award, title: "Fair Terms", desc: "Transparent and reasonable", color: "bg-orange-500" }
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

              <div className="prose prose-lg max-w-none">
                
                {/* Service Disclaimer */}
                <section className="mb-10">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 rounded-2xl p-8">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚠️</div>
                      <p className="text-yellow-900 font-bold text-lg mb-4">IMPORTANT SERVICE DISCLOSURE</p>
                      <p className="text-yellow-800 leading-relaxed">
                        <strong>Cosmo Broad is an independent third-party service provider.</strong> We are not affiliated with, 
                        endorsed by, or sponsored by any cable, internet, television, or streaming service provider. Our services 
                        assist, help, guide, and facilitate customers in finding and managing telecommunications services. Service 
                        fees are separate from any provider billing. All trademarks® and service marks™ are property of their respective owners.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">Our Refund Guarantee</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At Cosmo Broad, we stand behind our assistance services with a comprehensive satisfaction guarantee. If you're not completely satisfied with our third-party service assistance, we'll make it right or provide a full refund.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-bold text-green-900 mb-2">✅ Our Promise to You</h3>
                    <p className="text-green-800 mb-4">
                      We're committed to providing exceptional service. If we can't solve your problem or you're unsatisfied with our work, you deserve your money back.
                    </p>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <p className="text-sm text-green-700 font-semibold">
                        🎯 <strong>Bottom Line:</strong> If we can't fix it to your satisfaction, you don't pay for it.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Refund Eligibility</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">🔧 Device Repair Services</h3>
                      <p className="text-blue-800 mb-3">Full refund available if:</p>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 mb-4">
                        <li>We cannot diagnose or repair the issue</li>
                        <li>The repair doesn't solve the original problem</li>
                        <li>Your device is damaged during our repair process</li>
                        <li>You're unsatisfied with the repair quality</li>
                      </ul>
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <strong>Timeframe:</strong> 30 days from service completion
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-900 mb-3">💻 Remote Support Services</h3>
                      <p className="text-green-800 mb-3">Full refund available if:</p>
                      <ul className="list-disc list-inside text-green-700 space-y-1 mb-4">
                        <li>We cannot connect to your device</li>
                        <li>The issue remains unresolved after our session</li>
                        <li>You're not satisfied with the support provided</li>
                        <li>Service was interrupted due to our technical issues</li>
                      </ul>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <p className="text-sm text-green-700">
                          <strong>Timeframe:</strong> 7 days from service completion
                        </p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">🚨 Emergency Support</h3>
                      <p className="text-purple-800 mb-3">Special guarantee for emergency services:</p>
                      <ul className="list-disc list-inside text-purple-700 space-y-1 mb-4">
                        <li>Response time exceeds our 2-hour guarantee</li>
                        <li>Issue cannot be resolved within promised timeframe</li>
                        <li>Emergency service quality doesn't meet standards</li>
                      </ul>
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <p className="text-sm text-purple-700">
                          <strong>Timeframe:</strong> 14 days from service completion
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">How to Request a Refund</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Requesting a refund is simple and straightforward:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-200">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-orange-900 mb-2">Contact Our Support Team</h4>
                        <p className="text-orange-800 mb-3">Reach out via phone, email, or our contact form. Explain your concern and provide your service details.</p>
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <p className="text-sm text-orange-700">
                            📞 <strong>Phone:</strong> <a href="tel:+18889296191" className="hover:underline">(888) 929-6191</a> <br />
                            📧 <strong>Email:</strong> refunds@ixsupport.com
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Provide Service Information</h4>
                        <p className="text-blue-800 mb-3">Share details about your service experience:</p>
                        <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                          <li>Service date and type</li>
                          <li>Invoice or receipt number</li>
                          <li>Reason for refund request</li>
                          <li>Any supporting documentation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-200">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 mb-2">Review and Resolution</h4>
                        <p className="text-green-800 mb-3">We'll review your request and respond within 24 hours with:</p>
                        <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                          <li>Acknowledgment of your request</li>
                          <li>Expected resolution timeline</li>
                          <li>Any additional steps needed</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-200">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-900 mb-2">Refund Processing</h4>
                        <p className="text-purple-800 mb-3">Once approved, your refund will be processed:</p>
                        <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                          <li>Credit card refunds: 3-5 business days</li>
                          <li>Bank transfers: 5-7 business days</li>
                          <li>Cash payments: Immediate upon approval</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">Important Considerations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Please note these important details about our refund policy:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Diagnostic Fees</h3>
                      <p className="text-yellow-800 mb-3">
                        If you decline a repair after diagnosis, diagnostic fees may apply. However:
                      </p>
                      <ul className="list-disc list-inside text-yellow-700 space-y-1">
                        <li>No charge if we determine the device is unrepairable</li>
                        <li>No charge if our diagnosis was incorrect</li>
                        <li>Standard diagnostic fee applies for accurate diagnoses you decline</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-red-900 mb-3">🚫 Non-Refundable Situations</h3>
                      <p className="text-red-800 mb-3">
                        Refunds may not be available in these specific cases:
                      </p>
                      <ul className="list-disc list-inside text-red-700 space-y-1">
                        <li>Device damage caused by customer mishandling after service</li>
                        <li>Issues unrelated to our original service</li>
                        <li>Services requested outside our standard offerings</li>
                        <li>Refund requests beyond the specified timeframes</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-blue-900 mb-3">💡 Alternatives to Refunds</h3>
                      <p className="text-blue-800 mb-3">
                        Before requesting a refund, consider these options:
                      </p>
                      <ul className="list-disc list-inside text-blue-700 space-y-1">
                        <li>Free re-service within warranty period</li>
                        <li>Service credit for future repairs</li>
                        <li>Discounted upgrade to premium service</li>
                        <li>Complimentary follow-up support</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-500">Warranty and Refund Interaction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our refund policy works alongside our warranty coverage:
                  </p>
                  <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-indigo-900 mb-3">🛡️ Warranty Period</h3>
                    <p className="text-indigo-800 mb-4">
                      During the warranty period, we'll first attempt to honor the warranty through:
                    </p>
                    <ul className="list-disc list-inside text-indigo-700 space-y-1 mb-4">
                      <li>Free re-repair or replacement</li>
                      <li>Alternative repair methods</li>
                      <li>Component upgrades at no extra cost</li>
                    </ul>
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <p className="text-sm text-indigo-700">
                        If warranty service doesn't resolve the issue, a full refund becomes available.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions About Our Refund Policy?</h2>
                  <p className="mb-6 text-green-100">
                    We're here to help! Our customer service team is ready to discuss any concerns about our refund policy or assist with a refund request.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300">
                      Contact Support
                    </a>
                    <a href="/warranty" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                      View Warranty Info
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

export default RefundPolicy;