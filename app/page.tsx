
// import Image from "next/image";
import {Box, Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import TestimonialCard from "./component/testimonialCard";


//https://blog.uxfol.io/professional-portfolio/
export default function Home() {


  return (
  <main>
    <div >
      <Typography className='text-2xl flex justify-center items-center mb-4' >
        Testimonials      
      </Typography>
      <div className="carousel carousel-end flex justify-center items-center">
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
      </div>
    </div>
  </main>
  );
}

      {/* <div className='flex justify-center items-center'>
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
        <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
      </div> */}
