import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import WhyMe from './components/WhyMe';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <MainContent />
      <WhyMe />
      <Footer />

    </div>
  );
};

export default App
