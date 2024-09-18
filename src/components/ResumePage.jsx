import React from 'react';
import { Box, Button } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import resume from '../static/resume/resume.pdf';
import '../static/ResumePage.css';

const renderPage = (RenderPageProps) => {
    return (
        <>
            {RenderPageProps.canvasLayer.children}
            <div style={{ userSelect: 'none' }}>
                {RenderPageProps.textLayer.children}
            </div>
            {RenderPageProps.annotationLayer.children}
        </>
    );
};

const ResumePage = () => {
    return (
        <Box className='resume-container'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '140px !important',
                marginBottom: '20px',
              }}
            >
                <Button 
                    className='download-button'
                    href={resume} 
                    download="Andy_Resume.pdf"
                >
                    Download Resume {'>'}
                </Button>
            </Box>

            <Box 
              sx={{
                width: '100%',
                maxWidth: '750px',
                margin: '0 auto',
                overflow: 'auto',
                border: '1px solid rgba(0, 0, 0, 0.3)',
                marginBottom: '40px',
              }}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Box
                        sx={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                        }}
                    >
                        <Viewer fileUrl={resume} renderPage={renderPage}/>
                    </Box>
                </Worker>
            </Box>
        </Box>
    );
};

export default ResumePage;
