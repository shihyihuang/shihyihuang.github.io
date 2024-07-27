'use client';
import React from 'react';
import Link from 'next/link';
import Icon from "../../icon";
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'
import Button from './button';

const Navbar = ({toggle} : {
    toggle: () => void
}) => {
  const pathName = usePathname();

  return (
    <div className="navbar bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="navbar-start">
        <ul className="hidden md:flex menu menu-horizontal text-lg">
          {['about', 'projects', 'life'].map((item) => (
            <motion.li key={item}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}>
              {/* <Link href={`/${item}`} 
                className={`border-secondary rounded-none hover:border-b-2 w-auto px-1 mr-5 bg-transparent focus:border-b-2 focus:text-secondary ${pathName===`/${item}`? 'border-b-2' : '' } ${pathName===`/${item}`? 'text-secondary' : '' }`}
                style={{ backgroundColor: 'transparent', color: 'inherit' }}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link> */}
              
              <Link 
                href={`/${item}`}
                className={`border-neutral rounded-none hover:border-b-2 hover:text-neutral hover:font-extrabold focus:border-b-2 focus:text-neutral focus:font-extrabold w-auto px-1 mr-5 bg-transparent ${pathName === `/${item}` ? 'border-b-2 text-neutral font-extrabold' : ''}`}
                style={{ backgroundColor: 'transparent'}}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>


            </motion.li>
          ))}
        </ul>
      </div>
      <div className="navbar-center">
        <Link href='/' className="text-2xl bg-transparent border-none hover:bg-transparent">
          Claire Huang
        </Link>
      </div>
      <div className="navbar-end">
        <motion.button
          className="inline-flex items-center md:hidden"
          onClick={toggle}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}>
          <Icon name="menu"/>
        </motion.button>
        <div className="hidden md:block">
          <Button/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;