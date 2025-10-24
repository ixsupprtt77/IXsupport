import { useState, useEffect } from 'react';
import { ChevronUp } from './SimpleIcons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={20} 
            className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;