import React from 'react';
import { Box } from '@mui/material';
import '../static/HangingObject.css';

const HangingObject = ({ image }) => {
  return (
    <Box className="hanging-container">
      <Box className="string">
        <Box className="dot"></Box>
      </Box>
      <Box className="donut">
        <img src={image} alt="donut" />
      </Box>
    </Box>
  );
};

export default HangingObject;
