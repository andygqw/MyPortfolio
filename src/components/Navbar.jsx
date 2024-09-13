import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import '../static/Navbar.css';

const Navbar = () => {
  return (
    <AppBar sx={{
      position: 'fixed',
      zIndex: 90,
      background: 'white',
      height: '66px',
      fontWeight: 550,
      borderRadius: '22px',
      boxShadow: 'none',
      maxWidth: '1280px',
      margin: '1rem auto 0 auto',
      left: '0',
      border: '1px solid #E5E5E5',
    }}>
      <Toolbar sx={{
        height: '64px',
        display: 'flex',
        padding: '0 8px 0 28px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="logo"
        />
        <Typography variant="h6" className="event-name">
          / UNIVERSE'24
        </Typography>
        <div className="menu">
          <a href="#">Why attend?</a>
          <a href="#">Agenda</a>
          <a href="#">Speakers</a>
          <a href="#">FAQ</a>
          <a href="#">Attendee Portal</a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
