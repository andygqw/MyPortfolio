import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../static/Navbar.css';

const Navbar = () => {

  const handleClick = (url) => {
    window.location.href = url;
  };

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
        padding: '0 10px 0 16px !important',
        maxWidth: '1280px',
      }}>
        <GitHubIcon onClick={() => window.open("https://github.com/andygqw")}
          className="logo-link"
          sx={{ fontSize: 50, color: '#000' }}
        />
        <Typography 
          variant="h6"
          className="event-name title-link"
          onClick={() => handleClick('/')}
        >
          <span className="event-other">/ </span>
          Andy Wang
          <span className="event-other"> '24</span>
        </Typography>

        <div className="menu">
          <a href="#">Why me?</a>
          <a href="#">Projects</a>
          <a href="#">Resume</a>
          <a href="#">Experiences</a>
          <a href="#">About</a>
        </div>
        <Button variant="contained" className="get-contacts">
          Get contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
