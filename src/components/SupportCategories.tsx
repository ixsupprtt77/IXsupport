import React from "react";
import { Smartphone, Laptop, Shield, Cloud, Wrench, HelpCircle } from "./SimpleIcons";

const categories = [
  {
    icon: Smartphone,
    title: "Mobile Devices",
    description: "Smartphones & tablets repair and troubleshooting",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Laptop,
    title: "Computers",
    description: "Laptop & desktop repair services",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Data Recovery",
    description: "Secure data backup and recovery solutions",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Cloud,
    title: "Cloud Support",
    description: "Remote cloud services and setup assistance",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Wrench,
    title: "Hardware Fixes",
    description: "Component replacement and upgrades",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: HelpCircle,
    title: "Tech Guidance",
    description: "One-on-one tech support and training",
    gradient: "from-pink-500 to-rose-500"
  }
];

const SupportCategories = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 support-category-animate">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Complete Support
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Categories</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            From quick fixes to complex repairs, we've got you covered across all device types
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group perspective-1000 support-category-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-5 sm:p-6 lg:p-8 h-full relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 rounded-lg border bg-card text-card-foreground shadow-sm hover:-translate-y-2 hover:scale-[1.02]">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Floating Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.gradient} mb-4 sm:mb-5 lg:mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:animate-pulse`}>
                  <category.icon className="text-white" size={28} />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors relative z-10">
                  {category.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground relative z-10">
                  {category.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;
