'use client';
import ProjectAccordion from '@/components/projectAccordion';
import BackButton from '@/components/BackButton';
import React, { useState} from 'react';
import { Card, CardContent, Typography} from '@mui/material';
import {motion} from 'framer-motion';

const page = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 'home', image: '/projects/cloudsnap/cloudsnap.png' },
    { id: 'signin', image: '/projects/cloudsnap/cloudsnap2.png' },
    { id: 'searchImageByText', image: '/projects/cloudsnap/cloudsnap3.png' },
    { id: 'searchImageByImage', image: '/projects/cloudsnap/cloudsnap4.png' },
    { id: 'editTags', image: '/projects/cloudsnap/cloudsnap5.png' },
    { id: 'editTagsResult', image: '/projects/cloudsnap/cloudsnap6.png' },
    { id: 'deleteImages', image: '/projects/cloudsnap/cloudsnap7.png' },
    { id: 'deleteImagesResult', image: '/projects/cloudsnap/cloudsnap8.png' },
    { id: 'architecturalDiagram', image: '/projects/cloudsnap/cloudsnap9.png' },
    
];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='flex flex-col items-start justify-start relative mx-4'>
        <div className='w-full mt-8 mx-3'>
            <BackButton />
        </div>
        
        <div className='flex flex-col items-center justify-center mx-auto lg:w-5/6 '>
            <div className="relative w-5/6 md:w-4/5 lg:w-4/5 rounded-lg mt-10">
                <img 
                    src={slides[currentSlide].image} 
                    className="max-w-full mx-auto rounded-lg" 
                    alt={slides[currentSlide].id}
                />
                <div className="absolute left-4 right-4 md:left-6 md:right-6 lg:left-10 lg:right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide} className="btn-circle carousel-button">❮</motion.button>
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} onClick={nextSlide} className="btn-circle carousel-button">❯</motion.button>
                </div>
            </div>

            <div className="mt-5 lg:mt-10 md:ml-8  flex justify-center px-3">
                <Card  className='!bg-transparent !border-transparent !shadow-none md:w-11/12'>
                    <CardContent>
                        <Typography className='!text-2xl !text-base-100 pb-5 '>
                        CloudSnap
                        </Typography>
                        <Typography className='text-sm md:text-lg !text-info' >
                        <span className='text-lg md:text-xl !text-neutral'> - INTRODUCTION - </span>
                        <br />
                        A cloud-based online system that allows users to store and retrieve images
                        based on auto-generated tags. The focus of this project is to design a serverless application that enables
                        clients to upload their images to public cloud storage. Upon image upload, the application automatically
                        tags the image with the objects detected in it, such as person, car, etc. Later on, clients can query images
                        based on the objects present in them. To achieve this, the application provides users with a list of image
                        URLs that include the specific queried objects.
                        <br /><br />
                        <span className='text-lg md:text-xl !text-neutral'> - ABOUT PROJECT - </span>
                        <br />
                        Collaborated within a four-person team, where I implemented the following features:<br />
                        - Designed and implemented the user interface.<br />
                        - Coordinated the integration of various API endpoints, ensuring seamless communication between the frontend and backend components deployed on AWS Lambda.<br />
                        - Configured S3 static website hosting and implemented CloudFront to optimize content delivery.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="flex justify-center mb-10 md:mb-20 mt-5 lg:mt-10 mx-4">
            <div className="w-11/12 md:w-10/12 lg:w-3/4 rounded-xl">
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Authentication"
                    content={
                        <>
                            The user signs up or signs in through AWS Cognito, which provides an
                            authentication of the user and provides verification of the user's identity to give
                            permission to interact with the system.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-neutral"
                    titleColor="text-warning"
                    textColor="text-info"
                    title="Upload Image"
                    content={
                        <>
                            The image is uploaded once users select it. Uploading duplicate images is prohibited,
                            and per-user authorization is implemented to ensure that users can only access their
                            own uploaded images.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Search images"
                    content={
                        <>
                            There are two searching types for user to choose:  <br/><br/>
                            1. Search Image by Text <br/> Users can search by entering tags and counts, following a
                            specific input format. The tags should be enclosed in double quotes, and multiple
                            tags should be separated by semicolons. (e.g., 2 “person”, 1 “bird”) <br/><br/>
                            2. Search Image by Image <br/> Users can select an image to search, but they can only
                            search for images they have personally uploaded.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-neutral"
                    titleColor="text-warning"
                    textColor="text-info"
                    title="Edit Tags"
                    content={
                        <>
                            Users can only modify tags of their own images by inputting the image URL, choose the
                            operation type, and enter the tags according to the hint given format. If the specified
                            image doesn't exist, an error message will display.
                        </>
                    }
                />
                <ProjectAccordion
                    bgColor="bg-warning"
                    titleColor="text-neutral"
                    textColor="text-info"
                    title="Delete Image"
                    content={
                        <>
                            Users can input the URL of the image they uploaded to remove it from the system. If the
                            image URL does not exist in the database, a failure message will be displayed. If
                            successfully delete, a message will be displayed.
                        </>
                    }
                />
            </div>
        </div>
    </div>
  )
}

export default page;
