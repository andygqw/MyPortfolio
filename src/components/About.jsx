import React from 'react';
import { Box, Typography } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
import HangingObject from './HangingObject';
import heart from '../static/heart.webp';
import '../static/About.css';

const About = () => {
    return (
        <>
            <section id='about'>
                <Box className='about-section'>
                    <HangingObject image={heart} />
                    <Box sx={{ marginTop: '40px' }}>
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
                    <section id='contact'>
                        <Box className='contact-section'>
                            
                        </Box>
                    </section>
                </Box>
            </section>
        </>
    );
};

export default About;