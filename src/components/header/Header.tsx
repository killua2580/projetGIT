import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from '../common/ThemeToggle';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition > 50;
  
  return (    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md dark:shadow-gray-800/50' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo scrolled={scrolled} />
        <div className="flex items-center space-x-4">
          <Navigation scrolled={scrolled} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;