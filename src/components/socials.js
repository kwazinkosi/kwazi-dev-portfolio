import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
  return (
    <div className="flex flex-row justify-center items-center z-20 shadow-md rounded-full bg-primary bg-opacity-10 backdrop-filter backdrop-blur-lg py-2 px-4">
        <a href="https://github.com/kwazinkpsi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-2xl mx-2 text-secondary hover:text-primary hover:scale-110 transition duration-500 ease-in-out" />  
        </a>
        <a href="https://www.linkedin.com/in/kwazinkosi-zwane-9b1b3a1b0/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2 text-secondary  hover:text-primary hover:scale-110 transition duration-500 ease-in-out" />
        </a>
        <a href="mailto:kwazinkosizwane@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl mx-2 text-secondary hover:text-primary hover:scale-110 transition duration-500 ease-in-out" />
        </a>
        <a href="https://wa.me/27677732474" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mx-2 text-secondary hover:text-primary hover:scale-110 transition duration-500 ease-in-out" />
        </a>
        <a href="https://www.instagram.com/kwazi_zwane/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 text-secondary hover:text-primary hover:scale-110 transition duration-500 ease-in-out" />
        </a>
    </div>
  );
}
