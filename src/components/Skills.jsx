import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import '../static/Skills.css';
import HangingObject from './HangingObject';


const Logo = ({ image, alt }) => {
    const str = 'src/static/skills/' + image;
    return (
        <Box sx={{
            height: '100px',
            // width: '100px',
            // maxWidth: '300px',
            width: 'auto',
            padding: '10px 30px',
            borderRadius: '20px',
            border: '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                border: '2px solid white',
            },
        }}>
            <img src={str} alt={alt} className='skill-logo' style={{ maxHeight: '80%' }} />
        </Box>
    );
};

const Skills = () => {
    return (
        <section id='skills'>
            <Box
                className="skills-container"
            >
                <HangingObject image='src/static/dog.webp' />
                <Typography gutterBottom sx={{
                    marginTop: '60px',
                    marginBottom: '20px',
                    color: '#aaa',
                    fontWeight: 'bold',
                    width: '80%'
                }}>
                    PROFESSIONAL SKILLS
                    <Divider color='grey' />
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '80px',
                    maxWidth: '1200px',
                }}>
                    <Logo image='java.png' alt='java' />
                    <Logo image='csharp.png' alt='csharp' />
                    <Logo image='python.png' alt='python' />
                    <Logo image='typescript.svg' alt='typescript' />
                    <Logo image='javascript.png' alt='javascript' />
                    <Logo image='aws.png' alt='aws' />
                    <Logo image='cloudflare.png' alt='cloudflare' />
                    <Logo image='linux.png' alt='linux' />
                    <Logo image='git.png' alt='git' />
                    <Logo image='mysql.png' alt='mysql' />
                    <Logo image='docker.png' alt='docker' />
                    <Logo image='postman.png' alt='postman' />
                    {/* <Logo image='redis.png' alt='redis'/>
                    <Logo image='rabbitmq.png' alt='rabbitmq'/> */}
                </Box>

                <Typography gutterBottom sx={{
                    marginTop: '60px',
                    marginBottom: '20px',
                    color: '#aaa',
                    fontWeight: 'bold',
                    width: '80%'
                }}>
                    FRAMEWORKS
                    <Divider color='grey' />
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '80px',
                    maxWidth: '1200px',
                }}>
                    <Logo image='spring.png' alt='spring' />
                    <Logo image='dotnet.png' alt='dotnet' />
                    <Logo image='nodejs.png' alt='nodejs' />
                    <Logo image='react.png' alt='react' />
                    {/* <Logo image='flask.png' alt='flask'/> */}
                </Box>

                <Typography gutterBottom sx={{
                    marginTop: '60px',
                    marginBottom: '20px',
                    color: '#aaa',
                    fontWeight: 'bold',
                    width: '80%'
                }}>
                    CERTIFICATION
                    <Divider color='grey' />
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '80px',
                    maxWidth: '1200px',
                }}>
                    <Box onClick={() => window.open('https://www.credly.com/badges/751eb12e-4225-4959-8c6a-cb31e4cd1547/public_url', '_blank')}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            padding: '10px 30px',
                            alignItems: 'center',
                            borderRadius: '20px',
                            border: '2px solid transparent',
                            '&:hover': {
                                border: '2px solid white',
                                cursor: 'pointer',
                            },
                        }}>
                        <img src='src/static/skills/aws-certified-solutions-architect-associate.png' alt='aws-saa' />
                        <Typography sx={{
                            fontWeight: 'bold',
                            marginLeft: '10px',
                            color: '#aaa',
                        }}>
                            click here to verify
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default Skills;
