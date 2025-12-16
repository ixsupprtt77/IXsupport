import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Star, Shield, Zap } from "./SimpleIcons";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { label: "FAQ", href: "/faq" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ];

  return (
    <footer ref={footerRef} className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white mt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '10s'}} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-2xl animate-ping" style={{animationDuration: '6s'}} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        
        {/* Trust Indicators */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 lg:gap-8 mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-pulse" style={{animationDuration: '4s'}}>
              <Star className="text-yellow-400" size={18} />
              <span className="text-xs sm:text-sm font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-bounce" style={{animationDuration: '6s'}}>
              <Shield className="text-green-400" size={18} />
              <span className="text-xs sm:text-sm font-semibold">Secure Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full animate-pulse" style={{animationDuration: '5s'}}>
              <Zap className="text-blue-400" size={18} />
              <span className="text-xs sm:text-sm font-semibold">Fast Support</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Cosmo Broad
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Cosmo Broad is an independent third-party service provider and is not affiliated with any cable, internet, or streaming service provider. All trademarks are the property of their respective owners.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={16} />
                </div>
                <span>support@cosmobroadband.com</span>
              </div>
              <a href="tel:+18889296191" className="flex items-center gap-3 hover:text-green-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={16} />
                </div>
                <span>(888) 929-6191</span>
              </a>
              <div className="flex items-center gap-3 hover:text-purple-400 transition-colors duration-300 group">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={16} />
                </div>
                <span>Serving All 50 States</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link, index) => (
                <li key={link.label} className={`transition-all duration-300 delay-${index * 50}`}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-blue-400">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link, index) => (
                <li key={link.label} className={`transition-all duration-300 delay-${index * 50}`}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-blue-400">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "High-Speed Connectivity",
                "Entertainment Packages", 
                "Digital Phone Service",
                "Bundle Packages",
                "24/7 Technical Support",
                "Professional Installation"
              ].map((service, index) => (
                <li key={service} className={`transition-all duration-300 delay-${index * 100} hover:text-purple-400 hover:translate-x-1`}>
                  <span className="text-purple-400">•</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className={`bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-xs sm:text-sm font-semibold text-center text-yellow-100 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                ⚠️
              </div>
              <span className="text-center">INDEPENDENT SERVICE: Cosmo Broad is an independent third-party service assistance startup, launched in 2025. We are not affiliated with or endorsed by any provider. All trademarks™ belong to their respective owners.</span>
              <div className="hidden sm:flex w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full items-center justify-center animate-pulse flex-shrink-0" style={{animationDelay: '1s'}}>
                ⚠️
              </div>
            </p>
          </div>
          <div className={`text-center transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-sm text-gray-400 mb-4">
              © {new Date().getFullYear()} Cosmo Broad. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Independent assistance for your telecommunications needs — <span className="text-blue-400 font-semibold">helping you find the right services</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
