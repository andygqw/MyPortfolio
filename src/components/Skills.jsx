import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '../static/Skills.css';
import HangingObject from './HangingObject';
import dog from '../static/dog.webp';
import java from '../static/skills/java.png';
import csharp from '../static/skills/csharp.png';
import python from '../static/skills/python.png';
import typescript from '../static/skills/typescript.svg';
import javascript from '../static/skills/javascript.png';
import aws from '../static/skills/aws.png';
import cloudflare from '../static/skills/cloudflare.png';
import linux from '../static/skills/linux.png';
import git from '../static/skills/git.png';
import mysql from '../static/skills/mysql.png';
import docker from '../static/skills/docker.png';
import postman from '../static/skills/postman.png';
import spring from '../static/skills/spring.png';
import dotnet from '../static/skills/dotnet.png';
import nodejs from '../static/skills/nodejs.png';
import react from '../static/skills/react.png';
import aws_cert from '../static/skills/aws-certified-solutions-architect-associate.png';


const Logo = ({ image, alt }) => {
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
            <img src={image} alt={alt} className='skill-logo' style={{ maxHeight: '80%' }} />
        </Box>
    );
};

const Skills = () => {
    return (
        <section id='skills'>
            <Box
                className="skills-container"
            >
                <HangingObject image={dog} />
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
                    <Logo image={java} alt='java' />
                    <Logo image={csharp} alt='csharp' />
                    <Logo image={python} alt='python' />
                    <Logo image={typescript} alt='typescript' />
                    <Logo image={javascript} alt='javascript' />
                    <Logo image={aws} alt='aws' />
                    <Logo image={cloudflare} alt='cloudflare' />
                    <Logo image={linux} alt='linux' />
                    <Logo image={git} alt='git' />
                    <Logo image={mysql} alt='mysql' />
                    <Logo image={docker} alt='docker' />
                    <Logo image={postman} alt='postman' />
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
                    <Logo image={spring} alt='spring' />
                    <Logo image={dotnet} alt='dotnet' />
                    <Logo image={nodejs} alt='nodejs' />
                    <Logo image={react} alt='react' />
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
                        <img src={aws_cert} alt='aws-saa' />
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
