'use client';
import * as React from 'react';
import Icon from '../../components/Icon';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'
import { Typography, Tooltip } from '@mui/material';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import useWindowSize from '@/components/useWindowSize';

const Projects = () => {

  const MyRouter = useRouter();
  const projectList = [
    {
      label: 'VibeRight',
      time: "April 2024 - May 2024",
      imgSrc: "/projects/viberight/viberight.png",
      detail: "projects/viberight",
      url: "http://vibe-right.s3-website-ap-southeast-2.amazonaws.com/",
      skills: "React.js · Node.js · AWS (Lambda, DynamoDB, S3, API Gateway, CloudFront, Route 53) · Figma · UI/UX Design · Agile",
    },
    {
      label: 'Xkeleton',
      time: "October 2023",
      imgSrc: "/projects/xkeleton/xkeleton.png",
      detail: "projects/xkeleton",
      url: "https://github.com/shihyihuang/xkelentonXrayService",
      skills: "C# · ASP.NET MVC · MS SQL · Web Security (XSS/CSRF protection) · Role-Based Authentication · CRUD Operations · API Integration",
    },
    {
      label: 'Geospatial Analysis',
      time: "October 2023",
      imgSrc: "/projects/data/data.png",
      detail: "",
      url: "https://github.com/shihyihuang/MelbourneBusStops",
      skills: "QGIS · Docker · SQL · PostgreSQL",
    },
    {
      label: 'CloudSnap',
      time: "June 2023",
      imgSrc: "/projects/cloudsnap/cloudsnap.png",
      detail: "projects/cloudsnap",
      url: "https://drive.google.com/file/d/12onexGD3swyudgGHhyXCPHUDvn242CTT/view?usp=embed_facebook",
      skills: "React.js · AWS · RESTful API · HTML · CSS",
    },
    {
      label: 'Android App',
      time: "May 2023",
      imgSrc: "/projects/android/android.jpg",
      detail: "projects/androidApp",
      url: "",
      skills: "Git · Java · Android Studio · Firebase",
    },
    {
      label: 'Image Object Detection Web Service',
      time: "April 2023",
      imgSrc: "/projects/cloudiod/cloudiod.png",
      detail: "",
      url: "https://github.com/shihyihuang/cloudiod",
      skills: "Python · Docker · Kubernetes · Oracle Cloud Infrastructure",
    },
    {
      label: 'Save The Bilby',
      time: "October 2022",
      imgSrc: "/projects/bilby/bilby.png",
      detail: "",
      url: "",
      skills: "Java · Object-Oriented Programming · Single Responsibility Principle",
    },
  ];

  const iconSize = useWindowSize();

  return (
    <Timeline
      className='mx-3'
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {projectList.map((project, index) => (
        <TimelineItem className='my-8'>

          <TimelineOppositeContent >
            <Typography className='mr-0 md:mr-4 text-base-100 text-lg md:text-xl lg:text-2xl '>{project.time}</Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent >
            <div className='flex items-center '>
              <Typography className="text-lg md:text-2xl ml-0 md:ml-4 pr-3">
              {project.label}
              </Typography>

              {project.url == "" ? "" : 
                <Tooltip title="open in new tab" placement="bottom-start" arrow>
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
                    <Icon name="upright" size={iconSize} color="#E43D12"/>
                  </motion.a>
                </Tooltip>
              }
          
              {project.detail == "" ? "" :    
                <Tooltip title="more detail" placement="bottom-start" arrow>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      MyRouter.push(`/${project.detail}`)
                    }}
                    >
                    <Icon name="circleInfo" size={iconSize} color="#E43D12"/>
                  </motion.button>
                </Tooltip>         
              }
            </div>
            <img
              src={project.imgSrc}
              alt="project screenshot" 
              className='rounded-lg w-full md:w-5/6 lg:w-1/2 my-4 md:my-6 lg:my-8 ml-0 md:ml-3 lg:ml-4'/>
            <Typography className='ml-0 md:ml-4 text-info text-sms md:text-lg lg:text-xl '>Development Stack : {project.skills}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default Projects;
