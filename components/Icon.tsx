'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
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
}

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'contact':
      return (
        <FontAwesomeIcon
          icon={faAddressBook}
          className="text-[#113946] w-6 h-6"
          style={{ fontSize: '1.25rem' }}
        />
      );
    case 'menu':
      return <FontAwesomeIcon icon={faBars} size="xl" />;
    case 'close':
      return <FontAwesomeIcon icon={faXmark} size="2xl" />;
    case 'closeSmall':
      return <FontAwesomeIcon icon={faXmark} size="lg" />;
    case 'scroll down':
      return <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{ color: "#fff" }} />;
    case 'up':
      return <FontAwesomeIcon icon={faUpLong} size="lg" style={{ color: "#425664" }} />;
    case 'down':
      return <FontAwesomeIcon icon={faDownLong} size="lg" style={{ color: "#EBE9E1" }} />;
    case 'info':
      return <FontAwesomeIcon icon={faInfo} size="lg" style={{ color: "#EBE9E1" }} />;
    case 'circleInfo':
        return <FontAwesomeIcon icon={faCircleInfo} size="2xl"/>;
    case 'more':
      return <FontAwesomeIcon icon={faRightFromBracket} size="lg" style={{ color: "#EBE9E1" }} />;
    case 'upright':
      return <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />;
    case 'back':
      return <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" />;
    default:
        return <FontAwesomeIcon icon={faQuestionCircle} size="xl" />;
  }
};

export default Icon;