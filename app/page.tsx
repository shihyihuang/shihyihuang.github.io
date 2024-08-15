'use client';
import {Typography} from '@mui/material';
import TestimonialCard from '@/components/testimonialCard';
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style/testimonial.css";
import useDimensions from 'react-cool-dimensions';
import FlashingArrow from "@/components/flashingArrow";
import TapCard from "@/components/tapCard";
import './style/home.css'


//https://blog.uxfol.io/professional-portfolio/
export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const thomasContent = ["Claire has been an incredibly helpful and dedicated classmate from Taiwan. She is a positive and hardworking individual who always tries her best.",
    "Her eagerness to learn and her supportive nature have made a significant impact on our class. I am confident she will be a valuable asset to any organization."]
  const mingzeContent = [
    "Claire is an easy-going, hardworking, and enthusiastic student who consistently does her best in her studies and she is also a fantastic team player. She is always willing to help her teammates grow and achieve their best potential. It's been an honour to have worked with Claire on some projects.",
    "We have collaborated on Android apps and website development where she has demonstrated her excellent understanding and mature skills in front-end development and mobile apps. Her knowledge about cloud services such as AWS and SQL have helped us to overcome many challenges, and her strong Python skills contributed significantly to our cloud development projects.",
    "Her easygoing nature, good sense of humor, and her ability to see the bright side of things, make her a perfect teammate to work with. Meanwhile, she is an excellent communicator who knows how to cooperate with others and always able to find the most appropriate way to deal with any potential conflicts during the project.",
    "I strongly recommend Claire for any job or position which requires a trustworthy, responsible, and passionate individual. She will be an asset wherever she goes and any employer would benefit greatly from securing her services."
 ];
  const danielContent = ["I had the chance to work with Claire in an image-to-image search project. In the project, she demonstrated how innovative she is, and impressed us by always being able to put her ideas into action and implementation.",
    "Claire’s skills in running frontend projects is undoubtedly great. Being the only frontend developer in the team, she managed to bring us an amazing, user-friendly, yet stable frontend platform for our image search backend to integrate with.",
    "If you’re looking for a trustworthy frontend engineer, she’s definitely on the top of my recommendation list!"]
  const content2 = ["even promote the best-performing videos to different marketing channels."]
  const nikitaContent = ["I had the privilege of working with Claire on our master’s project, where she took the lead in developing VibeRight, a web application addressing body image concerns among teenagers. Claire’s leadership and technical skills were crucial to the project’s success. She expertly developed a React-based application and a robust serverless backend using Node.js on AWS Lambda, achieving an impressive 99.9% uptime. Her integration of DynamoDB and CloudFront ensured the system’s reliability and performance.",
    "What sets Claire apart is her proactive approach to feedback and continuous improvement. She actively sought and incorporated mentor feedback, significantly enhancing the final product. Her rapid adaptation to new technologies and best practices was evident as she refined and optimized our work.",
    "Claire also excelled as a mentor, sharing her expertise and guiding our team effectively. Her clear communication of complex concepts was invaluable to our success. Claire’s passion for using technology to solve real-world problems, combined with her proficiency in React.js, AWS, Java, SQL, and JavaScript, makes her a standout asset to any team. I highly recommend Claire for any role requiring technical excellence, leadership, and a commitment to ongoing learning."
  ]
  const wellsContent = ["I had the pleasure of working with Claire on our project, and she consistently impressed me with her responsibility and commitment to high-quality results. Her critical thinking skills enable her to identify root causes and find innovative solutions. Claire excels in planning and organization, ensuring our project stays on track. Additionally, her strong coding skills and dedication to self-learning allow her to adapt quickly and contribute effectively. Overall, Claire is a talented and valuable team member who I highly recommend for any future endeavors."]

  // https://medium.com/designly/creating-a-modern-hero-image-using-nextjs-13-images-and-tailwind-css-746fb5c92541
  // return the smallest image width from imageSizes that is larger than the element width

  return (
  <main>
    <div >
      {/* hero image section */}
      <div
        className="w-full min-h-screen-minus-nav hero-background flex items-center overflow-hidden relative flex-col justify-between">
        <div className="flex-grow flex flex-col justify-center items-center px-3">
          <h1 className="text-center text-2xl md:text-5xl text-info font-bold drop-shadow-lg"><br/>
              <span className="text-base-100">This is Claire,</span>
          </h1>
          <h2 className="mt-2 text-center text-lg md:text-3xl text-info">a full-stack developer !</h2>
        </div>
        <div className="mb-16">
          <FlashingArrow />
        </div>
      </div>

      {/* Testimonial section */}
      <div className='mt-20'>
        <motion.div 
          className="flex justify-center items-center gap-4 pb-24"
          // initial={{ opacity: 1, scale: 1, y: 0 }}
          // whileInView={{ opacity: 1, scale: 1, y: 30 }}
          // transition={{
          //   duration: 1,
          //   ease: "easeOut",
          //   y: { type: "spring", stiffness: 80 },
          // }}
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
          <Typography className='text-4xl' >
            TESTIMONIAL      
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

              <ul className='mx-6 md:mx-12 ' ref={ref}> 
                <TestimonialCard profileImage="/home/testimonial/thomas.jpeg" name="Thomas Ng" position="Senior Full Stack Developer | Web3 Developer" content={thomasContent} linkedinUrl="https://www.linkedin.com/in/thomas-ng-ka-ho/"/>
                <TestimonialCard profileImage="/home/testimonial/nikita.jpeg" name="Nikita Beniwal" position="Data Analyst" content={nikitaContent} linkedinUrl="https://www.linkedin.com/in/nikita-beniwal/"/> 
                <TestimonialCard profileImage="/home/testimonial/mingze.jpeg" name="Mingze Li" position="Software Engineer" content={mingzeContent} linkedinUrl="https://www.linkedin.com/in/mingze-li-aa590a161/"/> 
                <TestimonialCard profileImage="/home/testimonial/wells.jpeg" name="Wells Yu" position="Software Engineer | Web Developer" content={wellsContent} linkedinUrl="https://www.linkedin.com/in/wells-yu/"/> 
                <TestimonialCard profileImage="/home/testimonial/daniel.jpeg" name="Daniel Hu" position="Senior Software Engineer" content={danielContent} linkedinUrl="https://www.linkedin.com/in/iamdanielhu/"/> 
                {/* <TestimonialCard profileImage="/home/testimonial/iris.jpeg" name="Iris Hsu" position="Business System Analyst | IT Project Management | UXUI Designer" content={content2} linkedinUrl="https://www.linkedin.com/in/iris-h-510812203/"/>  */}
                {/* <TestimonialCard profileImage="/home/testimonial/patty.jpeg" name="Patty Hung" position="Aspiring Software Developer" content={content2} linkedinUrl="https://www.linkedin.com/in/pch23/"/>  */}
                {/* <TestimonialCard profileImage="/home/testimonial/crystal.jpeg" name="Crystal Yu" position="Software Engineer" content={content2} linkedinUrl="https://www.linkedin.com/in/ych-b577152a4/"/>            */}
              </ul>

        </motion.div>
      </div>
      <div className='my-20 px-3'>
        <motion.div 
          initial={{ opacity: 1, scale: 1, y: 0 }}
          whileInView={{ opacity: 1, scale: 1, y: 30 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            y: { type: "spring", stiffness: 80 },
          }}
          className='skill-text-content'>
          <Typography className='text-4xl flex justify-center mb-28' >
            SKILL      
          </Typography>
        </motion.div>
        <div className='mx-6 '>
          <TapCard />
        </div>
      </div>
    </div>
  </main>
  );
}
