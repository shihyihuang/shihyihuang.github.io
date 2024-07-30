'use client';

import React from 'react';
import {motion} from "framer-motion";
import Icon from '../component/icon';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import CountdownTimer from '../component/countdownTimer';

const page = () => {

  const socialMedia = [
    {
      imgSrc: "/contact/linkedin.png",
      url: "https://www.linkedin.com/in/claireehuang/",
    },
    {
      imgSrc: "/contact/git.png",
      url: "https://github.com/shihyihuang",
    },
    {
      imgSrc: "/contact/youtube.png",
      url: "https://www.youtube.com/@dada-pw6hj",
    },]


  return (

    
    <div className='flex flex-col md:flex-row justify-center items-center min-h-screen-minus-nav p-4'>

      {/* message card */}
      <div className="card w-full md:max-w-xl shadow-lg shadow-gray-500 my-3 bg-neutral max-w-full">
        <div className="card-body flex flex-col ">
          <h2 className="card-title text-info">Contact Me</h2>
          <label className="input flex items-center gap-2 mt-4 bg-primary border-primary text-info">
            Name
            <input type="text" className="grow" placeholder="How to address you" />
          </label>
          <label className="input flex items-center gap-2 mt-4 bg-primary border-primary text-info">
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
      <div className=" my-4 md:ml-20 max-w-full overflow-x-hidden ">
        <Card  className='!bg-transparent !border-transparent !shadow-none'>
          <CardContent>
            <CountdownTimer/>
            <Typography className='!text-3xl !mt-16 text-info text-center' gutterBottom>
              Know more about me!
            </Typography>
            <div className='flex justify-center gap-5 mt-5'>
              {socialMedia.map((item, index) => (
                <motion.a
                  href={item.url}
                  target='_blank' rel='noreferrer'
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                >
                  <img src={item.imgSrc} className='size-16'/>
                </motion.a>
              ))
              }
              {/* <img src="/contact/gmail.png" className='size-16'/> */}
            </div>

              
            {/* <Typography className='!text-md !text-info text-center' >
              Email: hclaire1007@gmail.com
              <br />
              LinkedIn: https://www.linkedin.com/in/claireehuang/
              <br />
              GitHub: https://github.com/shihyihuang
              <br />
              Youtube: https://www.youtube.com/@dada-pw6hj
              <br />
            </Typography> */}
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
