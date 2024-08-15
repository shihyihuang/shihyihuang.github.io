'use client';
import React from 'react';
import Link from 'next/link';
import Icon from "../../Icon";
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'
import Tooltip from '@mui/material/Tooltip';

const Navbar = ({toggle} : {
    toggle: () => void
}) => {
  const pathName = usePathname();

  return (
    <div className="navbar bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="navbar-start">
        <ul className="hidden md:flex menu menu-horizontal text-lg">
          {['about', 'projects'].map((item) => (
          <motion.li key={item}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
            <Link 
              href={`/${item}`}
              className={`border-neutral rounded-none hover:border-b-2 hover:text-neutral hover:font-semibold focus:border-b-2 focus:text-neutral focus:font-semibold w-auto px-1 mr-5 bg-transparent ${
                pathName && pathName.includes(`/${item}`) ? 'border-b-2 text-neutral font-semibold' : ''
              }`}
              style={{ backgroundColor: 'transparent' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.li>
        ))}
        </ul>
      </div>
      <div className="navbar-center">
        {/* <img src="icon.png" alt="logo" className="w-12 h-12"/> */}
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
          <Icon name="menu" size="lg" color="#E43D12"/>
        </motion.button>
        <div className="hidden md:block">
          <Link href="/contact">
              <Tooltip title="Contact Me" placement="left-start" arrow>
                <motion.button
                    className="btn btn-circle bg-primary border-transparent shadow-gray-400 shadow-md hover:border hover:bg-transparent hover:border-base-100"
                    whileHover={{
                        scale: 1.2
                    }}
                    whileTap={{
                        scale: 0.9
                    }}>
                    <Icon name="contact" size="sm" color="#E43D12"/>
                </motion.button>
              </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;