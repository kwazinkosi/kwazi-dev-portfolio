import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Detect initial orientation
  let isLandscape = window.matchMedia("(orientation: landscape)").matches;

  // Listen for orientation changes
  window.addEventListener(
    "resize",
    function () {
      isLandscape = window.matchMedia("(orientation: landscape)").matches;

      // If the device is in landscape mode, close the overlay
      if (isLandscape && isOpen) {
        toggleNavbar();
      }
    },
    false
  );
  const toggleNavbar = () => {
    // console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav from-tertiary1 to-tertiary2 bg-gradient-to-b fixed top-0 w-full z-10  hover:shadow-primary transition duration-500 ease-in-out">
      <div className="container mx-auto flex items-center justify-between my-2">
        <div className="flex items-center">
          <a
            href="/"
            className="z-20 text-secondary text-lg font-bold sm:mx-6 md:mx-12 lg:mx-16 mx-6"
          >
            Your Logo
          </a>
        </div>

        {/* Bars icon for small screens */}
        <div
          className="flex md:hidden cursor-pointer z-20"
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-primary text-2xl sm:mx-6 md:mx-8 mx-6"
          />
        </div>

        {/* Overlay menu for small screens */}
        <div
          className={`lg:flex md:flex items-center sm:mx-6 md:mx-12 lg:mx-16 mx-6 ${
            isOpen
              ? "fixed z-0 top-0 left-0 right-0 bottom-0 mt-12 pt-auto h-screen bg-gradient-to-b from-tertiary1 to-tertiary2  bg-opacity-100 flex flex-col text-center text-xl"
              : "hidden"
          }`}
        >
          <a
            href="/"
            className={` text-white py-4 ${
              isOpen
                ? "text-2xl overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-primary hover:font-bold transition duration-700 ease-in-out"
            }`}
          >
            Home
          </a>
          <a
            href="/projects"
            className={` text-white py-4 ${
              isOpen
                ? "mobile-nav-text overlay-item "
                : "mx-4 text-with-shadow hover:text-primary hover:font-bold transition duration-700 ease-in-out"
            }`}
          >
            Portfolio
          </a>
          <a
            href="/about"
            className={` text-white py-4 ${
              isOpen
                ? " overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-primary hover:font-bold transition duration-700 ease-in-out"
            }`}
          >
            About
          </a>
          <a
            href="/contact"
            className={` text-white py-4 ${
              isOpen
                ? " overlay-item mobile-nav-text"
                : "mx-4 text-with-shadow hover:text-primary hover:font-bold transition duration-700 ease-in-out"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
