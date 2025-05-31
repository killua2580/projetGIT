import React from 'react';

interface FloatingElementProps {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = '', 
  delay = 0,
  children 
}) => {
  const animationStyle = {
    animationDelay: `${delay}s`,
  };
  
  return (
    <div
      className={`absolute pointer-events-none animate-float ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default FloatingElement;