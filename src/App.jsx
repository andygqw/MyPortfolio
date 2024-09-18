import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
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

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          maxWidth: '100vw',
          backgroundColor: '#1a1a1a',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', width:'80%' }}>
          Please view this page on a desktop browser. This site is designed to provide an optimal experience for desktop or laptop windows.
        </Typography>
      </Box>
    );
  }

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
