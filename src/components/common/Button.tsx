import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
}) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-pink-400 hover:bg-pink-500 text-white shadow-lg hover:shadow-pink-300/50',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white shadow-lg hover:shadow-purple-300/50',
    accent: 'bg-blue-400 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-300/50',
    outline: 'bg-transparent border-2 border-pink-400 text-pink-400 hover:bg-pink-400/10',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-5',
    lg: 'text-lg py-3 px-8',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;