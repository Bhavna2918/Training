import React from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">My React App</div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
