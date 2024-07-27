'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import {motion} from "framer-motion";
import Icon from '../component/icon';

const page = () => {


  return (
    <div className='flex flex-col md:flex-row justify-center items-stretch md:gap-2 mx-4 '>
      <div className="card w-full max-w-sm md:max-w-xl shadow-xl my-3 bg-neutral">
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
          <textarea className="textarea textarea-bordered mt-4 bg-primary border-primary flex-grow h-48" placeholder="Message"></textarea>
          
          <motion.button
            className="btn bg-secondary border-transparent hover:bg-transparent text-black shadow-md mt-4"
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


      <div className="mt-4 md:mt-8 md:ml-8 my-4 ">
        <h2 className="card-title">Let's keep in touch</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Icon name="email"/> Email: hclaire1007@gmail.com
          </li>
          <li>
            <Icon name="linkedin"/> LinkedIn: https://www.linkedin.com/in/claireehuang/
          </li>
          <li>
            <Icon name="github"/> GitHub: https://github.com/shihyihuang
          </li>
          <li>
            <Icon name="twitter"/> Youtube: https://www.youtube.com/@dada-pw6hj
          </li>
        </ul>
        
        
      </div>
    </div>
  )
}

export default page
