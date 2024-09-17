import React from 'react';
import { Box } from '@mui/material';
import { Worker, Viewer, RenderPageProps } from '@react-pdf-viewer/core';
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
                marginTop: '140px !important',
                marginBottom: '50px !important',
                width: '100%',
                maxWidth: '820px',
                margin: '0 auto',
                overflow: 'auto',
                border: '1px solid rgba(0, 0, 0, 0.3)',
              }}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Box
                        sx={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                            // overflow: 'auto',
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
