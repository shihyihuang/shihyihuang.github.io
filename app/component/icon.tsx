import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faXmark, faAnglesDown } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
    name: string;
}
const Icon : React.FC<IconProps> = ({name}) => {
    
    switch (name){
        case 'contact' : 
            return <FontAwesomeIcon icon={faAddressBook} size="xl" style={{color:" #113946"}} />;
        case 'menu' : 
            return <FontAwesomeIcon icon={faBars} size="xl" />;
        case 'close' :
            return <FontAwesomeIcon icon={faXmark} size="2xl" />;
        case 'closeSmall' :
            return <FontAwesomeIcon icon={faXmark} size="lg" />;
        case 'scroll down' :
            return <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{color:" #fff"}}/>;
        default:
            return null;  
    }

}

export default Icon;
