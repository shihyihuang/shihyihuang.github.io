import React from 'react'
import ProjectAccordion from '@/components/projectAccordion';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="carousel w-5/6 md:w-4/5 lg:w-3/5 rounded-lg mt-10">
        <div id="slide1" className="carousel-item relative w-full flex justify-center">
          <img
            src="/projects/xkeleton/xkeleton.png"
            className="rounded-lg" />
          <div className="absolute left-4 right-4 md:left-6 md:right-6  lg:left-10 lg:right-10  top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn-circle bg-neutral text-primary rounded-full p-3 text-xs md:text-lg lg:text-xl flex items-center justify-center
              w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
          ❮
          </a>
          <a href="#slide2" className="btn-circle bg-neutral text-primary rounded-full p-3 text-xs md:text-lg lg:text-xl flex items-center justify-center
                       w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
            ❯
          </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex justify-center">
          <img
            src="/projects/xkeleton/xkeleton2.png"
            className="rounded-lg" />
          <div className="absolute left-4 right-4 md:left-6 md:right-6 lg:left-10 lg:right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn-circle bg-neutral text-primary rounded-full p-3 text-xs md:text-lg lg:text-xl flex items-center justify-center
              w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
          ❮
          </a>
          <a href="#slide3" className="btn-circle bg-neutral text-primary rounded-full p-2 text-xs md:text-lg lg:text-xl  flex items-center justify-center
                        w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
            ❯
          </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex justify-center">
          <img
            src="/projects/xkeleton/xkeleton3.png"
            className="rounded-lg" />
          <div className="absolute left-4 right-4 md:left-6 md:right-6 lg:left-10 lg:right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn-circle bg-neutral text-primary rounded-full p-2 text-xs md:text-lg lg:text-xl flex items-center justify-center
              w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
          ❮
          </a>
          <a href="#slide1" className="btn-circle bg-neutral text-primary rounded-full p-2 text-xs md:text-lg lg:text-xl flex items-center justify-center
                        w-btn-sm h-btn-sm md:w-btn-md md:h-btn-md lg:w-btn-lg lg:h-btn-lg">
            ❯
          </a>
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
                              role-based authentication mechanism with two roles (practitioner & patient) to facilitate CRUD
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Aggregated rating score"
                        content={
                            <>
                              aggregated rating score
                            </>
                        }
                    />
                    {/* <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Intake Calculator"
                        content={
                            <>
                                Users can enter their intended grocery items, and the system will display the nutrition information, 
                                including a healthy rating and allergen content, if included. 
                                Users can also swipe to view detailed macronutrient information.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-neutral"
                        titleColor="text-warning"
                        textColor="text-info"
                        title="Meal Planner"
                        content={
                            <>
                                Explore a wide range of personalized meal options by searching for recipes based on ingredients, cuisine, 
                                or dietary preferences such as vegan or gluten-free. Additionally, you can enter your recommended calorie intake 
                                and allergies to receive balanced meal plans for breakfast, lunch, and dinner, tailored to your specific needs.
                            </>
                        }
                    />
                    <ProjectAccordion
                        bgColor="bg-warning"
                        titleColor="text-neutral"
                        textColor="text-info"
                        title="Healthy Diet Visualizer"
                        content={
                            <>
                                Select a food to discover which part of your body it benefits and learn the effects of deficiencies. 
                                This feature helps foster a positive relationship with food.
                            </>
                        }
                    /> */}
                </div>
            </div>
    </div>
  )
}

export default page;
