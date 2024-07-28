'use client';
// import Image from "next/image";
import {Box, Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import TestimonialCard from "./component/testimonialCard";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "./style/testimonial.css";

//https://blog.uxfol.io/professional-portfolio/
export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const content1 = "Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels. even promote the best-performing videos to different marketing channels."
  const content2 = "even promote the best-performing videos to different marketing channels."

  return (
  <main>
    <div >
      <div className="flex justify-center items-center gap-4 mb-5">
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
      </div>
      <ul className='mx-5' ref={ref}>
        <TestimonialCard name="Claire" position="Software Engineer" content={content1} /> 
        <TestimonialCard name="Claire" position="Software Engineer" content={content2} /> 
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" /> 
      </ul>
      {/* <div className="carousel carousel-end flex justify-center items-center">
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
        <div className="carousel-item">
          <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        </div>
      </div> */}
    </div>
  </main>
  );
}

      {/* <div className='flex justify-center items-center'>
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
      </div> */}
