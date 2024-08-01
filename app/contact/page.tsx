'use client';

import React from 'react';
import {motion} from "framer-motion";
import Icon from '../component/icon';
import { Card, CardContent, Typography } from '@mui/material';
import CountdownTimer from '../component/countdownTimer';
import { useState } from 'react';


interface EmailInfo {
  sender: string;
  email: string;
  content: string;
}

const page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const emailInfo: EmailInfo = {
      sender: formData.get('sender') as string,
      email: formData.get('email') as string,
      content: formData.get('content') as string,
    };
  
    try {

      console.log('Sending email with data:', emailInfo);

      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(emailInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await res.json();
      console.log('Server response:', responseData);

    if (res.ok) {
      setStatus('success');
      if (form) {
        form.reset();
      } else {
        console.warn('Form reference is null, unable to reset');
      }
    } else {
      console.error('Server error:', responseData);
      setStatus('error');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    setStatus('error');
  } finally {
    setIsLoading(false);
  }
  };

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
          <div>
            <Typography className='!text-xl !mb-5 !text-info text-center'>
              Send your message now, let's make great things happen!
            </Typography>
            <form onSubmit={sendEmail}>
              <div className='card w-full md:max-w-xl shadow-lg shadow-gray-500 my-3 bg-neutral !max-w-full'>
                <div className="card-body flex flex-col ">
                  <h2 className="card-title text-info !text-3xl">Contact Me</h2>
                  <label className="input flex items-center gap-2 mt-2 bg-primary border-primary text-info">
                    Name
                    <input 
                      required
                      type="text" 
                      name="sender"
                      className="grow" 
                      placeholder="How to address you" 
                    />
                  </label>
                  <label className="input flex items-center gap-2 mt-4 bg-primary border-primary text-info">
                    Email
                    <input 
                      required
                      type="email"
                      name="email"
                      className="grow" 
                      placeholder="Your contact email" 
                    />
                  </label>
                  <textarea 
                    required        
                    name="content"
                    className="textarea textarea-bordered mt-4 bg-primary border-primary flex-grow h-48 text-base" 
                    placeholder="Message">
                  </textarea>
                  
                  <motion.button
                    type="submit" 
                    className="btn bg-secondary border-none hover:bg-warning hover:text-info text-primary shadow-md shadow-gray-400 mt-4 text-base"
                    whileHover={{
                      scale: 1.03
                    }}
                    whileTap={{
                      scale: 0.95
                    }}>
                    {isLoading ? 'Sending...' : 'Send'}
                    {/* <Icon name="send"/> */}
                  </motion.button>
                    {status === 'success' && <p>Message sent successfully!</p>}
                    {status === 'error' && <p>Failed to send message. Please try again.</p>}
                </div>
              </div>
            </form>
          </div>

        {/* contact info */}
        <div className=" my-4 md:ml-20 max-w-full overflow-x-hidden ">
          <Card  className='!bg-transparent !border-transparent !shadow-none'>
            <CardContent>
              <CountdownTimer/>
              <Typography className='!text-3xl !mt-16 text-info text-center' gutterBottom>
                Ready, Set, Connect !
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div> 
  )
}

export default page;