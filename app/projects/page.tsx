'use client';
import * as React from 'react';
import Icon from '../../components/Icon';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'
import { createTheme, ThemeProvider, Stepper, Step, StepLabel, Box, StepContent, Button, Paper, Typography } from '@mui/material';


const Projects = () => {
  const MyRouter = useRouter();
  const projectList = [
    {
      label: 'VibeRight',
      time: "April 2024 - May 2024",
      imgSrc: "/projects/viberight/viberight.png",
      detail: "projects/viberight",
      url: "http://viberight.net/",
      skills: "React.js · Node.js · AWS (Lambda, DynamoDB, S3, API Gateway, CloudFront, Route 53) · Figma · UI/UX Design · Agile",
    },
    {
      label: 'Xkeleton',
      time: "October 2023",
      imgSrc: "/projects/xkeleton/xkeleton.png",
      detail: "/projects/viberight",
      url: "https://github.com/shihyihuang/xkelentonXrayService",
      skills: "C# · ASP.NET MVC · MS SQL · Web Security (XSS/CSRF protection) · Role-Based Authentication · CRUD Operations · API Integration",
    },
    {
      label: 'Geospatial Analysis of Public Transportation Stops',
      time: "October 2023",
      imgSrc: "/projects/data/data.png",
      detail: "/projects/viberight",
      url: "https://github.com/shihyihuang/MelbourneBusStops",
      skills: "QGIS · Docker · SQL · PostgreSQL",
    },
    {
      label: 'CloudSnap',
      time: "June 2023",
      imgSrc: "/projects/cloudsnap/cloudsnap.png",
      detail: "/projects/viberight",
      url: "https://drive.google.com/file/d/12onexGD3swyudgGHhyXCPHUDvn242CTT/view?usp=embed_facebook",
      skills: "React.js · AWS · RESTful API · HTML · CSS",
    },
    {
      label: 'Android App',
      time: "May 2023",
      imgSrc: "/projects/android/android.jpg",
      detail: "/projects/viberight",
      url: "",
      skills: "Git · Java · Android Studio · Firebase",
    },
    {
      label: 'Image Object Detection Web Service',
      time: "April 2023",
      imgSrc: "/projects/cloudiod/cloudiod.png",
      detail: "/projects/viberight",
      url: "https://github.com/shihyihuang/cloudiod",
      skills: "Python · Docker · Kubernetes · Oracle Cloud Infrastructure",
    },
    {
      label: 'Save The Bilby',
      time: "October 2022",
      imgSrc: "/projects/bilby/bilby.png",
      detail: "/projects/viberight",
      url: "",
      skills: "Java · Object-Oriented Programming · Single Responsibility Principle",
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
      <Box  >
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
              <StepLabel>
                
                <div 
                  style={{ backgroundColor: 'transparent'}}
                  className={`flex items-center ${ index === activeStep ? "text-base-100" : "text-neutral"}`}
                >
                  <Typography 
                    className="text-2xl ml-4 mr-3"                 
                  >
                    {project.label}
                  </Typography>
                  {project.url == "" ? "" : 
                    <motion.a
                      className='mr-4'
                      whileHover={{
                        scale: 1.3
                      }}
                      whileTap={{
                        scale: 0.9
                      }}
                      href={`${project.url}`}
                      target='_blank' rel='noreferrer'>
                      <Icon name="upright"/>
                    </motion.a>
                  }
                  <motion.button
                    className='shadow-md shadow-gray-400 rounded-full'
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      MyRouter.push(`/${project.detail}`)
                    }}
                  >
                    <Icon name="circleInfo"/>
                  </motion.button>
                </div>
                
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      // variant="contained"
                      onClick={handleNext}
                      className='mt-4 ml-3 h-10 w-10 rounded-full shadow-md shadow-gray-400 bg-info  hover:bg-accent '
                    >
                      {index === projectList.length - 1 ? "" : <Icon name="down"/>}
                    </motion.button>
                  }

                  {index === 0 ? "" : 
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      disabled={index === 0}
                      onClick={handleBack}
                      className='mt-4 ml-5 h-10 w-10 rounded-full shadow-md shadow-gray-400 bg-transparent border-2 border-info hover:bg-accent hover:border-none hover:color-primary'
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