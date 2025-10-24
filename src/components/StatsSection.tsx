import { TrendingUp, Users, Clock, Award } from "./SimpleIcons";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ target, duration = 2, isVisible }: { target: number; duration?: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      const timer = setTimeout(() => requestAnimationFrame(animate), 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: 15000, suffix: "+", label: "Happy Customers", color: "text-blue-600" },
    { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate", color: "text-green-600" },
    { icon: Clock, value: 2, suffix: "hrs", label: "Avg Response Time", color: "text-purple-600" },
    { icon: Award, value: 50, suffix: "+", label: "Expert Technicians", color: "text-orange-600" },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-20 left-5 sm:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-purple-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s'}} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-green-200/20 rounded-full blur-2xl animate-ping" style={{animationDuration: '10s'}} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-pulse" style={{animationDuration: '3s'}}>
            📊 Our Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Thousands
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Numbers that speak for our excellence and commitment to quality service
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 relative overflow-hidden group-hover:-translate-y-3 group-hover:scale-105">
                {/* Animated Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{animationDelay: '0.5s'}} />
                
                {/* Icon with Enhanced Animation */}
                <div className="relative mb-3 sm:mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 mb-2 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                    <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                  </div>
                  
                  {/* Pulsing Ring */}
                  <div className="absolute -inset-2 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                </div>
                
                {/* Animated Number */}
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 ${stat.color} relative`}>
                  <AnimatedNumber target={stat.value} isVisible={isVisible} />
                  <span className="text-gray-600">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm font-semibold text-gray-700 relative group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>

                {/* Hover Indicator Line */}
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className={`w-8 sm:w-12 h-0.5 sm:h-1 bg-gradient-to-r ${stat.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' : stat.color === 'text-green-600' ? 'from-green-500 to-green-600' : stat.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' : 'from-orange-500 to-orange-600'} rounded-full mx-auto`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className={`text-center mt-10 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-lg border border-gray-200/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Join thousands of satisfied customers!</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0" style={{animationDelay: '0.5s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
