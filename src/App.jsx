import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <MainContent />
      <WhyMe />
      <Projects />
      <Footer />

    </div>
  );
};

export default App
