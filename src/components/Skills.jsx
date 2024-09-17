import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import '../static/Skills.css';


const logo = ({ image, alt }) => {
    return (
        <Box sx={{
            height: '100px',
            borderRadius: '20px',
            border: '2px solid transparent',
        }}>
            <img src={image} alt={alt}/>
        </Box>
    );
};

const Skills = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        padding: '40px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ marginBottom: '20px', color: '#aaa' }}>
        PROFESSIONAL SKILLS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/microsoft.png" alt="Microsoft" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/atlassian.png" alt="Atlassian" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/octopus.png" alt="Octopus" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/kpmg.png" alt="KPMG" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/octopus.png" alt="Octopus" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/kpmg.png" alt="KPMG" className="skill-logo" />
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ marginTop: '40px', marginBottom: '20px', color: '#aaa' }}>
        FRAMEWORKS
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/docker.png" alt="Docker" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/figma.png" alt="Figma" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/sentry.png" alt="Sentry" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/postman.png" alt="Postman" className="skill-logo" />
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ marginTop: '40px', marginBottom: '20px', color: '#aaa' }}>
        CERTIFIED
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/speakeasy.png" alt="Speakeasy" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/opsera.png" alt="Opsera" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/launchdarkly.png" alt="LaunchDarkly" className="skill-logo" />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <img src="/path-to-logo/swim.png" alt="Swim" className="skill-logo" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
