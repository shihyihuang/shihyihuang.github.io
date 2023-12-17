import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleLeft,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ name }) => {
  switch (name) {
    case "add":
      return <FontAwesomeIcon icon={faCirclePlus} size="2x" color="#c7b198" />;
    case "back":
      return <FontAwesomeIcon icon={faCircleLeft} size="2x" />;
    case "update":
      return <FontAwesomeIcon icon={faArrowsRotate} size="2x" />;
    default:
      return "icon error";
  }
};

export default Icon;
