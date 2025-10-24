import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const SimpleButton: React.FC<ButtonProps> = ({ 
  children, 
  size = 'md', 
  variant = 'default', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
  
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 py-3',
    lg: 'h-14 px-8 text-lg'
  };
  
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500/50 hover:shadow-blue-500/25',
    outline: 'border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 focus:ring-blue-500/50 hover:shadow-blue-500/10',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 focus:ring-gray-500/50 hover:shadow-gray-500/10'
  };
  
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SimpleButton;