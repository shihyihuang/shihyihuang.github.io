import React from 'react'
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, AccordionActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const page = () => {
  return (
    <div className='min-h-screen-minus-nav flex flex-col justify-center mt-5 md:mt-20 mx-2'>
        <div className='flex flex-col md:flex-row items-center justify-center mx-auto'>
            <video autoPlay loop className="w-11/12 md:w-6/12 shadow-lg rounded-2xl" src="/projects/viberight/viberight.mp4" />
            <div className="mt-5 md:mt-0 md:ml-8">
                <Card  className='!bg-transparent !border-transparent !shadow-none !max-w-xl'>
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
        <div className='flex justify-center mb-10 md:mb-20 mt-5 md:mt-20 mx-4'>
            <div className='md:w-10/12 rounded-xl '>
                <Accordion className='bg-warning text-info p-2' defaultExpanded>
                    <AccordionSummary
                    className='!text-lg text-neutral font-black'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Tamagotchu - Virtual Pet
                    </AccordionSummary>
                    <AccordionDetails >
                    Feed your virtual pet by uploading photos of the foods you've eaten that day. 
                    <br/>
                    Earn 100 experience points if the food is evaluated as healthy. 
                    <br/>
                    Your Tamagotchu can evolve to the next stage after accumulating 500 experience points.
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-neutral text-info p-2'>
                    <AccordionSummary
                    className='!text-lg text-warning font-black'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    Accordion 2
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion className='bg-warning text-info p-2'>
                    <AccordionSummary
                    className='!text-lg text-neutral font-black'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                    <button>Cancel</button>
                    <button>Agree</button>
                    </AccordionActions>
                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default page;
