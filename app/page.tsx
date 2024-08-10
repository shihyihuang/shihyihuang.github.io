'use client';
import {Box, Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import TestimonialCard from '@/components/testimonialCard';
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style/testimonial.css";
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import FlashingArrow from "@/components/flashingArrow";
import TapCard from "@/components/tapCard";


//https://blog.uxfol.io/professional-portfolio/
export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const thomasContent = "Claire has been an incredibly helpful and dedicated classmate from Taiwan. She is a positive and hardworking individual who always tries her best. Her eagerness to learn and her supportive nature have made a significant impact on our class. I am confident she will be a valuable asset to any organization."
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
          <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">Hey there! <br />
              <span className="text-primary">This is Claire</span>
          </h1>
          <p className="mt-5 text-center text-lg text-white opacity-90"> A caffeine-fueled full-stack developer crafting code with a shot of creativity!</p>
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
            <TestimonialCard profileImage="/home/testimonial/thomas.jpeg" name="Thomas Ng" position="Senior Full Stack Developer | Web3 Developer" content={thomasContent} linkedinUrl="https://www.linkedin.com/in/thomas-ng-ka-ho/"/> 
            <TestimonialCard profileImage="/home/testimonial/nikita.jpeg" name="Nikita Beniwal" position="Data Analyst" content={content2} linkedinUrl="https://www.linkedin.com/in/nikita-beniwal/"/> 
            <TestimonialCard profileImage="/home/testimonial/daniel.jpeg" name="Daniel Hu" position="Senior Software Engineer" content={content2} linkedinUrl="https://www.linkedin.com/in/iamdanielhu/"/> 
            <TestimonialCard profileImage="/home/testimonial/iris.jpeg" name="Iris Hsu" position="Business System Analyst | IT Project Management | UXUI Designer" content={content2} linkedinUrl="https://www.linkedin.com/in/iris-h-510812203/"/> 
            <TestimonialCard profileImage="/home/testimonial/patty.jpeg" name="Patty Hung" position="Aspiring Software Developer" content={content2} linkedinUrl="https://www.linkedin.com/in/pch23/"/> 
            <TestimonialCard profileImage="/home/testimonial/wells.jpeg" name="Wells Yu" position="Software Engineer | Web Developer" content={content2} linkedinUrl="https://www.linkedin.com/in/wells-yu/"/> 
            <TestimonialCard profileImage="/home/testimonial/mingze.jpeg" name="Mingze Li" position="Software Engineer" content={content2} linkedinUrl="https://www.linkedin.com/in/mingze-li-aa590a161/"/> 
            <TestimonialCard profileImage="/home/testimonial/crystal.jpeg" name="Crystal Yu" position="Software Engineer" content={content2} linkedinUrl="https://www.linkedin.com/in/ych-b577152a4/"/>           
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
