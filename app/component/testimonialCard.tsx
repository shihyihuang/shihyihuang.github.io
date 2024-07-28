'use client';
import React from 'react'
import {Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';

interface TestimonialProps {
    name:string;
    position:string;
    content:string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, content }) => {

  return (
    <div className='px-2'>
        <Card sx={{ minWidth: 345}}>
            <CardContent>
                <div className="flex items-center">
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <div className="px-3">
                        <Typography variant="h6" component="div" >
                            {name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {position}
                        </Typography>
                    </div>
                </div>
                <Rating className="my-0.5" name="read-only" value={5} readOnly />
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
      </Card>
    </div>
  )
}

export default TestimonialCard;
