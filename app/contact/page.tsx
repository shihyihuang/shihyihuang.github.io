'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import Icon from '../component/icon';
import { Card, CardContent, CardActions, Typography } from '@mui/material';

const page = () => {


  return (

    
    <div className='flex flex-col md:flex-row justify-center items-center min-h-screen-minus-nav p-4'>

      {/* message card */}
      <div className="card w-full max-w-sm md:max-w-xl shadow-xl my-3 bg-neutral ">
        <div className="card-body flex flex-col py-8">
          <h2 className="card-title text-info">Contact Me</h2>
          <label className="input input-bordered flex items-center gap-2 mt-4 bg-primary border-primary text-info">
            Name
            <input type="text" className="grow" placeholder="How to address you" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mt-4 bg-primary border-primary text-info">
            Email
            <input type="text" className="grow" placeholder="Your contact email" />
          </label>
          <textarea className="textarea textarea-bordered mt-4 bg-primary border-primary flex-grow h-48 text-base" placeholder="Message"></textarea>
          
          <motion.button
            className="btn bg-secondary border-transparent hover:bg-transparent text-black shadow-md mt-4 text-base"
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}>
              Send Message 
            <Icon name="send"/>
          </motion.button>

        </div>
      </div>

      {/* contact info */}
      <div className="mt-4 md:mt-8 md:ml-8 my-4">
        <Card  className='!bg-transparent !border-transparent !shadow-none !max-w-md'>
          <CardContent>
            <Typography className='!text-3xl' color="text.secondary" gutterBottom>
              Let's keep in touch
            </Typography>
            <Typography className='!text-md !text-info' >
              Email: hclaire1007@gmail.com
              <br />
              LinkedIn: https://www.linkedin.com/in/claireehuang/
              <br />
              GitHub: https://github.com/shihyihuang
              <br />
              Youtube: https://www.youtube.com/@dada-pw6hj
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
      </Card>
        
      </div>
    </div>
  )
}

export default page
