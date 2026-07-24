import React from 'react';
import type { CardProps } from '../../types';
import Button from '../elements/Button';
import './Card.css';

const Card: React.FC<CardProps> = ({ title, description, buttonText }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-actions">
        <Button text={buttonText} onClick={() => alert(`${title} clicked!`)} />
      </div>
    </div>
  );
};

export default Card;
