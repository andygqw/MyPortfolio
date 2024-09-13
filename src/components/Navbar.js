// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src="github-logo.png" alt="GitHub Logo" height="30" /> / UNIVERSE'24
        </Typography>
        <Button color="inherit">Why attend?</Button>
        <Button color="inherit">Agenda</Button>
        <Button color="inherit">Speakers</Button>
        <Button color="inherit">FAQ</Button>
        <Button color="inherit">Attendee Portal</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
