import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}
