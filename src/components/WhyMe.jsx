import React from 'react';
import { Box, Typography } from '@mui/material';
import '../static/WhyMe.css';

const TextComponent = () => {
    return (
        <Box className="content-section">
            <Typography className='content-title'>
                Why me?
            </Typography>

            <Box
                sx={{
                    width: '80vw',
                    maxWidth: '800px',
                    padding: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    borderRadius: '8px',
                    backgroundColor: '#2c2c2c',
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                    123
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    456
                </Typography>
            </Box>
        </Box>
    );
};

export default TextComponent;
