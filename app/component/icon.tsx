import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faArrowUpRightFromSquare 
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
    default:
      return null; // Or some default icon
  }
};

export default Icon;