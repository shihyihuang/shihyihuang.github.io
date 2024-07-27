
// import Image from "next/image";
import {Box, Card, Stack, CardContent, Typography, Avatar, Rating} from '@mui/material';
import TestimonialCard from "./component/testimonialCard";


//https://blog.uxfol.io/professional-portfolio/
export default function Home() {


  return (
  <main>
    <div className='flex'>
      <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
      <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
      <TestimonialCard name="Claire" position="Software Engineer" content="Claire's testimonial content" />
    </div>
    
  
    <div>
      
    </div>
  </main>
  );
}
