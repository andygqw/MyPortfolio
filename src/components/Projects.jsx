import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { styled } from '@mui/system';

const CareerPathContainer = styled(Box)(() => ({
  padding: '80px 0px',
  backgroundColor: '#0F1217',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CareerMilestone = styled(Box)(() => ({
  width: '70vw',
  maxWidth: '1200px',
  backgroundColor: '#161A1F',
  borderRadius: '20px',
  padding: '40px',
  marginBottom: '20px',
  border: '2px solid #1F2429',
}));

const CareerHeader = styled(Typography)(() => ({
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '4rem',
  color: 'white',
}));

const RedCapsuleIcon = styled(Box)(() => ({
  width: '12px',
  height: '24px',
  backgroundColor: '#FE4B2A',
  borderRadius: '12px',
  rotate: '90deg',
  marginRight: '20px',
}));
const PinkCapsuleIcon = styled(Box)(() => ({
  width: '12px',
  height: '24px',
  backgroundColor: '#FFBAF6',
  borderRadius: '12px',
  rotate: '90deg',
  marginRight: '20px',
}));
const GreenCapsuleIcon = styled(Box)(() => ({
  width: '12px',
  height: '24px',
  backgroundColor: '#54EB78',
  borderRadius: '12px',
  rotate: '90deg',
  marginRight: '20px',
}));

const MilestoneHeader = styled(Typography)(() => ({
  fontWeight: '900',
  fontSize: '1.75rem',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  color: 'white',
}));

const Line = styled(Divider)(() => ({
  borderColor: '#333',
  marginBottom: '10px',
}));

const TimeAndDetails = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
});

const Projects = () => {
  return (
    <section id='projects'>
      <CareerPathContainer>
        <CareerHeader>
          Projects
        </CareerHeader>

        <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Follow these key milestones to reach the pinnacle of your career.
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            window.open('https://github.com/andygqw?tab=repositories', '_blank');
          }}
          sx={{
            marginBottom: '40px',
            backgroundColor: 'transparent',
            padding: '8px 26px',
            border: '2px solid grey',
            borderRadius: '10px',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              border: '2px solid white',
            },
          }}
        >
          Explore Full Github Repo {'>'}
        </Button>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <RedCapsuleIcon />
            Efficiency Boost Tool
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography>Node.JS / React / AWS S3 / CloudFlare Worker / SQLite</Typography>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  window.open('https://github.com/andygqw?tab=repositories', '_blank');
                }}
                sx={{
                  marginBottom: '40px',
                  marginRight: '8px',
                  backgroundColor: 'grey',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  color: 'black',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <GitHubIcon
                  sx={{ fontSize: 20, color: '#000', marginRight: '4px' }}
                />
                Github</Button>
              <Button
                variant="contained"
                onClick={() => {
                  window.open('https://github.com/andygqw?tab=repositories', '_blank');
                }}
                sx={{
                  marginBottom: '40px',
                  backgroundColor: 'grey',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  color: 'black',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                <FileOpenIcon
                  sx={{ fontSize: 20, color: '#000', marginRight: '4px' }}
                />
                Demo
              </Button>
            </div>
          </TimeAndDetails>
        </CareerMilestone>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <PinkCapsuleIcon />
            Overflowed Subtitle Generator
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography>Java / OpenAI Whisper / CloudFlare Worker AI</Typography>
            {/* <Typography></Typography> */}
          </TimeAndDetails>
        </CareerMilestone>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <GreenCapsuleIcon />
            Job Application Tracker
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography>Node.JS / CloudFlare Pages / MySQL</Typography>
            {/* <Typography></Typography> */}
          </TimeAndDetails>
        </CareerMilestone>
      </CareerPathContainer>
    </section>
  );
};

export default Projects;
