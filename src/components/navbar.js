import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 
import logo from "../assets/images/mylogo.png";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const matchContact = useMatch("/contact");
  const matchAbout = useMatch("/about");
  const matchProjects = useMatch("/projects");
  const matchHome = useMatch("/");
  // Detect initial orientation
  let isLandscape = window.matchMedia("(orientation: landscape)").matches;

  // Listen for orientation changes
  window.addEventListener("resize", function () {
      isLandscape = window.matchMedia("(orientation: landscape)").matches;
      // If the device is in landscape mode, close the overlay
      if (isLandscape && isOpen) {
        toggleNavbar();
      }
    },
    false
  );
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav from-tertiary1 to-tertiary2 bg-gradient-to-b fixed top-0 w-full z-10  hover:shadow-primary transition duration-500 ease-in-out">
      <div className="flex items-center justify-between my-2">
        <div className="flex items-start ">
          <NavLink to="/" className="ml-8 sm:ml-12 md:ml-16 lg:ml-24 "> 
            <img src={logo} alt="logo" className="w-10 h-8 sm:w-14 sm:h-8 md:w-14 md:h-10 lg:w-16 lg:h-12" />
          </NavLink>
        </div>
        {/* Bars icon for small screens */}
        <div className=" flex md:hidden cursor-pointer z-20 mr-6 sm:mr-12 md:mr-16 outline-none" onClick={toggleNavbar} >
          <FontAwesomeIcon  {...(isOpen ? { icon: faTimes } : { icon: faBars })} className={`bar-to-close text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${isOpen ? 'animate' : ''}`}/>
        </div>

        {/* Overlay menu for small screens */}
        <div className={`lg:flex md:flex items-center sm:mx-6 md:mx-12 lg:mx-16 mx-6 ${isOpen
              ? "fixed z-0 top-0 left-0 right-0 bottom-0 mt-12 pt-auto h-screen bg-gradient-to-b from-tertiary1 to-tertiary2  bg-opacity-100 flex flex-col text-center text-xl"
              : "hidden"
          }`}>
          <NavLink to="/" className={` ${matchHome ? 'active-page' : 'text-white'} py-4 ${ 
              isOpen
                ? "text-2xl overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
            }`}
            > Home
          </NavLink>
          <NavLink to="/projects" className={`${matchProjects ? 'active-page' : 'text-white'} py-4 ${
              isOpen
                ? "mobile-nav-text overlay-item "
                : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
            }`} 
            > Portfolio
          </NavLink>
          <NavLink to="/about" className={`${matchAbout ? 'active-page' : 'text-white'} py-4 ${
              isOpen
                ? " overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
            }`}> About
          </NavLink>
          <NavLink to="/contact" className={`${matchContact ? 'active-page' : 'text-white'} py-4 ${
              isOpen
                ? "overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-secondary hover:font-bold transition duration-700 ease-in-out"
            }`}
            >Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
