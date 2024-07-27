'use client';
import React from 'react'
import {motion} from "framer-motion";
import Icon from '../component/icon';

const Button = (text: string, icon: string) => {
  return (

    <motion.button
        className="inline-flex items-center md:hidden "
        // onClick={toggle}
        whileHover={{
            scale: 1.5
        }}
        whileTap={{
            scale: 0.9
        }}>
            {text}
        <Icon name={icon}/>
    </motion.button>

  )
}

export default Button;
