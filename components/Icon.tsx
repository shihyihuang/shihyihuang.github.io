'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import {
  faAddressBook,
  faBars,
  faXmark,
  faAnglesDown,
  faUpLong,
  faDownLong,
  faInfo,
  faRightFromBracket,
  faCircleInfo,
  faArrowUpRightFromSquare,
  faQuestionCircle,
  faCircleArrowLeft
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAddressBook,
  faBars,
  faXmark,
  faAnglesDown,
  faUpLong,
  faDownLong,
  faInfo,
  faRightFromBracket,
  faCircleInfo,
  faArrowUpRightFromSquare,
  faQuestionCircle,
  faCircleArrowLeft
);

interface IconProps {
  name: string;
  size: SizeProp;
  color: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  switch (name) {
    case 'contact':
      return (
        <FontAwesomeIcon
          icon={faAddressBook}
          className="text-[#113946] w-6 h-6"
          style={{ color: `${color}` }} 
          size={size}
        />
      );
    case 'menu':
      return <FontAwesomeIcon icon={faBars} size={size} style={{ color: `${color}` }}/>;
    case 'close':
      return <FontAwesomeIcon icon={faXmark} size={size} style={{ color: `${color}` }}/>; 
    case 'closeSmall':
      return <FontAwesomeIcon icon={faXmark} size={size} style={{ color: `${color}` }}/>; 
    case 'scroll down':
      return <FontAwesomeIcon icon={faAnglesDown} style={{ color: `${color}`}} size={size} />; 
    case 'up':
      return <FontAwesomeIcon icon={faUpLong} size={size} style={{ color: `${color}` }} />; 
    case 'down':
      return <FontAwesomeIcon icon={faDownLong} size={size} style={{ color: `${color}` }} />; 
    case 'info':
      return <FontAwesomeIcon icon={faInfo} size={size} style={{ color: `${color}` }} />; 
    case 'circleInfo':
        return <FontAwesomeIcon icon={faCircleInfo} size={size} style={{ color: `${color}` }}/>; 
    case 'more':
      return <FontAwesomeIcon icon={faRightFromBracket} size={size} style={{ color: `${color}` }} />; 
    case 'upright':
      return <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={size} style={{ color: `${color}` }} />;
    case 'back':
      return <FontAwesomeIcon icon={faCircleArrowLeft} size={size} style={{ color: `${color}` }}/>;
    default:
        return <FontAwesomeIcon icon={faQuestionCircle} size={size} style={{ color: `${color}` }}/>; 
  }
};

export default Icon;