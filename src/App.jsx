import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';
import './App.css'

const Main = () => {
  return (
    <div>
      <MainContent />
      <WhyMe />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App
