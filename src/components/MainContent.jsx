import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import FloatingImage from './FloatingImage';
import ScrollingBar from './ScrollingBar';
import '../static/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="main-content-group">
                <div className="event-subtitle-box">
                    <Typography variant="h6" className="event-subtitle">
                        Software Engineer
                    </Typography>
                </div>
                <Typography variant="h2" className="event-title">
                    Hi, I'm Andy Wang
                </Typography>
                <Typography variant="h5" className="event-info">
                    New Grad • Fullstack Developer • Open Source Contributor
                </Typography>

                <div className="buttons">
                    <Button size="large" className="primary-button">
                        Get Resume {'>'}
                    </Button>
                    <Button className="secondary-button" size="large" style={{ marginLeft: '20px' }}>
                        Check background {'>'}
                    </Button>
                </div>
            </div>
            <Box sx={{
                width: '1000px',
            }}>
                <FloatingImage />
            </Box>
            <ScrollingBar />
        </div>
    );
};

export default MainContent;
