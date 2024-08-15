'use client'
import React from 'react'
import '../style/about.css'
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div>

      {/* coffee */}
      <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
        <motion.div 
          initial={{ opacity: 1, scale: 1, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 100 },
          }}
          className=' flex w-full xl:w-auto justify-start'>
          <img alt="coffee" src="/life/coffee2.png" className='w-3/4 md:w-1/2 xl:w-full'  />
        </motion.div>
        <motion.h5 
          initial={{ opacity: 1, scale: 1, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            y: { type: "spring", stiffness: 50 },
          }}
          className="flex xl:w-full justify-center text-center text-xl md:text-3xl flex-grow my-16 mb-0">
          Fueled by COFFEE, Chilled by BEER, <br/> Always Ready for Adventure !
        </motion.h5> 
        <motion.div 
          initial={{ opacity: 1, scale: 1, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 80 },
          }}
          className='flex w-full xl:w-auto justify-end'>
          <img alt="beer" src="/life/beer.png" className='w-1/4 md:w-1/6 xl:w-full mt-5 lg:mt-0' />
        </motion.div>
      </div>

      {/* exercise */}
      <div className='flex flex-col xl:flex-row items-center justify-between w-full mt-32 md:mt-10 lg:mt-24'>
        <motion.div 
          initial={{ opacity: 1, scale: 1, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 20 },
          }}
          className='flex w-full xl:w-auto justify-start'>
          <img alt="exercise" src="/life/exerciseLeft.png" className='ml-10 md:mt-24 w-2/3 md:w-1/2 xl:w-full'  />
        </motion.div>
        <motion.h5 
          initial={{ opacity: 1, scale: 1.1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 50 },
          }} 
          className="flex xl:w-full justify-center text-center text-xl md:text-3xl flex-grow my-16 lg:my-0 w-11/12 ">
          Stay Active, Savor Gourmet ! <br/> More Exercise, More Treats !
        </motion.h5>
        <motion.div 
          initial={{ opacity: 1, scale: 1, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 20 },
          }}
          className='flex w-full xl:w-auto justify-end md:mr-10 '>
          <img alt="exercise" src="/life/exerciseRight.png" className='mr-8 xl:mr-10 w-2/3 md:w-1/2 xl:w-full ' />
        </motion.div>
      </div>

      {/* adventure */}
      <div className='flex flex-col items-center mb-5 mt-24'>
        <motion.div 
          initial={{ opacity: 1, scale: 1, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            y: { type: "spring", stiffness: 80 },
          }}
          className='flex w-full xl:w-auto justify-center'>
          <img alt="travel" src="/life/travelTop.png" className=' w-3/4 md:w-2/3 lg:w-3/5 mt-10'/>
        </motion.div>
        <motion.h5 
          initial={{ opacity: 1, scale: 1.1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 50 },
          }} 
          className="text-xl md:text-3xl text-center my-16 w-5/6 md:w-4/5">
          YOLO!  <br/> Exploring the World with Curiosity & An Hunger for New Experiences!
        </motion.h5>
        <motion.div 
          initial={{ opacity: 1, scale: 1, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 80 },
          }} 
          className='flex justify-center w-full xl:w-auto'>
          <img alt="travel" src="/life/travelBottom.png" className='w-4/5 md:w-3/5 lg:w-4/5'/>
        </motion.div>
      </div>
    </div>
  )
}

export default Page;


      {/* <div className="diff w-full min-h-screen-minus-nav ">
        <div className="diff-item-1">
          <img alt="daisy" src="/life/lifeIntroPic2.png" />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="/life/lifeIntro.png" />
        </div>
        <div className="diff-resizer"></div>
      </div> */}