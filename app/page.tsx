'use client';
import {Box, Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import TestimonialCard from "./component/testimonialCard";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style/testimonial.css";
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import FlashingArrow from "./component/flashingArrow";
import TapCard from "./component/tapCard";


//https://blog.uxfol.io/professional-portfolio/
export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const content1 = "Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels."
  const content2 = "even promote the best-performing videos to different marketing channels."

  function arrayCeil(arr: any, number:any ) {
    const sorted = arr.sort((a: any, b: any) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            return sorted[i];
        }
    }

    // If no index found return the last element
    return sorted[sorted.length - 1];
  }

  const [heroImage, setHeroImage] = useState('hero-1920.jpg')
  const imageSizes = [600, 1280, 1920]
  const { observe, unobserve, width, height, entry } = useDimensions({
      onResize: ({ observe, unobserve, width, height, entry }) => {
          setHeroImage(`hero-${arrayCeil(imageSizes, width)}.jpg`)
          unobserve(); // To stop observing the current target element
          observe(); // To re-start observing the current target element
      },
  });

  return (
  <main>
    <div >
      {/* hero image section */}
      {/* https://medium.com/designly/creating-a-modern-hero-image-using-nextjs-13-images-and-tailwind-css-746fb5c92541 */}
      <div
      ref={observe}
      className="w-full min-h-screen-minus-nav flex items-center overflow-hidden relative bg-black flex-col justify-between">
        <Image
          src={`/home/${heroImage}`}
          alt="Imag of Claire"
          className="opacity-60 object-cover"
          fill
        />
        <div className="flex-grow flex flex-col justify-center items-center px-3">
          <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">Hello! <br />
              <span className="text-primary">This is Claire</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-90">a full stack developer</p>
        </div>
        <div className="mb-16">
          <FlashingArrow />
        </div>
      </div>

      {/* Testimonial section */}
      <motion.div 
        className="flex justify-center items-center gap-4 my-20"
        initial={{ opacity: 1, scale: 1, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 30 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          y: { type: "spring", stiffness: 80 },
        }}
      >
        <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
        <Typography className='text-3xl' >
          Testimonials      
        </Typography>
      </motion.div>
      <motion.div
          initial={{ opacity: 1, scale: 1, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            x: { type: "spring", stiffness: 100 },
          }} >
          <ul className='mx-6 mb-16' ref={ref}>
            <TestimonialCard name="Claire" position="Software Engineer" content={content1} /> 
            <TestimonialCard name="Claire" position="Software Engineer" content={content2} /> 
            <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
            <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
            <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
            <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
          </ul>

      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 1, scale: 1, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 30 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        y: { type: "spring", stiffness: 80 },
      }}
      className='my-20'>
      <Typography className='text-3xl flex justify-center' >
        Skills      
      </Typography>
    </motion.div>
    <div className='mb-20 mx-6'>
      <TapCard />
    </div>
  </main>
  );
}

      {/* <div className='flex justify-center items-center'>
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
      </div> */}
