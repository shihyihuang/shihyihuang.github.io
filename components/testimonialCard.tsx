'use client';
import React from 'react'
import {Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import { motion } from "framer-motion";

interface TestimonialProps {
    name:string;
    position:string;
    content:string[];
    profileImage:string;
    linkedinUrl:string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ profileImage, name, position, content, linkedinUrl }) => {

  return (
    <div className='px-2'>
        <Card className='shadow-xl rounded-lg'  sx={{ 
            width: { xs: 320, sm: 350, md: 400},
            maxWidth: '100%', 
            height: 280, 
            display: 'flex', 
            flexDirection: 'column'
        }}>
            <CardContent sx={{ flexShrink: 0, paddingBottom: 1 }}>
                <div className="flex items-center">
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="profile photo" src={profileImage} />
                    </Stack>
                    <div className="px-3">
                        <motion.a
                        className='hover:text-neutral'
                        whileHover={{
                            scale: 1.3
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        href={`${linkedinUrl}`}
                        target='_blank' rel='noreferrer'>
                            <Typography variant="h6" >
                                {name}
                            </Typography>
                        </motion.a>
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
                {content.map((paragraph, index) => (
                <Typography key={index} variant="body2">{paragraph}</Typography>
                ))}
                {/* <Typography variant="body2">
                {content}
                </Typography> */}
            </CardContent>
        </Card>
    </div>
  )
}

export default TestimonialCard;