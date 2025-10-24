import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "./SimpleIcons";
import SimpleButton from "./SimpleButton";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Fixed my laptop screen in under 2 hours. Professional, fast, and affordable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Remote Worker",
      content: "The remote support team helped me set up cloud storage and fix my VPN issues in minutes. Lifesavers!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "Recovered all my thesis data from a broken hard drive. Can't thank them enough for the quick turnaround.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Photographer",
      content: "Battery replacement was seamless. My phone works like new again. Clear pricing and warranty too.",
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-red-50/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-200/20 rounded-full blur-2xl animate-ping" style={{animationDuration: '10s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce" style={{animationDuration: '3s'}}>
            ⭐ Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real people who trust us with their tech
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div 
            key={currentIndex}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 text-center rounded-3xl shadow-2xl border border-gray-200/50 relative overflow-hidden group hover:scale-105 transition-transform duration-500">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-400/30 rounded-full animate-bounce" />
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-pink-400/10 rounded-full blur-xl" />
              
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <div className="text-2xl text-white font-bold">"</div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6 space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div 
                    key={i} 
                    className="animate-bounce"
                    style={{animationDelay: `${i * 0.1}s`, animationDuration: '2s'}}
                  >
                    <Star className="fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform duration-200" size={28} />
                  </div>
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 italic font-medium leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Customer Info */}
              <div className="space-y-2">
                <p className="font-bold text-xl text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-orange-600 font-semibold bg-orange-50 px-4 py-1 rounded-full inline-block">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Controls */}
          <div className={`flex justify-center items-center gap-6 mt-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <SimpleButton
              variant="outline"
              onClick={prev}
              className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronLeft className="group-hover:scale-110 transition-transform" size={24} />
            </SimpleButton>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200/50">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 w-8 h-3 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                  }`}
                />
              ))}
            </div>

            <SimpleButton
              variant="outline"
              onClick={next}
              className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group"
            >
              <ChevronRight className="group-hover:scale-110 transition-transform" size={24} />
            </SimpleButton>
          </div>

          {/* Trust Badge */}
          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-gray-200/50 hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">4.9/5 average rating from 10,000+ reviews</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
