import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'rounded-full font-medium transition-all duration-300 flex items-center justify-center';
    const variantStyles = {
    primary: 'bg-cyan-400 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-300/50',
    secondary: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-300/50',
    accent: 'bg-blue-400 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-300/50',
    outline: 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-5',
    lg: 'text-lg py-3 px-8',
  };
    return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;