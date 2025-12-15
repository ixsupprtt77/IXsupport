import React, { useState, useEffect, useRef } from "react";
import { Search, Calendar, Wrench, CheckCircle } from "./SimpleIcons";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const steps = [
    {
      icon: Search,
      title: "Enter Your ZIP Code",
      description: "Tell us where you live to see which internet and TV providers are available in your area.",
    },
    {
      icon: Calendar,
      title: "Compare Your Options",
      description: "Review side-by-side comparisons of plans, speeds, channels, and pricing from multiple providers.",
    },
    {
      icon: Wrench,
      title: "Choose Best Deal",
      description: "Select the provider and plan that fits your needs. We'll connect you directly with them.",
    },
    {
      icon: CheckCircle,
      title: "Get Connected",
      description: "Enjoy fast, reliable service from day one with ongoing 24/7 support.",
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-10 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-200/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}} />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-green-200/10 rounded-full blur-2xl animate-ping" style={{animationDuration: '10s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-bounce" style={{animationDuration: '3s'}}>
            🚀 Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Get connected in 4 easy steps. Simple and hassle-free.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`text-center transition-all duration-700 group ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon Container with Enhanced Animations */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto shadow-xl relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-2xl">
                    <step.icon className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  
                  {/* Floating Ring Animation */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                  
                  {/* Step Number with Animation */}
                  <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-gray-900 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content with Hover Effects */}
                <div className="space-y-2 sm:space-y-3 px-4 sm:px-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-10 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-lg border border-gray-200/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Ready to get started? Contact us now!</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" style={{animationDelay: '0.5s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
