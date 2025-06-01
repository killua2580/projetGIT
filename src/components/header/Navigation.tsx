import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data/animeData';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id} className="relative group">
            <button
              onClick={() => scrollToSection(item.id)}              className={`font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400' : 'text-white dark:text-gray-100 hover:text-cyan-300 dark:hover:text-cyan-300'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
      
      {/* Mobile Navigation Toggle */}
      <button 
        onClick={toggleMobileMenu} 
        className="md:hidden text-2xl focus:outline-none z-50"
        aria-label="Toggle menu"
      >        {mobileMenuOpen ? (
          <X className={`w-6 h-6 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white dark:text-gray-100'}`} />        ) : (
          <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white dark:text-gray-100'}`} />
        )}
      </button>
      
      {/* Mobile Navigation Menu */}
      <div        className={`fixed inset-0 bg-gradient-to-br from-emerald-600/95 to-cyan-400/95 dark:from-gray-800/95 dark:to-gray-900/95 flex flex-col items-center justify-center transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white text-2xl font-medium transition-all duration-300 hover:text-cyan-200"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;