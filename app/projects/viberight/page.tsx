import React from 'react'
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProjectAccordion from '@/components/projectAccordion';
import { motion } from "framer-motion";
import Icon from '@/components/Icon';
import BackButton from '@/components/BackButton';

const page = () => {
  return (
    <div className='flex flex-col items-start justify-start relative mx-3'>
        <div className='w-full my-4 mx-3'>
            <BackButton />
        </div>
        <div className='min-h-screen-minus-nav flex flex-col justify-center mx-2'>
            <div className='flex flex-col md:flex-row items-center justify-center mx-auto'>
                <video autoPlay loop className="w-11/12 md:w-6/12 shadow-lg rounded-2xl" src="/projects/viberight/viberight.mp4" />
                <div className="mt-5 md:mt-0 md:ml-8">
                    <Card  className='!bg-transparent !border-transparent !shadow-none !max-w-md'>
                        <CardContent>
                            <Typography className='!text-2xl !text-base-100 pb-5 '>
                            VibeRight
                            </Typography>
                            <Typography className='!text-md !text-info' >
                            TARGET AUDIENCE :
                            <br />
                            Australian teenagers aged 14 to 17 who are dealing with body image concerns and are responsible for preparing their own meals.
                            <br />
                            <br />
                            PROBLEM STATEMENT :
                            <br />
                            Body image has consistently ranked among the top four concerns for young Australians, 
                            with 30% expressing concern about it. Alarmingly, children, particularly those aged 14 to 18 years, fail to meet the daily recommended intake of the five main food groups. 
                            Therefore, fostering a sound understanding of healthy eating habits and cultivating a positive relationship with nutritious food is imperative. 
                            Additionally, it's noteworthy that Australia holds the highest prevalence of food allergies globally, a factor that warrants consideration. 
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="flex justify-center mb-10 md:mb-20 mt-5 md:mt-20 mx-4">
                <div className="md:w-10/12 rounded-xl">
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Tamagotchu - Virtual Pet"
                        content={
                            <>
                                Users can feed their virtual pet by uploading photos of the foods they've eaten that day, 
                                earning up to 100 experience points per day if the food is evaluated as healthy. 
                                The virtual pet can evolve to the next stage after accumulating 500 experience points.
                                <br />
                                <br />
                                Users can also select a food group they're lacking and aim to consume it daily for 7 days, 
                                earning one stamp per day upon successful consumption. After collecting 7 stamps, 
                                the Tamagotchu's house can be updated. Users have the option to select another food group 
                                or continue with the current one for the next challenge.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Smart Grocery"
                        content={
                            <>
                                Users can enter their intended grocery items, and the system will display the nutrition information, 
                                including a healthy rating and allergen content, if included. 
                                Users can also swipe to view detailed macronutrient information.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Intake Calculator"
                        content={
                            <>
                                Users can enter their intended grocery items, and the system will display the nutrition information, 
                                including a healthy rating and allergen content, if included. 
                                Users can also swipe to view detailed macronutrient information.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Meal Planner"
                        content={
                            <>
                                Explore a wide range of personalized meal options by searching for recipes based on ingredients, cuisine, 
                                or dietary preferences such as vegan or gluten-free. Additionally, you can enter your recommended calorie intake 
                                and allergies to receive balanced meal plans for breakfast, lunch, and dinner, tailored to your specific needs.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Healthy Diet Visualizer"
                        content={
                            <>
                                Select a food to discover which part of your body it benefits and learn the effects of deficiencies. 
                                This feature helps foster a positive relationship with food.
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page;
