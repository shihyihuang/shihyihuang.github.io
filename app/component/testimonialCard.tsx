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
        <Card className='shadow-xl'  sx={{ 
            width: { xs: 320, sm: 350, md: 400},
            maxWidth: '100%', // Ensures it never exceeds the parent container
            height: 280, 
            display: 'flex', 
            flexDirection: 'column'
        }}>
            <CardContent sx={{ flexShrink: 0, paddingBottom: 1 }}>
                <div className="flex items-center">
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <div className="px-3">
                        <Typography variant="h6" component="div">
                        {name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {position}
                        </Typography>
                    </div>
                </div>
                <Rating className="my-0.5" name="read-only" value={5} readOnly />
            </CardContent>
            <CardContent       
            sx={{ 
                flexGrow: 1,
                overflowY: 'auto',
                paddingTop: 0,
                paddingBottom: '16px !important', 
                '&::-webkit-scrollbar': {
                width: '5px',
                },
                '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderRadius: '4px',
                },
            }}>
                <Typography variant="body2">
                {content}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}

export default TestimonialCard;