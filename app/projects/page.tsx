'use client';
import * as React from 'react';
import Icon from '../component/icon';
import { motion } from "framer-motion";
import { createTheme, ThemeProvider, Stepper, Step, StepLabel, Box, StepContent, Button, Paper, Typography } from '@mui/material';


const Projects = () => {
  const projectList = [
    {
      label: 'VibeRight',
      time: "April 2024 - May 2024",
      imgSrc: "/projects/viberight/viberight.png",
      skills: "React.js · Node.js · AWS (Lambda, DynamoDB, S3, API Gateway, CloudFront, Route 53) · Figma · UI/UX Design · Agile",
    },
    {
      label: 'Xkeleton',
      time: "October 2023",
      skills: "C# · ASP.NET MVC · MS SQL · Web Security (XSS/CSRF protection) · Role-Based Authentication · CRUD Operations · API Integration",
      imgSrc: "/projects/xkeleton/xkeleton.png",
    },
    {
      label: 'Geospatial Analysis of Public Transportation Stops',
      time: "October 2023",
      imgSrc: "/projects/data/data.png",
      skills: "QGIS · Docker · SQL · PostgreSQL",
    },
    {
      label: 'CloudSnap',
      time: "June 2023",
      skills: "React.js · AWS · RESTful API · HTML · CSS",
      imgSrc: "/projects/cloudsnap/cloudsnap.png",
    },
    {
      label: 'Android App',
      time: "May 2023",
      skills: "Git · Java · Android Studio · Firebase",
      imgSrc: "/projects/android/android.jpg",
    },
    {
      label: 'Image Object Detection Web Service',
      time: "April 2023",
      skills: "Python · Docker · Kubernetes · Oracle Cloud Infrastructure",
      imgSrc: "/projects/cloudiod/cloudiod.png",
    },
    {
      label: 'Save The Bilby',
      time: "October 2022",
      skills: "Java · Object-Oriented Programming · Single Responsibility Principle",
      imgSrc: "/projects/bilby/bilby.png",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
    
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  

  return (
      <Box className="w-full flex justify-center" >
        <Stepper 
          activeStep={activeStep} orientation="vertical" className='m-10' 
          sx={{
            '& .MuiStepIcon-root': {
              color: '#EFB11D', // inactive color
              '&.Mui-active': {
                color: '#E43D12', // active color
              },
              '&.Mui-completed': {
                color: '#EFB11D', // completed color
              },
            },
            '& .MuiStepConnector-line': {
              borderColor: '#bdbdbd', // line color
            },
          }}
        >
          {projectList.map((project, index) => (
            <Step key={project.label}>
              <StepLabel
                
                // optional={
                //   index === 2 ? (
                //     <Typography variant="caption">Last step</Typography>
                //   ) : null
                // }
              >
                <Typography className={`text-2xl ${ index === activeStep ? "text-base-100" : "text-neutral"}  ml-4`}>
                  {project.label}
                </Typography>
                
              </StepLabel>
              <StepContent>
                <Typography className='ml-4 text-info'>{project.time}</Typography>
                <img
                    src={project.imgSrc}
                    alt="Tailwind-CSS-Avatar-component" 
                    className='rounded-lg w-full md:w-1/2 my-4 ml-3 '/>
                <Typography className='ml-4 text-info'>Skills : {project.skills}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                  {index === projectList.length - 1 ? "" : 
                    <motion.button 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      // variant="contained"
                      onClick={handleNext}
                      className='mt-4 ml-3 mr-5 p-2 h-10 w-10 rounded-full shadow-lg bg-info border-2 border-info hover:bg-neutral hover:border-none'
                    >
                      {index === projectList.length - 1 ? "" : <Icon name="down"/>}
                    </motion.button>
                  }

                  {index === 0 ? "" : 
                    <motion.button 
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={index === 0}
                      onClick={handleBack}
                      className='mt-4 h-10 w-10 rounded-full shadow-lg bg-transparent border-2 border-info hover:bg-neutral hover:border-none'
                    >
                      <Icon name="up"/>
                    </motion.button>
                  }

                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === projectList.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>

      );
    }
  


export default Projects;
