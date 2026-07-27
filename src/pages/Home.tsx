import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Card from '../components/cards/Card';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content container">
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>My React App</h1>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <Card 
            title="Welcome"
            description="Welcome to my React and TypeScript project. This project demonstrates basic component structure."
            buttonText="Get Started"
          />
          <Card 
            title="React Components"
            description="We are using reusable components like Header, Footer, Button, and Card to keep the code DRY."
            buttonText="Learn More"
          />
          <Card 
            title="TypeScript Benefits"
            description="TypeScript adds static typing to React, helping us catch errors early and write more robust code."
            buttonText="View Types"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
