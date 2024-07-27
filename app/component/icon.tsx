import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBars, faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
        default:
            return null;  
    }

}

export default Icon;
