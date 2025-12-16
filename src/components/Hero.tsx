import { useState, useEffect } from "react";
import SimpleButton from "./SimpleButton";
import { Wifi, Tv, Phone, Zap, Shield, Star } from "./SimpleIcons";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-8 sm:pt-12 lg:pt-8">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Left side - Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30" />
        
        {/* Right side - Diagonal shape - Hidden on mobile */}
        <div 
          className="hidden lg:block absolute top-0 right-0 w-3/5 h-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"
          style={{
            clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      {/* Floating Geometric Shapes - Responsive */}
      <div className="absolute top-8 sm:top-12 left-4 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400/20 rounded-full animate-bounce" style={{animationDuration: '6s'}} />
      <div className="absolute top-20 sm:top-32 right-8 sm:right-40 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400/20 rotate-45 animate-pulse" style={{animationDuration: '4s'}} />
      <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-32 w-6 h-6 sm:w-8 sm:h-8 bg-green-400/30 rounded-full animate-ping" style={{animationDuration: '8s'}} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center min-h-[calc(100vh-8rem)] py-6 sm:py-8 lg:py-6">
            
            {/* Main Content - Takes 7 columns */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 relative mt-4">
              
              {/* Floating Badge */}
              <div className={`inline-block transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 -rotate-12'
              }`}>
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">⚠️ Independent Assistance Platform</span>
                </div>
              </div>

              {/* Main Heading - Staggered Animation */}
              <div className="space-y-1 sm:space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <div className={`transition-all duration-1000 delay-200 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                  }`}>
                    <span className="text-gray-900">Get Assistance</span>
                  </div>
                  <div className={`transition-all duration-1000 delay-400 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                  }`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                      Finding Internet
                    </span>
                  </div>
                  <div className={`transition-all duration-1000 delay-600 ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                  }`}>
                    <span className="text-gray-700">& TV Services</span>
                  </div>
                </h1>
              </div>

              {/* Description with animated underline */}
              <div className={`relative max-w-2xl transition-all duration-800 delay-800 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium space-y-1">
                  <p>We're an independent third-party assistance platform, launched in 2025,</p>
                  <p>that helps guide you through finding telecommunications services.</p>
                  <p>We charge <span className="relative inline-block">
                    <span className="text-blue-600 font-semibold">separate service fees for our assistance</span>
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 animate-pulse" style={{animationDelay: '3s', animationFillMode: 'forwards'}} />
                  </span>.</p>
                </div>
              </div>

              {/* Interactive CTA Section */}
              <div className={`transition-all duration-800 delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="tel:+18889296191" className="w-full sm:w-auto">
                    <SimpleButton 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 group w-full"
                    >
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        📞 Get Assistance Now
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce group-hover:animate-ping" />
                      </span>
                    </SimpleButton>
                  </a>
                  
                  <a href="/contact" className="w-full sm:w-auto">
                    <SimpleButton 
                      size="lg" 
                      variant="outline"
                      className="text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group w-full sm:w-auto"
                    >
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        <Zap size={20} className="group-hover:scale-110 transition-transform" />
                        Request Help
                      </span>
                    </SimpleButton>
                  </a>
                </div>
                
                {/* Disclosure Below CTA */}
                <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-xl">
                  <p className="text-sm text-yellow-900 leading-relaxed">
                    <strong>Important:</strong> Cosmo Broad is an independent third-party service assistance startup, launched in 2025. 
                    We are NOT affiliated with, endorsed by, or sponsored by any cable, internet, or streaming provider. We charge separate service fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Section - Takes 5 columns */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-4 hidden sm:block">
              {/* Service Cards Display */}
              <div className={`relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
              }`}>
                
                {/* Multi-Panel Service Display */}
                <div className="relative grid grid-cols-2 gap-3 sm:gap-4 h-64 sm:h-80">
                  
                  {/* Connectivity Panel - Top Left */}
                  <div className="relative col-span-2 row-span-1 group">
                    <div 
                      className="relative h-36 sm:h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500"
                      style={{
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Wifi className="text-white" size={80} />
                      </div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                        <div className="text-sm sm:text-base font-bold">High-Speed Connectivity</div>
                        <div className="text-xs opacity-80">Up to 1 Gbps</div>
                      </div>
                    </div>
                  </div>

                  {/* TV Panel - Bottom Left */}
                  <div className="relative group">
                    <div className="h-24 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-white p-2 sm:p-4">
                        <Tv className="mx-auto mb-1 sm:mb-2" size={32} />
                        <div className="text-xs sm:text-sm font-bold">Premium Entertainment</div>
                        <div className="text-xs opacity-80">200+ Channels</div>
                      </div>
                      <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Phone Panel - Bottom Right */}
                  <div className="relative group">
                    <div 
                      className="h-24 sm:h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
                      style={{
                        clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                      }}
                    >
                      <div className="relative h-full flex items-center justify-center text-white">
                        <div className="text-center p-2 sm:p-4">
                          <Phone className="mx-auto mb-1 sm:mb-2" size={32} />
                          <div className="text-xs sm:text-sm font-bold">Phone</div>
                          <div className="text-xs opacity-80">Unlimited Calls</div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Floating Star Accent */}
                  <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rotate-45 rounded-lg shadow-lg animate-bounce opacity-90" style={{animationDuration: '3s'}}>
                    <div className="w-full h-full flex items-center justify-center text-gray-900 transform -rotate-45">
                      <Star size={16} className="sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400/30 rounded-full blur-sm animate-pulse" />
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-blue-400/40 rounded-full animate-ping" />
                </div>

                {/* Interactive Overlay Cards */}
                <div className="absolute -top-6 sm:-top-8 left-2 sm:left-4 transform -rotate-12">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-gray-200/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="text-white" size={14} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">1 Gbps</div>
                        <div className="text-xs text-gray-500 hidden sm:block">Speed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 sm:-bottom-4 right-4 sm:right-8 transform rotate-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-gray-200/50 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Shield className="text-white" size={14} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-800">99.9%</div>
                        <div className="text-xs text-gray-500 hidden sm:block">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce" style={{animationDuration: '3s'}}>
          <div className="text-sm text-gray-400 font-medium">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
