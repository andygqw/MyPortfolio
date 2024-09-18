import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import FloatingImage from './FloatingImage';
import ScrollingBar from './ScrollingBar';
import '../static/MainContent.css';

const MainContent = () => {
    return (
        <section id='main'>
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
                        <Button
                            size="large"
                            className="primary-button"
                            onClick={() => window.location.href = '/resume'}
                        >
                            Get Resume {'>'}
                        </Button>
                        <HashLink smooth to="/#why-me">
                            <Button
                                className="secondary-button"
                                size="large"
                                style={{ marginLeft: '20px' }}
                                onClick={() => window.location.hash = '#why-me'}
                            >
                                Know more about me {'>'}
                            </Button>
                        </HashLink>
                    </div>
                </div>
                <Box sx={{
                    width: '1000px',
                }}>
                    <FloatingImage />
                </Box>
                <ScrollingBar />
            </div>
        </section>
    );
};

export default MainContent;
