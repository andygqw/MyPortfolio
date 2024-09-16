import React from 'react';
import { Box, Typography } from '@mui/material';
import '../static/WhyMe.css';

const TextComponent = () => {
    return (
        <section id="why-me">
            <Box className="content-section">
                <Typography className='content-title'>
                    Why me?
                </Typography>

                <Box
                    sx={{
                        width: '80vw',
                        maxWidth: '1000px',
                    }}
                >
                    <Typography className='content-text'>
                        Hello, my name is
                        <span className='gradient-text'>
                            {' '}Guanqiao Wang
                        </span>
                        , I go by
                        <span className='gradient-text'>
                            {' '}Andy Wang
                        </span>
                        .
                    </Typography>
                    <Typography className='content-text'>
                        I am a recent Computer Science graduate from University of California, Davis.
                    </Typography>
                    <Typography className='content-text'>
                        I specialize in
                        <span className='highlight-text'>
                            {' '}backend development, web, and cloud infrastructure
                        </span>
                        .
                    </Typography>
                    <Typography className='content-text'>
                        I've worked on developing and optimizing scalable systems using technologies like
                        <span className='highlight-text'>
                            {' '}Spring Boot, .NET, Node.JS, React{' '}
                        </span>
                        and more.
                    </Typography>
                    <Typography className='content-text'>
                        I'm also a certified
                        <span className='highlight-text'>
                            {' '}AWS Solution Architect
                        </span>
                        .
                    </Typography>

                    <Typography className='content-text' sx={{ marginTop: '20px' }}>
                        Beyond my technical skills, I value creativity and efficiency in my work, always seeking innovative solutions that improve user experience and operational performance.
                    </Typography>
                    <Typography className='content-text'>
                        I am passionate about building products that have a direct impact on users and am always eager to learn and grow in fast-paced environments.
                    </Typography>

                    <Typography className='content-text' sx={{ marginTop: '20px' }}>
                        <span className='important-text'>Please explore my portfolio to learn more about my skills.</span>
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default TextComponent;
