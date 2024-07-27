"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && <Sidebar isOpen={isOpen} toggle={toggle} />}
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
