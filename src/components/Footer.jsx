import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import '../static/Footer.css'; 

const Footer = () => {
  return (
    <Box component="footer" className="footer">
     
      <Typography variant="body2" className="footer-text">
        Designed and Developed by Guanqiao Wang
      </Typography>

      <Typography variant="body2" className="footer-text">
        © 2024 Guanqiao Wang
      </Typography>

      <Box className="footer-icons">
        <IconButton href="https://github.com" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank">
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
