import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faXmark, faAnglesDown, faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
    name: string;
}
const Icon : React.FC<IconProps> = ({name}) => {
    
    switch (name){
        case 'contact' : 
            return <FontAwesomeIcon 
            icon={faAddressBook} 
            className="text-[#113946] w-6 h-6" // Use fixed width and height
            style={{ fontSize: '1.25rem' }} // Ensure consistent size
          />;
        case 'menu' : 
            return <FontAwesomeIcon icon={faBars} size="xl" />;
        case 'close' :
            return <FontAwesomeIcon icon={faXmark} size="2xl" />;
        case 'closeSmall' :
            return <FontAwesomeIcon icon={faXmark} size="lg" />;
        case 'scroll down' :
            return <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{color:" #fff"}}/>;
        case 'up' :
            return <FontAwesomeIcon icon={faUpLong} size="lg" style={{color:" #425664"}} />;
        case 'down' :
            return <FontAwesomeIcon icon={faDownLong} size="lg" style={{color:" #EBE9E1"}} />;
        default:
            return null;  
    }

}

export default Icon;
