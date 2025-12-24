import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Search, CheckCircle, X } from "../components/SimpleIcons";
import CallNowButton from "../components/CallNowButton";

const CookiePolicy = () => {
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
              <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
                🍪 Cookie Information
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                <span className="inline-block animate-pulse">Cookie</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn how we use cookies to enhance your experience on our website and protect your privacy.
              </p>
              <p className="text-sm text-gray-500 mt-4">Last updated: October 24, 2025</p>
            </div>
            <div className="flex justify-center mt-6">
              <CallNowButton />
            </div>

            {/* Main Content */}
            <div className={`bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              <div className="flex justify-center mt-6">
                <CallNowButton />
              </div>
              
              {/* Quick Overview */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: Shield, title: "Essential Only", desc: "We only use necessary cookies", color: "bg-green-500" },
                  { icon: Search, title: "Full Transparency", desc: "Clear information on all cookies", color: "bg-blue-500" },
                  { icon: CheckCircle, title: "Your Control", desc: "Manage cookie preferences easily", color: "bg-purple-500" },
                  { icon: X, title: "Easy Removal", desc: "Delete cookies anytime", color: "bg-red-500" }
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
                
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-orange-500">What Are Cookies?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and improving our services.
                  </p>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                    <p className="text-orange-800 font-medium">
                      🍪 <strong>Simple Explanation:</strong> Think of cookies as digital sticky notes that help our website remember you and your preferences, making your visits smoother and more personalized.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-500">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">🔧 Essential Cookies (Required)</h3>
                      <p className="text-blue-800 mb-3">These cookies are necessary for our website to function properly and cannot be disabled.</p>
                      <ul className="list-disc list-inside text-blue-700 space-y-1">
                        <li>Session management and security</li>
                        <li>Form submission and error handling</li>
                        <li>Basic website functionality</li>
                        <li>Contact form processing</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                      <h3 className="text-xl font-bold text-green-900 mb-3">📊 Analytics Cookies (Optional)</h3>
                      <p className="text-green-800 mb-3">Help us understand how visitors use our website to improve our services.</p>
                      <ul className="list-disc list-inside text-green-700 space-y-1">
                        <li>Page views and user behavior</li>
                        <li>Popular content identification</li>
                        <li>Website performance monitoring</li>
                        <li>Error tracking and debugging</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                      <h3 className="text-xl font-bold text-purple-900 mb-3">⚙️ Functional Cookies (Optional)</h3>
                      <p className="text-purple-800 mb-3">Remember your preferences and provide enhanced features.</p>
                      <ul className="list-disc list-inside text-purple-700 space-y-1">
                        <li>Language and region preferences</li>
                        <li>Theme and display settings</li>
                        <li>Accessibility preferences</li>
                        <li>Contact form auto-fill</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">Your Cookie Choices</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You have full control over cookies on our website. Here are your options:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                      <h3 className="text-lg font-bold text-green-900 mb-3">✅ Accept All Cookies</h3>
                      <p className="text-green-800 mb-4">Get the full website experience with all features enabled.</p>
                      <div className="bg-green-100 p-3 rounded-lg">
                        <p className="text-sm text-green-700">Recommended for the best user experience</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                      <h3 className="text-lg font-bold text-yellow-900 mb-3">⚖️ Essential Only</h3>
                      <p className="text-yellow-800 mb-4">Use only the cookies necessary for basic website functionality.</p>
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-sm text-yellow-700">Some features may be limited</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-500">Managing Your Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can manage cookies in several ways:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Cookie Banner Settings</h4>
                        <p className="text-gray-700">Use our cookie banner to accept or reject optional cookies when you first visit.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Browser Settings</h4>
                        <p className="text-gray-700">Configure your browser to block or delete cookies. Note that this may affect website functionality.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
                        <p className="text-gray-700">If you need help managing cookies or have questions, contact our support team.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-500">Third-Party Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may use services from trusted third parties that set their own cookies:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                    <li>Google Analytics (if analytics cookies are enabled)</li>
                    <li>Security and fraud prevention services</li>
                    <li>Payment processing (for secure transactions)</li>
                  </ul>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                    <p className="text-purple-800">
                      <strong>Note:</strong> Third-party cookies are subject to their respective privacy policies. We only work with reputable, privacy-conscious providers.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-500">Updates to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. When we do:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>We'll update the "Last updated" date at the top of this page</li>
                    <li>Significant changes will be communicated through our website</li>
                    <li>Your continued use of our website constitutes acceptance of the updated policy</li>
                  </ul>
                </section>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
                  <p className="mb-6 text-blue-100">
                    We're here to help! If you have any questions about our use of cookies or need assistance managing your preferences, don't hesitate to reach out.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                      Contact Support
                    </a>
                    <a href="/privacy" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                      Privacy Policy
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

export default CookiePolicy;