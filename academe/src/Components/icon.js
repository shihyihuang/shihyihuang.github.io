import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Icon = ({name}) => {
    switch(name){
        case "add":
            return <FontAwesomeIcon icon={faCirclePlus} size="2x" color='#c7b198'/>
        default:
            return "icon error";
    }
};

export default Icon;

