import React from 'react';
import { Box, Typography, Link } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import PhoneIcon from '@mui/icons-material/Phone';
import GitHub from '../static/github_icon.png'
import LinkedIn from '../static/linkedin_icon.webp'
import Email from '../static/email.webp';


const ContactInfo = () => {
    return (
        <section id='contact'>
            <Box
                sx={{
                    padding: '40px',
                    // backgroundColor: '#161A1F',
                    borderRadius: '20px',
                    textAlign: 'center',
                    width: '20vw',
                    minWidth: '300px',
                }}
            >
                <Typography variant="h4" gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Find Me On
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Email */}
                    <Box sx={{
                        width: '90px',
                        height: '60px',
                        border: '2px solid transparent',
                        borderRadius: '20px',
                        '&:hover': {
                            border: '2px solid white',
                        },
                    }}>
                        <Typography variant="body1">
                            <Link
                                href="mailto:andygqwang@gmail.com"
                                underline="none"
                            >
                                {/* <EmailIcon sx={{
                                    color: '#FDBF58',
                                    '&:hover': {
                                        opacity: '0.8',
                                    },
                                    fontSize: '60px',
                                }} /> */}
                                <img src={Email} alt='email_icon' width='52px'/>
                            </Link>
                        </Typography>
                    </Box>

                    {/* Phone
                    <Box sx={{ marginRight: '20px' }}>
                        <IconButton color="primary">
                            <PhoneIcon />
                        </IconButton>
                        <Typography variant="body1">
                            +1 123-456-7890
                        </Typography>
                    </Box> */}

                    {/* LinkedIn */}
                    <Box sx={{
                        width: '90px',
                        height: '60px',
                        border: '2px solid transparent',
                        borderRadius: '20px',
                        '&:hover': {
                            border: '2px solid white',
                        },
                    }}>

                        <Typography variant="body1">
                            <Link href="https://www.linkedin.com/in/guanqiao-wang-9955b8270/"
                                target="_blank"
                                underline="none"
                            >
                                {/* <LinkedInIcon sx={{
                                    color: '#51E694',
                                    '&:hover': {
                                        opacity: '0.8',
                                    },
                                    fontSize: '60px',
                                }} /> */}
                                <img src={LinkedIn} alt='linkedin_icon' width='60px'/>
                            </Link>
                        </Typography>
                    </Box>

                    {/* GitHub */}
                    <Box sx={{
                        width: '90px',
                        height: '60px',
                        border: '2px solid transparent',
                        borderRadius: '20px',
                        '&:hover': {
                            border: '2px solid white',
                        },
                    }}>
                        <Typography variant="body1">
                            <Link href="https://github.com/andygqw"
                                target="_blank"
                                underline="none"
                                sx={{
                                    color: 'grey',
                                    '&:hover': {
                                        color: 'white',
                                    }
                                }}
                            >
                                {/* <GitHubIcon sx={{
                                    color: 'grey',
                                    '&:hover': {
                                        color: 'white',
                                    },
                                    fontSize: '60px',
                                }} /> */}
                                <img src={GitHub} alt='github_icon' width='60px'/>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default ContactInfo;
