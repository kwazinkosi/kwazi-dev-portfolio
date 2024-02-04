import "../styles/about.css";
import { useEffect, useState, useRef } from "react";

export default function AboutCard({aboutHeading, aboutText}) {
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 640 && window.innerWidth < 1024);
    const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);

    const cardRef = useRef(null); // create a reference to the div


    window.addEventListener("resize", function () {

        setIsMobile(window.innerWidth < 640);
        setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
        if (isLandscape && isActive) {
            setIsActive(false);
        }
    });

    const updateScreenSize = () => {
        setIsFocused(false);
        setIsActive(false);
        setIsMobile(window.innerWidth <= 640);
        setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                if ((rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) && isMobile) {
                    cardRef.current.focus();
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const handleOnClick = () => {
        console.log('clicked, isMobile:', isMobile, 'isActive:', isActive, 'isTablet:', isTablet, 'isLandscape:', isLandscape);
        if (isMobile || isTablet || isLandscape) { 
            setIsActive(!isActive);
        }
    };

    const handleOnFocus = () => {
        if (isMobile ) {
            
            setTimeout(() => {
                setIsFocused(true);
                if (!isActive) {
                    setIsActive(true);
                }
            }, 500);
        }
    };

    const handleOnBlur = () => {
        if (isMobile ) {
            setIsFocused(false);
            if (isActive) {
                setIsActive(false);
            }
        }
    };

  return (
    <div 
        ref={cardRef}
        className={`about-card flex flex-col items-center justify-center p-8 rounded-lg shadow-lg ${isActive ? 'active' : ''} ${isFocused ? 'focused' : ''} transition duration-500 ease-in-out`} 
        onClick={handleOnClick}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        data-heading={aboutHeading}
        tabIndex="0" // make the div focusable
    >
        <h2 className="heading text-2xl font-bold text-center text-secondary  hidden">{aboutHeading}</h2>
        <p className="mt-4 text-lg text-center text-white">{aboutText}</p>
    </div>
  )
}