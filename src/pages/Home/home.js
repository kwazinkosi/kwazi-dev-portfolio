import HeroImage from "../../components/image";
import HeroIntro from "../../components/hero-intro";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

// TODO: add a 404 page
// TODO: add a loading page

const introTexts = [
  "—An aspiring world class software engineer with a knack for crafting digital solutions that leave a lasting impact.", 
  "Let's create something extraordinary, where innovation meets seamless functionality."
];
const heading = "Hello there! 👋 I'm Kwazi";
  
export default function Home() {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact");
  }

  return (
    <div  className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 flex-grow w-full">
      <Navbar className =""/>
      <div className="flex flex-col justify-center w-full">
        <div className=" flex items-center justify-center  flex-col sm:flex-row md:flex-row lg:flex-row mt-20 md:mt-36 lg:mt-40 mx-8 sm:mx-12 md:mx-16 lg:mx-24 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <HeroIntro heading={heading} introTexts={introTexts} />  
          <HeroImage /> 
        </div>
        <div  className="flex flex-col items-center justify-start sm:flex-row md:flex-row lg:flex-row mb-16 mt-8 lg:mt-0 mx-8 sm:mx-12 md:mx-16 lg:mx-24 gap-4 ">
          <div className="mb-4 sm:mb-0 sm:mr-4"> 
            {/* redirect to contact page */}
            <Button text="Get in touch" onClick={handleButtonClick} />
          </div>
          <div>  
            <Socials />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className=" flex flex-grow flex-col justify-end w-full">
        <Footer className="" >
          {/* <Socials /> */}
        </Footer>
      </div>
    </div> 
  );
}
