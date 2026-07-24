import React from 'react';
import type { ButtonProps } from '../../types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  type = 'button', 
  disabled = false,
  className = '',
  ...rest 
}) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`btn ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
