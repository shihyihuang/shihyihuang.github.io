import { Typography } from '@mui/material'
import React from 'react'
import '../style/about.css'
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';


const page = () => {
  return (
    <div>
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
      <div className='flex items-center justify-between w-full'>
          <img alt="coffee" src="/life/coffee2.png" className='w-1/3' />
          <h5 className="flex items-center text-center text-xs md:text-3xl">
              COFFEE keeps me busy <br/> until it is an acceptable time to drink BEER
          </h5>
          <img alt="beer" src="/life/beer.png" className='w-1/12 ml-5' />
      </div>

      <div className='flex items-center justify-between'>
        <img alt="exercise" src="/life/exerciseLeft.png" className='w-1/5'/>
        <h5 className="text-xs md:text-3xl text-center">
          Enjoy outdoor activities & exercise <br/> (to indulge in more delicious food)
        </h5>
        <img alt="exercise" src="/life/exerciseRight.png" className='w-1/4' />
      </div>

      <div >
        <img alt="travel" src="/life/travelTop.png"           

        />
        <h5 className="text-xs md:text-3xl flex justify-center text-center mt-5 mb-3">
          Life is short and the world is wide!  <br/> Enjoy traveling, adventuring, and trying something new!
        </h5>
        <img alt="travel" src="/life/travelBottom.png" />
      </div>




      {/* <div className='exercise-background-sm md:exercise-background min-h-screen flex items-center justify-center'>
        <h5 className="text-md md:text-3xl text-content text-center">
          outdoor <br/> exercise
        </h5>
      </div> */}
    </div>
  )
}

export default page
