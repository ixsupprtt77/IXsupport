import React, { useState } from "react";

interface ServiceCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradientColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-yellow-500 to-orange-500'
  ];

  const bgColors = [
    'bg-blue-50 hover:bg-blue-100',
    'bg-purple-50 hover:bg-purple-100',
    'bg-green-50 hover:bg-green-100', 
    'bg-orange-50 hover:bg-orange-100',
    'bg-indigo-50 hover:bg-indigo-100',
    'bg-yellow-50 hover:bg-yellow-100'
  ];

  return (
    <div 
      className={`relative p-6 h-full group cursor-pointer rounded-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${bgColors[index % bgColors.length]} border border-gray-200 hover:border-gray-300 hover:shadow-2xl`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Floating Dots */}
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0s'}} />
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      {/* Icon Container with Enhanced Animation */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl`}>
          <Icon className="text-white group-hover:scale-110 transition-transform duration-300" size={28} />
        </div>
        
        {/* Floating Ring Animation */}
        <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300`} />
        
        {/* Sparkle Effect */}
        {isHovered && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-bounce">
            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 border-r-2 border-b-2 border-gray-600 transform rotate-45" />
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500" />
    </div>
  );
};

export default ServiceCard;
