import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../static/Navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = (hash) => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = hash;
    }, 100);
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
      overflowY: 'hidden',
    }}>
      <Toolbar sx={{
        height: '64px',
        display: 'flex',
        padding: '0 10px 0 16px !important',
      }}>
        <GitHubIcon onClick={() => window.open("https://github.com/andygqw")}
          className="logo-link"
          sx={{ fontSize: 50, color: '#000' }}
        />
        <Typography 
          variant="h6"
          className="event-name title-link"
          onClick={() => handleClick('#main')}
        >
          <span className="event-other">/ </span>
          Portfolio
          <span className="event-other"> '24</span>
        </Typography>

        <div className="menu">
          {/* <a href="/#why-me">Why me?</a>
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/resume">Resume</a>
          <a href="#about">About</a> */}
          <HashLink smooth to="/#why-me">Why me?</HashLink>
          <HashLink smooth to="/#projects">Projects</HashLink>
          <HashLink smooth to="/#skills">Skills</HashLink>
          <Link to="/resume">Resume</Link>
          <HashLink smooth to="/#about">About</HashLink>
        </div>
        <Button variant="contained" className="get-contacts" onClick={()=>handleClick('#contact')}>
          Get contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
