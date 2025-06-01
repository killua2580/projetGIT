import React from 'react';

interface LogoProps {
  scrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  return (
    <div className="relative overflow-hidden">      <h1        className={`font-bold relative transition-all duration-500 ${
          scrolled ? 'text-2xl text-cyan-500 dark:text-cyan-400' : 'text-3xl text-white dark:text-gray-100'
        }`}
      >
        <span className="inline-block">
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">A</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">h</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">l</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">e</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">m</span>
        </span>
        {' '}
        <span className="inline-block">
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">B</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">e</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">d</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">o</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">u</span>
          <span className="inline-block hover:animate-pulse transition-transform duration-300 hover:scale-110">i</span>
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-500 transition-all duration-700 group-hover:w-full"></span>
      </h1>
    </div>
  );
};

export default Logo;