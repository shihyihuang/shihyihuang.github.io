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
          style={{ color: `${color}` }} //e43d12
          size={size}
        />
      );
    case 'menu':
      return <FontAwesomeIcon icon={faBars} size={size} style={{ color: `${color}` }}/>;
    case 'close':
      return <FontAwesomeIcon icon={faXmark} size={size} style={{ color: `${color}` }}/>; //2xl
    case 'closeSmall':
      return <FontAwesomeIcon icon={faXmark} size={size} style={{ color: `${color}` }}/>; //lg
    case 'scroll down':
      return <FontAwesomeIcon icon={faAnglesDown} style={{ color: `${color}`}} size={size} />; //e43d12
    case 'up':
      return <FontAwesomeIcon icon={faUpLong} size={size} style={{ color: `${color}` }} />; //lg 425664
    case 'down':
      return <FontAwesomeIcon icon={faDownLong} size={size} style={{ color: `${color}` }} />; //lg ebe9e1
    case 'info':
      return <FontAwesomeIcon icon={faInfo} size={size} style={{ color: `${color}` }} />; //lg ebe9e1
    case 'circleInfo':
        return <FontAwesomeIcon icon={faCircleInfo} size={size} style={{ color: `${color}` }}/>; //2xl
    case 'more':
      return <FontAwesomeIcon icon={faRightFromBracket} size={size} style={{ color: `${color}` }} />; //lg ebe9e1
    case 'upright':
      return <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={size} style={{ color: `${color}` }} />; //xl
    case 'back':
      return <FontAwesomeIcon icon={faCircleArrowLeft} size={size} style={{ color: `${color}` }}/>; //xl
    default:
        return <FontAwesomeIcon icon={faQuestionCircle} size={size} style={{ color: `${color}` }}/>; //xl
  }
};

export default Icon;