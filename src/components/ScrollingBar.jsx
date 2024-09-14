import React from 'react';
import { Box, Typography } from '@mui/material';
import '../static/ScrollingBar.css';

const ScrollingBar = () => {

    const list = [
        "SOFTWARE ENGINEER",
        "GUANQIAO WANG",
        "UNIVERSITY OF CALIFORNIA DAVIS",
        "COMPUTER SCIENCE",
        "GO BY ANDY",
        "BACKEND DEVELOPER",
        "SPRING BOOT",
        "MYSQL",
        "REACT",
    ];

    const scrollText = "•     " + list.join("     •     ");

    return (
        <Box
            sx={{
                // marginTop: 'auto',
                width: '100vw',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 0',
                backgroundColor: 'transparent',
            }}
        >

            <Box
                sx={{
                    display: 'inline-block',
                    animation: 'scroll-left 20s linear infinite',
                    whiteSpace: 'pre',
                    position: 'relative',
                }}
            >
                <Typography
                    variant="body1"
                    className='scroll-text'
                    sx={{ display: 'inline', mx: 2 }}
                >
                    {scrollText}
                </Typography>
                <Typography
                    variant="body1"
                    className='scroll-text'
                    sx={{ display: 'inline', mx: 2 }}
                >
                    {scrollText}
                </Typography>
                <Typography
                    variant="body1"
                    className='scroll-text'
                    sx={{ display: 'inline', mx: 2 }}
                >
                    {scrollText}
                </Typography>
                <Typography
                    variant="body1"
                    className='scroll-text'
                    sx={{ display: 'inline', mx: 2 }}
                >
                    {scrollText}
                </Typography>
            </Box>

            <style jsx="true">{`
                @keyframes scroll-left {
                    0% {
                    transform: translateX(0%);
                    }
                    100% {
                    transform: translateX(-50%);
                    }
                }
            `}
            </style>
        </Box>
    );
};

export default ScrollingBar;