import React from 'react';
import { Box, Typography } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import HangingObject from './HangingObject';
import heart from '../static/heart.webp';
import ContactInfo from './ContactInfo';
import '../static/About.css';

const About = () => {
    return (
        <>
            <section id='about'>
                <Box className='about-section'>
                    <HangingObject image={heart} />
                    <Box onClick={() => window.open("https://github.com/andygqw")}
                        sx={{
                            marginTop: '40px',
                            cursor: 'pointer',
                            border: '2px solid transparent',
                            borderRadius: '20px',
                            '&:hover': {
                                border: '2px solid white',
                            },
                            padding: '40px',
                        }}
                    >
                        <Box sx={{ display: 'block' }}>
                            <Typography className='github-title'>
                                @andygqw on GitHub
                            </Typography>
                        </Box>
                        <GitHubCalendar
                            username='andygqw'
                            blockSize={16}
                            fontSize={20}
                        />
                    </Box>
                    <Box className='contact-section'>
                        <ContactInfo />
                    </Box>
                </Box>
            </section>
        </>
    );
};

export default About;