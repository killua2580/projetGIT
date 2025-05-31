import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const scrolled = scrollPosition > 50;
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo scrolled={scrolled} />
        <Navigation scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;