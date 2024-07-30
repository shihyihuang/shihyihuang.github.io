import React from 'react'
import { Card, CardContent, CardActions, Typography } from '@mui/material';

const page = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row items-center justify-center min-h-screen-minus-nav mx-2'>
            <video autoPlay loop className="w-11/12 md:w-6/12 shadow-lg rounded-2xl" src="/projects/viberight/viberight.mp4" />
            <div className="mt-4 md:mt-8 md:ml-8 my-4">
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
        <div className="chat chat-start">
            <div className="chat-bubble">
                It's over Anakin,
                <br />
                I have the high ground.
            </div>
        </div>
            <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
        </div>

    </div>
  )
}

export default page;
