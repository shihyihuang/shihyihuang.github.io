'use client';
import ProjectAccordion from '@/components/projectAccordion';
import BackButton from '@/components/BackButton';
import React, { useState} from 'react';

const page = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 'interactiveTable', image: '/projects/xkeleton/xkeleton.png' },
    { id: 'uploadImage', image: '/projects/xkeleton/xkeleton2.png' },
    { id: 'sendEmail', image: '/projects/xkeleton/xkeleton3.png' },
    { id: 'rating', image: '/projects/xkeleton/xkeleton4.png' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='flex flex-col items-start justify-start relative mx-4'>
      <div className='w-full mt-8 mx-3'>
          <BackButton />
      </div>
      
      <div className='flex justify-center mx-2'>
        <div className="relative w-5/6 md:w-4/5 lg:w-3/5 rounded-lg mt-10">
          <img 
            src={slides[currentSlide].image} 
            className="w-full rounded-lg" 
            alt={slides[currentSlide].id}
          />
          <div className="absolute left-4 right-4 md:left-6 md:right-6 lg:left-10 lg:right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevSlide} className="btn-circle carousel-button">❮</button>
            <button onClick={nextSlide} className="btn-circle carousel-button">❯</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10 md:mb-20 mt-5 lg:mt-20 mx-4">
                <div className="w-11/12 md:w-10/12 lg:w-3/5 rounded-xl">
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Role-based authentication"
                        content={
                            <>
                              Role-based access control tailors user permissions according to specific roles, ensuring that each user, from practitioners to patients, has the appropriate access and functionalities necessary to efficiently manage CRUD operations.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Interactive Table Data"
                        content={
                            <>
                              Interactive tables allow practitioners to easily manipulate and visualize data directly from the database, enhancing their ability to understand and work with patient information.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Bulk Email"
                        content={
                            <>
                              Practitioners can send emails directly from the application, including attachments, which is essential for effective communication. Additionally, the application supports sending bulk emails to selected users, facilitating large-scale communication efforts.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Geo-location"
                        content={
                            <>
                              The inclusion of interactive maps enhances the user experience by providing spatial context and functionality, including place searches and detailed navigation.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Security and Validation"
                        content={
                            <>
                              Implementing rigorous input validation and sanitization across both the frontend and backend protects against SQL injections, XSS (Cross-Site Scripting), and CSRF (Cross-Site Request Forgery). <br/>
                              The integration of the Ganss.Xss library sanitizes HTML content, while the use of ASP.NET MVC’s ValidateAntiForgeryToken attribute shields interactions from common web threats. These security protocols, meticulously applied to all user inputs including email communications, ensure that data processed through the application is consistently secure and reliable.
                            </>
                        }
                    />
                </div>
            </div>
    </div>
  )
}

export default page;
