import { useState, useEffect } from "react";
import SimpleButton from "./SimpleButton";
import { Menu, X } from "./SimpleIcons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Warranty", href: "/warranty" },
    { label: "Contact", href: "/contact" },
    { label: "Track Repair", href: "#track-repair" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform"
          >
            IX Support
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 px-3 py-2 rounded-lg hover:bg-blue-50 group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+18883616963">
              <SimpleButton variant="outline" size="sm" className="hover:scale-110 hover:rotate-1 transition-all duration-300">
                📞 (888) 361-6963
              </SimpleButton>
            </a>
            <a href="tel:+18883616963">
              <SimpleButton size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 hover:-rotate-1 transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  Call Now
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:animate-bounce" />
                </span>
              </SimpleButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 transition-all duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+18883616963" className="w-full">
                <SimpleButton variant="outline" size="sm" className="w-full">
                  📞 (888) 361-6963
                </SimpleButton>
              </a>
              <a href="tel:+18883616963" className="w-full">
                <SimpleButton size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                  Call Now
                </SimpleButton>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
