import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-[14px] focus:outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md hover:-translate-y-[2px]',
    secondary: 'bg-bg-light text-text-main hover:bg-gray-100',
    outline: 'border border-border-subtle text-text-main hover:border-primary hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-[15px]',
    lg: 'px-8 py-3.5 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
