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
    <div>
        <div className="flex flex-row justify-center items-center">
            <a href="https://github.com/kwazinkpsi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl text-secondary mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/kwazinkosi-zwane-9b1b3a1b0/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-secondary mx-2" />
            </a>
            <a href="https://www.instagram.com/kwazi_zwane/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl text-secondary mx-2" />
            </a>
            <a href="https://wa.me/27677732474" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-secondary mx-2" />
            </a>
            <a href="mailto:kwazinkosizwane@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-secondary mx-2" />
            </a>

        </div>
    </div>
  );
}
