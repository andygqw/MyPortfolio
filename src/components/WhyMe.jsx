import React from 'react';
import { Box, Typography } from '@mui/material';

const TextComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 0',
                backgroundColor: '#1a1a1a',
                color: '#fff',
            }}
        >
            {/* Title Text */}
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    marginTop: '250px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            >
                Why me?
            </Typography>

            {/* Text Block */}
            <Box
                sx={{
                    width: '80vw',
                    maxWidth: '800px',
                    padding: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    borderRadius: '8px',
                    backgroundColor: '#2c2c2c', // Slightly lighter background for text box
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
