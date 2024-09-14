import React from 'react';
import { Button, Typography } from '@mui/material';
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
                    New Grad • Open Source Contributor • Fullstack Developer
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
        </div>
    );
};

export default MainContent;
