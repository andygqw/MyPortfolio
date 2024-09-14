import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <MainContent />

      <Footer />

    </div>
  );
};

export default App
