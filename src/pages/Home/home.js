import HeroImage from "../../components/image";
import HeroIntro from "../../components/hero-intro";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Socials from "../../components/socials"; 
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

// TODO: polish up the colors, footer and socials components => DONE
// TODO: add a favicon
// TODO: add a 404 page
// TODO: add a loading page
// TODO: remove unnecessary margins and paddings

const introTexts = [
  "—A passionate fullstack web developer based in Johannesburg. I craft dynamic web solutions with creativity and precision. ", 
  "Let's embark on a digital adventure where innovation meets seamless functionality." 
];
const heading = "Hi, I'm Kwazi";


export default function Home() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  }

  return (
    <div className="flex flex-col min-h-screen z-10 bg-gradient-to-b from-tertiary1 to-tertiary2 overflow-x-hidden">
      <Navbar className =""/>
      <div className="flex flex-col justify-center flex-grow">
        <div className="mt-16 md:mt-20 lg:mt-20 flex flex-grow items-center justify-center  flex-col sm:flex-row md:flex-row lg:flex-row">
          <HeroIntro heading={heading} introTexts={introTexts} />  
          <HeroImage /> 
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-start md:justify-center lg:justify-center mb-10 md:mb-20 lg:mb-20 sm:flex-row md:flex-row lg:flex-row md:w-4/6 lg:w-1/2 sm:w-full lg:-mt-20 md:-mt-6 sm:-mt-4 mt-8 mx-4 md:mx-0">
          <div className="mb-4 sm:mb-0 sm:mr-4"> 
            {/* redirect to contact page */}
            <Button text="Get in touch" onClick={handleButtonClick} />
          </div>
          <div>  
            <Socials />
          </div>
        </div>

      </div>
      <div className="">
        <Footer className="" socials={Socials} />
      </div>
    </div> 
  );
}
