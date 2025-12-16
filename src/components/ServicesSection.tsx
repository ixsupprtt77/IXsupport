import { useState, useEffect, useRef } from "react";
import { Smartphone, Laptop, Cloud, HardDrive, Headset, Wrench } from "./SimpleIcons";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
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
  const services = [
    {
      icon: Smartphone,
      title: "Service Guidance",
      description: "We help explain internet and TV service options available in your area.",
    },
    {
      icon: Laptop,
      title: "Plan Assistance",
      description: "Guidance on understanding different speed tiers, packages, and features.",
    },
    {
      icon: Cloud,
      title: "Provider Information",
      description: "We facilitate connections with multiple providers for descriptive reference only.",
    },
    {
      icon: HardDrive,
      title: "Comparison Support",
      description: "Assistance in understanding differences between service plans and pricing structures.",
    },
    {
      icon: Headset,
      title: "Customer Support",
      description: "Our assistance team helps guide you through the telecommunications selection process.",
    },
    {
      icon: Wrench,
      title: "Setup Guidance",
      description: "We provide information about typical setup processes with various providers.",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}} />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-200/10 rounded-full blur-2xl animate-ping" style={{animationDuration: '10s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
            🤝 Assistance Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How We Help &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Guide You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Independent third-party assistance to help you navigate telecommunications service options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </div>

        {/* Floating Action Indicator */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50 hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">All services backed by our warranty</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
