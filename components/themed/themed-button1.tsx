import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = '#374151', // gray-700
  textColor = '#ffffff',
  size = 'md',
  showArrow = true,
  onClick,
  disabled = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: {
      padding: 'px-4 py-2',
      fontSize: 'text-sm',
      borderRadius: 'rounded-full',
      iconSize: 16
    },
    md: {
      padding: 'px-6 py-3',
      fontSize: 'text-base',
      borderRadius: 'rounded-full',
      iconSize: 18
    },
    lg: {
      padding: 'px-8 py-4',
      fontSize: 'text-lg',
      borderRadius: 'rounded-full',
      iconSize: 20
    }
  };

  const currentSize = sizeStyles[size];
  
  const buttonStyle = {
    backgroundColor: disabled ? '#9ca3af' : backgroundColor,
    color: disabled ? '#ffffff' : textColor,
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-medium transition-all duration-200 
    hover:opacity-90 active:scale-95
    ${currentSize.padding} 
    ${currentSize.fontSize} 
    ${currentSize.borderRadius}
    ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      style={buttonStyle}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
      {showArrow && (
        <AntDesign name="arrowright" size={24} color="black" />
      )}
    </button>
  );
};
