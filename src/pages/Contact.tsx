import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SimpleButton from "../components/SimpleButton";
import { Users, Award, Clock, Star, Shield, Zap, Phone, Mail } from "../components/SimpleIcons";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
              Get Expert Help Now
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              <span className="inline-block animate-pulse">Contact</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                Our Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Need assistance finding the perfect internet, TV, or phone service? Our expert team is ready to 
              guide and assist you with third-party service support and information.
            </p>
          </div>

          {/* Service Disclaimer */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl mb-3">ℹ️</div>
                <p className="text-blue-900 font-bold text-lg mb-2">SERVICE DISCLOSURE</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Cosmo Broad is an independent third-party service provider.</strong> We are not affiliated with, 
                  endorsed by, or sponsored by any telecommunications provider. We assist customers by providing guidance, 
                  support, and facilitation services. Service fees are separate from provider billing.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-spin" style={{animationDuration: '8s'}}>
                    <Zap className="text-white" size={20} />
                  </div>
                  Get Expert Assistance
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-2xl outline-none transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-blue-500 bg-white shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === 'name' ? 'opacity-20 animate-pulse' : ''
                    }`} />
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-2xl outline-none transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-blue-500 bg-white shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === 'email' ? 'opacity-20 animate-pulse' : ''
                    }`} />
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-2xl outline-none transition-all duration-300 ${
                        focusedField === 'phone' 
                          ? 'border-blue-500 bg-white shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === 'phone' ? 'opacity-20 animate-pulse' : ''
                    }`} />
                  </div>

                  {/* Service Type */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-2xl outline-none transition-all duration-300 ${
                        focusedField === 'service' 
                          ? 'border-blue-500 bg-white shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="device-repair">Device Repair</option>
                      <option value="remote-support">Remote Support</option>
                      <option value="emergency-support">Emergency Support</option>
                      <option value="consultation">Technical Consultation</option>
                    </select>
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === 'service' ? 'opacity-20 animate-pulse' : ''
                    }`} />
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className={`w-full px-4 py-3 bg-white/50 border-2 rounded-2xl outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message' 
                          ? 'border-blue-500 bg-white shadow-lg scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Describe your tech issue or what help you need..."
                      required
                    />
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 transition-opacity duration-300 -z-10 ${
                      focusedField === 'message' ? 'opacity-20 animate-pulse' : ''
                    }`} />
                  </div>

                  {/* Submit Button */}
                  <SimpleButton 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg py-4 group hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce group-hover:animate-ping" />
                    </span>
                  </SimpleButton>
                </form>
              </div>
            </div>

            {/* Contact Information & Features */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}>
              
              {/* Contact Methods */}
              <div className="grid gap-6">
                
                {/* Phone Contact */}
                <a href="tel:+18889296191" className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:scale-105 hover:shadow-2xl transition-all duration-500 block">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Call Us Now</h3>
                      <p className="text-gray-600">24/7 immediate support</p>
                      <p className="text-lg font-semibold text-green-600 mt-1">(888) 929-6191</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    For urgent technical emergencies requiring immediate assistance
                  </div>
                </a>

                {/* Email Contact */}
                <a href="mailto:support@ixsupport.com" className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 group hover:scale-105 hover:shadow-2xl transition-all duration-500 block">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-500">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Email Support</h3>
                      <p className="text-gray-600">Professional assistance</p>
                      <p className="text-lg font-semibold text-blue-600 mt-1">support@ixsupport.com</p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    Detailed technical support with step-by-step guidance
                  </div>
                </a>
              </div>

              {/* Service Features */}
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="animate-spin" style={{animationDuration: '4s'}}>
                    <Star className="text-yellow-500" size={28} />
                  </div>
                  Why Choose Us?
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: "Secure & Certified", desc: "All technicians are certified professionals" },
                    { icon: Clock, text: "Fast Response", desc: "Under 2 hour response time guaranteed" },
                    { icon: Award, text: "99.8% Success Rate", desc: "Proven track record of successful repairs" },
                    { icon: Users, text: "10,000+ Happy Customers", desc: "Trusted by individuals and businesses" }
                  ].map((feature, index) => (
                    <div key={index} className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 group ${
                      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`} style={{transitionDelay: `${0.8 + index * 0.1}s`}}>
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="text-gray-600" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{feature.text}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl animate-pulse" style={{animationDuration: '3s'}}>
                <h4 className="text-lg font-bold mb-2">🚨 Emergency Support Available</h4>
                <p className="text-red-100">
                  Critical device failures? Our emergency response team is available 24/7 
                  for immediate assistance with business-critical repairs.
                </p>
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

export default Contact;