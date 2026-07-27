import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './About.css';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content container">
        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>About Page</h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
          This project demonstrates a modular React application built with TypeScript. It showcases reusable components, client-side routing, clean folder organization, and type-safe development practices.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
