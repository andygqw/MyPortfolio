import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { styled } from '@mui/system';
import donut from '../static/donut.webp';
import HangingDonut from './HangingObject';
import gwtool from '../static/projects/gwtool.png'
import whisper from '../static/projects/whisper.jpeg'
import jat from '../static/projects/jat.png'
import streamer from '../static/projects/streamer.png'

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
  marginBottom: '20px',
});

const GitHubButton = ({ url }) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        window.open(url, '_blank');
      }}
      sx={{
        // marginBottom: '40px',
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
  );
};

const DemoButton = ({ url }) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        window.open(url, '_blank');
      }}
      sx={{
        // marginBottom: '40px',
        marginLeft: '8px',
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
  );
};

const ProjectDetails = ({ purpose, highlight, image, alt }) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    }}>
      <Box sx={{width:'50%'}}>
        <Typography sx={{
          whiteSpace:'pre-line',
          textAlign:'left',
          fontSize: '1.2rem',
          lineHeight: '1.75',
          marginBottom: '20px',
        }}>
          {purpose}
        </Typography>
        <Typography sx={{
          whiteSpace:'pre-line',
          textAlign:'left',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          lineHeight: '1.5',
        }}>
          {highlight}
        </Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'right',width:'45%'}}>
        <img src={image} alt={alt} style={{maxWidth:'90%', height:'fit-content'}}/>
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <section id='projects'>
      <CareerPathContainer>
        <HangingDonut image={donut}/>
        <CareerHeader>
          Selected Projects
        </CareerHeader>

        <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center', maxWidth: '550px' }}>
          Click on Demo buttons to view deployed projects, use username "Demo" and password "Demo" to enjoy SSO demo login across projects.
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
            <Typography sx={{color:'grey'}}>Node.JS / React / AWS SDK / CloudFlare Workers / SQLite</Typography>
            <div>
              <GitHubButton url='https://github.com/andygqw/GWTool_React' />
              <DemoButton url='https://tool.tiny-pink.com/' />
            </div>
          </TimeAndDetails>
          <ProjectDetails
            purpose="This project is a cloud-based efficiency boost application that transfers and manipulates text, shares resources, and manages cloud files storage.
            It also incorporates user authentication, permission-based access to resources, and Facebook type posts management."
            highlight="- Integration with Cloudflare R2 via AWS SDK.
            - Secure file operations using presigned URLs.
            - SSO across multiple services and applications.
            - Cookie-based JWT token for resource access.
            - Post and reply system with file attachments."
            image={gwtool}
            alt="gwtool"
          />
        </CareerMilestone>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <PinkCapsuleIcon />
            Overflowed Subtitle Generator
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography sx={{color:'grey'}}>Java / OpenAI Whisper / CloudFlare Worker AI</Typography>
            <div>
              <GitHubButton url='https://github.com/andygqw/SubtitleGenerator' />
              {/* <DemoButton url='https://github.com/andygqw?tab=repositories' /> */}
            </div>
          </TimeAndDetails>
          <ProjectDetails
            purpose="This project is a Java-based tool designed to generate subtitles for large number of long video or audio files by transcribing audios with OpenAI Whisper model through Cloudflare Workers AI.
            The tool handles multiple large files at once, making it highly efficient for bulk video processing."
            highlight="- Transcribe multiple large videos simultaneously.
            - Multithreading and concurrency for 25x speedups.
            - Semaphore-based resources in multi-threading.
            - Integrates with speech-to-text AI model.
            - Performance-tuned and fault tolerance."
            image={whisper}
            alt="whisper"
          />
        </CareerMilestone>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <GreenCapsuleIcon />
            Job Application Tracker
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography sx={{color:'grey'}}>Node.JS / CloudFlare Pages / MySQL</Typography>
            <div>
              <GitHubButton url='https://github.com/andygqw/JATReact-Worker' />
              <DemoButton url='https://jat.tiny-pink.com/' />
            </div>
          </TimeAndDetails>
          <ProjectDetails
            purpose="This project is a Job Application Tracking app built using React.js for the frontend and integrated with a Cloudflare Workers backend.
            It allows users to manage their job applications, providing features for adding, editing, deleting, and quick add applications, with a seamless UI/UX experience across different devices, including mobile."
            highlight="- JWT Authentication for secure login.
            - SSO across multiple services and applications.
            - Quick Add Feature to auto-fill from LinkedIn URLs
            - Dynamic Row Styling based on job application status."
            image={jat}
            alt="jat"
          />
        </CareerMilestone>

        <CareerMilestone>
          <MilestoneHeader variant="h6">
            <RedCapsuleIcon />
            Local Directory Streamer
          </MilestoneHeader>
          <Line />
          <TimeAndDetails>
            <Typography sx={{color:'grey'}}>Spring Boot / React </Typography>
            <div>
              <GitHubButton url='https://github.com/andygqw/LocalDirectoryBrowser' />
              {/* <DemoButton url='https://tool.tiny-pink.com/' /> */}
            </div>
          </TimeAndDetails>
          <ProjectDetails
            purpose="This is a Spring Boot / React project for browsing and streaming medias in local directories.
            This ensure a fast speed media streaming across the network.
            Very useful when we have a media sharing services like NAS."
            highlight="- Supports MP4, MOV, PDF, JPG, PNG, etc.
            - Recursive design in directory browsing.
            - RESTful API for streaming services."
            image={streamer}
            alt="streamer"
          />
        </CareerMilestone>
      </CareerPathContainer>
    </section>
  );
};

export default Projects;
